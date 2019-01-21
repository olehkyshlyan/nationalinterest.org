// ==UserScript==
// @name         Nationalinterest
// @namespace    https://nationalinterest.org/
// @noframes
// @version      0.1
// @description  Nationalinterest | http://nationalinterest.org | Feature
// @author       oleh.kyshlyan
// @match        http://nationalinterest.org/feature/*
// @match        https://nationalinterest.org/feature/*
// @grant        none
// ==/UserScript==

var Nationalinterest = new function(){

  this.body = function(){
    var bodyInclosure = function(){
      var body = document.body;
      if(body != undefined){
        var bodyChildren = body.children;
        var bdChLen = bodyChildren.length;

        for(var i=0; i<bdChLen; i++){
          var currEl = bodyChildren[i];

          if(currEl.tagName == 'IFRAME'){
            currEl.style.display = 'none';
          }

          if(currEl.tagName == 'IMG'){
            currEl.style.display = 'none';
          }
        }
      }
    }
    setTimeout(bodyInclosure,3000);
  }

  this.article = function(){
    var articleInclosure = function(){
      var articleCollection = document.getElementsByTagName('article');
      var artCollZeroEl = articleCollection[0];
      if(artCollZeroEl != undefined){
        if(artCollZeroEl.className == 'detail'){
          var artCollZrElChildren = artCollZeroEl.children;
          var artClZrElChLen = artCollZrElChildren.length;

          for(var i=0; i<artClZrElChLen; i++){
            var currEl = artCollZrElChildren[i];

            if(currEl.className == 'ob-smartfeed-wrapper'){
              currEl.style.display = 'none';
            }

            if(currEl.id == 'disqus_thread'){
              currEl.style.display = 'none';
            }
          }
        }
      }
    }
    setTimeout(articleInclosure,3100);
  }

  this.detailContent = function(){
    var detailContentInclosure = function(){
      var detailContentCollection = document.getElementsByClassName('detail__content');
      var detContCollZeroEl = detailContentCollection[0];
      if(detContCollZeroEl != undefined){
        var dtContCollZrElChildren = detContCollZeroEl.children;
        var dtCnClZrElChLen = dtContCollZrElChildren.length;

        for(var i=0; i<dtCnClZrElChLen; i++){
          var currEl = dtContCollZrElChildren[i];

          if(currEl.id.indexOf('ad-replay-bar') != -1){
            currEl.style.display = 'none';
          }

          if(currEl.id.indexOf('zdt_display_placeholder') != -1){
            currEl.style.display = 'none';
          }

          if(currEl.id.indexOf('zdt') != -1 && currEl.id.indexOf('wrapper') != -1){
            currEl.style.display = 'none';
          }

          if(currEl.className.indexOf('ad--center') != -1){
            currEl.style.display = 'none';
          }
        }
      }
    }
    setTimeout(detailContentInclosure,3200);
  }

}

Nationalinterest.body();
Nationalinterest.article();
Nationalinterest.detailContent();
