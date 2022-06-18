import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Square from "./Square";

export default {
    title: "Board/Square",
    component: Square,
    argTypes: {},
} as ComponentMeta<typeof Square>;

const Template: ComponentStory<typeof Square> = (args) => <Square />;

export const Primary = Template.bind({});
