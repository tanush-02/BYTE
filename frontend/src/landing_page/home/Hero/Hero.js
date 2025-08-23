function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
         <h1 className="mt-0">Agriculture made Smart and Safe !</h1>
        <p>
          Empowering farmers with knowledge, tools, and updates for sustainable agriculture
        </p>
        
        <img
          src="images/Heroimg.png"
          alt="Hero Image"
          className="mb-5 d-block mx-auto img-fluid"
            style={{ width: "100%" }}
        />
       
      </div>
    </div>
  );
}

export default Hero;