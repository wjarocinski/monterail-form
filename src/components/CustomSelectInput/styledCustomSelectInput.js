import styled from 'styled-components';

const SelectContaniner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
`;
const SelectLabel = styled.div`
    width: 15%;
    display: flex;
    align-items: center;
    opacity: 0.7;
    color: ${props => props.color || '#173F5F'};
`;

const SelectError = styled.div`
    margin-left: 25px;
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

const Select = styled.select`
  width: 62%;
  opacity: 0.7;
  height: 42px;
  border-radius: 3px;
  border: ${props => props.border || '1px solid #ccc'};
  background-color: #fff;
  padding: 5px 8px;
  font-size: 16px;
`;

export { SelectContaniner, SelectLabel, SelectError, Select };