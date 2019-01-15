import React, { Component } from 'react'
import getScroll from '../_util/getScroll'
import throttle from 'lodash/throttle'

export interface IAffixProps {
  offsetBttom?: number
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
    offsetBttom: 0,
    offsetTop: 0
  }

  constructor(props) {
    super(props)
    this.state = {
      isAffixed: false
    }
    this.affix = React.createRef()
    this.handleScroll = throttle(this.handleScroll, 50)
  }
  componentDidMount() {
    const { target = window } = this.props
    const box = this.affix.current.getBoundingClientRect()
    this.originLeft = box.left
    this.originTop = box.top + getScroll(target, true)
    target.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    const { target = window } = this.props
    const isAffixed = getScroll(target, true) > this.originTop
    this.setState({ isAffixed })
  }
  render() {
    const { children, offsetTop } = this.props
    const { isAffixed } = this.state
    return (
      <div 
        className="rfox-affix" 
        ref={this.affix}
        style={!isAffixed ? null : {
          position: 'fixed',
          top: offsetTop + 'px',
          left: this.originLeft + 'px'
        }}>
        {children}
      </div>
    )
  }
}

export default Affix
