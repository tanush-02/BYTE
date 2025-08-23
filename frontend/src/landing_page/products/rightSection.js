function RightSection({imageUrl,productName, description,link}) {
    return ( 
        <div className="container mt-8 mb-8">
            <div className="row mt-3 mb-7">
               
                <div className="col-6 fs-8 p-4">
                    <h3>{productName}</h3>
                    <p className="fs-7">{description}</p>
                    <a href={link}> Explore more</a>
                </div>

                <div className="col-6 right-section-image">
                    <img src={imageUrl} alt={productName} className="img-fluid mb-3"  />
                </div>
            </div>
        </div>
                
     );
}

export default RightSection;