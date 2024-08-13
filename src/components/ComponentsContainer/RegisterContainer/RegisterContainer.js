import { useEffect, useState } from "react";
import { registerApi } from "../../../api/userApi/userApi";

// A component to get registeration data and consume register end point
const RegisterContainer = () => {
  const [register, setRegister] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const registerUser = async () => {
      try {
        const response = await registerApi({
          national_id: "string",
          username: "PTuI+DFZzquNwzSwA04J60K_",
          first_name: "string",
          last_name: "string",
          email: "user@example.com",
          password: "string",
          phone_number: "string",
          identity: "P",
          gender: "M",
          location: "string",
          city: "string",
          country: "string",
          date_of_birth: "2024-07-29",
          nationality: "string",
        });
        setRegister(response);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    registerUser();
  }, []);
  console.log(register);
  console.log(loading);
  return <div></div>;
};

export default RegisterContainer;
