import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import MainContext from './context/MainContext';
import { IBanknotes } from './types';

const Main = () => {

  const [variant, setVariant] = useState<IBanknotes>({'5000': 100, '2000':400, '1000': 1000, '500': 3000,'200': 5000, '100':8000,'50': 10000})

  return (
    <MainContext.Provider value={{variant, setVariant}}>
      <App/>
    </MainContext.Provider>
  )
}

ReactDOM.render(
    <Main/>,
  document.getElementById('root')
);

