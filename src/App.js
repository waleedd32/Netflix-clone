import React from 'react'
import './App.css';
import requests from './requests'
import Row from './Row';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

    </div>
  );
}

export default App;
