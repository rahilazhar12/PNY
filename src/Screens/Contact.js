import React, { useEffect, useState } from 'react';

const TypingAnimation = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const textToType = 'We and our team work for your Future';
  const wordArray = textToType.split(' ');

  useEffect(() => {
    // Function to toggle cursor visibility
    const toggleCursor = () => {
      setCursorVisible((prevState) => !prevState);
    };

    // Start cursor toggle interval
    const cursorInterval = setInterval(toggleCursor, 500);

    let currentWordIndex = 0;
    let currentCharIndex = 0;

    const typeChar = () => {
      if (currentWordIndex === wordArray.length) {
        setDisplayedText('');
        currentWordIndex = 0;
        currentCharIndex = 0;
        setTimeout(typeChar, 1000);
        return;
      }

      const currentWord = wordArray[currentWordIndex];
      const currentChar = currentWord.charAt(currentCharIndex);

      setDisplayedText((prevText) => prevText + currentChar);

      currentCharIndex++;

      if (currentCharIndex === currentWord.length) {
        setDisplayedText((prevText) => prevText + ' ');
        currentWordIndex++;
        currentCharIndex = 0;
      }

      setTimeout(typeChar, 100);
    };

    typeChar();

    // Clear interval when the component is unmounted
    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="text-center lg:text-xl lg:mt-5 min-h-[40px]">
      {displayedText}
      {cursorVisible ? '|' : ' '}
    </div>
  );
};

export default TypingAnimation;
