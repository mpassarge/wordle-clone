import { ComponentStory, ComponentMeta } from "@storybook/react";

import GameTile from "./GameTile";
import { PIECE_STATE } from "../../utils/Utils";

export default {
    title: "Board/GameTile",
    component: GameTile,
    argTypes: {
        state: { control: "select", options: Object.keys(PIECE_STATE) },
    },
} as ComponentMeta<typeof GameTile>;

const Template: ComponentStory<typeof GameTile> = (args) => (
    <GameTile {...args} />
);

export const CorrectPosition = Template.bind({});

Template.args = {
    letter: "R",
    state: PIECE_STATE.CORRECT_POSITION,
};
