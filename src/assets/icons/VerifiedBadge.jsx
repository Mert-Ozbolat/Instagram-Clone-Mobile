import * as React from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';
export const VerifiedBadge = props => (
    <Svg
        fill="#000000"
        width={16}
        height={17}
        viewBox="0 0 24 24"
        id="verified"
        data-name="Flat Line"
        xmlns="http://www.w3.org/2000/svg"
        className="icon flat-line"
        {...props}>
        <Path
            id="secondary"
            d="M21.37,12c0,1-.86,1.79-1.14,2.67s-.1,2.08-.65,2.83-1.73.94-2.5,1.49-1.28,1.62-2.18,1.92S13,20.65,12,20.65s-2,.55-2.9.27S7.67,19.55,6.92,19,5,18.28,4.42,17.51s-.35-1.92-.65-2.83S2.63,13,2.63,12s.86-1.8,1.14-2.68.1-2.08.65-2.83S6.15,5.56,6.92,5,8.2,3.39,9.1,3.09s1.93.27,2.9.27,2-.55,2.9-.27S16.33,4.46,17.08,5s1.94.72,2.5,1.49.35,1.92.65,2.83S21.37,11,21.37,12Z"
            style={{
                fill: 'rgb(44, 169, 188)',
                strokeWidth: 2,
            }}
        />
        <Polyline
            id="primary"
            points="8 12 11 15 16 10"
            style={{
                fill: 'none',
                stroke: 'rgb(0, 0, 0)',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
            }}
        />
        <Path
            id="primary-2"
            data-name="primary"
            d="M21.37,12c0,1-.86,1.79-1.14,2.67s-.1,2.08-.65,2.83-1.73.94-2.5,1.49-1.28,1.62-2.18,1.92S13,20.65,12,20.65s-2,.55-2.9.27S7.67,19.55,6.92,19,5,18.28,4.42,17.51s-.35-1.92-.65-2.83S2.63,13,2.63,12s.86-1.8,1.14-2.68.1-2.08.65-2.83S6.15,5.56,6.92,5,8.2,3.39,9.1,3.09s1.93.27,2.9.27,2-.55,2.9-.27S16.33,4.46,17.08,5s1.94.72,2.5,1.49.35,1.92.65,2.83S21.37,11,21.37,12Z"
            style={{
                fill: 'none',
                stroke: 'rgb(0, 0, 0)',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
            }}
        />
    </Svg>
);