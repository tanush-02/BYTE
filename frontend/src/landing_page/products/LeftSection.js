function LeftSection({imageUrl,productName, description, link}) {
    return (
    
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-6 left-section-image">
                    <img src={imageUrl} className="img-fluid d-block mx-auto" />
                </div>
                <div className="col-6 fs-8 p-4">
                    <h3>{productName}</h3>
                    <p className="fs-7">{description}</p>
                    <a href={link}> Try Demo</a>
                    <a className="p-5" href={link}> Learn More</a>
                </div>
            </div>
        </div>

    )
}

export default LeftSection;

    