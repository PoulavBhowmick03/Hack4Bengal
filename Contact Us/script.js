function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_r0q707l", "template_xbryf3a", params).then(function (res) {
        alert("Success! "+res.status)
    })
}