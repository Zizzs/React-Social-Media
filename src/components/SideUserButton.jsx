import React from 'react';
import PropTypes from 'prop-types';

function SideUserButton(props) {
  let wrapper = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    paddingLeft: 15,
  };

  let imageRow = {
    gridRowStart: 'span 2',
  };

  let image = {
    backgroundColor: props.color,
    height: 60,
    width: 60
  };

  let button = {
    height: 25,
    width: 85,
    backgroundColor: 'blue',
    color: 'white',
    marginBottom: 15,
  };

  let text = {
    fontWeight: 'bold'
  };


  return(
    <div>
      <div style={wrapper}>
        <div style={imageRow}>
          <p style={image}></p>
        </div>
        <div>
          <p style={text}>Donec eu orci et</p>
        </div>
        <div>
          <button style={button}>Button</button>
        </div>
      </div>
    </div>
        
  );
}

SideUserButton.propTypes = {
  color: PropTypes.color,
};

export default SideUserButton;