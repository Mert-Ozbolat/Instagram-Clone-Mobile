import * as React from "react";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";
export const StoryRing = (props) => (
    <Svg
        width={90}
        height={90}
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle
            cx={45}
            cy={45}
            r={43.75}
            stroke="url(#paint0_linear_2558_1047)"
            strokeWidth={2.5}
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_2558_1047"
                x1={99.4737}
                y1={9.47369}
                x2={0.00000254104}
                y2={69.8684}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#C913B9" />
                <Stop offset={0.500947} stopColor="#F9373F" />
                <Stop offset={1} stopColor="#FECD00" />
            </LinearGradient>
        </Defs>
    </Svg>
);