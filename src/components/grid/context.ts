import React from 'react'
import { gutterType } from './types'

interface IContext {
    gutter?: gutterType
}

const GridContext: React.Context<IContext> = React.createContext({})

export default GridContext