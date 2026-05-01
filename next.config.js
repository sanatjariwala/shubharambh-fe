const path = require("path");

const projectRoot = path.resolve(__dirname);

/** @type {import('next').NextConfig} */
const nextConfig = {
    outputFileTracingRoot: projectRoot,
    turbopack: {
        root: projectRoot,
    },
}

module.exports = nextConfig
