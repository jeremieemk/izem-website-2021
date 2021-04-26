module.exports = {
  images: {
    domains: ["images.prismic.io"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};
