import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class AdminQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div
          id="titleAdminQuestion"
        ><br />
        Criar Questão
        </div>
        <div>
          <a
            onClick={() => browserHistory.push('/admin')}
            className="waves-effect waves-light btn black yellow-text text-accent-3"
            id="backButton"
          >Voltar
          </a>
        </div>
      </div>
    );
  }
}

export default AdminQuestion;
