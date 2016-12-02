import React from 'react';
import NavBarTop from './NavBarTop'
import HomePage from './HomePage'
import ContactPage from './ContactPage'
import ProjectsPage from './ProjectsPage'
import MusicPage from './MusicPage'

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      currentView: 'home',
      topNavStyles: {
        home: {color: "red"},
        contact: {color: "black"},
        projects: {color: "black"},
        music: {color: "black"}
      }
    }

    this.resetStyleState = this.resetStyleState.bind(this)
    this.handleTopNavClick = this.handleTopNavClick.bind(this)

  }

  resetStyleState() {
    this.setState({
      topNavStyles: {
        home: {color: "black"},
        contact: {color: "black"},
        loop: {color: "black"},
        hunt: {color: "black"}
      }

    })
  }
  handleTopNavClick(view) {

    this.resetStyleState();

    switch(view) {
      case 'home':
        this.setState({
          currentView: 'home',
          topNavStyles: {
            home: {color: "red"}
          }
        })
        break;

      case 'contact':
        this.setState({
          currentView: 'contact',
          topNavStyles: {
            contact: {color: "blue"}
          }
        })
        break;

      case 'projects':
        this.setState({
          currentView: 'projects',
          topNavStyles: {
            projects: {color: "green"}
          }
        })
        break;

      case 'music':
        this.setState({
          currentView: 'music',
          topNavStyles: {
            music: {color: "pink"}
          }
        })
        break;
      case 'settings':
        break;

      default:
        console.log("Something went wrong with the view")

    }
  }

  render() {
    var thingToDisplay

    switch(this.state.currentView) {
      case 'home':
        thingToDisplay = <div> <HomePage /> </div>
        break;
      case 'contact':
        thingToDisplay = <div> <ContactPage /> </div>
        break;      
      case 'projects':
        thingToDisplay = <div> <ProjectsPage /> </div>
        break;
      case 'music':
        thingToDisplay = <div> <MusicPage /> </div>
        break;
      // case 'settings':
      //   break;
      default:
        console.log("Something went wrong with the view")
    }

    return (
      <div>
        <NavBarTop currentView={this.state.currentView} topNavStyles={this.state.topNavStyles} onTopNavClick={this.handleTopNavClick}/>
        {thingToDisplay}
      </div>
    );
  }
}
