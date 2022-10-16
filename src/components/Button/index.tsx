import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

import { StyledButton } from './styles';

export type ButtonProps = MuiButtonProps;

export const Button: React.FC<ButtonProps> = ({
  children,
  ...rest
}: ButtonProps) => (
  <StyledButton disableElevation {...rest}>
    {children}
  </StyledButton>
);

export default Button;
