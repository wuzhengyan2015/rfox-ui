import React, { Component } from 'react'
import cx from 'classnames'
import Kinetic from 'kinetic'
import './styles/index.scss'

const circleProgressStage = Symbol('circleProgressStage')

export interface IProgressProps {
    type?: string; // line | circle | dashboard
    showInfo?: boolean;
    percent?: number;
    status?: string; // success | exception | active | normal
    strokeWidth?: number;
    strokeLineCap?: string;
    strokeColor?: string;
    width?: number;  // canvas width
    gapDegree?: number;
    gapPosition?: string
}

class Progress extends Component<IProgressProps> {
  [circleProgressStage]

  static defaultProps = {
      type: 'line',
      showInfo: true,
      percent: 0,
      status: 'normal',
      strokeWidth: 8,
      strokeColor: '#1890ff',
      strokeLineCap: 'round',
      width: 132
  }
  componentDidMount() {
    const { type } = this.props
    if (type === 'circle') {
        this.drawCircleProgress()
    }
  }
  componentDidUpdate() {
    const { type } = this.props
    if (type === 'circle') {
        this.drawCircleProgress()
    }
  }
  renderLineProgress = () => {
    const { 
        percent, showInfo, strokeWidth, strokeLineCap, strokeColor
    } = this.props
    return (
        <div className={cx('rfox-progress-outer', {
            'rfox-progress-outer--squareCap': strokeLineCap === 'square'
        })}>
            <div className="rfox-progress-inner" style={{ height: `${strokeWidth}px` }}>
                <div className="rfox-progress-bg" style={{ width: `${percent}%`, backgroundColor: strokeColor }}></div>
            </div>
            { showInfo && <span className="rfox-progress-text">{`${percent}%`}</span> }
        </div>
    )
  }
  drawCircleProgress = () => {
    const { 
        width, strokeWidth, strokeColor, percent, strokeLineCap
     } = this.props
    const halfWidth = width / 2
    if (this[circleProgressStage]) {
        this[circleProgressStage].clear().setWidth(width).setHeight(width)
    } else {
        this[circleProgressStage] = new Kinetic.Stage({
            container: "rfox-progress", 
            width,
            height: width
        })
    }
    const layer = new Kinetic.Layer()
    const circleBg = new Kinetic.Circle({
        x: halfWidth,
        y: halfWidth,
        radius: halfWidth - strokeWidth / 2,
        stroke: '#f5f5f5',
        strokeWidth
    })
    const circleArc = new Kinetic.Arc({
      x: halfWidth,
      y: halfWidth,
      innerRadius: halfWidth - strokeWidth / 2,
      outerRadius: halfWidth - strokeWidth / 2,
      stroke: strokeColor,
      strokeWidth,
      angle: 360 * percent / 100,
      rotationDeg: -90,
      lineJoin: strokeLineCap
    })
    
    layer.add(circleBg)
    layer.add(circleArc)
    this[circleProgressStage].add(layer).draw()
  }
  render() {
    const { type, status } = this.props
    return (
      <div id="rfox-progress" className={`rfox-progress rfox-progress-${type} rfox-progress--${status}`}>
        { type === 'line' && this.renderLineProgress() }
      </div>
    )
  }
}

export default Progress
