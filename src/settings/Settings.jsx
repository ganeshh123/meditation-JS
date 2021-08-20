/* Global Imports */
import React from 'react';

import './settingsStyle.scss'

export default class Settings extends React.Component{
    constructor(props){
        super(props)
    }

    settingsCloseButtonPressed = () =>{
        let appState = this.props.appState

        appState.setStateFunction({
            settingsShowing: false
        })
    }

    settingsResetButtonPressed = () => {
        console.log('Reset Settings Here')
    }

    setColors = () => {
        this.settingsColors = {
            backgroundColor: this.props.appState.currentTheme.backgroundColor,
            border: this.props.appState.currentTheme.border,
            boxShadow: this.props.appState.currentTheme.boxShadow,
            backdropFilter : this.props.appState.currentTheme.backdropFilter,
            webkitBackdropFilter : this.props.appState.currentTheme.webkitBackdropFilter,
            color: this.props.appState.currentTheme.accentColor
        }

        this.settingsIconColors = {
            filter: this.props.appState.currentTheme.iconColor
        }
    }

    render(){

        this.setColors()

        return(
            <div id='settings' className='glassBlock' style={this.settingsColors}>
                <div id='settingsTitleBar'>
                    <div id='settingsTitleContainer'>
                        <div id='settingsTitle'>
                            Settings
                        </div>
                    </div>
                    <img 
                        id='settingsCloseButton'
                        className='iconButton'
                        src='./assets/icons/cross_icon.svg'
                        onClick={this.settingsCloseButtonPressed}
                        style={this.settingsIconColors}
                    />
                </div>
                <div id='settingsMenu'>
                    <div className='settingsMenuItem'>
                        <div className='settingsMenuItemLeftSide'>
                            <img 
                                className='volumeIcon iconButton' 
                            />
                            <div className='settingsMenuItemLabel'>

                            </div>
                        </div>
                        <div className='settingsToggleSwitch'>

                        </div>
                    </div>
                </div>
                <div 
                    id='settingsReset'
                    onClick={this.settingsResetButtonPressed}
                >
                    Reset Settings
                </div>
            </div>
        )
    }
}