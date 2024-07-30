document.querySelector('button[type="submit"]').addEventListener('click', function(event){
    event.preventDefault();
    var emailInput = document.querySelector('input[type="email"]');
    var emailValue = emailInput.value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var wrongEmailMsg  = document.querySelector('.wrong-email');
    var errorIcon = document.querySelector('.error-icon');

    if(!emailPattern.test(emailValue)){
        wrongEmailMsg.style.display = 'block';
        errorIcon.style.display = 'block';
        emailInput.style.border = "solid red";
        
    }
    else{
        emailInput.value = "";
        wrongEmailMsg.style.display = 'none';
        errorIcon.style.display = 'none';
        emailInput.style.border = "2px solid hsla(0,30%, 70%, 0.5)";
    }

});