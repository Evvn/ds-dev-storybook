import React from "react";
import { ICONS } from "../constants/icons";

class Icon extends React.Component {
  render() {
    const { icon, size, color } = this.props;
    const styles = {
      path: {
        fill: color ? color : "#555555"
      }
    };

    return (
      <svg width={`${size}px`} height={`${size}px`}>
        <path style={styles.path} d={ICONS[`${icon}-${size}px`]} />
      </svg>
    );
  }
}

export default Icon;
