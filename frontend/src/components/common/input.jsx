import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export function Input({ input, onChange, states }) {
  const [showPassword, setShowPassword] = useState(false);

  const { errors, setErrors, showAddIcon, setShowAddIcon } = states;
  const handleClickShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <TextField
        sx={{ marginBottom: "20px" }}
        type={showPassword ? "text" : input.type}
        variant="standard"
        name={input.name}
        placeholder={input.placeholder}
        value={input.value}
        onChange={onChange}
        onFocus={() => setShowAddIcon(true)}
        onBlur={() => {
          if (!input.value) {
            setShowAddIcon(false);
            setErrors({});
          }
        }}
        helperText={errors[input.name]}
        InputProps={{
          endAdornment: (
            <React.Fragment>
              {input.type === "password" && (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              )}
            </React.Fragment>
          ),
        }}
        multiline={input.multiline}
      />
    </React.Fragment>
  );
}

export default Input;
