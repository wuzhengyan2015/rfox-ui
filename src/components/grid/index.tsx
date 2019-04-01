import React, { SFC } from 'react'

interface IBaseColProps {
    offset?: number;
    order?: number;
    pull?: number;
    push?: number;
    span?: number;
}

export interface IRowProps {
    align?: string; // top middle bottom
    gutter?: number | {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        xxl?: number;
    }
    justify?: string;
    type?: string;
}

export interface IColProps extends IBaseColProps {
    xs?: number | IBaseColProps;
    sm?: number | IBaseColProps;
    md?: number | IBaseColProps;
    lg?: number | IBaseColProps;
    xl?: number | IBaseColProps;
    xxl?: number | IBaseColProps;
}

const Row: SFC<IRowProps> = () => {
    return <div></div>
}

const Col: SFC<IColProps> = () => {
    return <div></div>
}

const Grid = { Row, Col }

export default Grid;
