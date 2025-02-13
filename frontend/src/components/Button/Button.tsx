import React, { ReactNode } from 'react'

export type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  textColor?: string;
  bgColor?: string;
  type?:string
}

const Button:React.FC<ButtonProps> = ({
    children,
    onClick,
    className,
    textColor = 'text-white',
    bgColor = '',
    type = 'button',
    ...props


}) => {
  return (

    <button className={`inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full ${className} ${bgColor}`} onClick={onClick} {...props}>{children}</button>
  )
}



export default Button