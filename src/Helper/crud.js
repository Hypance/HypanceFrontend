import { baseURL } from "../Constants/constant";
import axios from "axios";

export const getData = async (url) => {
  var data;
  var config = {
    method: "get",
    url: url,
  };
  await axios(config)
    .then(async function (response) {
      data = await response.data;
    })
    .catch(function (error) {
      data = error;
    });
  return data;
};

export const postData = (url, form) => {
  var data;
  var config = {
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
    },
    data: form,
  };

  axios(config)
    .then(function (response) {
      data = response;
    })
    .catch(function (error) {
      data = error;
    });
  return data;
};
