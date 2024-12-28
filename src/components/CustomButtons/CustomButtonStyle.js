import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default {
    primary: StyleSheet.create(
        {
            background: {
                backgroundColor: colors.BLUE,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 7,
                borderRadius: 3
            },
            text: {
                color: colors.WHITE,
                fontSize: 13,
                fontWeight: "700",
                lineHeight: 16
            }
        }
    ),
    outline: StyleSheet.create(
        {
            background: {
                backgroundColor: "#EFEFEF",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 7,
                borderRadius: 3,
                borderWidth: 0.5,
                borderColor: colors.BLACK,
                flex: 1,

            },
            text: {
                color: colors.BLACK,
                fontSize: 13,
                fontWeight: "700",
                lineHeight: 16
            }
        }
    )
}