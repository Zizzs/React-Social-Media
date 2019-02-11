import React from "react";

function MainFeed(props) {
    
    let template = {
        display: 'grid',
        gridTemplateColumns: '1fr 6fr',
        borderColor: '#a5a5a5',
        borderWidth: 1,
        borderStyle: 'solid',
    }

    let image = {
        backgroundColor: props.color,
        height: 50,
        width: 50,
        margin: 10
    }

    let extraText = {
        textAlign: 'left',
    }
    return(
        <div style={template}>
            <div>
                <div style={image}>

                </div>
            </div>
            <div>
                <p>Lorum ipsum</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</p>
            </div>
            <div>

            </div>
            <div>
                <p style={extraText}>{props.extraText}</p>
            </div>
        </div>
        
    );
}

export default MainFeed;