import React, { Component } from 'react'
import cx from 'classnames'
import Kinetic from 'kinetic'
import './styles/index.scss'

const circleProgressStage = Symbol('circleProgressStage')
const circleStatusMap = {
  normal: '#1890ff',
  success: '#52c41a',
  exception: '#f5222d'
}

export interface IProgressProps {
  type?: string // line | circle | dashboard
  showInfo?: boolean
  percent?: number
  status?: string // success | exception | active | normal
  strokeWidth?: number
  strokeLineCap?: string
  strokeColor?: string
  width?: number // canvas width
  gapDegree?: number
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
      percent,
      showInfo,
      strokeWidth,
      strokeLineCap,
      strokeColor
    } = this.props
    return (
      <div
        className={cx('rfox-progress-outer', {
          'rfox-progress-outer--squareCap': strokeLineCap === 'square'
        })}
      >
        <div
          className="rfox-progress-inner"
          style={{ height: `${strokeWidth}px` }}
        >
          <div
            className="rfox-progress-bg"
            style={{ width: `${percent}%`, backgroundColor: strokeColor }}
          />
        </div>
        {showInfo && (
          <span className="rfox-progress-text">{`${percent}%`}</span>
        )}
      </div>
    )
  }
  drawCircleProgress = () => {
    const {
      width,
      showInfo,
      strokeWidth,
      strokeColor,
      percent,
      strokeLineCap,
      status
    } = this.props
    const halfWidth = width / 2
    if (this[circleProgressStage]) {
      this[circleProgressStage]
        .clear()
        .setWidth(width)
        .setHeight(width)
    } else {
      this[circleProgressStage] = new Kinetic.Stage({
        container: 'rfox-progress',
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
      stroke: strokeColor ? strokeColor : circleStatusMap[status],
      strokeWidth,
      angle: (360 * percent) / 100,
      rotationDeg: -90,
      lineJoin: strokeLineCap === 'round' ? strokeLineCap : 'bevel'
    })
    const progressText = new Kinetic.Text({
      x: halfWidth,
      y: halfWidth,
      text: `${percent}%`,
      fontSize: 20,
      fill: 'rgba(0, 0, 0, 0.65)',
    })
    progressText.setOffset({
      x: progressText.getWidth() / 2, 
      y: progressText.getHeight() / 2
    })

    layer.add(circleBg)
    layer.add(circleArc)
    if (showInfo) {
      layer.add(progressText)
    }
    this[circleProgressStage].add(layer).draw()
  }
  render() {
    const { type, status } = this.props
    return (
      <div
        id="rfox-progress"
        className={`rfox-progress rfox-progress-${type} rfox-progress--${status}`}
      >
        {type === 'line' && this.renderLineProgress()}
      </div>
    )
  }
}

export default Progress
