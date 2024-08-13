import { useEffect, useState } from "react";
import {
  getUserData,
  logout,
  refreshToken,
} from "../../../api/userApi/userApi";


// A component to consume user data end point
const ProfileContainer = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setLoading(true);
    setUser(null);

    const UserData = async () => {
      try {
        const response = await getUserData();
        setUser(response);
      } catch (error) {
        console.log("Error getting user data", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    UserData();
  }, []);

  //   useEffect(() => {
  //     setError(null);
  //     setLoading(true);
  //     setUser(null);

  //     const UserData = async () => {
  //       try {
  //         const response = await refreshToken();
  //         setUser(response);
  //       } catch (error) {
  //         console.log("Error getting user data", error);
  //         setError(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     UserData();
  //   }, []);

  //   useEffect(() => {
  //     setError(null);
  //     setLoading(true);
  //     setUser(null);

  //     const UserData = async () => {
  //       try {
  //         const response = await logout();
  //         setUser(response);
  //       } catch (error) {
  //         console.log("Error logging out", error);
  //         setError(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     UserData();
  //   }, []);
  console.log(user);
  console.log(loading);
  console.log(error);
  return <div></div>;
};

export default ProfileContainer;
