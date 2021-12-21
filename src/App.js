import './App.css';
import {  Container  } from 'react-bootstrap'
import Header from './components/NavigationBar';
import Footer from './components/Footer';
import Main from './components/Main';
import Graph from './components/Graph';
import React, {useState} from 'react';





function App() {

let [savingsArray, setSavingsArray] = useState([])


  return (
    <>
      <Header />
        <main>

      <Container>
        <Main setterFunction={setSavingsArray}/>

        <Graph data={savingsArray}/>

     </Container>

        </main>
      <Footer />
      
    </>
  );
}

export default App;
