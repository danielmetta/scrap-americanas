'use strict';
require('es6-promise').polyfill();
var _ = require('underscore');
var request = require('request')
var cheerio = require('cheerio');

exports.product = function(url) {
  return new Promise(function(acept, error) {
    var options = {
      url: url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
      }
    };
    request(options, function(error, response, html) {
      if(!error) {
        var $ = cheerio.load(html),
        product = {};
        product.productId = $('.mp-title').children('.a-cod-prod').children('span[itemprop=productID]').text();
        product.title = $('.mp-title').children('h1').attr('title');
        product.price = $('.mp-pricebox-wrp').attr('data-price');
        product.image = $('.mp-photos').children('.a-carousel').children('.a-carousel-list').children().first().children('img[itemprop=thumbnail]').attr('data-szimg');
        if (product.image === undefined) {
          product.image = $('.mp-photos').children('.a-carousel').children('.a-carousel-list').children().first().children('img[itemprop=thumbnail]').attr('src');
        }
        acept(product);
      } else {
        error({ error:"Cannot get product" });
      }
    });
  });
};

exports.listProducts = function(lstUrl) {
  return new Promise(function(acept, error) {
    const lst = [];

    var done = _.after(lstUrl.length, function () {
      acept(lst);
    });
    if(lstUrl.length == 0) done();

    lstUrl.forEach(function(p) {
      var options = {
        url: p,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
        }
      };
      request(options, function(error, response, html) {
        if(!error) {
          var $ = cheerio.load(html),
          product = {};
          product.productId = $('.mp-title').children('.a-cod-prod').children('span[itemprop=productID]').text();
          product.title = $('.mp-title').children('h1').attr('title');
          product.price = $('.mp-pricebox-wrp').attr('data-price');
          product.image = $('.mp-photos').children('.a-carousel').children('.a-carousel-list').children().first().children('img[itemprop=thumbnail]').attr('data-szimg');
          if (product.image === undefined) {
            product.image = $('.mp-photos').children('.a-carousel').children('.a-carousel-list').children().first().children('img[itemprop=thumbnail]').attr('src');
          }
          lst.push(product);
        }
        done();
      });
    });
  });
};
