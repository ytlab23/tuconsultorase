import { SVGAttributes } from 'react';

declare module 'react-icons/lib' {
    export interface IconBaseProps extends SVGAttributes<SVGElement> {
        size?: string | number;
        color?: string;
        title?: string;
    }
    export type IconType = (props: IconBaseProps) => JSX.Element;
}
