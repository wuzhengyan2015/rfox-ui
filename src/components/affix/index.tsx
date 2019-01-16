import React, { Component } from 'react'
import getScroll from '../_util/getScroll'
import throttle from 'lodash/throttle'

export interface IAffixProps {
  offsetBottom?: number
  offsetTop?: number
  target?: HTMLElement
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
    const { target = window } = this.props
    const box = this.affix.current.getBoundingClientRect()
    this.originLeft = box.left
    this.originTop = box.top + getScroll(target, true)
    target.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    const { target = window, offsetTop, offsetBottom, onChange } = this.props
    const { isAffixed: prevIsAffixed } = this.state
    let isAffixed = false;
    if (offsetTop) {
      isAffixed = getScroll(target, true) > this.originTop - offsetTop
    } else {
      isAffixed = (getScroll(target, true) + window.innerHeight - offsetBottom) < this.originTop
    }
    this.setState({ isAffixed }, () => {
      if (prevIsAffixed !== isAffixed) {
        onChange(isAffixed)
      }
    })
  }
  render() {
    const { children, offsetTop, offsetBottom } = this.props
    const { isAffixed } = this.state
    return (
      <div 
        className="rfox-affix" 
        ref={this.affix}
        style={!isAffixed ? null : {
          position: 'fixed',
          top: offsetTop ? offsetTop + 'px' : 'auto',
          bottom: offsetBottom ? offsetBottom + 'px' : 'auto',
          left: this.originLeft + 'px'
        }}>
        {children}
      </div>
    )
  }
}

export default Affix
