function sendMail(contactForm){
    emailjs.send("service_6vpms37","Rosie", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "project_request":contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED",error);
        });
        return false;
}