


const menuBtn = document.querySelector('.menu')
const exitBtn = document.querySelector('.exit')
const menu = document.querySelector('aside')

menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('toggle-menu');
})
exitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('toggle-menu')
})


const bookMarks = document.querySelectorAll('.fa-bookmark');

bookMarks.forEach(bookMark => {
    bookMark.addEventListener('click', (e) => {
        const element = e.target;

        console.log("worked");

        const list = element.classList;
        if (element.classList.contains('marked')) {
            list.remove("marked");
            list.remove("fa-solid");
            list.add("fa-regular");
            
        } else {
            list.add("marked");
            list.add("fa-solid");
            list.remove("fa-regular");
            // Call your database function here if needed
        }
    });
});
