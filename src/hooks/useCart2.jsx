import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


export default function useCart2() {
   
   const {refetch , data: cart = [] } = useQuery({
      queryKey: ['cart'],
      queryFn: async () => {
         const res = await axios.get(`https://bistro-boss-server-ten-psi.vercel.app/carts/s`);
         return res.data;
      }
      
   })
   return [cart, refetch]
//    const { data: cart = [] } = useQuery({
//       queryKey: ['cart'],
//       queryFn: async () => {
//          const res = await axios.get('https://bistro-boss-server-ten-psi.vercel.app/carts');
//          return res.data;
//       }
//    })
//   return [cart]
}
