import React, { Component } from 'react';
import ShowHideTech from './components/ShowHideTech.js'
import FilterProjects from './components/FilterProjects.js'

class App extends Component {

  render() {
    return (
      <div id="app-container">
        <ShowHideTech />
        <FilterProjects workData={this.props.workData} />
      </div>
    );
  }
}

export default App;
