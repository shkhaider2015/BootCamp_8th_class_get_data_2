import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  const [repos, setRepos] = useState([{}]);

  useEffect( () => 
  {
    async function getRepos() 
    {
      var url = 'https://api.github.com/users/shkhaider2015/repos'
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setRepos(data)
    }
    getRepos()



    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //   .then(response => response.json())
    //   .then(json => {
    //     setData(json)
    //   } )

  },
    []
  )

  return (
    <div className="App">
      <ul>
        {
          repos.map((repoObj, index) => {
            return (<li key={index}> {repoObj.name} </li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
