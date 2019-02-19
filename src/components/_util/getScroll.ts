export default function getScroll(target: HTMLElement | Window | null, top: boolean): number {
    if (typeof window === 'undefined') {
        return 0
    }

    const prop = top ? 'pageYOffset' : 'pageXOffset'
    const method = top ? 'scrollTop' : 'scrollLeft'
    const isWindow = target === window

    return isWindow ? (target as Window)[prop] : (target as HTMLElement)[method]
}