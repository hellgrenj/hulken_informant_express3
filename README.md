hulken_informant_express3
=========================

an informant for the stress test tool [hulken](https://github.com/hellgrenj/hulken) (works with express3).  
this small module inspects your routes and generates a hulken requests file automatically.

## Installation

`npm install hulken_informant_express3 --save`

## Usage

```
var app = express();
.
.
.
.
// do this after setting up your routes
var hulkenInformant = require('hulken_informant_express3');
 hulkenInformant.generateHulkenRequestsFile(‘./hulkenRequestsFile.json’, app);

```
an hulken_informant offers a quick and simple way to create a stress test suite by inspecting your application routes and auto generating the requests file for you!

It has, however, it’s drawbacks:
* It can only include GETs (it has no way of figuring out what payload to send with the POST etc.)
* It can not offer an expectedTextToExist value for each request, leaving Hulken with only the HTTP status code to rely on when verifying responses.

## Blog posts

[Automatically generated stress tests with hulken and hulken informant](http://hellgrenj.tumblr.com/post/90755234673/automatically-generated-stress-tests-with-hulken-and)
