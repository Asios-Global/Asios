import React,{useState} from 'react'
import service1 from '../assets/office-building.png'
import service2 from '../assets/logistics.png'
import service3 from '../assets/construction-site.png'
import { FiArrowUpRight } from 'react-icons/fi'

const servicesList = [
    {
        head: 'Company Profile', para: 'Headquartered in Morbi (Ceramic Capital of India), Asios Ceramic has always stood out from the crowd. It emerged with the objective of creating a material category suitable for interior and exterior construction.', icon: service1
    },
    { head: 'Infrastructure', para: 'The strength and success of  Asios Ceramic lies in its sound infrastructure which has advanced manufacturing facilities that comprises of latest machinery and advent-grade technologies.', icon: service3 },
    { head: 'Export Coverage', para: 'High performance levels and refined aesthetic quality, have made Asios Ceramic products greatly acknowledged by numerous industry experts in the international panorama.', icon: service2 },

]

const WhyChooseUs = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e, index) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / (width / 2);
        const y = (e.clientY - top - height / 2) / (height / 2);
        setMousePosition({ x, y });
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
   
  return (
    <>
    <div className='mt-10 flex justify-center items-center flex-1  flex-col sm:flex-row '>
    <div className=' flex items-center mb-3 sm:mb-0 '>
        <span className='font-bold md:text-4xl sm:text-2xl text-xl text-center md:w-[250px] w-auto'>  Who We Are</span>
        <div className='w-[3px] h-[90px] bg-primary mt-1 mx-4 sm:flex hidden' ></div>
    </div>
    <div className='text-[12px] sm:text-[13px] md:text-[14px] font-medium ' >
        Asios is the name which is synonymous of qualitative products at most competitive
        prices. Our customer-centric approach made us the market leader in the ceramic industry. Clients are our most
        valuable asset. We believe in providing the best to our clients. We are the manufacture where all your needs
        will get catered under one umbrella. Creating a good living environment for you at the best prices is our
        duty.
    </div>

</div>
<div className='mt-10 '>
    <div className='font-bold md:text-4xl sm:text-2xl text-xl text-center flex flex-col justify-center'>
        Our Profile
    </div>
    <div className="md:pt-10 sm:pt-8 pt-5">
        <div className="grid  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-5 gap-3 " >
            {servicesList.map((item, i) => {
                const { head, para, icon } = item;
                const isHovered = hoveredIndex === i;
                return (
                    <div
                        key={i}
                        className="service-item relative"
                        onMouseMove={(e) => handleMouseMove(e, i)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className="group border border-gray hover:bg-white px-5 py-5 rounded-2xl md:h-[410px] sm:h-[340px] h-[330px] flex flex-col justify-between hover:shadow-lg relative overflow-hidden"
                            style={{
                                transform: isHovered ? `rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)` : 'none'
                            }}
                        >
                            <div className="xl:text-xl lg:text-lg md:text-base text-sm font-semibold px-3 py-2 bg-white group-hover:text-white group-hover:bg-primary rounded-lg w-fit z-90 relative">{head}</div>
                            <div className={` z-90 relative ${isHovered ? '-translate-y-7' : 'translate-y-16'} transition-transform duration-700`}>
                                <div className="sm:text-base text-sm">{para}</div>
                            </div>
                            <div className="sm:p-3 p-2 bg-primary rounded-full w-fit mt-4">
                                <FiArrowUpRight className="sm:w-7 sm:h-7 w-5 h-5 text-white" />
                            </div>
                            <div className="absolute bottom-4 right-4 z-10">
                                <img
                                    src={icon}
                                    alt="main_logo"
                                    width={150}
                                    height={150}
                                    className={`object-cover w-[150px] h-[150px] ${isHovered ? 'translate-x-0' : 'translate-x-[120%]'} transition-transform duration-700 md:w-[150px] md:h-[150px] !w-[120px] !h-[120px]`}
                                />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
</div>
</>
  )
}

export default WhyChooseUs