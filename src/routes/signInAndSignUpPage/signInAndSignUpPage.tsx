import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";

import { AuthenticationContainer } from "./signAndSignUpPageStyles";

const SignInAndSignUpPage = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default SignInAndSignUpPage;
