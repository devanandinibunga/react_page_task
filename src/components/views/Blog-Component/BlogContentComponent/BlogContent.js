import { BlogData } from "../../Constants/BlogsData/BlogsContentData/BlogsContentData";
import Footer from "../../Footer/Footer";
import Like from "../../LikeComponent/Like";
import "../../Docs-Component/DocsContentComponent/DocsContent.css";
import { BlogHeader } from "../BlogHeaderComponent/BlogHeader";

export default function BlogContent() {
  return (
    <div>
      <div className="docs-content-container">
        <BlogHeader />
        <div>
          {BlogData.map((item) => (
            <div>
              {item.header1 ? <h1>{item.header1}</h1> : <h2>{item.header2}</h2>}

              {item.description ? <p>{item.description}</p> : null}

              {item.description1 ? <p>{item.description1}</p> : null}

              {item.description2 ? <p>{item.description2}</p> : null}

              {item.description3 ? <p>{item.description3}</p> : null}

              {item.list ? (
                <ul>
                  {item.list.map((list) => (
                    <li>{list}</li>
                  ))}
                </ul>
              ) : null}
              {item.hr ? <hr /> : null}
            </div>
          ))}
        </div>
        <Like />
      </div>
      <Footer />
    </div>
  );
}
