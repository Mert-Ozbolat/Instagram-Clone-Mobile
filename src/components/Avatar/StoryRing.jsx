import * as React from 'react';
import Svg, { Defs, G, Circle, LinearGradient, Stop } from 'react-native-svg';

export const StoryRing = props => (
    <Svg
        width={90}
        height={90}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Defs>
            <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#f09433" stopOpacity="1" />
                <Stop offset="50%" stopColor="#e6683c" stopOpacity="1" />
                <Stop offset="100%" stopColor="#dc2743" stopOpacity="1" />
            </LinearGradient>
        </Defs>
        <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <Circle
                id="Circle"
                stroke="url(#gradient)"
                strokeWidth={2}
                cx={32}
                cy={32}
                r={31}
            />
        </G>
    </Svg>
);