import "./App.css";
import "bulma/css/bulma.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import CSharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <section className="column">
      <div className="container">
        <div className="columns">
          <div className="column">
            <Course
              image={Angular}
              title="Angular"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nostrum quo consequatur nulla assumenda placeat earum excepturi consequuntur voluptatibus, autem dolorem molestiae voluptas et, tenetur optio cumque deserunt ab totam."
            />
          </div>
          <div className="column">
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nostrum quo consequatur nulla assumenda placeat earum excepturi consequuntur voluptatibus, autem dolorem molestiae voluptas et, tenetur optio cumque deserunt ab totam."
            />
          </div>
          <div className="column">
            <Course
              image={CSharp}
              title="React"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nostrum quo consequatur nulla assumenda placeat earum excepturi consequuntur voluptatibus, autem dolorem molestiae voluptas et, tenetur optio cumque deserunt ab totam."
            />
          </div>
          <div className="column">
            <Course
              image={KompleWeb}
              title="Complete Web"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nostrum quo consequatur nulla assumenda placeat earum excepturi consequuntur voluptatibus, autem dolorem molestiae voluptas et, tenetur optio cumque deserunt ab totam."
            />
          </div>
        </div>
      </div>
      </section>
      
    </div>
  );
}

export default App;
