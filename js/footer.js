$(document).ready(function() {
  var footerURL = './footer.html';
  $('.footer').load(footerURL, function() {
    $('#footer').modal({
      show: true
    });
  });
});
