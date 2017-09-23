import React from 'react';

const Collapsible = () => {
  return (
    <div>
      <ul className="collapsible" data-collapsible="accordion">
        <li>
          <div className="collapsible-header red"><i className="material-icons">cancel</i>First</div>
          <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
          <div className="collapsible-header green"><i className="material-icons">check_circle</i>Second</div>
          <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
          <div className="collapsible-header green"><i className="material-icons">check_circle</i>Third</div>
          <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
          <div className="collapsible-header grey"><i className="material-icons">indeterminate_check_box</i>First</div>
          <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
          <div className="collapsible-header red"><i className="material-icons">cancel</i>Second</div>
          <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
          <div className="collapsible-header red"><i className="material-icons">cancel</i>Third</div>
          <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
      </ul>
    </div>
  );
};

export default Collapsible;
