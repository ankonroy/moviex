/** @type {import('next').NextConfig} */
const nextConfig = {
  //   output: "export",
  images: {
    //   formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        // port: "",
        // pathname: "",
      },
    ],
  },
};

export default nextConfig;
