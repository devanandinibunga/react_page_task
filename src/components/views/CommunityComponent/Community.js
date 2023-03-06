import React from 'react'
import { CommunityContent } from './CommunityContentComponent/CommunityContent'
import { CommunitySider } from './CommunitySiderComponent/CommunitySider'

export const Community = () => {
  return (
    <div  className="docs-container">
      <CommunityContent/>
      <CommunitySider/>
    </div>
  )
}
