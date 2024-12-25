import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { color } from '../../constants/color';
import Title, { titleTypes } from './Title';
import normalize from '../../utils/responsiveFunctions';

const Badge = ({ value, customStyle }) => {
    return (
        <View style={[styles.badge, customStyle]}>
            <Title theme={titleTypes.TEXT_12_400_18} text={`${value}${value > 10 ? "+" : ""}`} />
        </View>
    );
};

export default Badge;

const styles = StyleSheet.create({
    badge: {
        paddingHorizontal: normalize(4),
        backgroundColor: 'red',
        borderRadius: normalize(10),
        alignContent: 'center',
        justifyContent: 'center'
    },
});