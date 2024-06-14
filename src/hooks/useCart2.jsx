import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


export default function useCart2() {
   
   const {refetch , data: cart = [] } = useQuery({
      queryKey: ['cart'],
      queryFn: async () => {
         const res = await axios.get(`http://localhost:5000/carts/s`);
         return res.data;
      }
      
   })
   return [cart, refetch]
//    const { data: cart = [] } = useQuery({
//       queryKey: ['cart'],
//       queryFn: async () => {
//          const res = await axios.get('http://localhost:5000/carts');
//          return res.data;
//       }
//    })
//   return [cart]
}
