import React, { SFC, CSSProperties } from 'react'
import cx from 'classnames'
import './styles/index.scss'

interface ILayoutProps {
    className?: string;
    style?: CSSProperties;
    hasSider?: boolean;
}

const Layout: SFC<ILayoutProps> & {
    Header: SFC<ILayoutProps>;
    Content: SFC<ILayoutProps>;
    Footer: SFC<ILayoutProps>;
    Sider: SFC<ILayoutProps>;
  } = (props) => {
    const { className, style, hasSider, children } = props
    return (
        <section
            className={ cx('ant-layout', {
                [className]: !!className,
                'ant-layout-has-sider': !!hasSider
            }) }
            style={style}
        >
            { children }
        </section>
    )
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
const Sider: SFC<ILayoutProps> = generateBasicLayout('sider', 'aside')

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer
Layout.Sider = Sider

export default Layout
