import React from 'react';
import Enzyme,{mount,shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {applyMiddleware} from 'redux';
import HomePage from './HomePage';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<HomePage>',()=>{
   const mockStore = configureMockStore()
   const store = mockStore({})
   it('<HomePage> Component Needs Username and password to Login',()=>{
      let wrapper=shallow(<Provider store={store}><HomePage/></Provider>);
          
   })

})




