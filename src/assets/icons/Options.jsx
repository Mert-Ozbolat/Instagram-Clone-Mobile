import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const Options = (props) => (
    <Svg
        fill="#000000"
        width={25}
        height={25}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path d="M12,10a2,2,0,1,1-2,2A2,2,0,0,1,12,10ZM4,14a2,2,0,1,0-2-2A2,2,0,0,0,4,14Zm16-4a2,2,0,1,0,2,2A2,2,0,0,0,20,10Z" />
    </Svg>
);
