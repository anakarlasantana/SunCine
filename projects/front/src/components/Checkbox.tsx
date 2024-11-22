import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { theme } from "../theme/theme";

export type CheckboxProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
};

export function Checkbox<T extends FieldValues>({
  control,
  name,
}: CheckboxProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RadioGroup
          {...field}
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="check"
        >
          <FormControlLabel
            value="female"
            control={
              <Radio
                sx={{
                  color: theme.palette.neutral_gray[50],
                  "&.Mui-checked": {
                    color: theme.palette.green[300],
                  },
                }}
              />
            }
            label="Esqueci minha senha"
            sx={{
              color: theme.palette.neutral_gray[50],
              fontSize: "16px",
              lineHeight: "24px",
            }}
          />
          <FormControlLabel
            value="male"
            control={
              <Radio
                sx={{
                  color: theme.palette.neutral_gray[50],
                  "&.Mui-checked": {
                    color: theme.palette.green[300],
                  },
                }}
              />
            }
            label="Redefinir senha"
            sx={{
              color: theme.palette.neutral_gray[50],
              fontSize: "16px",
              lineHeight: "24px",
            }}
          />
        </RadioGroup>
      )}
    />
  );
}
