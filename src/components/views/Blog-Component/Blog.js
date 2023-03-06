import BlogContent from "./BlogContentComponent/BlogContent"
import { BlogSide } from "./BlogSiderComponent/BlogSide"

export const Blog = () => {
  return (
    <div  className="docs-container">
      <BlogContent/>
      <BlogSide/>
    </div>
  )
}