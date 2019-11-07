import React, { useContext } from 'react';

import { languageOptions } from '../languages';

import { LanguageContext } from '../containers/Language';

export default function LanguageSelector() {
  const languageContext = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    const selectedLanguage = languageOptions.find(item => item.id === event.target.value);
    // set selected language by calling context method
    languageContext.setLanguage(selectedLanguage);
  };

  return (
    <select
      onChange={handleLanguageChange}
      value={languageContext.language.id}
    >
      {languageOptions.map(item => (
        <option
          key={item.id}
          value={item.id}
        >
          {item.text}
        </option>
      ))}
    </select>
  );
};
