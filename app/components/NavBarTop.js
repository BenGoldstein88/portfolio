import React from 'react';

export default class NavBarTop extends React.Component {

  constructor(props) {
    super(props);

    this.handleNavButtonClick = this.handleNavButtonClick.bind(this)

  }


  handleNavButtonClick(e) {
  	e.preventDefault()

  	var newView = e.target.getAttribute("name")

  	this.props.onTopNavClick(newView);
  	
  }


  render() {


    return (
      	<nav className="pt-navbar pt-fixed-top">
      		<div className="pt-navbar-group pt-align-left">
      			<button name="home" style={this.props.topNavStyles.home} onClick={this.handleNavButtonClick} className="pt-navbar-heading pt-button pt-minimal">
      				Ben Goldstein
      			</button>
      		</div>
      		<div className="pt-navbar-group pt-align-right">
      			<button name="contact" style={this.props.topNavStyles.contact} onClick={this.handleNavButtonClick} className="pt-button pt-minimal">
      			Contact
      			</button>
      			<button name="projects" style={this.props.topNavStyles.projects} onClick={this.handleNavButtonClick} className="pt-button pt-minimal">
      			Projects
      			</button>
      			<button name="music" style={this.props.topNavStyles.music} onClick={this.handleNavButtonClick} className="pt-button pt-minimal">
      			Music
      			</button>
      			<button name="settings" onClick={this.handleNavButtonClick} className="pt-button pt-minimal pt-icon-cog">
      			</button>
      		</div>

      	</nav>
    );
  }
}
