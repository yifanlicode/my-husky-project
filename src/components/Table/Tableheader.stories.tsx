import React from "react";
import { Story, Meta } from "@storybook/react";
import TableHeader from "./Table";

export default {
  title: "Components/Table/TableHeader",
  component: TableHeader,
  argTypes: {
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: Story = (args) => <TableHeader {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "TableHeader",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "TableHeader",
  disabled: true,
};
