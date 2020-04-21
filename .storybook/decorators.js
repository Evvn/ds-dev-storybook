import React from "react";
import Provider from "../src/Provider.js";
import configureStore from "../src/Store";

const { store } = configureStore();

export const withProvider = story => (
  <Provider store={store}>{story()}</Provider>
);
