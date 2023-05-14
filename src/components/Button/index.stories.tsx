import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  // 💡 NOTE: Our story component will show in a sidebar section called 'COMPONENTS' if we name title like this.
  title: "components/Button",
  component: Button,
  /* 💡❗❗❗ IMP NOTE: 
  If we had named our onClick-handler "onClick" instead of "handleClick", storybook would have automatically recognized it and
  we would be able to see click event occuring in our "Actions" tab.
  If we did not do so, we have to remind storybook that "handleClick" is a click action.
  */
  argTypes: { handleClick: { action: "clicked" } },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* 💡 NOTE: The below commented part works, but using "args" is the appropriate way to create stories. */
/* 💡 NOTE: If we don't use args, we might not be able to use the "controls" section given by storybook. */
// export const Primary: Story = {
//   // Rename story. If we don't do this, the story's name will be of the exported component name i.e. "Primary".F
//   name: "Primary Button",
//   render: () => <Button variant="primary" name="Button" />,
// };

// export const Secondary: Story = {
//   render: () => <Button variant="secondary" name="Button" />,
// };

/* 💡 NOTE: 
Only after we explicitly an "onClick" handler as props, we can see actions happening in the "Actions" tab in storybook when we click
on our Button Component. 
*/
export const Primary: Story = {
  args: {
    variant: "primary",
    name: "Button",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
};

export const Custom: Story = {
  args: {
    ...Primary.args,
    bgColor: "green",
  },
};
