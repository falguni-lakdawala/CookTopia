
import './App.scss';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import React from 'react';

const values={"Maneesh":"smart","Reddy":"red"}
const contextapp=React.createContext(values);

function App() {
  return (
    <>
    <div className="App">
      <contextapp.Provider value={values}>
        {/* Whatever the value you pass here will be available in child components and also causes re-renders */}
     <Header/>
     <Body/>
     <Footer/>
     </contextapp.Provider>
    </div>
    </>
  );
}


export {contextapp}
export default App;


