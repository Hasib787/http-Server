# http-Server
Creating a simple proxy server in node.js 

Installation:

Globally via npm

brew install http-server

Running on-demand:
npx http-server [path] [options]

As a dependency in your npm package:
npm install http-server

Usage:
 http-server [path] [options]
 
 [path] defaults to ./public if the folder exists, and ./ otherwise.

Now you can visit http://localhost:8080 to view your server

Note: Caching is on by default. Add -c-1 as an option to disable caching.
