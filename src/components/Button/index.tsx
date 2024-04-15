import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullwidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
} & ButtonTypes;

export function Button({
  children,
  icon,
  size = 'medium',
  minimal = false,
  fullwidth = false,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper
      size={size}
      fullwidth={fullwidth}
      hasIcon={!!icon}
      minimal={minimal}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
}
