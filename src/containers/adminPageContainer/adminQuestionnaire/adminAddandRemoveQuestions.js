import React, { Component } from 'react';
import AdminFormQuestionnaire from './adminFormQuestionnaire';


class AdminAddandRemoveQuestions extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <AdminFormQuestionnaire />
      </div>
    );
  }
}

export default (AdminAddandRemoveQuestions);
