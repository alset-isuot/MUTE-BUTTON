// let's create a react stateless component, type rsc to get code snip

import React from 'react';

// bring in icon images
import OnIcon from '../../icons/on.svg'
import OffIcon from '../../icons/off.svg'

//lets pass the isMuted button component, as a prop
const MuteButton = (props) => {

    //console.log(props)  --for testing the props of the Mute button
    /* 
    return (
        <div>
            <button onClick={props.toggleMute}>Is this muted?</button>
        </div>
    );
    */

/* 
    // we want to do some conditional rendering
    if (props.isMuted) {
        return (
            <div>
                <button onClick={props.toggleMute}>OFF</button>
            </div>
        );
    } 
    return (
        <div>
            <button onClick={props.toggleMute}>ON</button>
        </div>
    );
*/

/*     
// we want to insert an image instead of having the button label be 'OFF' or 'ON'
    if (props.isMuted) {
        return (
            <div>
                <button onClick={props.toggleMute}>
                    <img src={OffIcon} alt='Off Icon'/>
                </button>
            </div>
        );
    } 
    return (
        <div>
            <button onClick={props.toggleMute}>
                <img src={OnIcon} alt='On Icon'/>
            </button>
        </div>
    );
    */

    /*
    //above has code repeating, lets fix that! going to use jsx, we can do a ternary operatory display
    return (
        <div>
            <button onClick={props.toggleMute}>
            {
               props.isMuted
               ?
               <img src={OffIcon} alt='Off Icon'/>
               :
               <img src={OnIcon} alt='On Icon'/> 
            }
            </button>
        </div>
    );
    */


    /* 
    // we can slim the code above down even further lmao
    return (
        <div>
            <button onClick={props.toggleMute}>
                <img src={ props.isMuted ? OffIcon : OnIcon } alt={'${props.isMuted ? "OFF" : "ON"} Icon'}/>
            </button>
        </div>
    );
    */


// lets set things like props.toggleMute and props.isMuted to actual variables to improve code readablity 
    // use {} because props is an object! and we're going to extract the keys off that object -- we're extracting values of toggleMute and isMuted, from the props object
    // this makes it now anything we want to reference toggleMute or isMuted, we wont need the props.
    
    // AKA Lets do some destructuring!
    const { toggleMute, isMuted } = props;

    return (
        <div>
            <button onClick={ toggleMute }>
                <img src={ isMuted ? OffIcon : OnIcon } alt={`${ isMuted ? "OFF" : "ON" } Icon`}/>
            </button>
        </div>
    );
};

export default MuteButton;