import './DocsSideNavbar.css'

import Accordion  from '../../SideNavbarAccordion/Accordion'
import { AccordionData } from '../../Constants/DocsData/DocsSideNavbarData/DocsSideNavbarData'

export const DocsSideNavbar = () => {

  return(
    <div className='docs-side-navbar-container'>
      {
        AccordionData.map(({title,content}) =>
        <Accordion title = {title} content = {content} />
      )}
    </div>
  )
}
