import axios from "axios";
import cheerio from "cheerio";

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
    const link = $(".tgme_widget_message_link a").attr("href");

    return { name, body, photo, date, link };
  });
};

export { unPackageTelegramReview };
