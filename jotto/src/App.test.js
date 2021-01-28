import { render, screen } from '@testing-library/react';
import App from './App';
import {storeFactory} from "../tests/testUtils"

// const setup = (state={}) => {
//   const store = storeFactory(state);
//   const wrapper = shallow(<App store={store} />).dive().dive();
//   return wrapper;
// }

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
