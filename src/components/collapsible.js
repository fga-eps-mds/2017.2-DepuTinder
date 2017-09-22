import React from 'react';

const Collapsible = () => {
  return (
    <div>
      <ul id="listAnswedQuestions yellow" className="collapsible">
        <li>
          <div id="listAnswedQuestions-title" className="collapsible-header">QUESTION TITLE</div>
          <div id="listAnswedQuestions-subtitle" className="collapsible-body"><span>QUESTION SUBTITLE</span></div>
          <div id="listAnswedQuestions-desc" className="collapsible-body "><span>question Description</span></div>
        </li>
      </ul>
    </div>
  );
};

export default Collapsible;
