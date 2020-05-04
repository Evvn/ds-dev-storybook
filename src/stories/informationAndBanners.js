import React from "react";
import { storiesOf } from "@storybook/react";
import "../../src/App.scss";
import styled from "styled-components";

import InformationBox from "vault-ds/dist/InformationBox/InformationBox";
import Banner from "vault-ds/dist/Banners/Banner";
import Card from "vault-ds/dist/Banners/Card";
import Container from "vault-ds/dist/Banners/Container";
import Modal from "vault-ds/dist/Banners/Modal";

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
            boxType={"warning"}
            title={"Warning Information Box Title"}
            body={"This is the body copy for the information box."}
          />
          <InformationBox
            boxType={"general"}
            title={"General Information Box Title"}
            body={"This is the body copy for the information box."}
          />
          <InformationBox
            boxType={"success"}
            title={"Success Information Box Title"}
            body={"This is the body copy for the information box."}
          />
          <InformationBox
            boxType={"alert"}
            title={"Alert Information Box Title"}
            body={"This is the body copy for the information box."}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "" },
      }
    )
    .add(
      "Banners",
      () => (
        <Components>
          <Banner
            bannerType={"warning"}
            bannerBody={"This is a system warning message banner."}
            bannerLinkText={"More information."}
            bannerLinkUrl={"/"}
          />
          <Banner
            bannerType={"alert"}
            bannerBody={"This is a system warning message banner."}
            bannerLinkText={"More information."}
            bannerLinkUrl={"/"}
          />
        </Components>
      ),
      {
        "in-dsm": { id: "" },
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
        "in-dsm": { id: "" },
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
        "in-dsm": { id: "" },
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
        "in-dsm": { id: "" },
      }
    );
};
