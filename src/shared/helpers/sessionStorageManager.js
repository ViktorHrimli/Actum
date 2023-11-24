"use client";

class ManageSessionStorage {
  setSessionPage(key) {
    sessionStorage.setItem(key, JSON.stringify(false));
  }

  getSessionPage(key) {
    return JSON.parse(sessionStorage.getItem(key));
  }

  generateUserInfo(urlParams) {
    const userId = new Date().getTime();
    localStorage.setItem("userId", userId);

    this.generateUtm(urlParams);
    this.generateReferrer();
  }

  getInfo(urlParams) {
    this.generateUtm(urlParams);

    const userId = localStorage.getItem("userId");
    const referer = this.getReferrer();
    const eventtime = this.getUtmTime();
    const utm = this.getUtm();

    return { userId, referer, eventtime, ...utm };
  }

  getReferrer() {
    return localStorage.getItem("referer") || "";
  }

  getUtmTime() {
    return JSON.parse(localStorage.getItem("utm_time"));
  }

  generateReferrer() {
    if (document.referrer == "") {
      localStorage.setItem("referer", "");
    } else {
      let refererAll = new URL(document.referrer);
      localStorage.setItem("referer", refererAll.origin);
    }
  }

  generateUtm(urlParams) {
    const utmParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ];

    const objUTM = {};

    utmParams.forEach(function (param) {
      objUTM[param.slice(4)] = urlParams.get(param);
    });

    localStorage.setItem("utm", JSON.stringify(objUTM));
    localStorage.setItem("utm_time", JSON.stringify(new Date()));
  }

  getUtm() {
    let oneDay = 86400000;
    let timeNow = Date.now();
    let objUTM = {};
    let objUTMTime;
    objUTM = JSON.parse(localStorage.getItem("utm"));
    objUTMTime = JSON.parse(localStorage.getItem("utm_time"));
    if (document.referrer == "") {
      return objUTM;
    }
    if (timeNow - objUTMTime < oneDay) {
      return objUTM;
    } else {
      localStorage.removeItem("utm");
      localStorage.removeItem("utm_time");
      return {
        source: null,
        medium: null,
        campaign: null,
        content: null,
        term: null,
      };
    }
  }
}

const storage = new ManageSessionStorage();

export { storage };
