import styled from 'styled-components';

const TextAreaContaniner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 10px;
`;
const TextAreaLabel = styled.div`
    width: 16%;
    display: flex;
    align-items: center;
    opacity: 0.7;
    color: ${props => props.color || '#173F5F'};
`;

const RequiredMark = styled.p`
  color: red;
  font-size: 16px;
  padding-left: 2px;
`;

const TextAreaError = styled.div`
    margin-left: 40px;
    padding: 8px;
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
      bottom: 7px;
      left: -18px
  }
`;

const sTextArea = styled.textarea`
  width: 100%;
  opacity: 0.7;
  font-size: 16px;
  border-radius: 3px;
  border: ${props => props.border || '1px solid #ccc'};
  background-color: #fff;
  padding: 5px 8px;
`;

const CharInfoLabel = styled.div`
  position: absolute;
  font-size: 12px;
  opacity: 0.7;
  top: 168px;
  left: 5px;
  color: ${props => props.color || "black"};
`;
const TextAreaAndInfoContainer = styled.div`
  position: relative;
  width: 60%;
`;

export { TextAreaContaniner, TextAreaLabel, TextAreaError, sTextArea, CharInfoLabel, TextAreaAndInfoContainer, RequiredMark };