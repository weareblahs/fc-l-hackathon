import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
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
      Cookies.set("user", res.data.filter((a) => a.id == id)[0]._id);
    });
};

export const submitCheckIn = async (user, checkpoint, time) => {
  const data = {
    user,
    checkpoint,
    time,
  };
  axios
    .post(
      "https://fclintraprojectapi-2c9b.api.codehooks.io/main/checkindata",
      { data },
      {
        headers,
      }
    )
    .then((res) => {
      console.log(res.data);
    });
};
export const point = (u) => {
  axios
    .get("https://fclintraprojectapi-2c9b.api.codehooks.io/main/points/", {
      headers,
    })
    .then((res) =>
      Cookies.set("points", res.data.filter((a) => (a.id = u))[0].points)
    );
};
