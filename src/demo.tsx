import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from './index'

ReactDOM.render(
    <div>
        <Button>button</Button>
        <Button type="primary" size="large">button</Button>
        <Button type="dash" size="small">button</Button>
        <Button type="danger">button</Button>
    </div>,
    document.getElementById('root')
)