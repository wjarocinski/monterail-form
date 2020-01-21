import styled from 'styled-components';

const RadioButton = styled.input`
  width: 25px;
  height: 25px;
  position: relative;
  top: 12px;
  margin-right: 10px;
`;

// const RadioSpan = styled.span`
//   position: absolute;
//   top: 16px;
//   left: 0;
//   height: 25px;
//   width: 25px;
//   background-color: #eee;
//   border-radius: 50%;

//   :after {
//     content: "";
//     position: absolute;
//     display: none;
//   }
// `;

const RadioLabel = styled.p`
  font-size: 18px;
  color: black;
`;

const RadioContainer = styled.div`
  display: flex;
  margin-right: 20px;
  // position: relative;
`;

export { RadioButton, RadioLabel, RadioContainer };