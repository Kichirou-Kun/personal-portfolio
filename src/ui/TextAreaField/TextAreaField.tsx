import clsx from "clsx";
import React from "react";

type InputProps = Partial<{
  startAdornment: React.ReactNode;
  endAdornment: React.ReactNode;
}>;

type InputSize = "small" | "normal" | string;

type InputVariant = "outlined" | "filled" | "standard";

interface Props extends React.ComponentProps<"textarea"> {
  fullWidth?: boolean;
  InputProps?: InputProps;
  error?: boolean;
  helperText?: React.ReactNode;
  multiline?: boolean;
  minRows?: number | string;
  maxRows?: number | string;
  label?: string;
  inputSize?: InputSize;
  variant?: InputVariant;
}

const TextField = React.forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      children,
      className,
      fullWidth,
      error,
      helperText,
      InputProps,
      maxRows,
      minRows,
      multiline,
      disabled,
      inputSize = "medium",
      variant = "outlined",
      ...others
    },
    ref
  ) => {
    return (
      <div>
        <div className="relative">
          {InputProps?.startAdornment && (
            <span className="absolute top-1/2 left-3 right-auto -translate-y-1/2 transform select-none">
              {InputProps.startAdornment}
            </span>
          )}

          {/* {React.createElement(multiline ? "textarea" : "input", {
            type: type
            ref: ref,
            disabled: disabled,
            className: clsx(
              "block w-full border bg-inherit border-gray-500 rounded-md placeholder-slate-400 dark:placeholder-slate-300  dark:text-white disabled:text-gray-500 dark:disabled:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:ring-0 hover:ring-1 dark:hover:ring-white hover:ring-black invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",
              {
                ["px-[14px] py-[8.5px]"]: inputSize === "small",
                ["px-[14px] py-[16.5px]"]: inputSize === "medium",
              },
              fullWidth ? "max-w-full" : "max-w-sm",
              error && "!border-red-600 placeholder-red-600",
              InputProps?.startAdornment && "!pl-10",
              InputProps?.endAdornment && "!pr-10",
              className
            )}
          })} */}

          <textarea
            {...others}
            ref={ref}
            disabled={disabled}
            className={clsx(
              "block w-full rounded-md border border-gray-500 bg-inherit text-SECONDARY_COLOR placeholder-slate-400  invalid:border-pink-500 invalid:text-pink-600 hover:ring-1 hover:ring-black focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:cursor-not-allowed disabled:text-gray-500 disabled:shadow-none disabled:hover:ring-0 dark:text-white dark:placeholder-slate-300 dark:hover:ring-white dark:disabled:text-gray-400",
              {
                ["px-4 py-[8.5px]"]: inputSize === "small",
                ["px-4 py-[16.5px]"]: inputSize === "medium",
              },
              fullWidth ? "max-w-full" : "max-w-sm",
              error && "!border-red-600 placeholder-red-600",
              InputProps?.startAdornment && "!pl-10",
              InputProps?.endAdornment && "!pr-10",
              className
            )}
          />

          {InputProps?.endAdornment && (
            <span className="absolute top-1/2 left-auto right-2 -translate-y-1/2 transform select-none">
              {InputProps.endAdornment}
            </span>
          )}
        </div>

        {helperText && (
          <span
            className={clsx(
              "mt-[3px]  px-[14px] text-sm",
              error && "text-red-600"
            )}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
