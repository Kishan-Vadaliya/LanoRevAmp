import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "../Button/Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
