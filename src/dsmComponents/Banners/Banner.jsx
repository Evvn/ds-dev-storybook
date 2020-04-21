import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";

import { ReactComponent as CloseClear } from "../Icons/close-clear-12px.svg";
import { ReactComponent as CloseClear2 } from "../Icons/close-clear-12px.svg";
import { ReactComponent as WarningIcon } from "../Icons/warning-1-20px.svg";
// import { ReactComponent as InfoIcon } from "../Icons/information-20px.svg";
// import { ReactComponent as SuccessIcon } from "../Icons/check-20px.svg";
import { ReactComponent as AlertIcon } from "../Icons/alert-20px.svg";

const BannerContainer = styled.div`
  /* display: inline-block; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 3px;
  min-width: 600px;
  min-height: 48px;
  padding: 12px 16px;
`;

const BannerBody = styled.span.attrs({ className: "font-body-1" })`
  display: block;
`;

const BannerLink = styled.a.attrs({ className: "font-body-2" })`
  margin-left: 4px;
  display: block;
  font-family: "Muli-Bold";
  text-decoration: none;
`;

const CloseIconCont = styled.div`
  position: absolute;
  cursor: pointer;
  top: 16px;
  right: 18px;
`;

const InformationIcon = styled.div`
  position: relative;
  display: inline-block;
  padding-right: 8px;
  top: 2px;
  /* left: 14px; */
`;

class Banner extends React.Component {
  render() {
    const {
      theme,
      type,
      bannerBody,
      bannerLinkText,
      bannerLinkUrl
    } = this.props;
    let boxStyle = {};
    let fontStyle = {};
    let iconSrc = "";
    let closeIcon = {};

    type === "warning" &&
      ((boxStyle = {
        backgroundColor: theme.colorTurmericAttentionWarning,
        color: "#000000"
      }),
      (closeIcon = {
        className: "fillPeppercorn",
        id: "closeIconWarningBanner"
      })) &&
      (iconSrc = <WarningIcon className="fillPeppercorn" />);
    // type === "general" &&
    //   (boxStyle["backgroundColor"] = theme.colorJuniperInformation) &&
    //   (iconSrc = <InfoIcon className="fillPeppercorn" />);
    // type === "success" &&
    //   (boxStyle["backgroundColor"] = theme.colorMintSuccess) &&
    //   (iconSrc = <SuccessIcon className="fillPeppercorn" />);
    type === "alert" &&
      ((boxStyle = {
        backgroundColor: theme.colorCayenneAlertTermination
      }),
      (fontStyle = {
        color: "#ffffff"
      }),
      (closeIcon = { className: "fillWhite", id: "closeIconAlertBanner" })) &&
      (iconSrc = <AlertIcon className="fillWhite" />);

    return (
      <BannerContainer style={boxStyle}>
        <InformationIcon>{iconSrc}</InformationIcon>
        <CloseIconCont>
          {type === "warning" && (
            <CloseClear className={closeIcon.className} id={closeIcon.id} />
          )}
          {type === "alert" && (
            <CloseClear2 className={closeIcon.className} id={closeIcon.id} />
          )}
        </CloseIconCont>
        <BannerBody style={fontStyle}>{bannerBody}</BannerBody>
        <BannerLink style={fontStyle} href={bannerLinkUrl}>
          {bannerLinkText}
        </BannerLink>
      </BannerContainer>
    );
  }
}

export default withTheme(Banner);
