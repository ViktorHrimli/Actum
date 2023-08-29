export async function getDataTeam() {
  // const res = await fetch(
  //   "https://actum-strapi-app.onrender.com/api/team-actums"
  // );

  const res = await fetch("http://127.0.0.1:1337/api/team-actums?populate=*");

  return res.json();
}
