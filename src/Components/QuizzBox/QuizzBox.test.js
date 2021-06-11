import QuizzBox from './QuizzBox';
import { findByTestAttr } from '../../Fonctions/TestFunctions';

import {shallow} from 'enzyme'

describe("QuizzBox component Testing", () => {
    let component
    beforeEach(() => {
      component = shallow(<QuizzBox />)
    })

    test('renders Quizz Question Div', () => {
        const questionDiv = findByTestAttr(component, 'question-container')
        expect(questionDiv.length).toBe(1)
    })
    test('renders Quizz Question Sentence', () => {
        const questionP = findByTestAttr(component, 'question')
        expect(questionP.length).toBe(1)
    })

})
    
