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
        <div className="propositionAuthor" id="questionReveal">
          <br /> <b>1) O que escrever nos campos?</b><br />
            Para a criação de uma nova questão é preciso informar o título,
            o subtítulo e a descrição.
            O título deve ser o mais próximo da proposição associada a questão.
            Enquanto na descrição é preciso detalhar sua questão. <br />
          <br /><b> 2) Como selecionar uma proposicao?</b><br />
            Para ler as proposições disponíveis é preciso clicar no botão <b>PROPOSIÇÕES</b>.
            Quando clicado esse botão mostrará uma lista de proposições.
            O usuário precisa escolher uma dessas proposições e escrever o
            título da mesma no primeiro campo do formulário.
            Assim estára indicando a qual proposição a questão está associada.<br />
          <br /><b> 3) Como salvar uma questao?</b><br />
          Para criar uma questão é preciso que todos os campos sejam preenchidos.
          Após o preenchimento, o usuário precisa clicar no botão <b>ENVIAR</b>.
          Quando feito a questão terá sido salva no banco de dados de questões e
          já estará disponível para ser utilizada em um questionário.
        </div>
      </div>
    );
  }

}

export default AdminRevealCardQuestion;
