const fs = require ("fs");
const inquirer = require ("inquirer");
const util = require ("util")
let count = 0;

const writeFileAsyc = util.promisify(fs.appendFile);

function htmlBegin(){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Team Page</title>
</head>
<body>
    <header>
        <div class="jumbotron">
            <h2 class="display-4">My Team</h1>
          </div>
    <main>
        <div class="container">
            <div class="row">`
};

function htmlCard(answers){
    return `
    <div class="col-sm-4">
    <div class="card">
        <div class="card-header">
            <h5>${answers.realname}</h5>
            <h5>${answers.job}</h5>
        </div>
        <div class="card-body">
            <div class="card">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">${answers.ID}</li>
                <li class="list-group-item">${answers.email}</li>
                <li class="list-group-item">${answers.username}</li>
                 </ul>
            </div>
        </div>
    </div>
</div>`
};

function htmlEnd(){
    return `
    </div>
    </div>
</main>
</body>
</html>`
};

function question (){ 
    return inquirer.prompt([
            {
                type: "number",
                message: "What ID number do they have?",
                name: "ID"
            },
            {
                type: "input",
                message: "What's the name of your team member?",
                name: "realname"
            },
            {
                type: "input",
                message: "What job position do they have in your team?",
                name: "job"
            },
            {
                type: "input",
                message: "what's their email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What's the name of their Github username?",
                name: "username"
            }
    ])
}

fs.writeFile("index.html", htmlBegin(), function (err){
    if(err){
        throw err
    };
});

inquirer.prompt([
    {
        type: "number",
        message: "How many members does your team have?",
        name: "teamplayer"
    }
])
.then(function (answers){

    question()
    .then( function (answers){
    let card = htmlCard(answers)    
    writeFileAsyc("index.html", card);
    })
    .catch( function (err){ 
            throw err
    });

    if(count < answers.teamplayer){
       count ++; 
        question()
    }    
})
.catch(function (err){
    throw err
});

writeFileAsyc("index.html", htmlEnd());