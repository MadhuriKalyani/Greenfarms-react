
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import brand from "../Images/About us.webp";
import irrigation from "../Images/irrigation.avif";
import oragnic from "../Images/organic-fertilizer.jpg";


function ImageSlider() {
  

  return (
    <div>
      <div className="farm-background-section">
        <div className="heading-tagline">
          <h1>Green Farms</h1>
          <p>Experience The Freshness</p>
        </div>
      </div>
      <div className="about-us">
        <div className="container">
          <div className="about-us-main-section">
            <div className="brand-story-content">
              <div className="row">
                <div className="col-md-6">
                  <div className="brand-main-content">
                    <h1>Brand Story</h1>
                    <p>
                      At Green Farms, our journey began with a simple belief —
                      food should be grown the way nature intended. From a young
                      age, I was fascinated by the purity of home-grown
                      vegetables, fruits and the beautiful bond between farmers and the
                      land. Watching my family cultivate crops using
                      traditional, chemical-free methods inspired me to continue
                      this legacy.
                    </p>
                    <p>
                      But as years passed, I noticed that most vegetables amd fruits in the
                      market were grown using pesticides and artificial
                      chemicals. This affected not only the taste of the food
                      but also the health of families and the health of our
                      soil.
                    </p>

                    <p>
                      That’s when I decided to start Green Farms — a place where
                      natural farming is respected, where every seed is grown
                      with care, and where people can trust the food they eat.
                      What started with a small piece of land and a big dream
                      slowly turned into a sustainable farm that provides pure,
                      fresh, and naturally grown produce for our community.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-image">
                    <img src={brand} alt="Brand Story"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="farming-procees-section">
            <div className="farming-process-inner-section">
              <div className="process-text">
                <h1>Our Farming Process</h1>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="farming-irrigation">
                    <img src={oragnic} alt="Organic Fertlizer"></img>
                    <img src={irrigation} alt="Irrigation"></img>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="farming-process-content">
                    <p><i class="fa-solid fa-leaf"></i> No chemicals, no pesticides — we use natural fertilizers and plant-based sprays.</p>

<p><i class="fa-solid fa-leaf"></i> Healthy soil culture — compost, cow manure, and bio-fertilizers to nourish the land.</p>
<p><i class="fa-solid fa-leaf"></i> Fresh water irrigation — clean water sources for every crop.</p>
<p><i class="fa-solid fa-leaf"></i> Harvest at the right time — we pick vegetables, Fruits only when they are naturally ripe.</p>
<p><i class="fa-solid fa-leaf"></i> Eco-friendly packaging — we avoid plastic as much as possible.</p>
<p><i class="fa-solid fa-leaf"></i> Same-day delivery — freshly harvested vegetables/Fruits reach your home quickly.</p>
<div className="short-note">
<p> Our goal is simple: Grow food that keeps you healthy and keeps the earth healthy too.At Green Farms, every step of our process is rooted in purity and care. From the way we prepare the soil to the moment we deliver fresh produce to your home, we focus on natural methods that protect your health and the environment. Our commitment is simple — to grow food the right way, with honesty, responsibility, and love for the land.</p>
</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default ImageSlider;



