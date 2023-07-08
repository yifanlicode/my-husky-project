import React from "react";
import { Story, Meta } from "@storybook/react";
import { TableFooter } from "./Table";

export default {
  title: "Components/Table/TableFooter",
  component: TableFooter,
  argTypes: {
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: Story = (args) => <TableFooter {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "TableFooter",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "TableFooter",
  disabled: true,
};
