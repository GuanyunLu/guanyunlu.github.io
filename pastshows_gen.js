import fs from 'fs'
import http from 'http'
const args=process.argv.slice(2);
args.forEach((val)=>{
    if (!fs.existsSync(`pastshows/${val}.html`))
        fs.writeFileSync(`pastshows/${val}.html`,`<html lang="en"> <head> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/> <title>ListenTo</title> <link rel="icon" href="../assets/img/favicon.ico"/> <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css"/> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900&amp;display=swap"/> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&amp;display=swap"/> </head> <body> <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom" > <div class="container"> <a class="navbar-brand" href="#">ListenTo</a ><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navbarResponsive" > <span class="visually-hidden">Toggle navigation</span ><span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarResponsive"> <ul class="navbar-nav ms-auto"> <li class="nav-item"><a class="nav-link" href="../">Home</a></li><li class="nav-item"> <a class="nav-link" href="./">Past Shows</a> </li></ul> </div></div></nav> <header class="text-center text-white masthead"> <div class="masthead-content"> <div class="container"> <h1 class="masthead-heading mb-0">ListenTo📡</h1> <img src="http://47.113.231.184/${val}/image.jpeg" alt="image"/> <audio src="http://47.113.231.184/${val}/audio.ogg" controls="controls" ></audio> </div></div></header> <footer class="py-5 bg-black"> <div class="container"> <p class="text-center text-white m-0 small"> CopyLEFT&nbsp;© Guanyun (Guy) Lu 2022 </p></div></footer> <script src="assets/bootstrap/js/bootstrap.min.js"></script> </body></html>`);
});