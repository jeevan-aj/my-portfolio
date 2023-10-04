

$('#ss-form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwwWaXh48lUmQHmu5Ip_YxtbnywCc387OmR1NN6347_adggz7GUcjDUgI1YHDk7MAWvXA/exec",
        data: $(this).serialize(),
        type: "POST",
        dataType: 'json',
        success: function(data) {
            console.log('Submission successful');
        },
        error: function(xhr, status, error) {
            console.log('Submission failed: ' + error);
        }
    });
});


function sendEmail(){
    var username= document.getElementById("USERNAME");
var email= document.getElementById("EMAIL");
var subject=document.getElementById("SUBJECT");
var messages=document.getElementById("MESSAGEs");

    Email.send({
        SecureToken : "5d3204cc-94b4-49bf-a56c-e8ae601daa4e",
        To : 'jeevanaj765@gmail.com',
        From : "jeevanaj765@gmail.com",
        Subject : subject.value,
        Body : "name:"+username.value +"<br> emaiil : "+email.value+"<br> messages :"+messages.value        
    }).then(function(message){
        alert(message)
    });
}