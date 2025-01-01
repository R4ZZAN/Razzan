function sendMail() {
    let parms = {
        name: document.getElementById("text").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_vxhpywk", "template_w3howna", parms)
        .then((response) => {
            alert("Email Sent Successfully!");
            console.log("SUCCESS!", response.status, response.text);
        })
        .catch((error) => {
            alert("Failed to send email. Please try again later.");
            console.error("FAILED...", error);
        });
}
