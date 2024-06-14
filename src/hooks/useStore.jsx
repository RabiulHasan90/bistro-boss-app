import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import useAuth from "./useAuth";



export default function useStore() {
   const { user } = useAuth();
   const {refetch , data: store = [] } = useQuery({
      queryKey: ['cart', user?.email],
      queryFn: async () => {
         const res = await axios.get(`https://bistro-boss-server-ten-psi.vercel.app/stores?email=${user.email}`);
         return res.data;
      }
      
   })
   return [store, refetch]
//    const { data: cart = [] } = useQuery({
//       queryKey: ['cart'],
//       queryFn: async () => {
//          const res = await axios.get('https://bistro-boss-server-ten-psi.vercel.app/carts');
//          return res.data;
//       }
//    })
//   return [cart]
}
