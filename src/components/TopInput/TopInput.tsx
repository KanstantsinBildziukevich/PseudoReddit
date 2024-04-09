import React from 'react';
import {TopInputProps} from './TopInput.types';
import styles from './TopInput.module.css'

export const TopInput: React.FC<TopInputProps> = ({ value, onChange }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <input
            className={styles.topInput}
            type="search"
            value={value}
            onChange={handleInputChange}
        />
    );
};
