import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className="rounded-lg bg-blueDark p-4 flex gap-1 cursor-pointer hover:bg-blue text-gray-100 flex items-center"
    >
      <div>{props.iconLeft}</div>
      <div>{props.children}</div>
      <div>{props.iconRight}</div>
    </button>
  );
};
