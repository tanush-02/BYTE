import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="*">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. How to install solar panel " />
          <br /><br />
          <a href="">Track Fertilizers issue</a> &nbsp;<br />
          <a href="">Track Govt orders and activation</a>&nbsp;<br />
          <a href="">Heavy Machine user manual</a>&nbsp;<br />
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href=""> Rent out equipments and workers  </a>
            </li>
            <li>
              <a href=""> Get Insurance right Today ! at 25% off</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;