import React, { useContext, useState } from 'react';

import { Text, LanguageContext } from '../containers/Language';

export default function Explore() {
  const [clickText, setClickText] = useState();
  const { dictionary } = useContext(LanguageContext);

  const handleClick = () => {
    setClickText(<Text tid="buttonClicked" />);
  }

  return (
    <div>
      <h1><Text tid="exploreHeader" /></h1>
      <p><Text tid="welcomeDescription" /></p>

      <div>
        <input type="text" placeholder={dictionary.enterText} />
        <button onClick={handleClick}>
          <Text tid="clickMe" />
        </button>
        <p>{clickText}</p>
      </div>

      <a href="https://halilcanozcelik.com" target="_blank" rel="noopener noreferrer">
        <Text tid="aboutMe" />
      </a>
    </div>
  );
}
