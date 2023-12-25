class Coockies {
  coockieName = "biatv-cookie";
  coockiesObj = {};
  stateMachineUtm = {
    direct: "origin",
    none: null,
    "not set": null,
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
    return this.getCoockiesGoogle(JSON.parse(coock));
  }

  findCoockies(allCoockies) {
    const cookieArray = allCoockies.split("; ");

    for (let i = 0; i < cookieArray.length; i++) {
      const cookiePair = cookieArray[i].split("=");

      if (cookiePair[0] === this.coockieName) {
        return this.decodeCoockies(decodeURIComponent(cookiePair[1]));
      }
    }
    return null;
  }

  makeReadebleUtm(utmObj) {
    var newUtmObj = {};
    this.utmParams.forEach((utm) => {
      var paramsSlice = utm.slice(4);
      newUtmObj[paramsSlice] = utmObj[utm];
    });
    return newUtmObj;
  }

  generatedCoockies(coockies) {
    this.findCoockies(coockies);
  }

  getCoockies() {
    console.log(this.coockiesObj);
    return this.coockiesObj;
  }
}

var coockiesManager = new Coockies();

export { coockiesManager };
