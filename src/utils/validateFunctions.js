export function validateEmail(email) {
    if (!email.includes("@")) {
      
      return false;
    }

    if (!email.includes(".com") && !email.includes(".com.br")) {
      
      return false;
    }

    if (email.includes ("@.")){
      
      return false;
    }
    if ((email[0] === "@") || (email[0] === ".")) {
      
      return false;
    }
    return true;
  }

  const EXISTENT_DDDS_BR = [
    "85",
    "88",
    "83",
    "84",
    "11",
  ]
  export function validatePhoneNumber(phoneNumber) {
    const twoFirstDigits = phoneNumber.slice(0, 2);

    const validDDD = EXISTENT_DDDS_BR.includes(twoFirstDigits);
    
    if (phoneNumber.length !== 11) {
      
      return false;
    }
      

    if (!validDDD) {
      return false;
    }
    
    if (phoneNumber [2] !== "9") {
      return false;
    }

    if(phoneNumber.match (/[a-z]/i)){
      return false;
    }

    return true;

  }