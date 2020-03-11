import { useEffect, useState } from "react";
import { getRestaurantsByTerm } from "../providers";

export default searchTerm => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async term => {
    const {
      ok,
      businesses,
      errorText = "Something went wrong!"
    } = await getRestaurantsByTerm({ term });

    ok ? setRestaurants(businesses) : setErrorMessage(errorText);
  };

  useEffect(() => {
    onSubmit("pizza");
  }, []);

  return [onSubmit, restaurants, errorMessage];
};
