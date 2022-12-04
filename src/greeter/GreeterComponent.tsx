import React from 'react';
import PropTypes from "prop-types"

Greeter.propTypes = {
    name: PropTypes.string.isRequired,
   };

function Greeter(props:any) {
    return (
        <h1>
          Hello, {props.name}
        </h1>
      );
  }

  export default Greeter;
