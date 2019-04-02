import React, { SFC } from 'react'
import cx from 'classnames'
import './styles/index.scss'

const GRID_NUM = 24;

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

const Row: SFC<IRowProps> = (props) => {
    const { children } = props
    return (
        <div className="rfox-row">
            { children }
        </div>
    )
}

const Col: SFC<IColProps> = (props) => {
    const {
        children,
        span,
        offset,
        pull,
        push,
        order
    } = props
    return (
        <div
            className={ cx(`rfox-col rfox-col-${span}`, {
                [`rfox-col-offset-${offset}`]: !!offset,
                [`rfox-col-push-${push}`]: !!push,
                [`rfox-col-pull-${pull}`]: !!pull,
            }) }
            style={{  
                order,
            }}
        >
            { children }
        </div>
    )
}

const Grid = { Row, Col }

export default Grid;
