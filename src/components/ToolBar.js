import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import Slider from 'material-ui/Slider';


const styles = {
    root: {
        display: 'flex',
        height: 124,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 'auto',
        width: '50%'
    },
};

const DynamicSlider = (prop) => (
    <div style={styles.root} >
        <Slider defaultValue={prop.sv} step={0.001} max={0.5} min={0} style={{ width: 200 }} axis="x" onChange = {prop.changeHandler}/>
    </div>
);

export default class ToolbarExamplesSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3,
            sliderVal: 0
        };
    }

    handleChange = (event, index, value) => this.setState({ value });

    sendFloat(e) {
        this.props.sendData(e)
    }

    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <h2>Webcam Status</h2>
                </ToolbarGroup>
                <DynamicSlider sv = {this.sliderVal} changeHandler={(ob, e) => {
                    this.sendFloat(e)
                }}/>
                    
                <ToolbarGroup>
                    <FontIcon className="muidocs-icon-custom-sort" />
                    <ToolbarSeparator />
                    <RaisedButton label="Start Recording" primary={true} />
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                        <MenuItem primaryText="Download" />

                        <MenuItem primaryText="More Info" />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}