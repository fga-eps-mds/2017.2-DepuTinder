import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../containers/formInput';

const AccountInputForm = (props) => {
  return (
    <div className="container" style={{ marginTop: 50 }} >
      <FormInput
        inputDivID="nameInputDiv"
        inputID={props.nameInputId}
        type="text"
        name="userName"
        value={props.nameValue}
        handleChange={props.handleChange}
        labelState={props.nameLabelState}
      />
      <FormInput
        inputDivID="emailInputDiv"
        inputID={props.emailInputId}
        type="email"
        name="userEmail"
        value={props.emailValue}
        handleChange={props.handleChange}
        labelState={props.emailLabelState}
      />
      <FormInput
        inputDivID="passwordInputDiv"
        inputID={props.passwordInputId}
        type="password"
        name="userPassword"
        value={props.passwordValue}
        handleChange={props.handleChange}
        labelState={props.passwordLabelState}
      />
      <FormInput
        inputDivID="passwordConfirmInputDiv"
        inputID={props.confirmedPasswordInputId}
        type="password"
        name="userConfirmedPassword"
        value={props.confirmedPasswordValue}
        handleChange={props.handleChange}
        labelState={props.confirmedPasswordLabelState}
      />
    </div>
  );
};

AccountInputForm.propTypes = {
  nameInputId: PropTypes.string,
  emailInputId: PropTypes.string,
  passwordInputId: PropTypes.string,
  confirmedPasswordInputId: PropTypes.string,
  nameValue: PropTypes.string,
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
  confirmedPasswordValue: PropTypes.string,
  handleChange: PropTypes.func,
  nameLabelState: PropTypes.string,
  emailLabelState: PropTypes.string,
  passwordLabelState: PropTypes.string,
  confirmedPasswordLabelState: PropTypes.string,
};

AccountInputForm.defaultProps = {
  nameInputId: 'Nome',
  emailInputId: 'Email',
  passwordInputId: 'Senha',
  confirmedPasswordInputId: 'Confirmar Senha',
  nameValue: '',
  emailValue: '',
  passwordValue: '',
  confirmedPasswordValue: '',
  handleChange() {},
  nameLabelState: '',
  emailLabelState: '',
  passwordLabelState: '',
  confirmedPasswordLabelState: '',
};

export default AccountInputForm;
