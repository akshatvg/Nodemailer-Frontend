funtion sendmail(email){
    var data = {
        email:email
    }
    var xh = new XMLHttpRequest();
    xh.open("POST", "http://localhost:3000/", true)
    xh.setRequestHeader('Content-Type', 'application/json')
    xh.send(JSON.stringify(data))

    xh.onload = function () {
        if (this.status == 200) {
            alert("abc")
            window.location.replace('/#form')
        }
        else if (this.status == 401) {
            alert("xyz")
            window.location.replace('/#form')
        }
    }
}