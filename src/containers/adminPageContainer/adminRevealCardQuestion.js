import React, { Component } from 'react';

class AdminRevealCardQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card-reveal" id="cardReveal">
        <span id="cardRevealPropositionTitle" className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
        <p id="cardRevealPropositionParagraph">DÚVIDAS</p>
        <div className="propositionAuthor">
          <br /> 1)O que deve ser escrito nos campos?<br />
          <br /> 2)Como selecionar uma proposicao?<br />
          <br /> 2)Como salvar uma questao?<br />
        </div>
      </div>
    );
  }

}

export default AdminRevealCardQuestion;
