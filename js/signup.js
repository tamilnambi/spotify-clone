function checkEmail(){
    let email = document.getElementById('email').value;
    if(email == "")
    {
        document.getElementById('email-alert').style.display = "block";
        document.getElementById('email-alert').innerHTML = "You need to enter your email.";
        document.getElementById('email').style.borderColor = "red";
    }
}

function checkPassword(){
    let pwd = document.getElementById('password').value;
    if(pwd.length == 0)
    {
        document.getElementById('pwd-alert').style.display = "block";
        document.getElementById('pwd-alert').innerHTML = "You need to enter a password.";
        document.getElementById('password').style.borderColor = "red";
    }
    else if(pwd.length<8)
    {
        document.getElementById('pwd-alert').style.display = "block";
        document.getElementById('pwd-alert').innerHTML = "Your password is too short.";
        document.getElementById('password').style.borderColor = "red";
    }
}

function checkName(){
    let name = document.getElementById('name').value;
    if(name == "")
    {
        document.getElementById('name-alert').style.display = "block";
        document.getElementById('name-alert').innerHTML = "Enter a name for your profile.";
        document.getElementById('name').style.borderColor = "red";
    }
}

function checkMonth(){
    let month = document.getElementById('month').value;
    if(month == "Month")
    {
        document.getElementById('month-alert').style.display = "block";
        document.getElementById('month-alert').innerHTML = "Select your birth month.";
        document.getElementById('month').style.borderColor = "red";   
    }
}

function checkDay(){
    let day = document.getElementById('day').value;
    if(day == "")
    {
        document.getElementById('day-alert').style.display = "block";
        document.getElementById('day-alert').innerHTML = "Enter a valid day of the month.";
        document.getElementById('day').style.borderColor = "red";
    }
}

function checkYear(){
    let year = document.getElementById('year').value;
    if(year == "")
    {
        document.getElementById('year-alert').style.display = "block";
        document.getElementById('year-alert').innerHTML = "Enter a valid year.";
        document.getElementById('year').style.borderColor = "red";
    }
}

function checkGender(){
    let gender = document.getElementsByName('gender');
    let hasValue = false;
    let genderValue;

    for(let i=0;i < gender.length;i++)
    {
        if(gender[i].checked)
        {
            genderValue = gender[i].value;
            hasValue = true;
        }
    }

    if(hasValue == false)
    {
        document.getElementById('gender-alert').style.display = "block";
        document.getElementById('gender-alert').innerHTML = "Select your gender.";
    }

}

function signUp(){
    checkEmail();
    checkPassword();
    checkName();
    checkMonth();
    checkDay();
    checkYear();

    checkGender();
}

document.getElementById("password").addEventListener("keyup", checkPassword);