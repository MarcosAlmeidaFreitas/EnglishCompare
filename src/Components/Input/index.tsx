import { ComponentProps } from "react";

interface propsInput extends ComponentProps<'input'>{}

export function Input(props : propsInput) {
  return <input className="bg-gray-500 placeholder:text-gray-300 " {...props}></input>
}
