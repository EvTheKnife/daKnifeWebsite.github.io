window.onload = function() {



    animOrder(document.getElementById("piece1"), 'piece1FirstAnim');
    animOrder(document.getElementById("piece2"), 'piece2FirstAnim');
    animOrder(document.getElementById("piece3"), 'piece3FirstAnim');
    animOrder(document.getElementById("piece4"), 'piece4FirstAnim');
    animOrder(document.getElementById("piece5"), 'piece5FirstAnim');
    animOrder(document.getElementById("piece6"), 'piece6FirstAnim');
    animOrder(document.getElementById("piece7"), 'piece7FirstAnim');
    animOrder(document.getElementById("piece8"), 'piece8FirstAnim');
    animOrder(document.getElementById("piece9"), 'piece9FirstAnim');
    animOrder(document.getElementById("piece10"), 'piece10FirstAnim');
    animOrder(document.getElementById("piece11"), 'piece11FirstAnim');
    animOrder(document.getElementById("piece12"), 'piece12FirstAnim');
    animOrder(document.getElementById("piece13"), 'piece13FirstAnim');
    animOrder(document.getElementById("piece14"), 'piece14FirstAnim');


    function animOrder(piece, firstAnimClass) {

            piece.addEventListener('animationend', function() {
                piece.classList.add('animFree')
                piece.classList.remove(firstAnimClass)

            });
            

    }

}