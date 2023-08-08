import { Link, NavLink, useNavigate} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
//import { remove } from "../stores/guestSlice";
import { addid,removeid } from "../stores/slices/userIDSlice";
import { useState,useEffect } from "react"
import { ipAddress } from "../assets/EnvironmentalDetails";


 export const fetchUserData = async (loginStat) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    try {
      const authToken = loginStat; 
      console.log("useE "+authToken)
      const response = await fetch(ipAddress+"/api/auth/getuser", {
        method: "POST",
        headers: {
          "auth-token": authToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("data = ",data._id)
        dispatch(addid(data._id))
      } else {
        //alert("Error fetching user data");
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
