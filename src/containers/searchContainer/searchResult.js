import React from 'react';


function selectDeputy(deputy) {
  return deputy;
}


function renderNames(props) {
  return props.searchResult.map((deputy) => {
    const NAME = 0;
    const ID = 1; // Position of ID
    return (
      <li
        className="collection-item"
        key={deputy[ID]}
        onClick={() => selectDeputy(deputy)}
      >
        <div>
          <i className="material-icons">
            account_circle
          </i>
          <br />
          {deputy[NAME]}
        </div>
      </li>
    );
  });
}

const SearchResult = (props) => {
  return (
    <ul className="collection">
      {renderNames(props)}
    </ul>
  );
};

export default SearchResult;
