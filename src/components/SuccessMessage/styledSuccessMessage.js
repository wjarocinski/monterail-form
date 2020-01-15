import styled from 'styled-components';

const SuccessMessageContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    padding: 15px 35px;
    margin-top: 50px;
    background-color: #ADE4CA;
    opacity: 0.6;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 0px 3px 2px rgba(180,180,180,1);
`;

const SuccessMessageTitle = styled.p`
    font-size: 32px;
    margin: 0;
    color: #2E8B56;
`;

const SuccessMessageSubtitle = styled.p`
    font-size: 16px;
    color: black;
`;


export { SuccessMessageContainer, SuccessMessageTitle, SuccessMessageSubtitle };