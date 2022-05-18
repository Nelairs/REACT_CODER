import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardList from './components/CardList/CardList';


function App() {
  return (

    //JSX

    <div className="App">
      <NavBar/>  
      <div className='general-container'>
        <CardList title={'Productos Recomendados'}/>
        <CardList title={'Productos Relacionados'}/>

      </div>
      
    </div>
  );
}

export default App;
