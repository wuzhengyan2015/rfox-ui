import React, { Component } from 'react'
import cx from 'classnames'
import GridContext from './context'
import { gutterType } from './types'

export interface IRowProps extends gutterType {
    align?: string; // top middle bottom
    justify?: string;
    type?: string;
}

class Row extends Component<IRowProps> {
    render() {
        const { children } = this.props
        return (
            <GridContext.Provider value={{}}>
                <div className="rfox-row">
                    { children }
                </div>
            </GridContext.Provider>
        )
    }
}

export default Row