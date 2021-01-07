import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../tests/testUtils";
import Input from "../InputComponent/input";

const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store} />).dive().dive();
};

describe("render", () => {
  describe("word has not been gussed", () => {
    test("renders component without error", () => {});

    test("renders input box", () => {});

    test("renders submit button", () => {});
  });

  describe("word has been gussed", () => {
    test("renders component without error", () => {});

    test("does not renders input box", () => {});

    test("does not renders submit button", () => {});
  });
});

describe("updating of the screen", () => {});
