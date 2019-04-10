import React, { Component } from 'react'
import cx from 'classnames'
import throttle from 'lodash/throttle'
import GridContext from './context'

export interface IGutterType {
    gutter?: number | {
         xs?: number;
         sm?: number;
         md?: number;
         lg?: number;
         xl?: number;
         xxl?: number;
    }
} 

export interface IRowProps extends IGutterType {
    align?: string;
    justify?: string;
    type?: string;
}

interface IRowState {
    size: string;
}

function getSize(width, gutter) {
    switch (true) {
        case width >= 1600 && !!gutter.xxl:
            return 'xxl'
        case width >= 1200 && !!gutter.xl:
            return 'xl'
        case width >= 992 && !!gutter.lg:
            return 'lg'
        case width >= 768 && !!gutter.md:
            return 'md'
        case width >= 575 && !!gutter.sm:
            return 'sm'
        case width < 575 && !!gutter.xs:
            return 'xs'
        default: return ''
    }
}

class Row extends Component<IRowProps, IRowState> {
    private throttleUpdateScreen: () => void

    constructor(props) {
        super(props)
        let size
        if (typeof props.gutter === 'object') {
            size = getSize(window.innerWidth, props.gutter)
        }
        this.state = {
            size,
        }
        this.throttleUpdateScreen = throttle(this.updateScreen, 200)
    }
    componentDidMount = () => {
        window.addEventListener('resize', this.throttleUpdateScreen)
    }
    componentWillUnmount = () => {
        window.removeEventListener('resize', this.throttleUpdateScreen)
    }
    updateScreen = () => {
        const { size } = this.state
        const { gutter } = this.props
        if (typeof gutter !== 'object') {
            return;
        }
        const newSize = getSize(window.innerWidth, gutter)
        if (size !== newSize) {
            this.setState({
                size: newSize
            })
        }
    }
    getGutter = () => {
        const { gutter } = this.props
        const { size } = this.state
        if (!gutter) {
            return
        }
        if (typeof gutter === 'number') {
            return gutter
        } else {
            return gutter[size]
        }
    }
    render() {
        const { children, type, align, justify } = this.props
        const gutter = this.getGutter()
        return (
            <GridContext.Provider value={{ gutter }}>
                <div
                    className={ cx('rfox-row', {
                        'rfox-row-flex': type === 'flex'
                    }) }
                    style={{
                        justifyContent: justify,
                        alignItems: align
                    }}
                >
                    { children }
                </div>
            </GridContext.Provider>
        )
    }
}

export default Row