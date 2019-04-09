import React, { Component, CSSProperties } from 'react'
import cx from 'classnames'
import GridContext from './context'

export interface IBaseColProps {
    offset?: number;
    order?: number;
    pull?: number;
    push?: number;
    span?: number;
}

export interface IColProps extends IBaseColProps {
    className?: string;
    xs?: number | IBaseColProps;
    sm?: number | IBaseColProps;
    md?: number | IBaseColProps;
    lg?: number | IBaseColProps;
    xl?: number | IBaseColProps;
    xxl?: number | IBaseColProps;
}

const getMediaClassName = (name: string, media: number | IBaseColProps) => {
    if (media === undefined) {
        return ''
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
            className,
        } = this.props
    
        return (
            <GridContext.Consumer>
                { ( { gutter } ) => {
                    let style: CSSProperties = {  
                        order,
                    }
                    if (gutter && gutter > 0) {
                        style = {
                            paddingLeft: gutter / 2,
                            paddingRight: gutter / 2,
                            ...style,
                        };
                    }
                    return (
                        <div
                            className={ cx(`rfox-col`, {
                                [`rfox-col-${span}`]: !!span,
                                [`rfox-col-offset-${offset}`]: !!offset,
                                [`rfox-col-push-${push}`]: !!push,
                                [`rfox-col-pull-${pull}`]: !!pull,
                                [className]: !!className,
                            },
                                getMediaClassName('xs', xs), 
                                getMediaClassName('sm', sm), 
                                getMediaClassName('md', md), 
                                getMediaClassName('lg', lg), 
                                getMediaClassName('xl', xl), 
                                getMediaClassName('xxl', xxl), 
                            ) }
                            style={ style }
                        >
                            { children }
                        </div>
                    )
                } }
            </GridContext.Consumer>
        )
    }
}

export default Col