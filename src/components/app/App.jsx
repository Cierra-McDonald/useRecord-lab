import React from 'react';
import MainPageContainer from './containers/MainPageContainer';

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
      }}>Color Changer</h1>
      
      <MainPageContainer />
    </div>
  ); 
}
