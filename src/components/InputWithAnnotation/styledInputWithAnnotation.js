import styled from 'styled-components';

const InputContaniner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
`;
const InputLabel = styled.div`
    width: 16%;
    display: flex;
    align-items: center;
    opacity: 0.7;
    color: ${props => props.color || '#173F5F'};
`;

const InputError = styled.div`
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

const InputShort = styled.input`
  width: 8%;
  opacity: 0.7;
  height: 30px;
  border-radius: 3px;
  border: 1px solid ${props => props.border || '#ccc'};
  background-color: #fff;
  padding: 5px 8px;
  font-size: 16px;
`;
const Annotation = styled.p`
  font-size: 18px;
  padding: 10px;
`;

export { InputContaniner, InputLabel, InputError, InputShort, Annotation };