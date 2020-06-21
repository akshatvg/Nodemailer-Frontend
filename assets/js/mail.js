function email1()
{
    var data = {
            to : document.getElementById('semail').value,
            subject : document.getElementById('ssubject').value,
            message : document.getElementById('smsg').value,
        }
        var xh = new XMLHttpRequest();
        xh.open("POST", "https://nodemailer-cc.herokuapp.com/send/email", true)
        xh.setRequestHeader('Content-Type', 'application/json')
        xh.send(JSON.stringify(data))
        xh.onload = function () {
            if (this.status == 200) {
                swal("Success!", "You mail was successfully sent", "success");
                window.location.replace('index.html')
            }
            else{
                swal("Unsuccessful", "Please try again", "error");
                window.location.replace('index.html')
            }
        }
    }
    


