$(document).ready(function(){
    $('#send1').on('click', function (e) {
        // e.preventDefault();
        var data = {
            to : $('input[name="email"]').val(),
            subject : $('input[name="subject"]').val(),
            message : $('textarea[name="message"]').val(),
        }
        var xh = new XMLHttpRequest();
        xh.open("POST", "https://nodemailer-cc.herokuapp.com/send/email", true)
        xh.setRequestHeader('Content-Type', 'application/json')
        xh.send(JSON.stringify(data))
        xh.onload = function () {
            if (this.status == 200) {
                swal("Success!", "You mail was successfully sent", "success");
                window.location.replace('/#form')
            }
            else if (this.status == 401) {
                swal("Unsuccessful", "Please try again", "error");
                window.location.replace('/index.html#Form')
            }
        }
    });
    

    $('#send2').on("click",function(e){
		// e.preventDefault();
		$('#file').parse({
			config: {
				delimiter: "auto",
				complete: sendmail2,
			},
			before: function(file, inputElem)
			{
				console.log("Parsing file...", file);
			},
			error: function(err, file)
			{
				console.log("ERROR:", err, file);
			},
			complete: function()
			{
				console.log("Done with all files");
			}
		});
    });
	
    function sendmail2(results) {
        
        var data = {
            to: results.data,
            subject: $('input[name="subject1"]').val(),
            message: $('textarea[name="message1"]').val(),
            
        }
        console.log(data)
        var xh = new XMLHttpRequest();
        xh.open("POST", "https://nodemailer-cc.herokuapp.com/send/email", true)
        xh.setRequestHeader('Content-Type', 'application/json')
        xh.send(JSON.stringify(data))
        xh.onload = function () {
            if (this.status == 200) {
                swal("Success!", "You mail was successfully sent", "success");
                window.location.replace('/#form')
            }
            else if (this.status == 401) {
                swal("Unsuccessful", "Please try again", "error");
                window.location.replace('/#form')
            }
        }
            
	}
});


