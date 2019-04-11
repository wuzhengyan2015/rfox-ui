import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/reset.css'
import './assets/styles/global.css'
import { ModalMethod, NormalModal, UncontrollerModal } from './components/modal/demo'
import { NormalGrid, FlexGrid, ResponsiveGrid } from './components/grid/demo'


ReactDOM.render(
    <div>
        {/* <NormalModal /> */}
        { <NormalGrid/> }
    </div>,
    document.getElementById('root')
)