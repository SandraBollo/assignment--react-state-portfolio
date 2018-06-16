import React, { Component } from 'react';


/*  Note:
   if you find a add/remove 'techlist--hidden' from the div element's class,
   the techlist box will appear/disappear

*/

class ShowHideTech extends Component {
  constructor(){
    super()
    this.state = {
      techShowing: true
    }
  }

  _toggleShowTech(){
    let newStateObj

    if (this.state.techShowing === true) {
      newStateObj = { techShowing : false }
    }

    else {
      newStateObj = { techShowing : true }
    }
    this.setState(newStateObj)
  }

  render() {

    let techlistStatusClass

    if (this.state.techShowing === true) {
      techlistStatusClass = `techlist--hidden`
    }

    else {
      techlistStatusClass = ''
    }

    return (
      <section>
        <h4>Technologies</h4>
        <button onClick={ ()=>{this._toggleShowTech() } } >+ Show Tech</button>

        <div className={`techlist ${techlistStatusClass}`}>
          <span className="techlist__icon devicons devicons-github_badge"/>
          <span className="techlist__icon devicons devicons-git"/>
          <span className="techlist__icon devicons devicons-html5"/>
          <span className="techlist__icon devicons devicons devicons-css3"/>
          <span className="techlist__icon devicons devicons-sass"/>
          <span className="techlist__icon devicons devicons-linux"/>
          <span className="techlist__icon devicons devicons devicons-nodejs"/>
          <span className="techlist__icon devicons devicons devicons-react"/>
          <span className="techlist__icon devicons devicons devicons-illustrator"/>
        </div>
      </section>
    );
  }
}

export default ShowHideTech
