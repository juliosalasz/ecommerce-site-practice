import { useDispatch } from "react-redux";

import { AuthError, AuthErrorCodes } from "firebase/auth";

import { ButtonsContainer, SignUpContainer } from "./signInStyles";

import FormInput from "../formInput/formInput";
import Button, { BUTTON_TYPES_CLASSES } from "../button/buttonComponent";

import { useState, FormEvent, ChangeEvent } from "react";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defaultFromField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFromField);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFromField);
  };

  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));

      resetFormFields();
    } catch (error) {
      switch ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        case !AuthErrorCodes.INVALID_PASSWORD:
          alert("incorrect password for email");
          break;
        case !AuthErrorCodes.USER_DELETED:
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
      console.log(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={(e) => handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign Up</Button>
          <Button
            buttonType={BUTTON_TYPES_CLASSES.google}
            type="button"
            onClick={logGoogleUser}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignIn;
