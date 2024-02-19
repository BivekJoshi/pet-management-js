import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth/auth-api";
import toast from "react-hot-toast";
import { setUser, setUserType } from "../../utility/cookieHelper";

/*________________________LOGIN_____________________________________*/
export const useLogin = ({ onSuccess }) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation(
      ["login"],
      async ({ email, password }) => {
        try {
          const response = await login(email, password);
          return response.data;
        } catch (error) {
          throw error.response.data.message || "An error occurred during login";
        }
      },
      {
        onSuccess: (data) => {
            console.log(data,"data ");
            
        //   setUser(data?.tokenId);
        //   setUserType(data?.userType);
          toast.success("Login Successful");
          queryClient.invalidateQueries("getLoggedinUserDetail");
        //   if (data?.userType === "SUPER_ADMIN") {
        //     navigate("/superAdminProfile");
        //   } else if(data?.userType==="PET_OWNER"){
        //     navigate("/petOwnerProfile");
        //   }else{
        //     navigate("/adminProfile");
        //   }
        },
        onError: (err, _variables, _context) => {
          toast.error(err);
        },
      }
    );
  };