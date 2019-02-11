import React from "react";
import SideUserButton from "./SideUserButton";
import MainUser from "./MainUser"
import WhatsHappening from "./WhatsHappening"
import MainFeed from "./MainFeed"

function Wrapper(props) {
    
    let wrapper = {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
    }

    let border = {
        borderColor: 'gray',
        borderWidth: 1,
        borderStyle: 'solid',
        margin: 5,
    }

    let mainUser = {
        borderColor: 'gray',
        borderWidth: 1,
        borderStyle: 'solid',
        margin: 5,
        height: 260,
    }

    let leftText = {
        borderColor: 'gray',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        margin: 5,
        position: 'relative',
        marginTop: '-200',
    }
    let centerColumn = {
        gridRowStart: 'span 2',
        gridRowEnd: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderStyle: 'solid',
        margin: 5,
    }

    let padding = {
        padding: 15
    }
    return(
        <div style={wrapper}>
            <div style={mainUser}>
                <MainUser></MainUser>
            </div>
            <div style={centerColumn}>
                <WhatsHappening></WhatsHappening>
                <MainFeed color="#efd2a2"></MainFeed>
                <MainFeed color="#efd2a2" extraText="Lorem ipsum"></MainFeed>
                <MainFeed color="#598c5f"></MainFeed>
                <MainFeed color="#5b523a"></MainFeed>
            </div>
            <div style={border}>
                <p style={padding}>Lorem ipsum</p>
                <SideUserButton
                    color="coral"></SideUserButton>
                <SideUserButton
                color="#abed9c"></SideUserButton>
                <SideUserButton
                color="#9cd3ed"></SideUserButton>
                
            </div>
            <div style={leftText}>
                <p>Lorum ipsum dolor sit amet, consectetur adipiscing elit. Donec eu orci et nulla ultricies commodo ac vel leo. Suspendisse non ex veneatis, rhoncus nunc sed, pretium tortor. Ut ac massa et libero tincidunt convallis. Nam porttitor odio sit amet nulla hendrerit pharetra.
                </p>
            </div>
        </div>
        
    );
}

export default Wrapper;