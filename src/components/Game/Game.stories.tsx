import { ComponentMeta, ComponentStory } from "@storybook/react";
import Game from "./Game";

export default {
    title: "Board/Game",
    component: Game,
    argTypes: {},
} as ComponentMeta<typeof Game>;

const Template: ComponentStory<typeof Game> = () => <Game />;

export const Primary = Template.bind({});
