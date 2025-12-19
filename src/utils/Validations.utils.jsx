//This Function will be called in the Login Component after user clicks on Sign In/Up button

export const checkValidData = (name, Email, password, isSignInForm) => {
  if (!isSignInForm) {
    const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name); // Name Regex
    if (!isNameValid) return "Name can not contain numbers"; //Message if name is not valid
  }

  const isEmailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email); //Email Regex
  if (!isEmailvalid) return "Please enter a valid Email ID"; //Message if email is not valid

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    ); //Password Regx
  if (!isPasswordValid)
    return "Password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character and be 8+ characters long"; //Message if password is not valid

  return null;
};
