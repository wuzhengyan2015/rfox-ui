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
      strokeLineCap: 'round'
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
    setTimeout(() => {
        var stage = new Kinetic.Stage({
            container: "rfox-progress", 
            width: 600, 
            height: 400 
        });
        
        var layer = new Kinetic.Layer();
        var rect = new Kinetic.Rect({
            x: 200, 
            y: 150, 
            width: 200, 
            height: 100, 
            fill: "red", 
            stroke: "black", 
            strokeWidth: 4 
        });
        
        layer.add(rect);
        stage.add(layer);
        stage.draw();
    })
  }
  render() {
    const { 
        type, status
     } = this.props
    return (
      <div id="rfox-progress" className={`rfox-progress rfox-progress-${type} rfox-progress--${status}`}>
        { type === 'line' && this.renderLineProgress() }
        { type === 'circle' && this.renderCircleProgress() }
      </div>
    )
  }
}

export default Progress
