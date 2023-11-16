import axios from "axios";
import cheerio from "cheerio";

const {
  ACCESS_CONTROL_ALLOW_CREDENTIALS,
  ACCESS_CONTROL_ALLOW_ORIGIN,
  ACCESS_CONTROL_ALLOW_METHODS,
  ACCESS_CONTROL_ALLOW_HEADERS,
} = process.env;

const unPackageTelegramReview = async () => {
  const allReviews = await axios(
    "https://script.google.com/macros/s/AKfycbzDPGoplMwrF7Rd0pHR2SfjcfdzNNQvpmt8d6qGmAHtIQ3AH3THKS2qYHZo21xOSwUu/exec"
  ).then((data) => data.data);

  const reviewsPromises = allReviews.map((item) =>
    axios(item.v).then((data) => data.data)
  );
  const reviewsData = await axios.all(reviewsPromises);

  return reviewsData.map((res) => {
    const $ = cheerio.load(res);

    const name = $(".tgme_widget_message_author_name").text();
    const body = $(".tgme_widget_message_text").text();
    const photo = $("img").attr("src");
    const date = $(".datetime").text();

    return { name, body, photo, date };
  });
};

export { unPackageTelegramReview };
