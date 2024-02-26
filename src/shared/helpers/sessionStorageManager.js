"use client";
import { bodySend } from "@/shared/enums/enum";
class ManageSessionStorage {
  utmParams = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ];

  oneDay = 86400000;
  objUTM = {};
  resultObj = {};
  objUTMTime;

  setSessionPage(key) {
    sessionStorage.setItem(key, JSON.stringify(false));
  }

  getSessionPage(key) {
    return JSON.parse(sessionStorage.getItem(key));
  }

  doMakeObjutm(obj) {}

  sendObjData(data) {
    var userId = localStorage.getItem("userId");
    var referer = this.getReferrer();
    var eventtime = this.getUtmTime();
    return { ...bodySend, ...data, userId, referer, eventtime };
  }

  generateUserInfo(urlParams) {
    const userId = new Date().getTime();
    localStorage.setItem("userId", userId);

    this.generateUtm(urlParams);
    this.generateReferrer();
  }

  getInfo() {
    const userId = localStorage.getItem("userId");
    const referer = this.getReferrer();
    const eventtime = this.getUtmTime();
    const utm = this.getUtm();

    return { userId, referer, eventtime, ...utm };
  }

  getReferrer() {
    return localStorage.getItem("referer");
  }

  getUtmTime() {
    return JSON.parse(localStorage.getItem("utm_time"));
  }

  generateReferrer() {
    if (document.referrer === "") {
      localStorage.setItem("referer", "");
    } else {
      let refererAll = new URL(document.referrer);
      localStorage.setItem("referer", refererAll.origin);
    }
  }

  generateUtm(urlParams) {
    this.objUTM.gclid = urlParams.get("gclid");

    this.utmParams.forEach((param) => {
      var params = param.slice(4);
      this.objUTM[params] = urlParams.get(param);
    });

    localStorage.setItem("utm", JSON.stringify(this.objUTM));
    localStorage.setItem("utm_time", JSON.stringify(new Date()));
  }

  getUtm() {
    var timeNow = Date.now();
    this.objUTM = JSON.parse(localStorage.getItem("utm"));
    this.objUTMTime = JSON.parse(localStorage.getItem("utm_time"));
    var getTimeObjectTime = new Date(this.objUTMTime).getMilliseconds();

    if (document.referrer !== "") {
      if (timeNow - getTimeObjectTime < this.oneDay) {
        localStorage.removeItem("utm");
        localStorage.removeItem("utm_time");
      }

      return this.objUTM;
    } else {
      return {
        gclid: null,
        medium: null,
        term: null,
        content: null,
        campaign: null,
        source: null,
      };
    }
  }
}

const storage = new ManageSessionStorage();

export { storage };
