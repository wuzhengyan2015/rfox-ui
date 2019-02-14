import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from './index'

ReactDOM.render(
    <div>
        <Button>button</Button>
        <Button type="primary">button</Button>
    </div>,
    document.getElementById('root')
)