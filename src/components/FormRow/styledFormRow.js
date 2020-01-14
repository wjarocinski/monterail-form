import styled from 'styled-components';

const RowContaniner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const RowTitle = styled.div`
    width: 15%;
    display: flex;
    align-items: center;
`;

const RowError = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
`;


const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`;

const Input = styled.input`
  width: 300px;
  height: 35px;
  border: ${props => props.border || '1px solid #ccc'};
  background-color: #fff;
`;

export { RowContaniner, RowTitle, RowError, Text, Input };