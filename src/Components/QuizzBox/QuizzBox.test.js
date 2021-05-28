import QuizzBox from './QuizzBox';

import {shallow} from 'enzyme'

describe("QuizzBox component Testing", () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(<QuizzBox />)
    })

    test('renders Quizz Question Div', () => {
        expect(wrapper.find('#question-container').exists()).toBeTruthy()
    })
    test('renders Quizz Question Sentence', () => {
        expect(wrapper.find('#sentence').exists()).toBeTruthy()
    })

})
    
