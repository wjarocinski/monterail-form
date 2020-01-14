import React from 'react';
import { TileContainer, TileHeader } from './styledFormTile';

const FormTile = (props) => {
    const { tileName, children } = props;

    return (
        <TileContainer>
            <TileHeader><p>{tileName}</p></TileHeader>
            {children}
        </TileContainer>
    );
}
export default FormTile;