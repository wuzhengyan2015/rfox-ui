import React, { Component } from 'react'
import cx from 'classnames'
import Kinetic from 'kinetic'
import './styles/index.scss'

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
        this.renderCircleProgress()
    }
  }
  componentDidUpdate() {
    const { type } = this.props
    if (type === 'circle') {
        this.renderCircleProgress()
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
  renderCircleProgress = () => {
    const { width, strokeWidth, strokeColor } = this.props
    const stage = new Kinetic.Stage({
        container: "rfox-progress", 
        width,
        height: width
    });
    const layer = new Kinetic.Layer();
    const bgCircle = new Kinetic.Circle({
        x: width / 2,
        y: width / 2,
        radius: width / 2 - strokeWidth / 2,
        stroke: '#f5f5f5',
        strokeWidth
    });
    const arc = new Kinetic.Arc({
      x: width / 2,
      y: width / 2,
      innerRadius: width / 2 - strokeWidth / 2,
      outerRadius: width / 2 - strokeWidth / 2,
      stroke: strokeColor,
      strokeWidth,
      angle: 180,
      rotationDeg: -90,
      lineCap: 'round'
    });
    
    layer.add(bgCircle);
    layer.add(arc);
    stage.add(layer);
    stage.draw();
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
