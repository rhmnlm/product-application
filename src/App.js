import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [text,setText] = useState("hye");

  useEffect(()=>{
    if("bye"!==text)
      setText("bye")
  })

  let firstName = [
    "abby", "hud", "Emily"
  ]

  return (
    <div className="App">
      <body>
       <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js </code> {text} and save to reload.
        </p>
        <button> Add a new Product</button>
        <table style={{border:"1px solid black"}}>
          <tr>
            <thead>
              ID
            </thead>
            <thead>
              Code
            </thead>
            <thead>
              Name
            </thead>
            <thead>
              Category
            </thead>
            <thead>
              Brand
            </thead>
            <thead>
              Type
            </thead>
            <thead>
              Description
            </thead>
          </tr>
            {
              firstName.map(name=>{
              return(
                <>
                  <tr>
                    <td></td> <td></td> <td>{name}</td> <td></td> <td></td> <td></td> <td></td>
                  </tr>
                </>
              )
              })
            }
        </table>
          
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    </div>
  );
}

export default App;
