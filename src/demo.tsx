import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from './index'

ReactDOM.render(
    <div>
        <Button shape="round" href="http://www.baidu.com" target="_blank">button</Button>
        <Button type="primary" size="large">button</Button>
        <Button type="dash" size="small" block>button</Button>
        <Button type="danger" disabled>button</Button>
    </div>,
    document.getElementById('root')
)