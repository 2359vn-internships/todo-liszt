import { Text, TextVariants, TypoTags } from "../Typography";

import { InputLabel as StyledInputLabel } from "./components";

interface InputLabelProps {
  id?: string;
  label?: string;
}

const InputLabel = ({ id, label }: InputLabelProps) => {
  return (
    <StyledInputLabel htmlFor={id}>
      <Text as={TypoTags.Span} variant={TextVariants.Hairline2}>
        {label}
      </Text>
    </StyledInputLabel>
  );
};

export default InputLabel;
