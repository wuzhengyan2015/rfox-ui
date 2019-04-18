import React from 'react'

interface ILayoutContext {
    addSider?: (id) => void,
    removeSider?: (id) => void,
}

const LayoutContext: React.Context<ILayoutContext> = React.createContext({})

export default LayoutContext