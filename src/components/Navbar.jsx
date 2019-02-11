import React from "react";


function Navbar(){
    let gridStyles = {
        display: 'grid',
        gridTemplateColumns: '2fr 3fr 2fr 9fr 2fr 1fr'
    }
    let tabs = {
        borderWidth: 1,
        borderColor: 'gray',
        borderStyle: 'solid',
        textAlign: 'center',
        height: 30,
        paddingTop: 15,
    }

    let search = {
        marginTop: 25,
        marginRight: 25,
        paddingLeft: 15,
        borderColor: '#96beff',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 20,
        height: 35,
        width: 200
    }

    let tweet = {
        marginTop: 25,
        padding: 5,
        borderColor: '#96beff',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 20,
        width: 80,
        height: 25,
        textAlign: 'center',
    }
    return(
        <div style={gridStyles}>
            <div>
                <p style={tabs}>Home</p>
            </div>
            <div>
                <p style={tabs}>Notifications</p>
            </div>
            <div>
                <p style={tabs}>Messages</p>
            </div>
            <div>

            </div>
            <div>
                <input style={search} type="text" placeholder="Search"></input>
            </div>
            <div>
                <p style={tweet}>Tweet</p>
            </div>
        </div>
    )
}

export default Navbar;