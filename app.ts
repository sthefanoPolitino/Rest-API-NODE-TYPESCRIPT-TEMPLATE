import Server from './models/server'; // Assuming Server is the default export in './models/server'

import * as dotenv from 'dotenv'; // Importing the 'dotenv' library

dotenv.config(); // Loading environment variables from a .env file

const server = new Server();
server.listen();