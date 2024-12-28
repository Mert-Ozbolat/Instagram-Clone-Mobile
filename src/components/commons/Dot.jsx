import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../constants/colors';

const Dot = () => {
    return <View style={styles.box} />;
};

export default Dot;

const styles = StyleSheet.create({
    box: {
        width: 13,
        height: 13,
        borderRadius: 99,
        backgroundColor: colors.RED,
        borderWidth: 2,
        borderColor: colors.WHITE,
        position: 'absolute',
        left: 18,
        top: 2,
        zIndex: 1000,
    },
});