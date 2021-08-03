const express = require('express');
const app = express();
const PORT = 8080;

//This allows use the body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.urlencoded({extended: true}));

//This allows use ejs
app.set('view engine', 'ejs');


function generateRandomString() {
  let character = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 6; i++)
    result += character[Math.floor(Math.random() * character.length)];
  return result;
}


const urlDatabase = {
  'b2xVn2': 'http://www.lighthouselabs.ca',
  '9sm5xK': 'http://www.google.com'
}

app.get('/', (reg, res) => {
  res.send('Hello!');
});

app.get('/hello', (reg, res) => {
  res.send('<html><body>Hello <b>World</b></body></html>\n');
});

app.get('/urls.json', (reg, res) => {
  res.json(urlDatabase);
});

//take DB data and create/render index '/urls' page
app.get("/urls", (req, res) => {
  const templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});

//create/render '/urls/new' page
app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});

// takes short URL as a params to find out long URL
app.get("/urls/:shortURL", (req, res) => {
  const templateVars = { shortURL: req.params.shortURL, longURL: urlDatabase[req.params.shortURL] };
  res.render("urls_show", templateVars);
});

//redirect short URL
app.get("/u/:shortURL", (req, res) => {
  const longURL = urlDatabase[req.params.shortURL];
  res.redirect(longURL);
});

//generate 6 random chars and add to DB
app.post("/urls", (req, res) => {
  //console.log(req.body);  // Log the POST request body to the console
  // res.send("Ok");
  const shortURL = generateRandomString();
  urlDatabase[shortURL] = req.body.longURL;
  res.redirect(`/urls/${shortURL}`);
});

// delete URL 
app.post('/urls/:shortURL/delete', (req, res) => {
  const shortURL = req.params.shortURL;
  console.log('deleting', shortURL);
  delete urlDatabase[shortURL];
  console.log(urlDatabase);
  res.redirect('/urls');
});

//update(edit) URL 
app.post("/urls/:shortURL", (req, res) => {
  //extract shorturl from params
    const oldURL = req.params.shortURL;
    //extract new url value from the form => req.body
    const currentURL = req.body.currentURL;
    //update the quote content for that id
    urlDatabase[oldURL] = currentURL;
    res.redirect('/urls');
  });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
})