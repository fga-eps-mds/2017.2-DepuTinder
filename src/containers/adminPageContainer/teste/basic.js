import React, { Component } from 'react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import AdminListQuestions from '../adminQuestionnaire/adminListQuestions';


class SortableComponent extends Component {

  static renderQuestionsList() {
    return (
      <div>
        <AdminListQuestions />
      </div>
    );
  }

  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

const SortableItem = SortableElement(({ value }) => <li>{value}</li>);

const SortableList = SortableContainer(() => {
  return (
    <ul>
      <div>
        <SortableItem
          value={SortableComponent.renderQuestionsList()}
        />
      </div>
    </ul>
  );
});
export default SortableComponent;
