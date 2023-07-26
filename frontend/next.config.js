module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://localhost:8190/api/:path*`,
      },
    ];
  },
};
