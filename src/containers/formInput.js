import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  render() {
    return (
      <div className="input-field" id={this.props.inputDivID}>
        <input
          id={this.props.inputID}
          placeholder={this.props.placeholderText}
          onChange={this.props.handleChange}
          type={this.props.type}
          className="validate"
          name={this.props.name}
        />
        <label htmlFor={this.props.inputID} data-error="Campo Inválido" className={this.props.labelState}>{this.props.inputID}</label>
      </div>
    );
  }
}

FormInput.propTypes = {
  inputDivID: PropTypes.string,
  inputID: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  labelState: PropTypes.string,
  placeholderText: PropTypes.string,
};

FormInput.defaultProps = {
  inputDivID: 'inputDivID',
  inputID: 'inputID',
  type: 'text',
  name: 'name',
  labelState: '',
  placeholderText: '',
  handleChange() {},
};


export default FormInput;
