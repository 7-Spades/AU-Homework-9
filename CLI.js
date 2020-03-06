const fs = require ("fs");
const inquirer = require ("inquirer");

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
                        <h5 class="card-header">Team name</h5>
                        <div class="card-body">
                            <div class="card">
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
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

fs.writeFile("index.html", htmlBegin(), function (err){
    if(err){
        throw err
    };
});

