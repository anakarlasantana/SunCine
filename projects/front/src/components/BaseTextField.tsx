import {
  InputLabel,
  Stack,
  styled,
  TextField,
  type TextFieldProps,
} from "@mui/material";
import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";
import theme from "../theme/theme";

export type CustomTextFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  inputLabel?: string;
  placeholder: string;
} & TextFieldProps;

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: theme.palette.neutralGray[100],
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.neutralGray[50],
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.neutralGray[200],
    "& fieldset": {
      borderColor: theme.palette.green[800],
    },
    "&:hover fieldset": {
      borderColor: theme.palette.neutralGray[200],
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.neutralGray[200],
    },
  },
});

export function BaseTextField<T extends FieldValues>({
  control,
  name,
  inputLabel,
  placeholder,
  ...props
}: CustomTextFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Stack>
          {inputLabel && (
            <InputLabel
              sx={{
                color: theme.palette.neutralGray[50],
                fontSize: "16px",
              }}
            >
              {inputLabel}
            </InputLabel>
          )}
          <CssTextField
            {...field}
            size="small"
            placeholder={placeholder}
            {...props}
          />
        </Stack>
      )}
    />
  );
}

