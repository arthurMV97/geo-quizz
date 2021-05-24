import { render, screen } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme'

  

describe("Quizz App Testing", () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('renders learn react link', () => {
    expect(wrapper.find('a').text()).toContain("Learn React")
  })

  test('render a button', () => {
    expect(wrapper.find('.btn').text()).toBe("Add One")
  })

  test('render the initial value of state in div', () => {
    expect(wrapper.find('.btn').text()).toBe("0")
  })

})

