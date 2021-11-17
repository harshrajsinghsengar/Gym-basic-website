window.onload = () => {
    let button = document.querySelector("#btn2");
  
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
  };
  
  function calculateBMI() {
    /* Getting input from user into height variable.
      Input is string so typecasting is necessary. */
    let height = parseInt(document.querySelector("#height").value);
  
    /* Getting input from user into weight variable. 
      Input is string so typecasting is necessary.*/
    let weight = parseInt(document.querySelector("#weight").value);
  
    let result = document.querySelector("#result");
  
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height))
      result.innerHTML = "Provide a valid Height!";
    else if (weight === "" || isNaN(weight))
      result.innerHTML = "Provide a valid Weight!";
    // If both input is valid, calculate the bmi
    else {
      // Fixing upto 2 decimal places
      let bmi = (weight / ((height * height) / 10000)).toFixed(2);
  
      // Dividing as per the bmi conditions
      if (bmi < 18.6) result.innerHTML = `Under Weight : <span>${bmi}</span>`;
      else if (bmi >= 18.6 && bmi < 24.9)
        result.innerHTML = `Normal : <span>${bmi}</span>`;
      else result.innerHTML = `Over Weight : <span>${bmi}</span>`;
    }
  }
  
  /*window.onload = () => {
    let button = document.querySelector("#btn");
  
    button.addEventListener("click", submitForm);
  };
  
  function submitForm(){
    let name = document.querySelector("#name");
    let age = document.querySelector("#age");
    let gender = document.querySelector("#gender");
    let locality = document.querySelector("#locality");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    let formResult = document.querySelector("#formResult");

    if (name === "" )
      formResult.innerHTML = "Provide a valid Name!";
    else if (age === "" )
      formResult.innerHTML = "Provide a valid Age!";
    else if (gender === "" )
      formResult.innerHTML = "Provide a valid Gender!";
    else if (locality === "" )
      formResult.innerHTML = "Provide a valid Locality!";
    else if (email === "" )
      formResult.innerHTML = "Provide a valid E-mail!";
    else if (phone === "" )
      formResult.innerHTML = "Provide a valid Phone Number!";
      else
      formResult.innerHTML = 'We will get in touch with you soon!'
    
  }*/
  