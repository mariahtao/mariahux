import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ButtonStyles = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  height: 2.5rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  border: 2px solid transparent;
  transition: all 200ms ease-in-out;
  display: inline-flex;
  align-items: center;
`;

const PrimaryButtonStyles = styled(ButtonStyles)`
  background: aqua-400;
  box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.1), 0px 2px 2px rgba(255, 255, 255, 0.04), 0px 4px 4px rgba(255, 255, 255, 0.04), 0px 8px 8px rgba(255, 255, 255, 0.04);
  color: grey-100;
  &:focus {
    background: aqua-400;
  }
  &:hover {
    background: aqua-200;
  }
  &:active {
    background: aqua-400
  }
`;

const SecondaryButtonStyles = styled(ButtonStyles)`
  background: grey-400;
  box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.1), 0px 2px 2px rgba(255, 255, 255, 0.04), 0px 4px 4px rgba(255, 255, 255, 0.04), 0px 8px 8px rgba(255, 255, 255, 0.04);
  border-color: #grey-700;
  color: white;
  &:focus {
    border-color: grey-400;
  }
  &:hover {
    border-color: #483de5;
    background: grey-100;
  }
  &:active {
    background: grey-400;
    color: #483de5;
    border-color: white;
  }
`;

const Button = ({ children, href, type }) =>
  type === 'primary' ? (
    <PrimaryButtonStyles to={`${href}`}>{children}</PrimaryButtonStyles>
  ) : (
    <SecondaryButtonStyles to={`${href}`}>{children}</SecondaryButtonStyles>
  );

export default Button;