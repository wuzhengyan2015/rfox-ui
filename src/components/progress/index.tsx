import React, { Component } from 'react'

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

class Progress extends Component {
  static defaultProp = {
      type: 'line',
      showInfo: true,
      percent: 0,
      status: 'normal',
      strokeWidth: 6,
      strokeLineCap: StrokeLineCap.round
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Progress
