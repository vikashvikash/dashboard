import React from 'react';
import Enzyme, {shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import RegisterPage from './RegisterPage';
import  configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {userReducer} from '../../../Redux/Reducers/userReducer';



Enzyme.configure({adapter:new EnzymeAdapter});

describe('<HomePage/> ',()=>{
    let mockStore=configureMockStore(userReducer,{})
    let wrapper;


    it('find the input lenght',()=>{
        const store=mockStore();
        wrapper=shallow(<Provider store={store}><RegisterPage/></Provider>).dive();
    
        console.log(wrapper.debug());

    })
})
