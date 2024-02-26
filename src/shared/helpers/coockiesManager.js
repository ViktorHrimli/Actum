class Coockies {
  // coockieName = "biatv-cookie";
  coockieName = "rngst2";
  gclIdName = "_gcl_aw";
  gclid;
  coockiesObj = {};
  stateMachineUtm = {
    "(direct)": "origin",
    "(none)": null,
    "(not set)": null,
    "(not provided)": null,
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
      gclid: this.gclid,
      ...this.makeReadebleUtm(coockieObj["utmz"]),
    };

    localStorage.setItem("coock", JSON.stringify(this.coockiesObj));
  }

  decodeCoockies(coock) {
    return coock && this.getCoockiesGoogle(JSON.parse(coock));
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
    var theMap = {};

    var coockie = JSON.parse(localStorage.getItem("coock"));
    var urlUtm = JSON.parse(localStorage.getItem("utm"));
    var theArr = Object.keys(urlUtm);

    theArr.forEach((key) => {
      coockie[key] ? (theMap[key] = coockie[key]) : (theMap[key] = urlUtm[key]);
    });
    return theMap;
  }
}

var coockiesManager = new Coockies();

export { coockiesManager };
