import React, {useState} from 'react';
import './App.scss';
import Dialog from "./Dialog";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
         <Dialog
           isOpen={isOpen}
           closeCallback={() => {
             setIsOpen(false)
           }}
         />

        <button type="button" className="btn btn-primary" onClick={() => {
          setIsOpen(!isOpen)
        }}>Open Dialog</button>

    </div>
  );
}

export default App;
