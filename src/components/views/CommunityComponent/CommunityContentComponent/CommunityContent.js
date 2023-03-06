import React from 'react'
import { CommunityData } from '../../Constants/CommunityData/CommunityContentData/CommunityContentData'
import Footer from '../../Footer/Footer'
import Like from '../../LikeComponent/Like'
import { CommunityHeader } from '../CommunityHeaderComponent/CommunityHeader'

export const CommunityContent = () => {
  return (
    <div>
        <div className="docs-content-container">
        <CommunityHeader />
        <div>
          {CommunityData.map((item) => (
            <div>
              {item.header1 ? <h1>{item.header1}</h1> : <h2>{item.header2}</h2>}
              
              {item.description? <p>{item.description}</p> : null}

              {item.description1? <p>{item.description1}</p>: null}

              {item.description2? <p>{item.description2}</p>: null}

              {item.list?
                <ul>
                    {item.list.map(list =>
                        <li>{list}</li>)}
                </ul> : null
                }
                {item.hr?<hr/>:null}
            </div>
          ))}
        </div>
        <Like/>
      </div>
      <Footer/>
    </div>
  )
}
