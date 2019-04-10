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
    gutterSize: string;
}

function getGutterSize(width, gutter) {
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
        let gutterSize
        if (typeof props.gutter === 'object') {
            gutterSize = getGutterSize(window.innerWidth, props.gutter)
        }
        this.state = {
            gutterSize,
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
        const { gutterSize } = this.state
        const { gutter } = this.props
        if (typeof gutter !== 'object') {
            return;
        }
        const newGutterSize = getGutterSize(window.innerWidth, gutter)
        if (gutterSize !== newGutterSize) {
            this.setState({
                gutterSize: newGutterSize
            })
        }
    }
    getGutter = () => {
        const { gutter } = this.props
        const { gutterSize } = this.state
        if (!gutter) {
            return
        }
        if (typeof gutter === 'number') {
            return gutter
        } else {
            return gutter[gutterSize]
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