import React from 'react';
import FormInput from '../containers/formInput';

const AccountInputForm = (props) => {

  let check = props.nameValue + ", " + props.emailValue + ", " + props.passwordValue + ", " + props.confirmedPasswordValue;
  console.log(check);
  return (
    <div className="container" style={{ marginTop: 50 }} >
      <FormInput
        inputDivID="nameInputDiv"
        inputID={props.nameInputId}
        type="text"
        name="userName"
        value={props.nameValue}
        handleChange={props.handleChange}
      />
      <FormInput
        inputDivID="emailInputDiv"
        inputID={props.emailInputId}
        type="email"
        name="userEmail"
        value={props.emailValue}
        handleChange={props.handleChange}
      />
      <FormInput
        inputDivID="passwordInputDiv"
        inputID={props.passwordInputId}
        type="password"
        name="userPassword"
        value={props.passwordValue}
        handleChange={props.handleChange}
      />
      <FormInput
        inputDivID="passwordConfirmInputDiv"
        inputID={props.confirmedPasswordInputId}
        type="password"
        name="userConfirmedPassword"
        value={props.confirmedPasswordValue}
        handleChange={props.handleChange}
      />
    </div>
  );
}

export default AccountInputForm;
