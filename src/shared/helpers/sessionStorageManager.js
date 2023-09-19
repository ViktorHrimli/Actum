"use client";

class ManageSessionStorage {
  setSessionPage(key) {
    sessionStorage.setItem(key, JSON.stringify(false));
  }

  getSessionPage(key) {
    return JSON.parse(sessionStorage.getItem(key));
  }
}

const storage = new ManageSessionStorage();

export { storage };
