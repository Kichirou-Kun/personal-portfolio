import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import IconButton from "@ui/IconButton";
import TextField from "@ui/TextField";
import React from "react";

type PasswordFieldType = "password" | "text";

const PasswordTextField = React.forwardRef(
  ({ placeholder, ...others }: any, ref) => {
    const [passwordFieldType, setPasswordFieldType] =
      React.useState<PasswordFieldType>("password");

    /**
     * handle change password field type
     *
     * @return void
     */
    const handleChangePasswordFieldType = (): void => {
      setPasswordFieldType((value) =>
        value === "password" ? "text" : "password"
      );
    };

    return (
      <TextField
        {...others}
        fullWidth
        ref={ref}
        placeholder={"Password"}
        type={passwordFieldType}
        InputProps={{
          startAdornment: <LockClosedIcon className="h-6 w-6 text-gray-400" />,
          endAdornment: (
            <IconButton onClick={handleChangePasswordFieldType} type="button">
              {passwordFieldType === "text" ? (
                <EyeSlashIcon className="h-6 w-6 text-gray-400" />
              ) : (
                <EyeIcon className="h-6 w-6 text-gray-400" />
              )}
            </IconButton>
          ),
        }}
      />
    );
  }
);

PasswordTextField.displayName = "PasswordTextField";

export default PasswordTextField;
