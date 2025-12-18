export const checkValidData = (name, Email, password, isSignInForm) => {
  if (!isSignInForm) {
    const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);
    if (!isNameValid) return "Name can not contain numbers";
  }

  const isEmailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);
  if (!isEmailvalid) return "Please enter a valid Email ID";

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!isPasswordValid)
    return "Password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character and be 8+ characters long";

  return null;
};
