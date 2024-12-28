import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './CustomButtonStyle';

const CustomButton = ({ title, theme }) => {
    return (
        <TouchableOpacity style={styles[theme].background}>
            <Text style={styles[theme].text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;