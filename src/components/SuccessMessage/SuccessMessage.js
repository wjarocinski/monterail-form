import React from 'react';
import { SuccessMessageContainer, SuccessMessageTitle, SuccessMessageSubtitle } from './styledSuccessMessage';

const SuccessMessage = () => {
    return (
        <SuccessMessageContainer>
            <SuccessMessageTitle>
                Success
            </SuccessMessageTitle>
            <SuccessMessageSubtitle>
                Event has beed created
            </SuccessMessageSubtitle>
        </SuccessMessageContainer>
    );
}
export default SuccessMessage;