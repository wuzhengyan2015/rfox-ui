import React, { SFC, CSSProperties, Component } from 'react'
import cx from 'classnames'
import LayoutContext from './context'
import Sider, { ISiderProps } from './Sider'
import './styles/index.scss'

interface ILayoutProps {
    className?: string;
    style?: CSSProperties;
    hasSider?: boolean;
}

interface ILayoutState {
    siders: string[]
}

class Layout extends Component<ILayoutProps, ILayoutState> {
    static Header: SFC<ILayoutProps>
    static Content: SFC<ILayoutProps>
    static Footer: SFC<ILayoutProps>
    static Sider: any
    state = {
        siders: []
    }
    addSider = (id) => {
        this.setState((state) => ({
            siders: [...state.siders, id]
        }))
    }
    removeSider = (id) => {
        this.setState((state) => ({
            siders: state.siders.filter((currentId) => currentId !== id)
        }))
    }
    render() {
        const { className, style, hasSider, children } = this.props
        const { siders } = this.state
        return (
            <LayoutContext.Provider value={{ 
                addSider: this.addSider,
                removeSider: this.removeSider 
            }}>
                <section
                    className={ cx('ant-layout', {
                        [className]: !!className,
                        'ant-layout-has-sider': typeof hasSider === 'boolean' ? hasSider : siders.length > 0,
                    }) }
                    style={style}
                >
                    { children }
                </section>
            </LayoutContext.Provider>
        )
    }
}

function generateBasicLayout(suffixCls, tagName) {
    return (props) => {
        const { className, style, children } = props
        return React.createElement(tagName, {
            className: cx(`ant-layout-${suffixCls}`, {
                [className]: !!className,
            }),
            style,
        }, children);
    }
}

const Header: SFC<ILayoutProps> = generateBasicLayout('header', 'header')
const Content: SFC<ILayoutProps> = generateBasicLayout('content', 'main')
const Footer: SFC<ILayoutProps> = generateBasicLayout('footer', 'footer')

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer
Layout.Sider = Sider

export default Layout
