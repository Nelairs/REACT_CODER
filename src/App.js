import './App.css';
import * as React from 'react';
import NavBar from './components/NavBar/NavBar';
import CardList from './components/CardList/CardList';
import  MsgContainer  from  './components/MsgContainer/MsgContainer';

function App() {
  return (

    //JSX

    <div className="App">
      <NavBar/> 

      <div className='general-container'>

        <MsgContainer message={'Bienvenidos a la pagina!'}/>
        <CardList title={'Productos Recomendados'}/>
        
      </div>
      
    </div>
  );
}

export default App;
