import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


export default function useDeliver() {
   
   const {refetch , data: delivers = [] } = useQuery({
      queryKey: ['delivers'],
      queryFn: async () => {
         const res = await axios.get(`http://localhost:5000/delivers`);
         return res.data;
      }
      
   })
   return [delivers, refetch]
//    const { data: cart = [] } = useQuery({
//       queryKey: ['cart'],
//       queryFn: async () => {
//          const res = await axios.get('http://localhost:5000/carts');
//          return res.data;
//       }
//    })
//   return [cart]
}
