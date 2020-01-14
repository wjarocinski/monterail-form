import styled from 'styled-components';

const TileContainer = styled.div`
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 3px 2px rgba(161,161,161,1);
  background-color: #fff;
`;

const TileHeader = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid grey;
  margin: 10px;
  p {
      font-size: 24px;
      margin: 10px 0;
      color: #20639B;
  }

`;


export { TileContainer, TileHeader };