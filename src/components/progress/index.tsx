import React, { Component } from 'react'
import './styles/index.scss'

enum StrokeLineCap {
    round,
    square
}

enum GapPosition {
    top,
    bottom,
    left,
    right
}

export interface IProgress {
    type?: string; // line | circle | dashboard
    showInfo?: boolean;
    percent?: number;
    status?: string; // success | exception | active | normal
    strokeWidth?: number;
    strokeLineCap?: StrokeLineCap;
    strokeColor?: string;
    width?: number;
    gapDegree?: number;
    gapPosition?: GapPosition
}

class Progress extends Component<IProgress> {
  static defaultProps = {
      type: 'line',
      showInfo: true,
      percent: 0,
      status: 'normal',
      strokeWidth: 6,
      strokeLineCap: StrokeLineCap.round
  }
  renderLineProgress = () => {
    return (
        <div className="rfox-progress-outer">
            <div className="rfox-progress-inner">
                <div className="rfox-progress-bg"></div>
            </div>
            <span className="rfox-progress-text">50%</span>
        </div>
    )
  }
  render() {
    const { type, status } = this.props
    return (
      <div className={`rfox-progress rfox-progress-${type} rfox-progress--${status}`}>
        { type === 'line' && this.renderLineProgress() }
      </div>
    )
  }
}

export default Progress
