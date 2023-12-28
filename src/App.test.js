// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// import Home from './Screens/Home';
// import Contactus from './Screens/Contactus'
// import AboutUs from './Screens/AboutUs';
// import Footer from './Components/Footer';
// import Blog from './Screens/Blog';
import Blogdetails from './Screens/Blogdetails';

window.scrollTo = jest.fn();
describe('Blogdetails Component Tests', () => {
  // Before each test, you can set up anything that's needed for all tests.
  beforeEach(() => {
    // Any setup that needs to happen before each test goes here.
    // For example, mocking network requests if your component makes any.
  });

  it('renders without crashing', () => {
    // Here, render your component and perform assertions.
    render(<Blogdetails />);
    // You can add your test assertions here.
  });

  // You can add more tests here

  // If you need to clean up or reset mocks after each test, use afterEach
  afterEach(() => {
    // Clean up or reset mocks if necessary
    jest.clearAllMocks(); // This clears any mock function's call history
  });
})



  test('renders Home component', () => {
    render(
      <Router>
        <Blogdetails />
      </Router>
    );
    // Add assertions here
  });

