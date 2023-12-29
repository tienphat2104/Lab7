document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// document.querySelectorAll('ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function(e){
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);
//     });
// });