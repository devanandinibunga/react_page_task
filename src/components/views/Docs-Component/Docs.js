import { DocContent } from "./DocsContentComponent/DocsContent"
import {DocsSideNavbar} from "./DocsSideNavbar/DocsSideNavbar"
import '../Docs-Component/Docs.css'

export const Docs = () => {
  return (
    <div className="docs-container">
        <DocContent/>
        <DocsSideNavbar/>
    </div>
  )
}
