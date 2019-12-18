import React, { Fragment } from "react";
import spinner from "../../resources/img/spinner.gif";
import globalStyles from "../../styles/globalStyles";
import Nav from "../layout/Nav";

const Spinner = () => {
  return (
    <Fragment>
      <Nav />
      <div className="main-container" style={globalStyles.spinner}>
        <img src={spinner} alt="" />
      </div>
    </Fragment>
  );
};

export default Spinner;
