import "./About.css";
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return <section id="about">
    <h5>Get to Know</h5>
    <h2>About me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Exprience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>200+</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>80+ Completed </small>
          </article>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat unde minima similique. Mollitia quisquam rem aperiam quae! Odit possimus omnis libero veniam aliquid tenetur voluptatum explicabo quis deserunt porro?</p>
     <a href="#contact" className="btn btn-primary">Lets Talk</a>
      </div>
    </div>
  </section>
};

export default About;
