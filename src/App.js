import React from 'react';
import CollegeList from './CollegeList'

import 'tachyons'
import './App.css';

class App extends React.Component{

  render(){
    return(
      <div>
        <h2 className='f5' style={{margin:5 }}>Colleges in North India</h2>
        <div className='tc'>
        
        <CollegeList />
        </div>

      </div>

    )
  }

}

export default App;


