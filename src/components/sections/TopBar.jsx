import React from 'react'
import { TopBarContainer } from '../styledComponents/TopBarStyles'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <TopBarContainer>
      <div>
        <Link to={'/'}>Image Store</Link>
      </div>
    </TopBarContainer>
  )
}
