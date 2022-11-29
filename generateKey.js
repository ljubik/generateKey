const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

 let generateKey = function generateKey(length, characters ){

   let genToken = '';

   for (let i=0; i < length; i++) {
     let num = Math.floor(Math.random() * characters.length);
     genToken += characters.substring(num,num+1);
   }
   return genToken;
};
const key = generateKey(16, characters); 
 
console.log(key)