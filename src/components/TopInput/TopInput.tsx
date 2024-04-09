import React from 'react';
import './styled.css';
import {TopButtonProps} from './TopButton.types';

export const TopButton: React.FC<TopButtonProps> = ({ onClick }) => {
    return (
        <button className="top-button" onClick={onClick}>
            Run Pseudo Reddit
        </button>
    );
};
