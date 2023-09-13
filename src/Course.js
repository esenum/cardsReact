import React from "react";

//rafc
// export const Course = () => {
//   return (
//     <div>Course Div</div>
//   )
// }

//ffc
function Course({ image, title, description }) {
  //console.log(props);
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>

          <div className="content">
            <div>{description}</div>
            <br />
            <time dateTime="2016-1-1">12:29 PM - 22 June 2023</time>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
