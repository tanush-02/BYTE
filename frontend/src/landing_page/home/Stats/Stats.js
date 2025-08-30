export default function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5 col-md-6">
          <h1 className="fs-2 mb-5">Grow with confidence</h1>
          <h2 className="fs-4">Vision and Mission</h2>
          <p className="text-muted">
            To be a one-stop solution for the farm economy.
To create value for farmers and stakeholders by providing integrated agri-solutions to all farm needs.
          </p>
          <h2 className="fs-4">Easy access</h2>
          <p className="text-muted">
            Get easy access to the right tools, resources, and updates to make farming smarter and simpler.From expert guidance to real-time information, everything you need is just a click away.
          </p>
          <h2 className="fs-4">The KISSAN universe</h2>
          <p className="text-muted">
            The KISSAN brings together farmers, tools, and technology into one simple ecosystem.
            From crop guidance to market updates, everything you need for farming is connected here.
          </p>
          <h2 className="fs-4">Trade of Agriculture Products</h2>
          <p className="text-muted">
           The previous year witnessed notable shifts in agricultural trade, with exports of key crops rising in some categories while others faced restrictions.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="images/submain.png" style={{ width: "90%" }} 
          className="mb-5 img-fluid d-block mx-auto" alt="Stats"
          />
          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}