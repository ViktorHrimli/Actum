const getFormById = (id) => {
  const formSectionId = document.getElementById(id);

  formSectionId &&
    formSectionId.scrollIntoView({ behavior: "smooth", block: "start" });
};

export { getFormById };
