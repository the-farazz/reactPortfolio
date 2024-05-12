import "./work.css";
import portfolioOne from "./../../assets/portfolio-1.png";
import portfolioTwo from "./../../assets/portfolio-2.png";
import portfolioThree from "./../../assets/portfolio-3.png";
import portfolioFour from "./../../assets/portfolio-4.png";
import portfolioFive from "./../../assets/portfolio-5.png";
import portfolioSix from "./../../assets/portfolio-6.png";

const Work = () => {
  return (
    <section id="works">
      <div className="workPara">
        <h2>My Portfolio</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
          maiores illum esse facere quae ea ratione soluta vel quod porro?
          Perspiciatis eum vero a dignissimos laboriosam ipsa hic, cupiditate
          dolor.
        </p>
        <div className="projects">
          <img src={portfolioOne} alt="" />
          <img src={portfolioTwo} alt="" />
          <img src={portfolioThree} alt="" />
          <img src={portfolioFour} alt="" />
          <img src={portfolioFive} alt="" />
          <img src={portfolioSix} alt="" />
        </div>
        <button className="workBtn">See More</button>
      </div>
    </section>
  );
};

export default Work;
