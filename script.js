function f(type) {
    var cat = document.getElementById("cat");
    var dog = document.getElementById("dog");
    if (type=="left") {
        cat.style.width = '97%';
        cat.querySelector('img').style.width = '70%';  
        cat.querySelector('img').style.height = '70%';
        cat.querySelector('img').style.visibility = 'visible';

        dog.style.width = '4%';  
        dog.querySelector('img').style.visibility = 'hidden';
        }
    if (type=="right") {
        cat.style.width = '4%';
        cat.querySelector('img').style.visibility = 'hidden';

        dog.style.width = '97%'; 
        dog.querySelector('img').style.width = '70%';  
        dog.querySelector('img').style.height = '70%';
        dog.querySelector('img').style.visibility = 'visible';    
        }
    if (type=="both") {
        cat.style.width = '50%';  
        cat.querySelector('img').style.width = '90%';
        cat.querySelector('img').style.height = '70%';
        cat.querySelector('img').style.visibility = 'visible';

        dog.style.width = '50%';  
        dog.querySelector('img').style.width = '90%';
        dog.querySelector('img').style.height = '70%';
        dog.querySelector('img').style.visibility = 'visible';
    }
}