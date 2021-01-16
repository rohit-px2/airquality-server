# airquality-server
Server side (backend) of Air Quality website.
This contains the static site, made in React (the 'build' folder), as well as the backend logic (written in Node.js).
To run the app you will need:
<ul>
  <li>
   A MongoDB Database (env: MONGODB_URI)
  </li>
  <li>
   An API key from aqicn.org (env: API_KEY)
  </li>
  <li>
  A secret key (env: SECRET) for JWT token creation & verification
  </li>
  <li>
  A port (env: PORT) that controls which port the server runs on.
</ul>
Putting all of that in your .env file, you can type <br />
<code>>npm start</code> or <code>>node index.js</code>
in the parent directory to start the server. <br />
To start in development mode, type <br />
<code>>npm run dev</code> or <code>>nodemon index.js</code>.
