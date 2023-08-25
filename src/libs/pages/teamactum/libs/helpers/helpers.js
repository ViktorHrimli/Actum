export async function getDataTeam() {
  try {
    const res = await fetch(
      "https://actum-strapi-app.onrender.com/api/team-actums"
    );
    return res.json();
  } catch (error) {
    throw new Error("Filed request");
  }
}
