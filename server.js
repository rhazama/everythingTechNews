const path = require('path');
const express = require('express');
const session = ('express-session');
const expresshdb = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = require('../config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super super secret',
    cookie: {},
    resave: false,
    saveUnitialize: true,
    store: new SequelizeStore({db: sequelize})
};

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = expresshdb.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT || 3000, function() {
        console.log("Express server listening on port %d in %s mode", this.address().PORT, app.settings.env);
    });
});