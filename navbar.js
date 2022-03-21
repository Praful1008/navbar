function replaceClass(element){
    let x=element.innerText;
    // console.log(element.parentElement)
    switch (x) {
        case 'About':
            document.getElementById('animation').className='start-About';
            break;
        case 'Blog':
            document.getElementById('animation').className='start-Blog';
            break;
        case 'Contact':
            document.getElementById('animation').className='start-Contact';
            break;    
        default:
            document.getElementById('animation').className='start-home';
            break;
    }
}
document.querySelector('li').style.background='rgb(26, 188, 156,0.32)';
document.querySelector('li').style.borderRadius='8px';
document.querySelector('li').firstChild.style.color='wheat';
function addBackground(element){
    document.querySelectorAll('li').forEach(e => {
        if(e===element)
        {
            e.style.background='rgb(26, 188, 156,0.32)';
            e.style.borderRadius='8px';
            e.firstChild.style.color='wheat';
        }
        else
        {
            e.style.background='none';
            e.style.borderRadius='0px';
            e.firstChild.style.color='white';
        }
    });
}