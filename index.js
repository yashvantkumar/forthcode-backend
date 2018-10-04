const request = require('request');

let titlesArray = [];
if(process.argv[2]){
    let pageNumber = 1;
    if(process.argv[3]){
        pageNumber = process.argv[3]
    }
    request('https://jsonmock.hackerrank.com/api/movies/search/?Title='+process.argv[2]+"&page="+pageNumber, function (error, response, body) {
        if(error){
            console.error('Oops something went wrong :: ', error)
        }else if(response.statusCode == 200){
            const response = JSON.parse(body);
            if(response.data.length > 0){
                titlesArray = response.data.map((value) => {
                    return value.Title
                }).sort();
                console.log("Sorted Array :: ",titlesArray);    
            }else{
                console.log("No movies found!");
            }
            
        }
        
    });
}else{
    console.log('Please input movie title substr. For example');
    console.warn('> node index.js batman')
    console.warn('> node index.js batman <pageNumber>')
}