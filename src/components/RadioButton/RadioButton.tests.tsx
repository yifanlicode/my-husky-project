// radiobutton.test.tsx
import { render } from "@testing-library/react";
import RadioButton from "./RadioButton";

describe("RadioButton", () => {
  it("should be visible", () => {
    const { getByLabelText } = render(
      <RadioButton
        id="radio1"
        label="Option 1"
        checked={false}
        onChange={() => {}}
      />
    );
    const radioButton = getByLabelText("Option 1");
    expect(radioButton).toBeInTheDocument();
  });

  it("should change background color when disabled", () => {
    const { getByLabelText } = render(
      <RadioButton
        id="radio3"
        label="Option 3"
        checked={false}
        onChange={() => {}}
        disabled
      />
    );
    const radioButton = getByLabelText("Option 3");
    expect(radioButton).toHaveStyle("background-color: #f2f2f2");
  });
});
