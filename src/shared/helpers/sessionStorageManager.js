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

  getInfo() {
    const userId = localStorage.getItem("userId");
    const utm = this.getUtm();

    return { userId, ...utm };
  }

  getReferrer() {
    return localStorage.getItem("referer");
  }

  generateReferrer() {
    let refererAll = new URL(document.referrer).origin;
    localStorage.setItem("referer", refererAll);
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
    localStorage.setItem("utm_time", Date.now());
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
