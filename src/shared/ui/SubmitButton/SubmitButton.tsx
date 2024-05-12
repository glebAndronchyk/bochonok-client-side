import { Button } from "../Button/Button";

export const SubmitButton = ({ disabled }: { disabled: boolean }) => {
  return (
    <Button
      className="w-full mt-4"
      disabled={disabled}
      variants={["md", "dark"]}
      type="submit"
    >
      Submit
    </Button>
  );
};
