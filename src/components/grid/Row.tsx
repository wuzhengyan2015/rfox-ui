import React, { Component } from 'react'
import cx from 'classnames'
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
    align?: string; // top middle bottom
    justify?: string;
    type?: string;
}

const responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)',
};

function getScreen() {

}

class Row extends Component<IRowProps> {
    state = {
        screen: getScreen()
    }
    getGutter = () => {
        const { gutter } = this.props
        if (!gutter) {
            return
        }
        if (typeof gutter === 'number') {
            return gutter;
        }
    }
    render() {
        const { children } = this.props
        const gutter = this.getGutter()
        return (
            <GridContext.Provider value={{ gutter }}>
                <div className="rfox-row">
                    { children }
                </div>
            </GridContext.Provider>
        )
    }
}

export default Row