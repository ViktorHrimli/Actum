const getFormById = (id) => {
  const formSectionId = document.getElementById(id);
  if (formSectionId) {
    formSectionId.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export { getFormById };
