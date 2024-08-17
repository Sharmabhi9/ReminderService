const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig');

const {sendBasicEmail}=require('./Services/emailService');
const setupAndstartserver = () =>{
    const app=express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`Sever running at ${PORT}`);
        
        sendBasicEmail(
            'AdminSupport@gmail.com',
            'Sharmabhi0903@gmail.com',
            'This is a testing email',
            'This is a checking an email'
        );
    });
    

}

setupAndstartserver();