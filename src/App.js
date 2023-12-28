import React, { useState, useEffect } from 'react';
import Router from './Components/Router';
import WelcomeComponent from './Screens/Welcome';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Set a timeout for 3 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false); // Hide the WelcomeComponent after 3 seconds
    }, 3000);

    // Cleanup function to clear the timeout if the component unmounts early
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      {showWelcome ? <WelcomeComponent /> : <Router />}
    </>
  );
}

export default App;
