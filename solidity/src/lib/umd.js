import { Network, RibusSdk } from "./index";
import * as ethers from "ethers";

(() => {
  if (typeof window !== "undefined") {
    // @ts-ignore
    Object.assign(window, { Network, RibusSdk, ethers });
  }
})();
