import { storage } from "./sessionStorageManager";

class Coockies {
  coockieName = "biatv-cookie";
  coockiesObj = {};
  stateMachineUtm = {
    "(direct)": "origin",
    "(none)": null,
    "(not set)": null,
  };
  utmParams = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ];

  getCoockiesGoogle(coockieObj) {
    this.coockiesObj = {
      visitsCount: coockieObj["visitsCount"],
      currentVisitLandingPage: coockieObj["currentVisitLandingPage"],
      currentVisitOpenPages: coockieObj["currentVisitOpenPages"],
      ...this.makeReadebleUtm(coockieObj["utmDataCurrent"]),
      utmDataFirst: this.makeReadebleUtm(coockieObj["utmDataFirst"]),
    };
  }

  decodeCoockies(coock) {
    if (coock) {
      return this.getCoockiesGoogle(JSON.parse(coock));
    }
  }

  makeReadebleUtm(utmObj) {
    var newUtmObj = {};
    this.utmParams.forEach((utm) => {
      var paramsSlice = utm.slice(4);
      if (Object.keys(this.stateMachineUtm).includes(utmObj[utm])) {
        newUtmObj[paramsSlice] = null;
      } else {
        newUtmObj[paramsSlice] = utmObj[utm];
      }
    });
    return newUtmObj;
  }

  generatedCoockies(coockies) {
    this.decodeCoockies(coockies);
  }

  getCoockies() {
    if (this.coockiesObj.hasOwnProperty("visitsCount")) {
      return this.coockiesObj;
    } else {
      return storage.getInfo();
    }
  }
}

var coockiesManager = new Coockies();

export { coockiesManager };
