/*form contact_us*/
const form = document.querySelector("form");
const fullName = document.getElementById( "name" );
const email = document.getElementById( "email" );
const phone = document.getElementById( "phone" );
const subject = document.getElementById( "subject" );
const message = document.getElementById( "message" );

function sendEmail() {
    const bodyMessage = `Celé jméno: ${fullName.value}<br> Email: ${email.value}<br> Tel.: ${phone.value}<br> Zpráva: ${message.value}`;

    Email.send({
        SecureToken :"9d4dd7c0-7515-42eb-9552-42f0b9657bbb" ,
        To : 'jitka.lateckova@gmail.com',
        From : "jitka.lateckova@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK" ) {
            Swal.fire({
                title: "Odesláno!",
                text: "Zpráva byla odeslána!",
                icon: "success"
              });
        }
      }
      
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for(const item of items) {
        if(item.value ==""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].vlaue != ""){
            checkEmail();   
        }

        items[1].addEventListener("keyup", () => { 
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail (){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error_txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error"); 

        if (email.value != ""){
            errorTxtEmail.innerText = "Zadejte správnou e-mail adresu.";
        }
        else {
            errorTxtEmail.innerText = "Chybí E-mail";
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error"); 
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }

   
});
