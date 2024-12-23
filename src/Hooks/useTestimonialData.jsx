import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useTestimonialData = () => {  
    const axiosPublic = useAxiosPublic()
    const {data:testimonials,isLoading,isError} = useQuery({
        queryKey:["testimonials"],
        queryFn:()=>{
            return axiosPublic('/testimonials')
        }
    })
    return {testimonials,isLoading,isError}
};

export default useTestimonialData;