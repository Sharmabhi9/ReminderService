const sender=require('../config/EmailConfig');

const sendBasicEmail=async (mailfrom,mailto,mailsubject,mailtext)=>{
    try{
const response =await sender.sendMail({
    form:mailfrom,
    to:mailto,
    subject:mailsubject,
    text:mailtext
});
}
catch{
    console.log(error);
}
console.log(response);
}
module.exports={
    sendBasicEmail
}
