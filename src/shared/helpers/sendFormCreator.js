class SendForm {
  sendForByError(data, searcParams) {
    const makeObjParams = storage.getInfo(searcParams);

    const errorObj = {
      ...makeObjParams,
      errorcond: true,
      type: "form",
      telephone: phoneNumber,
      client,
      pagename,
      question,
      service: selectServices,
      messenger: selectValue,
    };

    const data = storage.sendObjData(errorObj);

    console.log(data);
    // axios.post("/api/form", data);
  }
  sendForByMessenger() {}
  sendForBySuccsses() {}
}

const sendStore = new SendForm();

export { sendStore };
