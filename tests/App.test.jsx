import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';


describe('App Tests', () =>{
  test('should render the app component on the screen', () => {
    let wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
});