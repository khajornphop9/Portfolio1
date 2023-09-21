// {
//   "routes": [
//     { "handle": "filesystem" },
//     { "src": "/(.*)", "status": 404, "dest": "/other-404.html" }
//   ]
// }


***************************************************

// {
//   "rewrites": [
//     {
//       "source": "/(.*)",
//       "destination": "/index.html"
//     }
//   ]
// }


***************************************************



// {
//   "rewrites": [
//     {
//       "source": "/(.*)",
//       "destination": "/index.html"
//     }
//   ],
//   "routes": [
//      { "handle": "filesystem" },
//      { "src": "/(.*)", "status": 404, "dest": "/other-404.html" }
//   ]
// }

***************************************************