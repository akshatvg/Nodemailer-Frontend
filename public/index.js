$(document).ready(function(){
    $('#send1').on('click', function (e) {
        e.preventDefault();
        var data = {
            email : $('input[name="email"]').val(),
            subject : $('input[name="subject"]').val(),
            message : $('textarea[name="message"]').val(),
        }
        var xh = new XMLHttpRequest();
        xh.open("POST", "https://nodemailer-cc.herokuapp.com/send/email", true)
        xh.setRequestHeader('Content-Type', 'application/json')
        xh.send(JSON.stringify(data))
        xh.onload = function () {
            if (this.status == 200) {
                alert("abc")
                window.location.replace('/#form')
            }
            else if (this.status == 401) {
                alert("xyz")
                window.location.replace('/#form-m')
            }
        }
    });
    
});




// function sendmail(email, subject, message) {
//     var data = {
//         email: email
//         subject:subject
//     }
//     
//     
//     
//     

    
// };

