import { render, screen } from '@testing-library/react';
import App from './App';

import {shallow} from 'enzyme'

  

describe("Quizz App Testing", () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('renders App Title', () => {
    expect(wrapper.find('h1').text()).toContain("Geo Quizz")
  })

  test('render child component QuizzBox', () => {
    expect(wrapper.find('QuizzBox').exists()).toBeTruthy()
  })

  test('render infos', () => {
    expect(wrapper.find('.infos').exists()).toBeTruthy()
  })



})

