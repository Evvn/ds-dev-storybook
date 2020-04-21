import React from "react";
import { ICONS } from "../constants/icons";
import Icon from "../components/Icon";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Helvetica", sans-serif;
`;

const IconCont = styled.div`
  width: 85px;
  height: 85px;
  margin: 0 15px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

class Icons extends React.Component {
  // randomColor() {
  //   let letters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }

  render() {
    let icons = {};
    let icons12 = [];
    let icons16 = [];
    let icons20 = [];
    let icons24 = [];
    Object.keys(ICONS).forEach(icon => {
      if (icon.indexOf("12px") !== -1) {
        icons12.push(icon);
      } else if (icon.indexOf("16px") !== -1) {
        icons16.push(icon);
      } else if (icon.indexOf("20px") !== -1) {
        icons20.push(icon);
      } else if (icon.indexOf("24px") !== -1) {
        icons24.push(icon);
      }
    });
    icons = {
      icons12,
      icons16,
      icons20,
      icons24
    };

    return (
      <Container>
        <h1>Icons</h1>
        <h2>24px</h2>
        {icons.icons24.map(icon => (
          <IconCont>
            <Icon icon={icon.replace("-24px", "")} size="24" color="#555555" />
            <p>{icon.replace("-24px", "")}</p>
          </IconCont>
        ))}
        <h2>20px</h2>
        {icons.icons20.map(icon => (
          <IconCont>
            <Icon icon={icon.replace("-20px", "")} size="20" color="#555555" />
            <p>{icon.replace("-20px", "")}</p>
          </IconCont>
        ))}
        <h2>16px</h2>
        {icons.icons16.map(icon => (
          <IconCont>
            <Icon icon={icon.replace("-16px", "")} size="16" color="#555555" />
            <p>{icon.replace("-16px", "")}</p>
          </IconCont>
        ))}
        <h2>12px</h2>
        {icons.icons12.map(icon => (
          <IconCont>
            <Icon icon={icon.replace("-12px", "")} size="12" color="#555555" />
            <p>{icon.replace("-12px", "")}</p>
          </IconCont>
        ))}
      </Container>
    );
  }
}

export default Icons;
