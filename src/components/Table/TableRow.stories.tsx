import React from "react";
import { Story, Meta } from "@storybook/react";
import { TableRow } from "./Table";

export default {
  title: "Components/Table/TableRow",
  component: TableRow,
  argTypes: {
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: Story = (args) => <TableRow {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "TableRow",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "TableRow",
  disabled: true,
};
