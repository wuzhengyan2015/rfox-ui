import React, { FunctionComponent, CSSProperties } from 'react'
import cx from 'classnames'
import './styles/index.scss'

interface ILayoutProps {
    className?: string;
    style?: CSSProperties;
    hasSider?: boolean;
}

const Layout: FunctionComponent<ILayoutProps> & {
    Header: FunctionComponent<ILayoutProps>;
    Content: FunctionComponent<ILayoutProps>;
    Footer: FunctionComponent<ILayoutProps>;
    Sider: FunctionComponent<ILayoutProps>;
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

const Header: FunctionComponent<ILayoutProps> = (props) => {
    const { className, style, hasSider, children } = props
    return (
        <header
            className={ cx('ant-layout-header', {
                [className]: !!className,
                'ant-layout-has-sider': !!hasSider
            }) }
            style={style}
        >
            { children }
        </header>
    )
}

const Content: FunctionComponent<ILayoutProps> = (props) => {
    const { className, style, hasSider, children } = props
    return (
        <main
            className={ cx('ant-layout-content', {
                [className]: !!className,
                'ant-layout-has-sider': !!hasSider
            }) }
            style={style}
        >
            { children }
        </main>
    )
}

const Footer: FunctionComponent<ILayoutProps> = (props) => {
    const { className, style, hasSider, children } = props
    return (
        <footer
            className={ cx('ant-layout-footer', {
                [className]: !!className,
                'ant-layout-has-sider': !!hasSider
            }) }
            style={style}
        >
            { children }
        </footer>
    )
}

const Sider: FunctionComponent<ILayoutProps> = (props) => {
    const { className, style, hasSider, children } = props
    return (
        <aside
            className={ cx('ant-layout-sider', {
                [className]: !!className,
                'ant-layout-has-sider': !!hasSider
            }) }
            style={style}
        >
            { children }
        </aside>
    )
}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer
Layout.Sider = Sider

export default Layout
