import React from "react";
import spinner from "../../resources/img/spinner.gif";
import globalStyles from '../../styles/globalStyles'

const Spinner = () => {
  return (
    <div style={globalStyles.spinner}>
      <img src={spinner} alt=""/>
    </div>
  );
};

export default Spinner;
