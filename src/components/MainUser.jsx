import React from "react";

function MainUser(props) {
    
    let topBackground = {
        backgroundColor: '#2062cc',
        height: 100,
    }

    let name = {
        textAlign: 'right',
        fontWeight: 'bold',
        paddingRight: 10
    }

    let links = {
        textAlign: 'center'
    }

    let image = {
        position: 'relative',
        height: 75,
        width: 75,
        bottom: 140,
        left: 15,
        borderRadius: 20,
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: '#2062cc',
    }

    return(
        <div>
            <div style={topBackground}>
                
            </div>
            <div>
                <p style={name}>Kellie A. Corrigan</p>
            </div>
            <div>
                <p style={links}>Tweets Following Followers</p>
            </div>
            <div style={image}>
            
            </div>
        </div>
    );
}

export default MainUser;