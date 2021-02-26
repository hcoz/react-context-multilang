import React, { useContext, useState } from 'react';

import { Text, LanguageContext } from '../containers/Language';

const selectOptions = ['option1', 'option2', 'option3'];

export default function Explore() {
  const [clickText, setClickText] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const { dictionary } = useContext(LanguageContext);

  const handleClick = () => {
    setClickText(<Text tid="buttonClicked" />);
  }

  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
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

      <div>
        <select
          onChange={handleOptionChange}
          value={selectedOption}
        >
          {selectOptions.map(option => (
            <option key={option} value={option}>
              {dictionary[option]}
            </option>
          ))}
        </select>
      </div>

      <a href="https://halilcanozcelik.com" target="_blank" rel="noopener noreferrer">
        <Text tid="aboutMe" />
      </a>
    </div>
  );
}
