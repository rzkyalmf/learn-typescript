"use client";

import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const style = tv({
  base: "",
});

type TInput = VariantProps<typeof style>;
interface Props extends TInput, React.ComponentPropsWithRef<"input"> {}

export const Input = (props: Props) => {
  return (
    <input
      className={twMerge(style({ ...props }), props.className)}
      {...props}
    />
  );
};
