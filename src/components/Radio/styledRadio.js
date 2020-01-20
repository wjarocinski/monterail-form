import styled from 'styled-components';

const RadioGroupContaniner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
`;
const RadioGroupLabel = styled.div`
    width: 15%;
    display: flex;
    align-items: center;
    opacity: 0.7;
    color: ${props => props.color || '#173F5F'};
`;

const RadioGroupError = styled.div`
    margin-left: 25px;
    padding: 6px;
    height: 20px;
    position: relative;
    font-size: 15px;
    display: flex;
    align-items: center;
    border: 1px solid red;
    border-radius: 3px;
    background-color: red;
    opacity: 0.5;
    color: white;
    ::after {
      content:"";
      border-color: transparent red transparent transparent;
      border-style:solid;
      border-width:10px;
      width:0;
      height:0;
      position: absolute;
      bottom: 5px;
      left: -18px
  }
`;

const RadioButton = styled.input`

`;

const RadioLabel = styled.p`
  font-size: 16px;
  color: black;
`;

const RadioContainer = styled.div`
  display: flex;
`;

export { RadioGroupContaniner, RadioGroupLabel, RadioGroupError, RadioButton, RadioLabel, RadioContainer };