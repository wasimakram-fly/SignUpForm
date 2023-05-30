const submitbtn = document.getElementById('submitbtn');
const nameError=document.getElementById('nameError');
const emailError=document.getElementById('emailError');
const passwordError=document.getElementById('passwordError')

submitbtn.addEventListener('click',(e)=>{
    e.preventDefault();

    if(validateName() && validateEmail() && validatepassword()){
        alert("Successfully signup!!");
    }
})

function validateName(){
    let name = document.getElementById('name').value;

    if(name.length==0){
        nameError.innerHTML="Name is required";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Enter in correct format (e.g. John Smith)";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    nameError.innerHTML="";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.length==0){
        emailError.innerHTML="input email address";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML="enter correct email";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    emailError.innerHTML="";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validatepassword(){
    let password = document.getElementById('password').value;

    if(password.length==0){
        passwordError.innerHTML="type password";
        passwordError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passwordError.innerHTML="Password should contain atleast 1 Uppercase, 1 Lowecase, 1 Digit & 1 special character";
        passwordError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    passwordError.innerHTML="";
    passwordError.previousElementSibling.classList.add('fa-check');
    return true;
}