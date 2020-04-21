import React from "react";
import { storiesOf } from "@storybook/react";
import "../../src/App.scss";
import styled from "styled-components";

import InformationBox from "../dsmComponents/InformationBox/InformationBox";
import Banner from "../dsmComponents/Banners/Banner";
import Card from "../dsmComponents/Banners/Card";
import Container from "../dsmComponents/Banners/Container";
import Modal from "../dsmComponents/Banners/Modal";

const Components = styled.div`
  & > * {
    margin: 15px;
  }
`;

export const InformationAndBanners = () => {
  return storiesOf("Information Boxes & Banners", module)
    .add(
      "Information Boxes",
      () => (
        <Components>
          <InformationBox
            type={"warning"}
            title={"Warning Information Box Title"}
            body={"This is the body copy for the information box."}
          />
          <InformationBox
            type={"general"}
            title={"General Information Box Title"}
            body={"This is the body copy for the information box."}
          />
          <InformationBox
            type={"success"}
            title={"Success Information Box Title"}
            body={"This is the body copy for the information box."}
          />
          <InformationBox
            type={"alert"}
            title={"Alert Information Box Title"}
            body={"This is the body copy for the information box."}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    )
    .add(
      "Banners",
      () => (
        <Components>
          <Banner
            type={"warning"}
            bannerBody={"This is a system warning message banner."}
            bannerLinkText={"More information."}
            bannerLinkUrl={"/"}
          />
          <Banner
            type={"alert"}
            bannerBody={"This is a system warning message banner."}
            bannerLinkText={"More information."}
            bannerLinkUrl={"/"}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    )
    .add(
      "Cards",
      () => (
        <Components>
          <Card cardWidth={"300px"} cardHeight={"180px"} shadow={false} />
          <Card cardWidth={"300px"} cardHeight={"180px"} shadow={true} />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    )
    .add(
      "Containers",
      () => (
        <Components>
          <Container containerWidth={"620px"} containerHeight={"474px"} />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    )
    .add(
      "Modals",
      () => (
        <Components>
          <Modal />
        </Components>
      ),
      {
        "in-dsm": { id: "" }
      }
    );
};
