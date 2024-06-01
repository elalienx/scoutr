// Node modules
import { load } from "cheerio";
import type { CheerioAPI } from "cheerio";

// Project files
import type ErrorReport from "../../types/ErrorReport";

export default function reportPrivateProfile(url: string, page: string): ErrorReport {
  const document: CheerioAPI = load(page);
  const query = "h1.private-profile";

  const result: ErrorReport = {
    url: "",
    severity: 0,
    message: "",
  };

  return {
    url,
    severity: 3,
    message: "Private prpfile",
  };
}

// 0 good ✅
// 1 missing some fields ⚠️
// 2 missing all fields 🚨
// 3 private profile 🕵️
// 4 temporally banned 🚫
