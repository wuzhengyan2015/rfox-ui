import React, { Component, CSSProperties } from 'react'
import cx from 'classnames'
import LayoutContext from './context'

export interface ISiderProps {
    className?: string;
    style?: CSSProperties;
    width?: string | number;
    addSider: (id) => void;
    removeSider: (id) => void;
}

function withConsumer(Comp) {
    return (props) => (
        <LayoutContext.Consumer>
            {({ addSider, removeSider }) => {
                return <Comp {...props} addSider={addSider} removeSider={removeSider} />
            }}
        </LayoutContext.Consumer>
    )
}

class Sider extends Component<ISiderProps> {
  uniqueId: string
  static defaultProps = {
      width: 200
  }
  constructor(props) {
    super(props)
    this.uniqueId = Math.floor(Math.random() * 1000).toString()
  }
  componentDidMount() {
      const { addSider } = this.props
      addSider(this.uniqueId)
  }
  componentWillMount() {
    const { removeSider } = this.props
    removeSider(this.uniqueId)
}
  render() {
    const { className, style, children, width } = this.props
    return (
        <section
            className={ cx('ant-layout', {
                [className]: !!className,
            }) }
            style={{
                ...style,
                width,
                maxWidth: width,
                minWidth: width,
                flex: `0 0 ${width}`,
            }}
        >
            { children }
        </section>
    )
  }
}

export default withConsumer(Sider)
