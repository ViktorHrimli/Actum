import fs from "fs/promises";
import path from "path";

const reviewsFilePath = path.join(process.cwd(), "reviews.json");

export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Next.js!" });

  // const allReviews = await axios(
  //   "https://script.google.com/macros/s/AKfycbzDPGoplMwrF7Rd0pHR2SfjcfdzNNQvpmt8d6qGmAHtIQ3AH3THKS2qYHZo21xOSwUu/exec"
  // ).then((data) => data.data);

  // const reviewsPromises = allReviews.map((item) =>
  //   axios(item.v).then((data) => data.data)
  // );
  // const reviewsData = await axios.all(reviewsPromises);

  // const reviewsResutls = reviewsData.map((res) => {
  //   const $ = cheerio.load(res);

  //   const name = $(".tgme_widget_message_author_name").text();
  //   const body = $(".tgme_widget_message_text").text();
  //   const photo = $("img").attr("src");
  //   const date = $(".datetime").text();

  //   return { name, body, photo, date };
  // });

  // fs.writeFileSync(reviewsFilePath, JSON.stringify(reviewsResutls, null, 2));

  // req.status(200).json({ status: "OK" });
}
