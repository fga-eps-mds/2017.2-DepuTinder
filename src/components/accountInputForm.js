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
        name={props.nameStateKey}
        placeholderText={props.namePlaceholder}
        handleChange={props.handleChange}
        labelState={props.nameLabelState}
      />
      <FormInput
        inputDivID="emailInputDiv"
        inputID={props.emailInputId}
        type="email"
        name={props.emailStateKey}
        placeholderText={props.emailPlaceholder}
        handleChange={props.handleChange}
        labelState={props.emailLabelState}
      />
      <FormInput
        inputDivID="passwordInputDiv"
        inputID={props.passwordInputId}
        type="password"
        name={props.passwordStateKey}
        handleChange={props.handleChange}
        labelState={props.passwordLabelState}
      />
      <FormInput
        inputDivID="passwordConfirmInputDiv"
        inputID={props.confirmedPasswordInputId}
        type="password"
        name={props.confirmPasswordKey}
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
  handleChange: PropTypes.func,
  nameLabelState: PropTypes.string,
  emailLabelState: PropTypes.string,
  passwordLabelState: PropTypes.string,
  confirmedPasswordLabelState: PropTypes.string,
  namePlaceholder: PropTypes.string,
  emailPlaceholder: PropTypes.string,
};

AccountInputForm.defaultProps = {
  nameInputId: 'Nome',
  emailInputId: 'Email',
  passwordInputId: 'Senha',
  confirmedPasswordInputId: 'Confirmar Senha',
  namePlaceholder: '',
  emailPlaceholder: '',
  handleChange() {},
  nameLabelState: '',
  emailLabelState: '',
  passwordLabelState: '',
  confirmedPasswordLabelState: '',
};

export default AccountInputForm;
