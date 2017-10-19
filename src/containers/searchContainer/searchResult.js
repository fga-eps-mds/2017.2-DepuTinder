import React from 'react';

function renderNames(props) {
  return props.searchResult.map((name) => {
    return (
      <div key={name}>
        {name}
      </div>
    );
  });
}

const SearchResult = (props) => {
  return (
    <div>
      {renderNames(props)}
    </div>
  );
};

export default SearchResult;
