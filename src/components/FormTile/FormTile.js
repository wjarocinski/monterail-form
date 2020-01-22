import React from 'react';
import PropTypes from "prop-types";
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

FormTile.propTypes = {
    tileName: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default FormTile;