

document.querySelector('.button').addEventListener('click' , (e) => {

    e.preventDefault();
    
    document.querySelector('.message').classList.toggle('worning')

})

