import styled from "styled-components";
import { BtnBackgroundImageProp } from "../../models/BtnBackgroundImageProp";

export const Button = styled.button<BtnBackgroundImageProp>`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  border: none;
  outline: none;
  background-size: 1.5rem 1.5rem;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease;
  margin-right: 5px;
  background:  ${props => `url(${props.background}) transparent no-repeat center`};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: .7;
  }
`
