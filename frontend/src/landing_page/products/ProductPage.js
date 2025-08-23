import LeftSection from "./LeftSection.js"
import RightSection from "./rightSection.js";

function ProductPage() {
    return ( 
        <>
            
            <div className="row text-center mt-3 mb-7 ">
                <h2> Indian Agricultural Commodity Analytics </h2>
                <p> Sleek, Modern , Intuitive Renting Platform </p>
                <p> Check more <a href=""> investment offers -</a></p>
            </div>
            
            
           <LeftSection
            imageUrl="https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/ExtraLarge/all-agriculture-implements-20250619114005427.jpg"
            productName="Power Weeder"
            description={"all-equiep : Buy the 7 HP Agricultural Power Weeder | BP-700 at wholesale rates. Get a high-quality Mini Power Weeder with an air-cooled engine, offering durability and top performance. Krishitool ensures the best prices and exclusive brand discounts, so you can purchase with confidence and enjoy great offers.."}
            link="https://www.aajjo.com/product/all-agriculture-implements-in-jaipur-rbd-machine-tools-pvt-ltd"

            />

            <RightSection
            imageUrl="https://tiimg.tistatic.com/fp/1/008/262/fully-automatic-rotary-power-tiller-for-agriculture-use-752.jpg"
            productName="Tiller"
            description={"An automatic tiller, also known as a power tiller or walking tractor, is a compact, self-propelled, two-wheeled machine used in agriculture for primary land preparation and other farm tasks. It features a rotating set of tines, or blades, that till the soil, breaking up compacted earth, aerating it, and mixing in organic matter while also removing weeds. These versatile machines, powered by a gasoline or diesel engine, can be fitted with various attachments to perform a range of operations, including ploughing, harrowing, sowing, fertilizing, spraying, pumping water, and even transporting crops, making them invaluable for small to medium-sized farms."}
            link="https://www.tradeindia.com/products/highly-durability-and-strong-blue-tractor-cultivator-machine-for-agricultural-use-7625613.html"
            />

            <LeftSection
            imageUrl="https://5.imimg.com/data5/AY/WA/DU/SELLER-7696205/agriculture-battery-operated-spray-machine-1000x1000.jpg"
            productName="Sprayer"
            description={"A sprayer is a device used to spray a liquid, where sprayers are commonly used for projection of water, weed killers, crop performance materials, pest maintenance chemicals, as well as manufacturing and production line ingredients."}
            link="https://www.moglix.com/kisankraft-18l-1a-battery-sprayer-kk-bbs-185/mp/msn457m6podn9j?s_kwcid=AL!10177!3!330032743408!b!!g!!&utm_source=google_shopping&utm_medium=seo&utm_network=google_freelisting&srsltid=AfmBOor5nu8YxmerjzSx307h_uKr2V6EunYK-q1YGWdAf1dN15EEQE5Pv5k"
            />

            <RightSection
            imageUrl="https://agriwow.com/wp-content/uploads/2024/05/Untitled-5.jpg"
            productName="Grass Cutter"
            description={"A grass cutter is a mechanical tool that uses revolving blades to trim grass to a uniform height, making it suitable for lawns, gardens, and some agricultural applications. These machines are powered by various sources, including petrol engines, electric motors, or manual force, and can be walk-behind, ride-on, or handheld designs. Modern grass cutters often feature adjustable cutting heights and can be versatile tools for landscaping, weeding, and even harvesting crops."}
            link="https://www.moglix.com/shwarya-52cc-heavy-type-2-mini-tiller-cultivator-1030799/mp/msno5wn74z7w51?srsltid=AfmBOorrR10lIAezn0OmDT47cPICEnt6fQlWGRlq9UIjMdYth6NWYRAm0uI"
            />
        </>
    )
}

export default ProductPage;