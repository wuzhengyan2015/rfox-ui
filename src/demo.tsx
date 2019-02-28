import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/reset.css'
import './assets/styles/global.css'
import Modal from './components/modal'
import Rate from './components/rate'
import Icon from './components/icon'

ReactDOM.render(
    <div>
        <Modal
            title="Basic Modal"
        >
            modal components
        </Modal>
        <Icon type="icon-cloud-upload"/>
        <Rate character={<Icon type='icon-heart-fill'/>} activeColor="#e02d2d" />
    </div>,
    document.getElementById('root')
)