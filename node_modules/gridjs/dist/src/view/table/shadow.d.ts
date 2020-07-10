import { h } from 'preact';
import Tabular from '../../tabular';
import { BaseComponent, BaseProps } from '../base';
import Header from '../../header';
import Row from '../../row';
import Cell from '../../cell';
interface ShadowTableProps extends BaseProps {
    data: Tabular;
    header?: Header;
}
export declare class ShadowTable extends BaseComponent<ShadowTableProps, {}> {
    resetStyle(): {
        [key: string]: string | number;
    };
    head(): h.JSX.Element;
    td(cell: Cell): h.JSX.Element;
    tr(row: Row): h.JSX.Element;
    body(): h.JSX.Element;
    render(): h.JSX.Element;
}
export {};
