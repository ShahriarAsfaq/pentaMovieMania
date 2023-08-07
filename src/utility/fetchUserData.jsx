import { Link, NavLink, useNavigate} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
//import { remove } from "../stores/guestSlice";
import { addid,removeid } from "../stores/slices/userIDSlice";
import { useState,useEffect } from "react";


 export const fetchUserData = async (loginStat) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    try {
      const authToken = loginStat; // Replace with your actual auth token
      console.log("useE "+authToken)
      const response = await fetch("http://192.168.1.104:3000/api/auth/getuser", {
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
