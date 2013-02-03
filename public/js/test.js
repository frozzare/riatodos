$(function () {
  
  $('a.show').on('click', function () {
    $('.modal').modal('show');
  });
  
  
  $('a.hide').on('click', function () {
    $('.modal').modal('hide');
  });
  
});