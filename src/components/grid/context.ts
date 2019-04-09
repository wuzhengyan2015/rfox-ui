import React from 'react'

interface IContext {
    gutter?: number;
}

const GridContext: React.Context<IContext> = React.createContext({})

export default GridContext