const URL = 'https://randomuser.me/api';

const getUserJS = function(){
    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function(){
    //     if(xhr.readyState == 4){
    //         console.log(xhr.responseText);
    //     }
    // }
    // xhr.open("GET",URL+'?nat=FR');
    // xhr.send();
    fetch(URL)
    .then(function(response){return response.json();})
    .then(function(data) {console.log(data);})
}

const getUserJQuery = function(){
    $.get(URL, function(data){console.log(data);});
}
    
// window.onload = getUserJS;

$(document).ready(getUserJQuery)