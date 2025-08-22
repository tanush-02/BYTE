function NotFound() {
  return (
    <div className="container p-5 mb-5">
        
      <div className="row text-center">
        <h1 className="mt-5">404 Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>

      <div className="row">
            <img
            src="media/images/404.svg"
            alt="404 Not Found"
            className="img-fluid mb-5 d-block mx-auto"
            style={{ width: "100%", maxWidth: "600px" }}

            />
        </div>
    </div>
  );
}

export default NotFound;