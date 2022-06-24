import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Keyboard from "./Keyboard";

export default {
    title: "Keyboard/Keyboard",
    component: Keyboard,
    argTypes: {},
} as ComponentMeta<typeof Keyboard>;

const Template: ComponentStory<typeof Keyboard> = (args) => <Keyboard />;

export const Primary = Template.bind({});
