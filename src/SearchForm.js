import React from 'react';

function SearchForm({ fetchData, categories }) {
  const [selectedType, setSelectedType] = React.useState('Any');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(selectedType);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choose a type of Joke:
        <select value={selectedType} onChange={e => setSelectedType(e.target.value)}>
          {categories.length > 0 ? (
            categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))
          ) : (
            <option value="Any">Loading categories...</option>
          )}
        </select>
      </label>
      <button type="submit">Get Joke</button>
    </form>
  );
}

export default SearchForm;
