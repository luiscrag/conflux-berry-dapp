import React from "react";
import "../styles/components/Overlay.scss";

const Overlay = ({ show }) => (
  <div id="Overlay" className={show && "Active"}></div>
);

Overlay.defaultProps = {
  show: false,
};

export default Overlay;
