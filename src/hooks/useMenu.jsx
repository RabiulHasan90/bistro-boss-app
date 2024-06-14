
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

export default function useMenu() {
   const axiosPublic = useAxiosPublic();
//  const [menu, setMenu] = useState([])
//  const [loading, setLoading] = useState(true)
//    useEffect(() => {
//       fetch('https://bistro-boss-server-ten-psi.vercel.app/menu')
//          .then(res => res.json())
//          .then(data => {
//             setMenu(data)
//             setLoading(false)
//          })
   //    }, [])
     const {data: menu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })


    return [menu, loading, refetch]
   // return [menu, loading]
}
