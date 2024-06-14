
import bg from '../../assets/icon/lg.png'
export default function PersonCard({ person }) {

  
  return (
   
      

       <div className='  border-red-800 border-x-4 rounded-full mt-7' >
      
      <div className="card  text-white font-semibold shadow-xl mt-7" style={{ backgroundImage: `url(${bg})`  } }>
  <figure><img className="h-[300px] rounded-t-full w-full" src={person.image} alt="Shoes" /></figure>
        <div className="card-body border-t-4 border-red-800">
          <div>
              <div className="card-actions justify-end" >
              {/* <div className="badge  badge-outline  border-red-800 border-4 hue-rotate-15">{person.about}</div> */}
            </div> 
    <h1 className="card-title">
            {person.name}
           </h1>
         
          </div>
             
              <p>Experience: { person.experience} <span className='text-red-600'></span> </p>
          <div className="card-actions justify-end">
         
  <button>      Delivery Completed: 
                <div className="badge badge-outline  border-red-800 border-x-4">{ person.order}</div> </button>

           
          
          
    </div>
  </div>
</div>
    </div>
    
  );
}

