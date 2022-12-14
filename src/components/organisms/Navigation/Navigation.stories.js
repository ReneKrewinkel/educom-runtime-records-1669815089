import React from "react";
import Navigation from "./Navigation";

const NavigationMeta = {
  title: "organisms/Navigation",
  component: Navigation,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "Navigation-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Navigation {...args} />;

export const DefaultNavigation = Template.bind({});
DefaultNavigation.args = {
  testID: testID,
};

export default NavigationMeta;
