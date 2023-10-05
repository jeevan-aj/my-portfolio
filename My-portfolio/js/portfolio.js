
var username= document.getElementById("USERNAME");
var nameerror= document.getElementById("usernameerror");
var email= document.getElementById("EMAIL");
var emailerror= document.getElementById("emailerrorid");
var Phone= document.getElementById("phone");
var phoneerror= document.getElementById("phoneerrorid");
var subject=document.getElementById("SUBJECT");
var subjecterror= document.getElementById("subjecterrorid");
var messages= document.getElementById("MESSAGEs");
var messageerror= document.getElementById("messageerrorid");

function validate(){
    var k=0;
    var flag=0;
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    
   
    var validusername= username.value;
    var emailvalue = email.value;
    var phonevalue = Phone.value;
    var subjectvalue = subject.value;
    var messagesvalue = messages.value;

    if(validusername === "" || validusername === null){
     flag++;
     username.style.borderColor="red";
     nameerror.innerText= "required";
    }
    else{
     nameerror.innerHTML="";
     username.style.borderColor= "green";
    }

    if(!emailvalue.match(regex)){
        flag++;
        emailerror.innerText="enter valid email"
        email.style.borderColor= "red";
        
    }
    else{
        emailerror.innerText="";
        email.style.borderColor= "green"; 
    }
    if(phonevalue.trim() === "" || phonevalue.length !=10 || isNaN(phonevalue)){
        flag++;
        phoneerror.innerText="enter valid phonenumber";
        Phone.style.borderColor= "red";
    }
    else{
        phoneerror.innerText="";
        Phone.style.borderColor= "green"; 
    }
    if(subjectvalue.trim() === "" || subjectvalue.length <3){
        flag++;
        subjecterror.innerText="minimum 3 letter required"
        subject.style.borderColor= "red";
    }
    else{
        subjecterror.innerText= "";
        subject.style.borderColor = "green";
    }
    if(messagesvalue.length<5){
        flag++;
        messageerror.innerText="minimum 5 letter requred";
        messages.style.borderColor="red";
    }
    else{
        messageerror.innerText="";
        messages.style.borderColor="green";
    }


    if(flag > 0){
        return false;
       
    }
    else{
        
      return true; 
    }
    
  
}

function sendmail(){
    Email.send( {
        SecureToken : "34d6c81d-e64a-4bcf-8601-7e58fc6aa1b9",
        To : 'r69967652@gmail.com',
        From : "r69967652@gmail.com",
        Subject : "hello",
        Body : "name:"+username.value +"<br> emaiil : "+email.value+"<br> messages :"+messages.value        
    }   ).then(function(message){
        alert(message);
    });
}
        


$('#ss-form').submit(function(e) {
    e.preventDefault();
    if(validate()){
        sendmail();
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwwWaXh48lUmQHmu5Ip_YxtbnywCc387OmR1NN6347_adggz7GUcjDUgI1YHDk7MAWvXA/exec",
            data: $(this).serialize(),
            type: "POST",
            dataType: 'json',
            success: function(data) {
                console.log('Submission successful');
                alert("ADDED TO GS");
            },
            error: function(xhr, status, error) {
                console.log('Submission failed: ' + error);
                alert("FAILED TO ADD TO GS")
            }
        }); 
    }   
});



