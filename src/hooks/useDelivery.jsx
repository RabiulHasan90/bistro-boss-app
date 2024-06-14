import { useQuery } from "@tanstack/react-query";
import useAnxiosSecure from "./useAnxiosSecure";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";



const useDelivery = () => {
const { user } = useAuth();
   const axiosPublic = useAxiosPublic();
const { data: isDelivery, isPending: isDeliveryLoading } = useQuery({
queryKey: [user?.email, 'isDelivery'],
queryFn: async () => {
const res = await axiosPublic.get(`/users/deliveryman/${user.email}`);
console.log(res.data); 
return res.data?.deliveryman;
}
})
return [isDelivery, isDeliveryLoading]
};

export default useDelivery;