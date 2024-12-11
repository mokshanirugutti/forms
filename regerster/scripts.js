
  document.getElementById('registrationForm').addEventListener('submit', e => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    
    const email = document.getElementById('regEmail').value.trim();
    const pwd = document.getElementById('regPassword').value.trim();
    const phone = document.getElementById('phoneNumber').value.trim(); // No Number conversion here
    
    const regError = document.getElementById('regError');
    // console.log(first, last, email, pwd, phone, dob);
    const no = Number(phone);
    console.log( typeof phone);
    console.log(typeof no) ;
    console.log(phonePattern.test(no));
    console.log(phonePattern.test(phone));

    regError.textContent =  !emailPattern.test(email) ? 'Invalid Email' :
      pwd.length < 6 ? 'Password too short' :
    !phonePattern.test(no) ? 'Invalid Phone' : 'Registration Successful';
    regError.style.color = regError.textContent === 'Registration Successful' ? 'green' : 'red';
  });

