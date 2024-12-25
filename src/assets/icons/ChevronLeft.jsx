import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
export const ChevronLeft = props => (
    <Svg
        fill="#000000"
        width={24}
        height={24}
        viewBox="-78.5 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path d="M257 64L291 98 128 262 291 426 257 460 61 262 257 64Z" />
    </Svg>
);