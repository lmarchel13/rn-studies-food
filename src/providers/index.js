import yelp from "../api/yelp";

export const getRestaurantsByTerm = async ({
  term = "pizza",
  limit = 50,
  location = "sao paulo"
}) => {
  let businesses = [];
  let ok = false;

  try {
    const { data } = await yelp.get("/search", {
      params: {
        term,
        limit,
        location
      }
    });

    ok = true;
    businesses = data.businesses;
  } catch (error) {
    console.log("error :", error);
  }

  return { ok, businesses };
};

export const getRestaurantById = async id => {
  const { data } = await yelp.get(`/${id}`);

  return data;
};
