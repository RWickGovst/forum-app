// dependencies
// const mongoose = require('mongoose');
const axios = require('axios');
const cheerio = require('cheerio');

// file imports
const db = require('../models');

module.exports = {

    newTechnology: (req, res) => {
        axios.get("https://www.theverge.com/").then(function(response) {
      var $ = cheerio.load(response.data);

      var data = []
      $("div.c-entry-box--compact").each(function(i, element) {
        var result = {};
        // console.log(result);
        result.img = $(this).find(".c-picture").find("img").attr("320w");
        result.title = $(this).find("h2.c-entry-box--compact__title").children("a").text();
        result.link = $(this).find("a").attr("href");
        // result.summary = $(this).find("h2.c-entry-box--compact__title").children("a").text();
        result.saved = false;
        
        console.log(result.img);

        data.push(result)
        //console.log(response);

      });
      res.json(data);
    });
    },
    createPost: function(req, res){
      db.Post.create(req.body).then(dbPost => res.json(dbPost)).catch(err => res.status(422).json(err));
    }
}
    