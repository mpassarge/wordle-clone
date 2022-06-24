import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GameTileRow from "./GameTileRow";

export default {
    title: "Board/GameTileRow",
    component: GameTileRow,
    argTypes: {},
} as ComponentMeta<typeof GameTileRow>;
// export default {
//     title: "Board/GameTileRow",
//     component: GameTileRow,
//     argTypes: {},
// } as ComponentMeta<typeof GameTileRow>;

const Template: ComponentStory<typeof GameTileRow> = (args) => <GameTileRow />;

export const Primary = Template.bind({});

// Primary.args = {};
