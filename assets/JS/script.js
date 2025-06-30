// to catch every variable we want to manipulate
// header for the major color change
// icons for toggling dark/light mode
function toggleDark() {
    const header = document.querySelector('header');
    const moon = document.querySelector('.moon-icon');
    const sun = document.querySelector('.sun-icon');

// if we add the (add) function instead of toggle,
// the code will run once (from light to dark) and then stops.
// so (toggle) is the king here :D
    header.classList.toggle('dark');
// (contains) checks if the header has the class "dark" already:
// using shorthand if (ternary operator) instead of the normal if-else:
header.classList.contains('dark') ? (moon.style.display = 'none', sun.style.display = 'block' )
:(moon.style.display = 'block', sun.style.display = 'none')
}
