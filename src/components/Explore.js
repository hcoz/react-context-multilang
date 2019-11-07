import React, { useState } from 'react';

import { Text } from '../containers/Language';

export default function Explore() {
  const [clickText, setClickText] = useState();

  const handleClick = () => {
    setClickText(<Text tid="buttonClicked" />);
  }

  return (
    <div>
      <h1><Text tid="exploreHeader" /></h1>
      <p><Text tid="welcomeDescription" /></p>

      <div>
        <button onClick={handleClick}>
          <Text tid="clickMe" />
        </button>
        <p>{clickText}</p>
      </div>

      <a href="https://halilcanozcelik.com">
        <Text tid="aboutMe" />
      </a>
    </div>
  );
}
