const app = require('express')();
import { port } from '../config/server-config.json';

app.listen(port, () => console.log("Server listening on port " + port));