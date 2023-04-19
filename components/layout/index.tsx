import React from 'react'

interface ILayout {
  children: React.ReactNode
  className?: string
}

const Layout: React.FC<ILayout> = ({ children, className }): JSX.Element => {
  return <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>{children}</div>
}

export default Layout
