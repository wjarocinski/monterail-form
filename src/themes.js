import styled from 'styled-components';

// Forms, inputs, buttons

export const errorTheme = { 
  border: "1px solid red",
  color: "red"
}

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;


export const Button = styled.button`
  padding: 15px 30px;
  background-color: orange;
  color: #fff;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;