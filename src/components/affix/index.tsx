import React, { Component } from 'react'
import getScroll from '../_util/getScroll'
import throttle from 'lodash/throttle'

function getTargetRect(target: HTMLElement | Window | null): ClientRect {
  return target !== window 
    ? (target as HTMLElement).getBoundingClientRect()
    : ({ top: 0, left: 0, bottom: 0 } as ClientRect)
}

export interface IAffixProps {
  offsetBottom?: number
  offsetTop?: number
  target?: () => HTMLElement | Window | null
  onChange?: (affixed) => void
}

export interface IAffixState {
  isAffixed: boolean
} 

class Affix extends Component<IAffixProps, IAffixState> {
  private affix: React.RefObject<HTMLDivElement>
  private originLeft: number
  private originTop: number

  static defaultProps = {
    offsetBottom: undefined,
    offsetTop: undefined
  }

  constructor(props) {
    super(props)
    this.state = {
      isAffixed: false
    }
    this.affix = React.createRef()
    this.handleScroll = throttle(this.handleScroll, 16)
  }
  componentDidMount() {
    setTimeout(() => {
      const { target: getTarget } = this.props
      const target = getTarget() || window
      const box = this.affix.current.getBoundingClientRect()
      const targetBox = getTargetRect(target)
      this.originLeft = box.left - targetBox.left - (target === window ? document.body.clientLeft : (target as HTMLElement).clientLeft)
      this.originTop = box.top + getScroll(target, true) - targetBox.top - (target === window ? document.body.clientTop : (target as HTMLElement).clientTop)
      target.addEventListener('scroll', this.handleScroll)
    })
  }
  handleScroll = () => {
    const { target: getTarget, offsetTop, offsetBottom, onChange } = this.props
    const target = getTarget() || window
    const { isAffixed: prevIsAffixed } = this.state
    let isAffixed = false;
    if (offsetTop) {
      isAffixed = getScroll(target, true) + offsetTop > this.originTop
    } else {
      const height = this.affix.current.offsetHeight;
      isAffixed = (getScroll(target, true) + window.innerHeight - offsetBottom - height) < this.originTop
    }
    this.setState({ isAffixed }, () => {
      if (prevIsAffixed !== isAffixed) {
        onChange(isAffixed)
      }
    })
  }
  render() {
    const { children, offsetTop, offsetBottom, target: getTarget } = this.props
    const { isAffixed } = this.state
    const target = getTarget() || window
    return (
      <div 
        className="rfox-affix" 
        ref={this.affix}
        style={!isAffixed ? null : {
          position: target === window ? 'fixed' : 'absolute',
          top: offsetTop !== undefined ? offsetTop + (target === window ? 0 : getScroll(target, true)) + 'px' : 'auto',
          bottom: offsetBottom !== undefined ? offsetBottom + 'px' : 'auto',
          left: this.originLeft + 'px'
        }}>
        {children}
      </div>
    )
  }
}

export default Affix
