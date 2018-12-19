import React from 'react'
import cx from 'classnames'
import './styles/iconfont/iconfont.css'
import './styles/index.scss'

export interface IIconProps {
  type: string;
  size?: number|string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  spin?: boolean
}

const Icon: React.SFC<IIconProps> = (props: IIconProps) => {
  const { 
    type, size, color, style, className, title, spin
   } = props
  const cssStyle = {
    color,
    fontSize: `${parseInt(size as string)}px`,
    ...style
  }
  return (
    <i 
      title={title}
      className={cx('icon', 'iconfont', type, {className: !!className, spin})}
      style={cssStyle}
    ></i>
  )
}

Icon.defaultProps = {
  color: '#555',
  size: 24,
}

export default Icon