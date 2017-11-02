import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ inputText: event.target.value });
  }

  render() {
    return (
      <div className="input-field" id={this.props.inputDivID}>
        <input
          id={this.props.inputID}
          value={this.state.inputText}
          onChange={this.handleChange}
          type={this.props.type}
          className="validate"
        />
        <label htmlFor={this.props.inputID} data-error="Campo Inválido">{this.props.inputID}</label>
      </div>
    );
  }
}

FormInput.propTypes = {
  inputDivID: PropTypes.string,
  inputID: PropTypes.string,
  type: PropTypes.string,
};

FormInput.defaultProps = {
  inputDivID: 'inputDivID',
  inputID: 'inputID',
  type: 'text',
};


export default FormInput;
