document.getElementById('btn-submit').addEventListener('click',function(){
   //get the email inside the field
   // always remember to use .value to get text from amn input field
   const emailField= document.getElementById('user-email');
   const email= emailField.value;
   console.log(email);
   const passfield=document.getElementById('user-password')
   // get password
   const password= passfield.value;
   console.log(password);
   // never do it. only for practice at this time
   if (email=== 'mira@gmail.com' && password==='raiyan'){
        window.location.href= 'bank.html'
   }
   else {
    alert('Wrong Password!!!')
   }

})