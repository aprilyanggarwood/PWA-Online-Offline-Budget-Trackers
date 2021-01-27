// const WebpackPwaManifest = require("webpack-pwa-manifest");
// const path = require("path");

// const config = {
//   // Update the entry point
//   entry: {
//     index: "./public/index.js",
//   },
//   output: {
//     // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
//     path: __dirname + "/public/dist/",
//     filename: "[name].bundle.js",
//   },
//   mode: "production",
//   plugins: [
//     new WebpackPwaManifest({
//       filename: "manifest.json",
//       name: "Budget Tracker",
//       short_name: "Budget Tracker App",
//       orientation: "portrait", //"orientation": "landscape",
//       display: "standalone", //"display": "fullscreen",
//       start_url: "/",
//       theme_color: "#e6f542",
//       background_color: "#e6f542",
//       inject: false,
//       fingerprints: false,
//       icons: [
//         {
//           src: path.resolve(__dirname, "public/icons/icon-512x512.png"),
//           // the plugin will generate an image for each size
//           // included in the size array
//           size: [72, 96, 128, 144, 152, 192, 384, 512], // multiple sizes
//         },
//       ],
//     }),
//   ],

//   // For files ending with .js, we will use babel-loader with preset-env
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env"],
//           },
//         },
//       },
//     ],
//   },
// };

// module.exports = config;

// const config = {
//   entry: {
//     app: "./assets/js/index.js",
//     favorites: "./assets/js/favorites.js",
//     topic: "./assets/js/topic.js",
//   },
//   output: {
//     path: __dirname + "/dist",
//     filename: "[name].bundle.js",
//   },
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env"],
//           },
//         },
//       },
//     ],
//   },
//   plugins: [
//     new WebpackPwaManifest({
//       fingerprints: false,
//       name: "Newsy app",
//       short_name: "Newsy",
//       description:
//         "An application that allows you to view different news articles and save your favorites.",
//       background_color: "#01579b",
//       theme_color: "#ffffff",
//       "theme-color": "#ffffff",
//       start_url: "/",
//       icons: [
//         {
//           src: path.resolve("assets/images/icons/android-chrome-192x192.png"),
//           sizes: [96, 128, 192, 256, 384, 512],
//           destination: path.join("assets", "icons"),
//         },
//       ],
//     }),
//   ],
// };

// module.exports = config;
