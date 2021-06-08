/* Global Imports */
import React from 'react';

/* Local Imports */
import Theme from '../utils/theme/Theme'
import './selectionVolumeControlStyle.scss'


export default class SelectionVolumeControl extends React.Component{
    constructor(props){
        super(props)

        this.selectionVolumeControlColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor
        }
    
        this.volumeIconColors = {
            filter: this.props.appState.currentTheme.iconColor
        }
    
    }

    state = {

    }
    
    sourceSelectionChanged = (event) => {
        this.props.appState.changeSourceFunction(this.props.sourceType, event.target.value)
    }

    getIconPath = () => {
        let iconPath = './assets/icons/icon_volume_'
        if(this.props.sourceType == 'musicTrack'){
            iconPath = iconPath + 'music.svg'
        }else{
            iconPath = iconPath +'scene.svg'
        }

        return iconPath
    }

    render(){
        return(
            <div className="selectionVolumeControl" style={this.selectionVolumeControlColors}>
                <select className="sourceSelector" onChange={this.sourceSelectionChanged} value={this.props.selected}>
                    {this.props.sourcesArray.map((source) => {
                        return(
                            <option key={source.id} value={source.id}>{source.name}</option>
                        )
                    })}
                </select>
                <p className="sourceDescription">{this.props.sources[this.props.selected]['description']}</p>
                <div className="volumeSliderContainer">
                    <img 
                        className='volumeIcon' 
                        src={this.getIconPath()} 
                        style={this.volumeIconColors}
                    />
                    <input className="volumeSlider" type="range" min="1" max="100"></input>
                </div>
            </div>
        )
    }
}