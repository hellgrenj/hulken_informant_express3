hulken_informant_express3
=========================

an informant for the stress test tool HULKEN (works with express3).  
this small module inspects your routes and generates a hulken requests file automatically.

##Installation
`npm install hulken_informant_express3 --save`
##Usage
```
var app = express();
.
.
.
.
var hulkentInformant = require('hulken_informant_express3');
 hulkenInformant.generateHulkenRequestsFile(‘./hulkenRequestsFile.json’, app);
```
**tip:** do this after you start your http server
