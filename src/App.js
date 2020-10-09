import React, { useReducer } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {Myreducer, initialstate} from './reducer'


const store = createStore(Myreducer);
const App = () => {


  return (
    <Provider store = {store}>
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures/>
      </div>
      <div className="box">
        <AdditionalFeatures/>
        <Total/>
      </div>
    </div>
    </Provider>
  );
};

export default App;
