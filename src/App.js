import React, { Component } from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import CameraCheck from './components/CameraCheck'
import Camera from './components/Camera'
import ToolBar from './components/ToolBar'
import P5Wrapper from 'react-p5-wrapper';
import './styles/App.css';


const MainApp = (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <ToolBar sendData={props.getData} />
    {/*<CameraCheck/>*/}
    {/*<Camera/>*/}
    <P5Wrapper sketch={Camera} speed={props.speed} />
  </MuiThemeProvider>
);

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentRotationSpeed: 0
    }

    this.getSliderFloat = this.getSliderFloat.bind(this)
  }

  getSliderFloat(floatVal) {
    console.log(floatVal)
    this.setState({ currentRotationSpeed: floatVal })
  }

  render() {
    return (
      <MainApp getData={this.getSliderFloat} speed = {this.state.currentRotationSpeed}/>
    )
  }
}

export default App;
