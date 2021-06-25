
import './App.scss';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import React from 'react'
import HomePage from './pages/HomePage';
import SearchResults from './pages/SearchResults';
import ShoppingList from './pages/ShoppingList';
import RecipeContent from './pages/RecipeContent';
import LoginPage from './pages/LoginPage'
import page_not_found from './pages/page_not_found';
import TeamPage from './pages/TeamPage';



function App() {
  return (
    <>
    <div className="App">
  
<Router>
<Switch>
  <Route exact path='/' component={LoginPage}/>
  <Route path='/home' component={HomePage} />
  <Route path='/search' component={SearchResults} />
  <Route path='/shoppingList' component={ShoppingList} />
  <Route path='/RecipeContent' component={RecipeContent} />
  <Route path='/team' component={TeamPage} />
  <Route path="*" component={page_not_found}/>
</Switch>


</Router>


    </div>
    </>
  );
}


export default App;


