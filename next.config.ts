import type { NextConfig } from "next";
import { withIntlayer } from "next-intlayer/server";

const nextConfig: NextConfig = {
  cacheComponents: true
  /* config options here */
};

export default withIntlayer(nextConfig);