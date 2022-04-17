//CuddlyNest Assessment Submission
//By: Zain Imdad
import React from 'react';

import Main from './components/Clock/Main';

// Using "styled-components" packag for global css
import GlobalStyle from './styles/global';

// @font-face for seven segment doesn't work in styled-components. Loading font-face and background Video CSS here
import './styles/global.css';

const App: React.FC = () => {
  return (
    <>
  

      <GlobalStyle />
      <Main />
    </>
  );
};

export default App;
