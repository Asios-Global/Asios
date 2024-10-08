import React from 'react'
import aboutus from '../assets/4.webp'
import vision from '../assets/vision.jpg'
import mission from '../assets/mission1.png'

const Section = ({ title, imgSrc, text }) => (
  <div className="bg-gray-100 py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-2xl md:text-3xl text-center font-semibold mb-8">{title}</div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <img src={imgSrc} alt={title} className="w-full md:w-[400px] h-auto" />
        <div className="text-base md:text-lg space-y-4">
          {text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const card = [
  {
    title: "Foundations of Excellence",
    desc: "In 2019, Asios laid the cornerstone for a journey dedicated to tile craftsmanship. With a vision of redefining spaces, we embarked on a mission to offer unparalleled quality and design. This marked the beginning of a legacy built on precision and passion."
  }, {
    title: "Innovation Unleashed",
    desc: "In the year 2020, Asios embraced innovation as a driving force. We expanded our product range to incorporate cutting-edge designs, materials, and technology. Despite global challenges, our commitment to delivering excellence in every tile remained unwavering, earning us the trust of our growing clientele. "
  }, {
    title: "Design Diversity",
    desc: "In 2021, Asios celebrated a year of design diversity. We introduced an array of styles and patterns to cater to various tastes and preferences. The year witnessed the blossoming of creativity, making us a go-to destination for those seeking not just tiles but a curated experience in enhancing their living spaces."
  }, {
    title: "Pinnacles Of Success",
    desc: "As of 2023, Asios has reached new heights. Our commitment to quality, innovation, and customer satisfaction has resulted in an ever-expanding presence. With a continued focus on excellence, we have become synonymous with toptier tile solutions, enriching homes and commercial spaces across the globe. "
  }
]
const AboutUS = () => {
  return (
    <div>
      <div className=''>

        <div className="relative  bg-center w-full h-[600px]" style={{ backgroundImage: `url(${aboutus})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Asios Global</h1>
              <p className="text-lg md:text-2xl mb-2">Leading exporter of high-quality ceramic tiles including Porcelain, Slab, Wall Tiles, and more.</p>
              <p className="text-md md:text-xl">Providing excellent products and services that make our customers satisfied is the foundation of our success.</p>
            </div>
          </div>
        </div>
        <div className=' container'>
          <div>
            <div className='text-2xl md:text-3xl mt-10 text-center font-semibold'> OUR JOURNEY</div>
            <div className='my-6 flex flex-wrap justify-center  gap-4 gap-y-7'>
              {card.map((data) => (
                <div className="relative p-6 max-w-sm mx-auto bg-[#e0dede] rounded-xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer hover:translate-y-5 transition-transform duration-300">
                  <div className=" text-center text-gray-800">
                    <h2 className="text-xl  md:text-2xl font-bold mb-2">{data.title}</h2>
                    <p className="md:text-lg text-sm text-justify">
                      {data.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
      <Section
        title="OUR VISION"
        imgSrc={vision}
        text={[
          "Our vision is to become the most trustable supplier of ceramic products globally with the best in service. We value our customers and build strong connections with them to expand our global reach and come together as a strong team.",
          "As a tiles exporter, we aim to deliver high-quality products with consistent standards and top-class design at competitive costs."
        ]}
      />
      <Section
        title="OUR MISSION"
        imgSrc={mission}
        text={[
          "We have a mission to supply tiles across the globe with top-class design and quality that leave a lasting impression.",
          "We always approach innovative ideas to produce superior quality products in a cost-efficient and eco-friendly manner. Our management ensures timely delivery by taking care of production, packaging, and shipment."
        ]}
      />
    </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUS