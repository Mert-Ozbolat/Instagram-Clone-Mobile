import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
export const User = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={12} cy={7} r={5} stroke="#000000" strokeWidth={2} />
        <Path
            d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7"
            stroke="#000000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

