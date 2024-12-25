import * as React from 'react';
import Svg, { Path, G, Polygon } from 'react-native-svg';
export const ChevronDown = props => (
    <Svg
        width={16}
        height={16}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path d="M0 0h48v48H0z" fill="none" />
        <G id="Shopicon">
            <Polygon points="24,29.172 9.414,14.586 6.586,17.414 24,34.828 41.414,17.414 38.586,14.586  " />
        </G>
    </Svg>
);
