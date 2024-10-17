import axios from "axios";
import Cookies from "js-cookie";
const headers = {
  "x-apikey": "a5cea1d5-13e7-4c56-acb8-be8860347303",
};
export const GetUserInfo = async (id) => {
  const res = await axios.get(
    "https://fclintraprojectapi-2c9b.api.codehooks.io/main/users",
    {
      headers,
    }
  );
  return res.data.filter((a) => a.id == id);
};

export const postSignIn = async (id) => {
  axios
    .get("https://fclintraprojectapi-2c9b.api.codehooks.io/main/users", {
      headers,
    })
    .then((res) => {
      Cookies.set("id", [
        res.data.filter((a) => a.id == id)[0].id,
        res.data.filter((a) => a.id == id)[0].role,
        res.data.filter((a) => a.id == id)[0].name,
      ]);
    });
};
