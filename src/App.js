import React from 'react';
import FirstContainer from './Components/FirstPage/FirstContainer/FirstContainer.jsx';
import SecondContainer from './Components/FirstPage/SecondContainer/SecondContainer.jsx';
import ThirdContainer from './Components/FirstPage/ThirdContainer/ThirdContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import FourthContainer from './Components/FirstPage/FourthContainer/FourthContainer.jsx';

const App = () => {
  return(
    <div>
      <FirstContainer />
      <SecondContainer />
      <FourthContainer />
    </div>
  );
}

export default App;
