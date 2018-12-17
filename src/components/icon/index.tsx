import React from 'react'
import './styles/iconfont/iconfont.css'

export interface IIconProps {
  type: string;
  size?: number|string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  spin?: boolean
}

const Icon: React.SFC<IIconProps> = (props) => {
  return (
    <i className="icon iconfont icon-star"></i>
  )
}

export default Icon