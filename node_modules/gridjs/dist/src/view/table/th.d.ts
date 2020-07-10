import { h } from 'preact';
import { BaseComponent, BaseProps } from '../base';
import { TColumn } from '../../types';
export interface THProps extends BaseProps {
    index: number;
    column: TColumn;
}
export declare class TH extends BaseComponent<THProps, {}> {
    private sortRef;
    private isSortable;
    private onClick;
    private keyDown;
    render(): h.JSX.Element;
}
