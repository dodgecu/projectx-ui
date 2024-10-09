export default [
  {
    context: ["/account", "/users"],
    target: "http://localhost:3000",
    target: "https://localhost:5001/api",
    secure: false,
    logLevel: "debug",
    changeOrigin: true,
  },
];
