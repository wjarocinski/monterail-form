import styled from 'styled-components';

// Forms, inputs, buttons

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: ${props => props.border || '1px solid #ccc'};
  background-color: #fff;
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

// Text

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;

export const Title2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: #777;
    font-family: "Raleway", sans-serif;
    font-size: 0.8em;
    margin: 0.5em 0;
    position: relative;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

`;