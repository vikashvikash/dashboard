import './App.css';
import  HomePage  from './Components/Pages/HomePage/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import  LoginPage  from './Components/Pages/LoginPage/LoginPage'
import RegisterPage  from './Components/Pages/RegisterPage/RegisterPage';
import {Provider} from 'react-redux';
import {configureStore} from './Redux/configureStore';
import { Fragment } from 'react';



const store=configureStore();





function App() {


  return (

    <Fragment>
      <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>

      </BrowserRouter>
      </Provider>
    </Fragment>


  );
}

export default App;
