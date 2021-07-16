function sent() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "pramod@binmile.com",
      Password: "YDbMT@0807",
      To: document.getElementById("to").value,
      From: document.getElementById("from").value,
      Subject: document.getElementById("subject").value,
      Body: document.getElementById("message").value,
      Attachments:[
        {
        name : "uploaded image",
        path : "https://www.thoughtco.com/what-is-the-taj-mahal-195419",
        }]
    })
      .then(
          message => alert("mail sent")
      );
  }
  