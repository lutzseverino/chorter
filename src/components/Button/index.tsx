import styled, { css } from "styled-components";

interface ButtonProps {
  disabled?: boolean;
  variant?: string;
  size?: string;
}

const getVariantStyle = (variant = "primary") =>
  ({
    stroke: css`
      background-color: var(--light);
      box-shadow: inset 0 0 0 2px var(--primary);
      color: var(--primary);
    `,
    secondary: css`
      background-color: var(--light-shade);
      color: var(--dark);
    `,
  }[variant]);

const getSizeStyle = (size = "medium") =>
  ({
    small: css`
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
    `,
    medium: css`
      font-size: 1rem;
      padding: 0.5rem 1rem;
    `,
    large: css`
      font-size: 1.25rem;
      padding: 0.75rem 1.5rem;
    `,
  }[size]);

const Button = styled.a<ButtonProps>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  height: fit-content;

  border: none;
  border-radius: 4px;

  background-color: var(--primary);

  color: var(--light);
  font-weight: bold;
  font-family: inherit;

  ${({ variant }) => getVariantStyle(variant)}
  ${({ size }) => getSizeStyle(size)}

  ${({ disabled }) => {
    if (!disabled) {
      return css`
        &:hover:not(:disabled) {
          filter: brightness(0.95);
        }

        &:active:not(:disabled) {
          filter: brightness(0.9);
        }
      `;
    }
  }}
`;

export default Button;
