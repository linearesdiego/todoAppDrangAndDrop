import React from 'react'
import './Card.css'
import { useThemeContext } from '../../context/ThemeContext'
export const Card = ({children}) => {
  const {contextTheme} = useThemeContext()

  return (
    <div className={contextTheme ? 'cardLight' : 'cardDark' }>
        {children}
    </div>
  )
}
