document.querySelector(".submitform").addEventListener("click", (e) => {
    
  let isValid = true;
  const FullName = document.getElementById("fname").value;
  const Email = document.getElementById("email").value;
  const PhNumber = document.getElementById("phno").value;
  const Pass = document.getElementById("pass1").value;
  const Cpass = document.getElementById("pass2").value;



    // Full Name validation
    if (FullName.length < 5) {
        alert('Name must not be less than 5 characters');
        isValid = false;
    }

    // Email validation
    if (!Email.includes('@')) {
        alert('Wrong email please enter correct email address');
        isValid = false;
    }

    // Phone Number validation
    if (PhNumber === '123456789' ) {
        alert("Please Enter valid Phone number");
        isValid = false;
    }
    else if(PhNumber.length !== 10 || isNaN(PhNumber)){
        alert("Phone Number must be a 10-digit number.");
        isValid = false;
    }


    // Password validation
    if (Pass.length < 8 || Pass.toLowerCase() === 'password' ) {
        alert("Password must be at least 8 characters long and not be the same as your name...");
        isValid = false;
    }
    else if(Pass === FullName){
        alert("Password should not be the same as your name...");
    }

    // Confirm Password validation
    if (Pass !== Cpass) {
        alert("Password and Confirm Password should match...");
        isValid = false;
    }

    if (isValid = true) {
        alert("Thank You So Much Submited Successfully!!!!");
        e.preventDefault();
    }
});
