import { ComponentMeta, ComponentStory } from "@storybook/react";
import GameBoard from "./GameBoard";

export default {
    title: "Board/GameBoard",
    component: GameBoard,
    argTypes: {},
} as ComponentMeta<typeof GameBoard>;

const Template: ComponentStory<typeof GameBoard> = () => <GameBoard />;

export const Primary = Template.bind({});
