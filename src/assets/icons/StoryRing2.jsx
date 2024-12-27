import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";


export const StoryRing2 = (props) => (
    <Svg
        fill="#000000"
        width={44}
        height={44}
        viewBox="0 0 36 36"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <Path
            d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z"
            className="clr-i-outline clr-i-outline-path-1"
        />
        <Rect x={0} y={0} width={36} height={36} fillOpacity={0} />
    </Svg>
);


