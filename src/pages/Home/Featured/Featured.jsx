import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import './Featured.css'
import feimg from '../../../assets/home/featured.jpg'
export default function Featured() {
  return (
     <div className="featured-img text-white bg-fixed mb-12">
        <SectionTitle
           Heading={"featured"}
           subHeading={"this is Featured part"}
        >
           
        </SectionTitle>
        <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 px-8 py-16">
           <div>
              <img src={feimg} alt="" />
           </div>
           <div className="md:ml-10">
              <p>this is feature page and it is amazing</p>
              <p></p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque? Esse laudantium quo beatae deserunt deleniti dolorum asperiores, quam odit itaque eum, amet eveniet sed sunt modi quidem maiores! Deleniti!</p>
              <button className="btn btn-outline btn-border-0 border-b-4">see more--</button>
           </div>
        </div>
    </div>
  )
}
