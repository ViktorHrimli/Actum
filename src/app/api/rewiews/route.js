import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

import { unPackageTelegramReview } from "@/shared/helpers/helpers";

import dataReviewStatic from "@/assets/json/reviews.json";

const resolvePath = path.join(process.cwd(), "/src/assets/json/reviews.json");

const TIME = new Date().getMinutes();
const TIME_REFETCH = 30;

export async function GET(req, res) {
  try {
    if (false) {
      const dataReviews = await unPackageTelegramReview();

      await fs.writeFile(resolvePath, JSON.stringify(dataReviews));

      return NextResponse.json({ arr: dataReviews });
    } else {
      return NextResponse.json({ arr: dataReviewStatic });
    }
  } catch (error) {
    throw new Error("Request filed!");
  }
}

export async function POST(req, res) {
  return;
}
