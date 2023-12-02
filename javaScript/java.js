var basketIcon = document.getElementById('basketIcon');
var basketModal = document.getElementById('basketModal');

//MUESTRA LA ENTA EMEGENTE DEL CARRITO 
basketIcon.addEventListener('click', function() {
  basketModal.style.display = 'block';
});

// Cierra el CARRITO
document.querySelectorAll('.close').forEach(function(closeButton) {
  closeButton.addEventListener('click', function() {
    var modalId = this.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'none';
  });
});

// Cierra el modal si se hace clic fuera del CARRITO
/*window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});*/
