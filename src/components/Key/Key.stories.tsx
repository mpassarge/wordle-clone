import { ComponentStory, ComponentMeta } from "@storybook/react";
import Key from "./Key";

export default {
    title: "Keyboard/Key",
    component: Key,
    argTypes: {},
} as ComponentMeta<typeof Key>;

const Template: ComponentStory<typeof Key> = (args) => <Key {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    letter: "R",
};
