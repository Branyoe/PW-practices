const app = require('./app');
require('./dataBase');

app.listen(app.get('port'), () => console.log(`server on http://localhost:${app.get('port')}`));//listen on port 3000
