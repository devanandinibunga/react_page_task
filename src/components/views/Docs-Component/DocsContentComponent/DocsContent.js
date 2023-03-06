import { dummydata } from "../../Constants/DocsData/DocsMainContentData/DocsMainContentData";
import Footer from "../../Footer/Footer";
import { FooterTitle } from "../../FooterTitleComponent/FooterTitle";
import Like from "../../LikeComponent/Like";
import { HeaderComponent } from "../DocsHeaderComponent/HeaderComponent";
import "./DocsContent.css";

export const DocContent = () => {
  return (
    <div>
      <div className="docs-content-container">
        <HeaderComponent />
        <div>
          {dummydata.map((item) => (
            <div>
              {item.header1 ? <h1>{item.header1}</h1> : <h2>{item.header2}</h2>}
              {/* <p dangerouslySetInnerHTML={{__html: item.description
                .replace(item.strong,`<strong>${item.strong}</strong>`)
                .replace(item.strong1,`<strong>${item.strong1}</strong>`)
                .replace(item.anchor,`<a href = "#">${item.anchor}</a>`)}}/> */}
              {/* {
                item.anchor.map((eachitem) =>
                <>
                  <p dangerouslySetInnerHTML={{__html: item.description.replace(eachitem,`<a href = "#">${eachitem}</a>`)}}/>
                </>
              )} */}
              {item.description? <p>{item.description}</p> : null}

              {item.list1 || item.list2 ? (
                <ul>
                  <li>
                    <p>{item.list1}</p>
                  </li>
                  <li>
                    <p>{item.list2}</p>
                  </li>
                </ul>
              ) : null}
              {item.description1 ? <p>{item.description1}</p> : null}
              {item.tipheader ? (
                <div className="doc-content-tip-container">
                  <h4>{item.tipheader}</h4>
                  <p>{item.tipdescription}</p>
                </div>
              ) : null}
              {item.hr ? <hr /> : null}
            </div>
          ))}
        </div>
        <Like />
      </div>
      <FooterTitle/>
      <Footer/>
    </div>
  );
};
