import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, {shallow} from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new EnzymeAdapter()});

const setUp = () => shallow(<App/>)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test("renders without error", ()=>{
  const wrapper = setUp()
  const appComponent = findByTestAttr(wrapper, "component-app")
  expect(appComponent.length).toBe(1)
})

test("renders a button", ()=> {
  const wrapper = setUp()
  const button = findByTestAttr(wrapper ,'increment-button')
  expect(button.length).toBe(1)
})

test("counter starts at 0", ()=> {
  const wrapper = setUp()
  const count = findByTestAttr(wrapper,'count').text()
  expect(count).toBe("0")
})

describe("Incremetn", () => {
test("clicking on the button increments counter display ", ()=> {
  const wrapper = setUp()
  const button = findByTestAttr(wrapper ,'increment-button');
  button.simulate('click');
  const count = findByTestAttr(wrapper,'count').text()
  expect(count).toBe("1")
})

test("renders counter display", ()=> {
  const wrapper = setUp()
  const counterDisplay =findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
})
})

describe('Decrement', () => {
  test("renders decrement button", ()=> {
  const wrapper = setUp()
  const button = findByTestAttr(wrapper ,'decrement-button')
  expect(button.length).toBe(1)
})

test("clicking on the button decrements the counter display when state is greater than 0", ()=> {
  /// ????
  const wrapper = setUp();
  const incButton = findByTestAttr(wrapper, 'increment-button');
      incButton.simulate('click');
  const decbutton = findByTestAttr(wrapper, 'decrement-button');
      decbutton.simulate('click');
  const count = findByTestAttr(wrapper, 'count').text();
      expect(count).toBe("0")
})
})
describe('error when counter goes below 0', () => {
  test("error does not show when it's not needed", ()=> {
    const wrapper = setUp();
    const errorDiv = findByTestAttr(wrapper, "error-message");
    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    console.log(wrapper.debug());
    expect(errorHasHiddenClass).toBe(true);
  })
  describe('counter is 0 and decrement is clicked', () => {

    const wrapper
    beforeEach(() => {
      wrapper = setUp();

      const button = findByTestAttr(wrapper, 'decrement-button');
      button.simulate('click');
    });
    test('error shows', () => {
      const errorDiv = findByTestAttr(wrapper, 'error-message');
      const errorHasHiddenClass = errorDiv.hasClass('hidden');
      expect(errorHasHiddenClass).toBe(false);
    });
    test('counter still displays 0', () => {
      const count = findByTestAttr(wrapper, 'count').text();
      expect(count).toBe("0");
    });
    test('clicking increment clears the error', () => {
      const incButton = findByTestAttr(wrapper, 'increment-button');
      incButton.simulate('click');

      const errorDiv = findByTestAttr(wrapper, 'error-message');
      const errorHasHiddenClass = errorDiv.hasClass('hidden');
      expect(errorHasHiddenClass).toBe(true);
    });
  });
})

