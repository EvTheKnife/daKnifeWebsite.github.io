window.onload = function() {



    animOrder(document.getElementById("piece1"), 'piece1FirstAnim');
    animOrder(document.getElementById("piece2"), 'piece2FirstAnim');
    animOrder(document.getElementById("piece3"), 'piece3FirstAnim');
    animOrder(document.getElementById("piece4"), 'piece4FirstAnim');
    animOrder(document.getElementById("piece5"), 'piece5FirstAnim');
    animOrder(document.getElementById("piece6"), 'piece6FirstAnim');
    animOrder(document.getElementById("piece7"), 'piece7FirstAnim');
    animOrder(document.getElementById("piece8"), 'piece8FirstAnim');


    function animOrder(piece, firstAnimClass) {

            piece.addEventListener('animationend', function() {
                piece.classList.add('animFree')
                piece.classList.remove(firstAnimClass)

            });
            

    }

    let gradient = document.querySelector(".mouse-cursor-gradient-tracking");
    gradient.addEventListener("mousemove", (e) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.pageX// - rect.left;
    let y = e.pageY// - rect.top;
    gradient.style.setProperty("--x", x + "px");
    gradient.style.setProperty("--y", y + "px");
    });


}