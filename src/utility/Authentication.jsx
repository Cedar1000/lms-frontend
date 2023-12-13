import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const signup = async ({data, setIsLoading}) => {
    const url= import.meta.env.VITE_BASE_URL;
   
    const navigate = useNavigate();
    try {
        setIsLoading(true);
        const response = await axios.post(`${url}/api/v1/users/signup`, data);

      if (response.status === 201) {
        toast.success("Registration successful!");
        localStorage.setItem("userData", response.data);
        setIsLoading(false);
        navigate('/')

      } else {
        
        toast.error("Registration failed.");
      }
    } catch (error) {
        toast.error("Registration failed.");
    }
}