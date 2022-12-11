const express = require("express");
const path = require("path");
const fs = require("fs");
const yoga = express();
const port = 8000;
const localhost = '127.0.0.1';

yoga.use('/static', express.static('static'));
yoga.use(express.urlencoded({ extended: true }));

yoga.get('/', (req, res) => {
    res.statusCode = 200 ; 
    res.sendFile(path.join(__dirname, './views/home.html'));
});

yoga.get('/about_us.html',  (req, res)=> {
    res.statusCode = 200 ; 
    res.sendFile(path.join(__dirname, './views/about_us.html'));
});

yoga.get('/personal_training.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/personal_training.html'));
});

yoga.get('/certified_training.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/certified_training.html'));
});

yoga.get('/meditation_classes.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/meditation_classes.html'));
});

yoga.get('/meditation_center.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/meditation_center.html'));
});

yoga.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/contact.html'));
});

yoga.get('/contact_mentor.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/contact_mentor.html'));
});

yoga.get('/sign_up.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/sign_up.html'));
});

yoga.post( '/', (req , res ) => {
    const email = req.body.email ; 
    const password = req.body.password ; 
    const check = req.body.check ; 
    console.log(req.body) ; 
    let output = (`E-mail id = ${email} 
    password = ${password} 
    check me out is ${check}`) ; 
    fs.writeFileSync('login.txt' , output ) ; 
    const params = {"messege" : "this is the login id"} ; 
    res.status(200).sendFile(path.join(__dirname , './views/home.html') , params ) ; 
 })

yoga.post( '/contact_mentor.html', (req , res ) => {
    const name = req.body.name ; 
    const age = req.body.age ; 
    const address = req.body.address ; 
    const contact = req.body.contact ; 
    const near_place = req.body.near_place ; 
    const mentor = req.body.mentor ; 
    const question = req.body.ask ; 
    console.log(req.body) ; 
    let output = (`name = ${name} 
    age = ${age} 
    address = ${address} 
    contact = ${contact} 
    near_place = ${near_place} 
    mentor = ${mentor} 
    question = ${question}`) ; 
    fs.writeFileSync('question_mentor.txt' , output ) ; 
    const params = {"messege" : "your question is recived "} ; 
    res.status(200).sendFile(path.join(__dirname , './views/contact_mentor.html') , params ) ; 
 })

yoga.post( '/personal_training.html', (req , res ) => {
    const name_pt = req.body.name ; 
    const age_pt = req.body.age ; 
    const address_pt = req.body.address ; 
    const contact_pt = req.body.contact ; 
    const email_pt = req.body.email ; 
    const password_pt = req.body.password ; 
    const check_pt = req.body.check ; 
    console.log(req.body) ; 
    let output = (`name = ${name_pt} 
    age = ${age_pt} 
    address = ${address_pt} 
    contact = ${contact_pt} 
    email = ${email_pt} 
    password = ${password_pt} 
    check = ${check_pt}`) ; 
    fs.writeFileSync('personal_training.txt' , output ) ; 
    const params = {"messege" : "your request is recived "} ; 
    res.status(200).sendFile(path.join(__dirname , './views/personal_training.html') , params ) ; 
 })

yoga.post( '/certified_training.html', (req , res ) => {
    const name_ct = req.body.name ; 
    const age_ct = req.body.age ; 
    const address_ct = req.body.address ; 
    const contact_ct = req.body.contact ; 
    const near_place_ct = req.body.near_place ; 
    const email_ct = req.body.email ; 
    const password_ct = req.body.password ; 
    const check_ct = req.body.check ; 
    console.log(req.body) ; 
    let output = (`name = ${name_ct} 
    age = ${age_ct} 
    address = ${address_ct} 
    contact = ${contact_ct} 
    near_place = ${near_place_ct} 
    email = ${email_ct} 
    password = ${password_ct} 
    check = ${check_ct}`) ; 
    fs.writeFileSync('certified_training.txt' , output ) ; 
    const params = {"messege" : "your request is recived "} ; 
    res.status(200).sendFile(path.join(__dirname , './views/certified_training.html') , params ) ; 
 })

yoga.post( '/meditation_classes.html', (req , res ) => {
    const name_mc = req.body.name ; 
    const age_mc = req.body.age ; 
    const address_mc = req.body.address ; 
    const contact_mc = req.body.contact ; 
    const near_place_mc = req.body.near_place ; 
    const email_mc = req.body.email ; 
    const password_mc = req.body.password ; 
    const check_mc = req.body.check ; 
    console.log(req.body) ; 
    let output = (`name = ${name_mc} 
    age = ${age_mc} 
    address = ${address_mc} 
    contact = ${contact_mc} 
    near_place = ${near_place_mc} 
    email = ${email_mc} 
    password = ${password_mc} 
    check = ${check_mc}`) ; 
    fs.writeFileSync('meditation_classes.txt' , output ) ; 
    const params = {"messege" : "your request is recived "} ; 
    res.status(200).sendFile(path.join(__dirname , './views/meditation_classes.html') , params ) ; 
 })

yoga.post( '/contact.html', (req , res ) => {
    const name_c = req.body.name ; 
    const age_c = req.body.age ; 
    const address_c = req.body.address ; 
    const contact_c = req.body.contact ; 
    const near_place_c = req.body.near_place ; 
    const email_c = req.body.email ; 
    const password_c = req.body.password ; 
    console.log(req.body) ; 
    let output = (`name = ${name_c} 
    age = ${age_c} 
    address = ${address_c} 
    contact = ${contact_c} 
    near_place = ${near_place_c} 
    email = ${email_c} 
    password = ${password_c}`) ; 
    fs.writeFileSync('contact.txt' , output ) ; 
    const params = {"messege" : "your request is recived "} ; 
    res.status(200).sendFile(path.join(__dirname , './views/contact.html') , params ) ; 
 })

yoga.listen(port, localhost, (req, res) => {
    console.log(`the website is running at ${localhost}:${port}`);
});


