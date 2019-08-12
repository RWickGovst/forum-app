// dependencies
const mongoose = require('mongoose');
const axios = require('axios');
const cheerio = require('cheerio');

// file imports
const db = require('../models');

module.exports = {

//tecnology, reveiews, science, creators, entertainment, video, archives
//theres a way to cycle through an object to grab the value

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
        result.summary = $(this).find("h2.c-entry-box--compact__title").children("a").text();
        result.saved = false;
        
        console.log(result.img);

        data.push(result)
        //console.log(response);

      });
      res.json(data);
    });
    },

    // newPolitics: (req, res) => {
    //     axios.get("https://www.nytimes.com/section/politics").then(function(response) {
    //         var $ = cheerio.load(response.data);
    //         console.log(response);
    //         // var data = []
    //         $("div.css-8age7h ekkqrpp0");
            // // // result.img = $(this).find("figure class="photo css-1dv1kvn");
            // result.title = $(this).find("css-12vidh e4e4511");
            // // // result.link = $(this).find("data-rref href="/2019/08/11/us/politics/kamala-harris)
            // // // result.summary = $(this).find()
            // // result.saved = false;

            // // console.log('The article title is: ' + result.title);

            // data.push(result)
            // console.log(response);

    //     });
    //     res.json(data);
    
    // },


    findAll: (req, res) => {
        db.Book.find({

        }).then(dbBooks => {
            res.send('Find all was hit')
        }).catch(err => {
            res.err(err)
        })
        
    },
    findById: (req, res) => {
        db.Book.findOne({
            id: req.params.id
        }).then(singleBook => {

        }).catch(err => {
            res.err(err)
        })
        res.send('Find by ID was hit')
    },
    addBook: (req, res) => {
        res.send('Add book was hit')
    },
    updateBook: (req, res) => {
        res.send('Update book was hit')
    },
    deleteById: (req, res) => {
        res.send('Delete was hit')
    }
}