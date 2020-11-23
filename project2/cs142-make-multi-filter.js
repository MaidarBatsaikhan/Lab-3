"use strict";

function cs142MakeMultiFilter(arr){
    let originalArray=arr;
    let currentArray=arr;
    function arrayFilterer(filterCriteria,callback){

        if(!filterCriteria){
            return currentArray;
        }

        currentArray = currentArray.filter(el=>filterCriteria(el));

        if(callback){
            callback.call(originalArray,currentArray);
        }

        return arrayFilterer;    
    }
    return arrayFilterer;
}