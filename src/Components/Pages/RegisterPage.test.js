import React from 'react';
import Enzyme, {mount,shallow} from 'enzyme';
import  RegisterPage from './RegisterPage';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('<RegisterPage>',()=>{

it('Registerpage needs to fill 4 fields ',()=>{

     const wrapper=shallow(<RegisterPage/>);
        expect(wrapper.find('input')).toHaveLength(4);
    


})
})
