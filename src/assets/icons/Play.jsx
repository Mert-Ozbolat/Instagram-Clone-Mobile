import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";


export const Play = (props) => (
    <Svg
        fill="#000000"
        width={24}
        height={24}
        viewBox="0 0 36 36"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <Path
            className="clr-i-outline clr-i-outline-path-1"
            d="M30,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V6A2,2,0,0,0,30,4Zm0,26H6V6H30Z"
        />
        <Path
            className="clr-i-outline clr-i-outline-path-2"
            d="M14.6,23.07a1.29,1.29,0,0,0,1.24.09l8.73-4a1.3,1.3,0,0,0,0-2.37h0l-8.73-4A1.3,1.3,0,0,0,14,14v8A1.29,1.29,0,0,0,14.6,23.07Zm1-8.6L23.31,18,15.6,21.51Z"
        />
        <Rect
            className="clr-i-outline clr-i-outline-path-3"
            x={8}
            y={7}
            width={2}
            height={3}
        />
        <Rect
            className="clr-i-outline clr-i-outline-path-4"
            x={14}
            y={7}
            width={2}
            height={3}
        />
        <Rect
            className="clr-i-outline clr-i-outline-path-5"
            x={20}
            y={7}
            width={2}
            height={3}
        />
        <Rect
            className="clr-i-outline clr-i-outline-path-6"
            x={26}
            y={7}
            width={2}
            height={3}
        />
        <Rect
            className="clr-i-outline clr-i-outline-path-7"
            x={8}
            y={26}
            width={2}
            height={3}
        />
        <Rect
            className="clr-i-outline clr-i-outline-path-8"
            x={14}
            y={26}
            width={2}
            height={3}
        />
        <Rect
            className="clr-i-outline clr-i-outline-path-9"
            x={20}
            y={26}
            width={2}
            height={3}
        />
        <Rect
            className="clr-i-outline clr-i-outline-path-10"
            x={26}
            y={26}
            width={2}
            height={3}
        />
        <Rect x={0} y={0} width={36} height={36} fillOpacity={0} />
    </Svg>
);

