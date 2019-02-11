import React from "react";

function WhatsHappening(props) {
    
    let background = {
        backgroundColor: '#a4c3f4',
        height: 80,
        display: 'grid',
        gridTemplateColumns: '1fr 5fr',
    }

    let image = {
        height: 35,
        width: 35,
        backgroundColor: '#7c5009',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    }

    let inputDiv = {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        
    }
    let input = {
        width: 400,
        height: 50,
    }
    return(
        <div>
            <div style={background}>
                <div style={image}>
                    
                </div>
                <div style={inputDiv}>
                    <input style={input} type="text" placeholder="What's happening?"></input>
                </div>
            </div>
        </div>
        
    );
}

export default WhatsHappening;