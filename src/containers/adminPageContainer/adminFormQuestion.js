import React, { Component } from 'react';

class AdminFormQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = { title: '', subtitle: '', description: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.id;
    if (value === 'questionTitle') {
      this.setState({ title: target.value });
    } else if (value === 'questionSubTitle') {
      this.setState({ subtitle: target.value });
    } else if (value === 'questionDescription') {
      this.setState({ description: target.value });
    }
  }

  handleSubmit() {
    this.event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="card-content white accent-3">
          <i className="material-icons activator right" id="cardHelpIcon">help</i>
          <form onSubmit={this.handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="input-field col s12" id="inputTitle">
                  <input
                    id="questionTitle"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleChange}
                    data-length="50"
                  />
                  <label htmlFor="questionTitle">Titulo</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12" id="inputSubtitle">
                  <input
                    id="questionSubTitle"
                    type="text"
                    value={this.state.subtitle}
                    onChange={this.handleChange}
                    data-length="50"
                  />
                  <label htmlFor="questionSubTitle">SubTitulo</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12" id="inputDescription">
                  <textarea
                    id="questionDescription"
                    className="materialize-textarea"
                    type="text"
                    value={this.state.description}
                    onChange={this.handleChange}
                    data-length="120"
                  />
                  <label htmlFor="questionDescription">Descrição</label>
                </div>
              </div>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AdminFormQuestion;
