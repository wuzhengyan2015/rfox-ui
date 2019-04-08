import React, { Component } from 'react'
import cx from 'classnames'
import { IBaseColProps } from './types'

export interface IColProps extends IBaseColProps {
    xs?: number | IBaseColProps;
    sm?: number | IBaseColProps;
    md?: number | IBaseColProps;
    lg?: number | IBaseColProps;
    xl?: number | IBaseColProps;
    xxl?: number | IBaseColProps;
}

const getMediaClassName = (name: string, media: number | IBaseColProps) => {
    if (media === undefined) {
        return
    }
    if (typeof media === 'number') {
        return `rfox-col-${name}-${media}`
    } else {
        const className = Object.keys(media).reduce((clazz, key) => {
            return key === 'span'
                ? `${clazz} rfox-col-${name}-${media[key]}`
                : `${clazz} rfox-col-${name}-${key}-${media[key]}`
        }, '')
        return className.trim()
    }
}

class Col extends Component<IColProps> {
    render() {
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
        } = this.props
    
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
}

export default Col