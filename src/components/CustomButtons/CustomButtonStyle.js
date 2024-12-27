import { StyleSheet } from "react-native";
import { color } from "../../constants/color";

export default {
    primary: StyleSheet.create({
        background: {
            backgroundColor: color.BLUE,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 7,
            borderRadius: 3
        },
        text: {
            color: color.WHITE,
            fontSize: 13,
            fontWeight: '700',
            lineHeight: 16
        }
    }),

    outline: StyleSheet.create({
        background: {
            flex: 1,
            backgroundColor: '#efefef',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 7,
            borderRadius: 3,
            borderWidth: 0.5,
            borderColor: color.BLACK
        },
        text: {
            color: color.BLACK,
            fontSize: 13,
            fontWeight: '700',
            lineHeight: 16
        }
    })
}