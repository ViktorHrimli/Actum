import { Head } from "next/document";

class HeadWithoutPreload extends Head {
  getPreloadDynamicChunks() {
    return [];
  }
  getPreloadMainLinks() {
    return [];
  }
}

// export default new HeadWithoutPreload();
