import React, { Component } from 'react';
import { projectData } from '../data/datasource'

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`

       <div className="project project--«...PROJECT-TYPE...»">
         <span className="project__title">«...PROJECT-NAME...»</span>
       </div>

       -- substitute values for PROJECT-TYPE and PROJECT-NAME

   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state

        Hint: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() in the render() method `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() then .map()
 */

class FilterProjects extends Component {

constructor(uno){
  super(uno)
  this.state = {
    whichProjShow: "all"
  }
}

  _updateStateClick(clickedTypeOfProyect){
    this.setState({
      whichProjShow : clickedTypeOfProyect
    })
  }

  _generateProj(){
    let soloClass = ''
    const projArray = this.props.workData.filter((userObj)=>{
      if(this.state.whichProjShow === "all") return true

      if (this.state.whichProjShow === "solo" && userObj.solo === true) {
        return true
      }

      if (this.state.whichProjShow === "team" && userObj.solo === false) {
        return true
      }

      return false


    })

    const projComponentsArray = projArray.map(function(projObj, i){
      if (projObj.solo === true) {
        soloClass = "project--solo"
      }

      else {
        soloClass = 'project--team'
      }

      return <div className={`project ${soloClass}`} key={i}>
        <span className="project__title">{projObj.projectName}</span>
      </div>

    })
      return projComponentsArray
  }

  render() {
    let selectedTypeProjClass = ''
    if (this.state.whichProjShow === 'solo' ) {
      selectedTypeProjClass = "project-type--selected"
    } else {
      selectedTypeProjClass = ""
    }
    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span data-ptype="all" className='project-type project-type--all' onClick={ ()=>{ this._updateStateClick('all') } }>
              All
            </span>

            <span data-ptype="solo" className='project-type project-type--solo' onClick={ ()=>{ this._updateStateClick('solo') } }>
              <i className="ion-person"></i>Solo
            </span>

            <span data-ptype="team" className= 'project-type project-type--team' onClick={ ()=>{ this._updateStateClick('team') } }>
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>

            {/* Step (1) --- .map() the projectData to JSX  */}
              {this._generateProj()}

          </div>
        </section>

    );
  }
}



export default FilterProjects
