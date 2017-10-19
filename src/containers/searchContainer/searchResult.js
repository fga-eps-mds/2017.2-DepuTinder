import React from 'react';

function renderNames(props) {
  return props.searchResult.map((name) => {
    return (
      <li className="collection-item" key={name}>
        <div>
          <i className="material-icons">
            account_circle
          </i>
          <br />
          {name}
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
