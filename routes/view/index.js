// var express = require("express");
// var router = require("express").Router();
// var db = require("../../models");
// var axios = require("axios");
// var cheerio = require("cheerio");

// router.get('/', function(req, res) {
//   db.Article.find({}, (err, articles) =>{
//     if(err) {
//       console.log(err);
//     }else {
//       res.render("home", {db_headlines: articles})
//     }
//   })
   
// })

//   router.get("/scrape", function(req, res) {
//     axios.get("https://www.theverge.com/").then(function(response) {
//       var $ = cheerio.load(response.data);
//       console.log(`i made it here: ${$}`);
//       $("h2.c-entry-box--compact__title").each(function(i, element) {
//         console.log(`i am the element: ${element}`);
//         var result = {};
//         // console.log(result);

//         result.title = $(element).children().text();
//         result.link = $(element).find("a").attr("href");
//         result.summary = $(element).find("a").text();
//         result.saved = false;

//         console.log(`result: ${result}`);
  
//         db.Article.create(result).then(function(dbArticle) {
//           console.log(dbArticle);
//           }
//           .catch, function(err) {
//             console.log(err);
//           });
//       });
//       res.send("Scrape Complete");
//     });
//   });

//   module.exports = router;
  