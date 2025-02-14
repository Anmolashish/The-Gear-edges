import React from "react";

export default function HomePage3() {
  return (
    <div className="home-page-3">
      <div className="left-overlay"></div>
      <div className="testimonial-main-div flex justify-center flex-column width-100 align-center">
        <div className="testimonial-heading">Our Services</div>
        <div className="scroll">
          <ul className="services-section flex justify-center align-center">
            <li className="services-div">Manufacturing</li>
            <li className="services-div">Maintainance</li>
            <li className="services-div">Cleaning</li>
            <li className="services-div">Assembling</li>
            <li className="services-div">Bulk Production</li>
            <li className="services-div">Gear Inspection</li>
          </ul>

          <ul
            className="services-section flex justify-center align-center"
            aria-hidden="true"
          >
            <li className="services-div">Manufacturing</li>
            <li className="services-div">Maintainance</li>
            <li className="services-div">Cleaning</li>
            <li className="services-div">Assembling</li>
            <li className="services-div">Bulk Production</li>
            <li className="services-div">Gear Inspection</li>
          </ul>
        </div>
        <div className="testimonial-section">
          <div className="outerdiv">
            <div className="innerdiv">
              <div className="div1 eachdiv">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detbox">
                    <p className="name">Daniel Clifford</p>
                    <p className="designation">★★★★★</p>
                  </div>
                </div>
                <div className="review">
                  <h4>Smooth and Precise</h4>
                  <p>
                    “ I recently purchased a timing pulley for a CNC project,
                    and I'm incredibly impressed with the quality. The machining
                    is precise, resulting in smooth and accurate motion. The
                    delivery was also faster than expected. Highly recommend
                    Gear Edge for their timing pulleys! <br />
                    <br />
                    The quality is outstanding, and the system is incredibly
                    robust. Installation was straightforward, and it performs
                    flawlessly. I'll definitely be using Gear Edge for future
                    projects ”
                  </p>
                </div>
              </div>
              <div className="div2 eachdiv">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detbox">
                    <p className="name">Jonathan Walters</p>
                    <p className="designation">★★★★★</p>
                  </div>
                </div>
                <div className="review">
                  <h4>Good Quality</h4>
                  <p>
                    “ The timing pulley itself is excellent – well-made and
                    performs as expected. Gear Edge's customer service was
                    fantastic. They quickly rectified the mistake and sent the
                    correct pulley. Would definitely buy from them again. ”
                  </p>
                </div>
              </div>
              <div className="div3 eachdiv">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detbox">
                    <p className="name dark">Kira Whittle</p>
                    <p className="designation">★★★★★</p>
                  </div>
                </div>
                <div className="review dark">
                  <h4>Great Product, Helpful Support</h4>
                  <p>
                    “I'm very happy with the rack and pinion. It's well-made and
                    performs smoothly. I had a question about the installation,
                    and Gear Edge's support team was very helpful and
                    responsive. They guided me through the process and got me up
                    and running quickly. I needed replacement bushes for a
                    vintage machine, and Gear Edge provided excellent quality
                    parts. They fit perfectly and have restored the machine's
                    smooth operation. The price was reasonable, and the shipping
                    was fast. Highly recommend Gear Edge for their bushes! These
                    bushes are a good value for the price. They're well-made and
                    seem durable.”
                  </p>
                </div>
              </div>
              <div className="div4 eachdiv">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detbox">
                    <p className="name dark">Jeanette Harmon</p>
                    <p className="designation">★★★★★</p>
                  </div>
                </div>
                <div className="review dark">
                  <h4>Perfect for My Application</h4>
                  <p>
                    “ Gear Edge's rack and pinion system was exactly what I
                    needed for my linear motion project. The quality is
                    outstanding, and the system is incredibly robust.
                    Installation was straightforward, and it performs
                    flawlessly. ”
                  </p>
                </div>
              </div>
              <div className="div5 eachdiv">
                <div className="userdetails">
                  <div className="imgbox">
                    <img
                      src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg"
                      alt=""
                    />
                  </div>
                  <div className="detbox">
                    <p className="name">Patrick Abrams</p>
                    <p className="designation">★★★★★</p>
                  </div>
                </div>
                <div className="review">
                  <h4>Excellent service! Good job</h4>
                  <p>
                    “ I sent in a set of gears for inspection and cleaning, and
                    Gear Edge did an outstanding job. They were very thorough
                    and identified a minor issue that I wasn't aware of. The
                    gears came back looking like new, and the machine is running
                    much smoother now. <br />
                    <br />
                    Their communication was excellent throughout the process.
                    I'm happy with the cleaning and inspection service. My gears
                    were cleaned thoroughly, and the report I received was
                    detailed. The quality of the work was worth the wait ”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
