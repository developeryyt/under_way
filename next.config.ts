import type { NextConfig } from "next";
const path = require('path');
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
    sassOptions: {
        includePaths: [path.join(__dirname, 'src', 'styles')],
    }
};

export default nextConfig;
