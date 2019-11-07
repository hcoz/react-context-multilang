import React from 'react';

import { LanguageProvider } from './containers/Language';

import LanguageSelector from './components/LanguageSelector';
import Explore from './components/Explore';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <header className="App-header">
          <LanguageSelector />
        </header>

        <Explore />
      </div>
    </LanguageProvider>
  );
}

export default App;
