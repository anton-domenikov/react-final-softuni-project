const express = require('express');
const routes = require('./routes')
const { PORT } = require('./config/config');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');

const app = express();

require('./config/mongoose');
require('./config/express')(app);

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server is running on port ${PORT}...`));

// --- TODO for a skeleton ---
// express config
// add routes and controllers
// add error handlebars
// simple view and layout / test static files
// add user model
// add services
// user register / login / logout
// add token to user login etc
// authentication middleware
// authorization middleware
// notifications