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
            window.setTimeout(function(){ 
                location.reload();
            } ,3000);
        }
        else{
            swal("Unsuccessful", "Please try again", "error");
            window.location.replace('index.html')
        }
    }
};

function sendmail2(results) {
    // console.log(results)
    var data = results.data;
    var emailarr=[]
    for(i=0;i<data.length;i++){
      emailarr.push(data[i][0])
    }
    var data = {
        to: emailarr,
        subject: $('input[name="subject1"]').val(),
        message: $('textarea[name="message1"]').val(),
        
    }
    // console.log(data)
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
            
};
$('#send1').on('click',function(e){
    e.preventDefault();
    var ele = document.getElementById("frm-1");
    var chk_status = ele.checkValidity();
    ele.reportValidity();
    if(chk_status){
      email1();
      this.disabled=true; 
      this.innerText='Sending…';
    }
});
$('#send2').on("click",function(e){
    e.preventDefault()
    var ele = document.getElementById("frm-2");
    var chk_status = ele.checkValidity();
    ele.reportValidity();
    if(chk_status){
      $('#file').parse({
        config: {
          delimiter: "auto",
          header:false,
            complete: sendmail2
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
      this.disabled=true; 
      this.innerText='Sending…';
    }
  });