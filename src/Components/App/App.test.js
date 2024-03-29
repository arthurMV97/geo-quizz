import App from './App';
import {shallow} from 'enzyme'
import { findByTestAttr } from '../../Fonctions/TestFunctions';

  



describe("App Component", () => {
  let component
  beforeEach(() => {
    component = shallow(<App />)
  })
  

  test('renders App Title', () => {
    const title = findByTestAttr(component, 'title')
    console.log(component.debug());
    expect(title.length).toBe(1)
  })

  // test('render child component QuizzBox', () => {
  //   quizzBoxComponent = findByTestAttr(component, 'quizzbox-component')
  //   expect(quizzBoxComponent.length).toBe(1)
  // })

  test('render infos footer', () => {
    const footer = findByTestAttr(component, 'infos-footer')
    expect(footer.length).toBe(1)
  })



})

