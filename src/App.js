import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import DisplayComponent from './DisplayComponent';
import './App.css'; 

function App() {
  const [apiData, setApiData] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://v2.jokeapi.dev/categories');
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories: ', error);
      }
    };

    fetchCategories();
  }, []);

  const fetchData = async (queryParams) => {
    try {
      const response = await fetch(`https://v2.jokeapi.dev/joke/${queryParams}`);
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div className="App">
      <h1>Random Joke Generator</h1>
      <SearchForm fetchData={fetchData} categories={categories} />
      {apiData && <DisplayComponent data={apiData} />}
    </div>
  );
}

export default App;
