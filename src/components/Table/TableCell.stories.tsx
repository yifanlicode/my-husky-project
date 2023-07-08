import React from "react";
import { Story, Meta } from "@storybook/react";
import { TableCell } from "./Table";

export default {
  title: "Components/Table/TableCell",
  component: TableCell,
  argTypes: {
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: Story = (args) => <TableCell {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "TableCell",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "TableCell",
  disabled: true,
};
