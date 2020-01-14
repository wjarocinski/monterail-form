import styled from 'styled-components';

const RowContaniner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
`;
const RowTitle = styled.div`
    width: 15%;
    display: flex;
    align-items: center;
    color: #173F5F;
`;

const RowError = styled.div`
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

const Input = styled.input`
  width: 60%;
  height: 30px;
  border: ${props => props.border || '1px solid #ccc'};
  background-color: #fff;
  padding: 5px;
`;

export { RowContaniner, RowTitle, RowError, Input };