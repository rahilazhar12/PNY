// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Screens/Home';
import Contactus from './Screens/Contactus'
import AboutUs from './Screens/AboutUs';



test('renders Home component', () => {
  render(
    <Router>
      {/* <Home /> */}
      {/* <Contactus /> */}
      <AboutUs />
    </Router>
  );
  // Add assertions here
});

