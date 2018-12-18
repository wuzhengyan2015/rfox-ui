import React from 'react'
import cx from 'classnames'
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

const Icon: React.SFC<IIconProps> = (props: IIconProps) => {
  const { type, size, color, style, className } = props
  const cssStyle = {
    fontSize: size + 'px',
    color,
    ...style
  }
  return (
    <i 
      className={cx('icon', 'iconfont', type, {className: !!className})}
      style={cssStyle}
    ></i>
  )
}

Icon.defaultProps = {
  size: 24,
  color: '#555'
}

export default Icon