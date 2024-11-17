// index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const web = express();

const { auth, firestore, storage } = require('./firebase'); 
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");
const { doc, setDoc, getDoc, collection, getDocs } = require('firebase/firestore');
const { ref, uploadString, getDownloadURL } = require('firebase/storage');
const { getIdToken } = require('firebase/auth');

const PImageToStorage = async (IMG, usname) => {
    const StorRef = ref(storage, `UsersProfIcon/${usname}.png`);
    await uploadString(StorRef, IMG, 'data_url');
    const url = await getDownloadURL(StorRef);
    return url;
}

/*
            Tests:[{
                name:`First`,
                stid: '00000000',
                questions: [
                    {
                        name:'what #1',
                        call: 1,
                        answers:[
                            {
                                name:'no',
                                TF: false
                            },
                            {
                                name:'yes',
                                TF:true
                            }
                        ]
                    }
                ]
            }]
*/

const CreateNewUser = async (email, password, username, ProfIcon, tname) => {
    try {
        const UserCred = await createUserWithEmailAndPassword(auth, email, password);
        const CurrUser = UserCred.user.uid;

        //const PIcon = await PImageToStorage(ProfIcon, username);

        await setDoc(doc(firestore, 'users', CurrUser), {
            username: username,
            //ProfileIcon: PIcon,  // Используем загруженный URL профиля
            tname: tname,
            Tests: []
        });

        const Id_Token = await UserCred.user.getIdToken(); // Получаем токен сразу после создания пользователя
        return { user: UserCred.user, Id_Token }; // Возвращаем пользователя и токен
    } catch (error) {
        console.error("Error at CreateNewUser: ", error);
        throw error; // Бросаем ошибку для обработки выше
    }
};
const SignInUser = async (email, password) => {
    try{
        const UserCred = await signInWithEmailAndPassword(auth, email, password);
        const user = UserCred.user;

        if (user) {
            const Id_Token = await user.getIdToken();
            return Id_Token;
        } else {
            throw new Error("User credential is missing after sign-in.");
        }
    } catch (error){
        console.log("Error at SignInUser: ", error);
    }
};

const GetUsData = async (uid) => {
    try{
        const UsDocRef = doc(firestore, 'users', uid);
        const UsDocSnap = await getDoc(UsDocRef);

        const UsData = UsDocSnap.data();
        
        console.log('Data is true got: ', UsData)
        return UsData;
    } catch (error){
        console.error('Error to get user data: ', error);
    }
}

const CreateTest = async (uid, testdata) => {
    try{
        const UserData = await GetUsData(uid);

        UserData.Tests.push(testdata);
        console.log("New test was added: ", UserData.Tests);

        const UsDocRef = doc(firestore, 'users', uid);
        await setDoc(UsDocRef, UserData, {merge: true});

        console.log("User data updated in Firestore.");
    } catch (error){
        console.error("Error at CreateTest: ", error);
    }
};

const GetUserTest = async (STID) => {
    try{
        const UsCollRef = collection(firestore, 'users');
        const UsDocSnap = await getDocs(UsCollRef);

        let Ft = null;

        for(const UsDoc of UsDocSnap.docs) {
            const UsData = UsDoc.data();
            const test = UsData.Tests.find(test => test.stid === STID);

            if(test){
                Ft = {...test, uid: UsDoc.id, tname: UsData.tname, usname: UsData.username };
                break;
            }
        }

        if(Ft){
            console.log("test found");
            return Ft;
        } else {
            throw new Error("test not found")
        }
    } catch (error){
        console.error("Error at GetUserTest: ", error);
    }
};

const SetMessageUser = async (uid, data_message) => {
    try {
        const UsData = await GetUsData(uid);

        if(!UsData.Messages){
            UsData.Messages = [];
        }

        UsData.Messages.push(data_message);

        const UsDocRef = doc(firestore, 'users', uid);
        await setDoc(UsDocRef, UsData, {merge:true});

        console.log("Message to user updated");
    } catch (error){
        console.error("Error at SerMessageUser: ", error);
    }
}

const GetNews = async () => {
    try{
        const CallRef = doc(firestore, "news", "new");
        const UsDocSnap = await getDoc(CallRef);

        console.log('News:',UsDocSnap.data());
        return UsDocSnap.data();
        
    } catch (error) {
        console.error("Error at get news: " + error);
    }
};

web.use(bodyParser.json({ limit: '50mb' }));
web.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
web.use(cors());
web.use(express.static(path.join(__dirname, 'dist')));
web.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  web.post('/register/sign/up', async (req, res) => {
    try {
        const { email, password, username, tname, IMG } = req.body;
        console.log('Get data at /register/sign/up: ', req.body);

        const { Id_Token } = await CreateNewUser(email, password, username, IMG, tname); // Получаем токен
        res.status(200).json({ token: Id_Token });
        console.log("token: ", Id_Token);
    } catch (error) {
        console.error(`Error at /register/sign/up: ${error}`);
        res.status(500).json({ error: error.message });
    }
});

web.post('/register/sign/in', async (req,res)=>{
    try{
        const { email, password } = req.body;
        console.log('Get data at /register/sign/ip: ', req.body);

        const Id_Token  = await SignInUser(email, password);
        res.status(200).json({token:Id_Token});
        console.log("token: ", Id_Token);

    } catch (error) {
        console.error(`Error at /register/sign/ip: ${error}`);
        res.status(500).json({ error: error.message });
    }
});

web.post('/user/create/test', async (req, res)=>{
    const { TName, stid, questions, uid, TP } = req.body;
    const resp = await CreateTest(uid, {name:TName, stid:stid, questions:questions, TP:TP});
    res.status(200).json({message:"yyyyyeeeeeeeeee"})
});

web.post('/register/sign/acc', async (req,res)=>{
    const {uid} = req.body;
    
    try{
        const resp = await GetUsData(uid);
        console.log('User data got at /register/sign/acc: ', resp);
        res.status(200).json({data:resp});
    } catch (error){
        console.error("error at /register/sign/acc: ", error);
    }
    
});

web.post('/user/get/test', async (req,res)=>{
    const {stid} = req.body;
    try{
        const ft = await GetUserTest(stid);
        res.status(200).json({message:"Post succefuly found", ft});
    } catch (error){
        res.status(500).json({error:error.message});
    }
});

web.post('/user/send/test', async (req, res)=>{
    const {message, uid} = req.body;
    await SetMessageUser(uid,message);
});

web.post('/news', async (req,res)=>{
    const resp = await GetNews();
    res.json({message:"/news data", data:resp});
});

web.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 9000;
web.listen(PORT, () => {
    console.log(`Server built successfully on port ${PORT}, and server: http://localhost:${PORT}`);
});
