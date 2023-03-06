import { TutorialContent } from "./TutorialContentComponent/TutorialContent"
import { TutorialSideNavbar } from "./TutorialSideNavbar/TutorialSideNavbar"
import '../Docs-Component/Docs.css'

export const Tutorial = () => {
  return (
    <div  className="docs-container">
      <TutorialContent/>
      <TutorialSideNavbar/>
    </div>
  )
}
