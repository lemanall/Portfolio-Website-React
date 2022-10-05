import "./Services.css";
import ListItem from "./ListItem";

const Services = () => {
  const data = [];
  for (let i = 0; i < 7; i++) {
    data[i] = {
      id: i,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    };
  }

  return <section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className="service__list">
        {  data.map((item) => {
         return <ListItem key={item.id} text={item.text} />
        })}
        </ul>
      </article>

      {/* End UI */}

      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>

        <ul className="service__list">
        {  data.map((item) => {
         return <ListItem key={item.id} text={item.text} />
        })}
        </ul>
      </article>
 {/* End UI */}

 <article className="service">
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>

        <ul className="service__list">
        {  data.map((item) => {
         return <ListItem key={item.id} text={item.text} />
        })}
        </ul>
      </article>
    </div>
  </section>;
};

export default Services;
