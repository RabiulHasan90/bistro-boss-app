import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import './Featured.css'
import feimg from '../../../assets/home/featured.jpg'
import bg from '../../../assets/icon/bg.png'
import { Background } from "react-parallax";
export default function Featured() {
  return (
     <div className="featured-img text-white bg-fixed bg-[#1f1f68] bg-opacity-60 mb-12">
        <SectionTitle 
           Heading={"featured"}
           subHeading={""}
        >
           
        </SectionTitle>
        <div className="md:flex justify-center items-center bg-[#1f1f68] bg-opacity-60 px-8 py-16" style={{ backgroundImage: `url(${bg})`, color:'red',backgroundColor: 'rgba(11, 0, 0, 0.5)' }}>
           <div>
              <img src={feimg} alt="" />
           </div>
           <div className="md:ml-10 bg-opacity-60">
              <p>this is feature page and it is amazing</p>
              <p></p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque? Esse laudantium quo beatae deserunt deleniti dolorum asperiores, quam odit itaque eum, amet eveniet sed sunt modi quidem maiores! Deleniti!</p>
              <button className="btn btn-outline btn-border-0 border-b-4">see more--</button>
           </div>
        </div>
    </div>
  )
}
