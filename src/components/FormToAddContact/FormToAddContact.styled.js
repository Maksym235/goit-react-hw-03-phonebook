import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-weight: 400;
  font-size: 18px;
`;

export const Input = styled.input`
  padding-top: 10px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid black;

  &:focus {
    background-color: transparent;
    outline: none;
  }
`;

export const Button = styled.button`
  widht: 150px;
  height: 30px;
  border-radius: 10px;
  border: none;
  background-color: #7b8189;
  color: #ffffff;

  transition: background-color 0.5s ease-out, color 0.5s ease-out;

  &:hover {
    background-color: #bfa8ee;
    color: #000000;
  }
`;
