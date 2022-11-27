import React from "react";

const Spinner = ({ setSize }) => {
  return (
     <span className="spinner" style={{width: setSize+"px", height: setSize+"px"}}></span>
  )
}

export default Spinner;