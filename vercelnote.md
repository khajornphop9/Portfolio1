// {
//   "routes": [
//     { "handle": "filesystem" },
//     { "src": "/(.*)", "status": 404, "dest": "/other-404.html" }
//   ]
// }

***************************************************
// {
//     "rewrites":  [
//       {"source": "/(.*)", "destination": "/"}
//     ]
//   }
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

{
    
  "images": {
    "sizes": [256, 640, 1080, 2048, 3840],
    "remotePatterns": [
      {
        "protocol": "https",
        "hostname": "example.com",
        "port": "",
        "pathname": "/account123/**"
      }
    ],
    
    "minimumCacheTTL": 60,
    "formats": ["image/webp"],
    "dangerouslyAllowSVG": false,
    "contentSecurityPolicy": "script-src 'none'; frame-src 'none'; sandbox;",
    "contentDispositionType": "inline"

  }
}

***************************************************