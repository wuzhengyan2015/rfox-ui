import React, { SFC } from 'react'
import cx from 'classnames'
import './styles/index.scss'

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

const getMediaClassName = (name: string, media: number | IBaseColProps) => {
    if (media === undefined) {
        return
    }
    if (typeof media === 'number') {
        return `rfox-col-${name}-${media}`
    } else {
        const className = Object.keys(media).reduce((clazz, key) => {
            if (key === 'span') {
                return clazz + `rfox-col-${name}-${media[key]} `
            }
            return clazz + `rfox-col-${name}-${key}-${media[key]} `
        }, '')
        return className.trim()
    }
}

const Col: SFC<IColProps> = (props) => {
    const {
        children,
        span,
        offset,
        pull,
        push,
        order,
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
    } = props

    return (
        <div
            className={ cx(`rfox-col`, {
                [`rfox-col-${span}`]: !!span,
                [`rfox-col-offset-${offset}`]: !!offset,
                [`rfox-col-push-${push}`]: !!push,
                [`rfox-col-pull-${pull}`]: !!pull,
            },
                getMediaClassName('xs', xs), 
                getMediaClassName('sm', sm), 
                getMediaClassName('md', md), 
                getMediaClassName('lg', lg), 
                getMediaClassName('xl', xl), 
                getMediaClassName('xxl', xxl), 
            ) }
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
