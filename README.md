# airquality-server
Server side (backend) of Air Quality website.
This contains the static site, made in React (the 'build' folder), as well as the backend logic (written in Node.js).
# Run Instructions
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

# Build Instructions (Docker)
To build the application, in your console, type <br />
<code>docker build -t (project name) .</code> <br />
You can then run the application through docker using <code>docker run -d -p (your port):3002 (project-name)</code>.
<br />In this case, <code>"project name"</code> and <code>"your port"</code> are variables you can input.
