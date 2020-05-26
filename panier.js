var removeCartItems = document.getElementsByClassName('btn-danger');

for (var i = 0; i < removeCartItems.length; i =+ 1) {
    var button = removeCartItems[i];
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
    })
}