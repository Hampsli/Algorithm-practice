// A Domain Name System (DNS) translates domain names to IP addresses which are then used by browsers to load internet resources. 
// For quicker DNS lookups, browsers often store a number of recent DNS queries in a DNS cache. Retrieving data from the cache is often faster than retrieving it from a DNS server. 
// This task aims to simulate DNS resolution and determine the time taken to process different URLS.

// Assume that the DNS cache can store a maximum of the cache_size most recent DNS requests, i.e., URL-IP mappings. 
// The cache is initially empty, It takes cache_time units of time to fetch data from the DNS cache, and server _time units of time to fetch data from the DNS server.
// - Given a list of n URLs visited as an array of strings, urls, determine the minimum time taken to resolve each DNS request. 

// Note: New DNS requests are dynamically added to the cache, and the cache stores mappings according to the order in which the requests were made. 
// 
//Example Suppose cache_size = 3, cache _time = 2, server_time = 5, urls = ["http://www.hackerrank.com",
// *http://www.google.com", "http://www.yahoo.com", "http://www.gmail.com", "http://www.yahoo.com",
// "http://www.hackerrank.com*, "http://www.gmail.com"]

var actualCacheArr = [];
var cache_size = 3;
var cache_time = 2;
var server_time = 5;
var urls = ["http://www.hackerrank.com",
 "http://www.google.com", "http://www.yahoo.com", "http://www.gmail.com", "http://www.yahoo.com",
"http://www.hackerrank.com", "http://www.gmail.com"];
var timeTaken = [];

function main() {

    timeTaken = urls.map((url)=>{
        suscribeToCacheSize(url);
        return calculateTimeForUrl(url);
    })
    console.log(timeTaken);

}

function suscribeToCacheSize(url){
    if(actualCacheArr.length <= cache_size ){
        actualCacheArr.unshift(url);
    }

}

function calculateTimeForUrl(url){
    const isUrlOnCache = actualCacheArr.find((item)=> item === url)
    console.log(isUrlOnCache)
    if(isUrlOnCache){
        return cache_time;
    }else{
        return server_time;
    }
}