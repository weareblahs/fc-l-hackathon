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
        res.data.filter((a) => a.id == id)[0].pointID,
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
      Cookies.set("tempCheckInData", JSON.stringify(data));
    });
  axios
    .put(
      `https://fclintraprojectapi-2c9b.api.codehooks.io/main/points/${
        Cookies.get("id").split(",")[3]
      }`,
      { user, points: parseInt(Cookies.get("points")) + 1 },
      {
        headers,
      }
    )
    .then((res) => console.log(res.data));
  axios
    .get("https://fclintraprojectapi-2c9b.api.codehooks.io/main/checkpoints", {
      headers,
    })
    .then((res) =>
      Cookies.set(
        "lastCheckIn",
        res.data.filter((a) => a._id == checkpoint)[0].name
      )
    );
};

export const checkInInfo = async (c) => {
  // c = checkpoint
  axios
    .get("https://fclintraprojectapi-2c9b.api.codehooks.io/main/checkpoints", {
      headers,
    })
    .then((res) =>
      Cookies.set("lastCheckIn", res.data.filter((a) => a._id == c)[0].name)
    );
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

export const cookieViewCheckin = () => {
  // checkpoint json

  axios
    .get("https://fclintraprojectapi-2c9b.api.codehooks.io/main/checkpoints", {
      headers,
    })
    .then((res) => {
      localStorage.setItem("checkpoints", JSON.stringify(res.data));
    });
  // user list
  axios
    .get("https://fclintraprojectapi-2c9b.api.codehooks.io/main/users", {
      headers,
    })
    .then((res) => {
      localStorage.setItem("userList", JSON.stringify(res.data));
    });
  // recent
  axios
    .get("https://fclintraprojectapi-2c9b.api.codehooks.io/main/checkindata", {
      headers,
    })
    .then((res) => {
      localStorage.setItem(
        "recentCheckpoints",
        JSON.stringify({ data: res.data, updated: Date.now() })
      );
    });
};

export const addPoints = (u, p) => {
  // u = user
  // p = points
  // note: 1 harvest = 1 point according to that hard-coded system
  console.log(u, p);
  axios
    .get(`https://fclintraprojectapi-2c9b.api.codehooks.io/main/users/${u}`, {
      headers,
    })
    .then((res) => {
      Cookies.set("userPointID", res.data.pointID);
    });
  axios
    .get(
      `https://fclintraprojectapi-2c9b.api.codehooks.io/main/points/${Cookies.get(
        "userPointID"
      )}`,
      {
        headers,
      }
    )
    .then((res) => {
      Cookies.set("points", res.data.points);
    });
  axios
    .put(
      `https://fclintraprojectapi-2c9b.api.codehooks.io/main/points/${Cookies.get(
        "userPointID"
      )}`,
      { user: u, points: parseInt(Cookies.get("points")) + parseInt(p) },
      {
        headers,
      }
    )
    .then((res) => {
      alert(
        `${p} points added. Current user's balance is now ${res.data.points} points`
      );
    });
};
