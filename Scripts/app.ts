/// <reference path="_reference.ts"/>

// JavaScript Logic

"use strict";

(function(){
    console.log("app started");
    
    var person:objects.Person;
    
    person = new objects.Person("Derek", 46, "Male");
    
    person.sayHello();
    person.showAge();
    
    var paragraph = document.getElementById("firstParagraph");
    paragraph.innerHTML = "<h2>Comp 392- Lab 3</h2>";
    var content = document.getElementById("content");
    content.innerHTML = "gulp";
    
    console.log("end of appa");
})();