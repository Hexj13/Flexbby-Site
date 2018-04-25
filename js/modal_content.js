$(document).ready(function() {
  function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i) {
      indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
  };
  $.ajax({
    url: "./modal.html",
    success: function(data) {
      $('body').append(data);
      $("#send").on('click', function() {
        // send ajax
        $.ajax({
          // url where to submit the request
          url: 'https://flexbby.flexbby.com/co',
          // type of action POST
          type: "POST",
          // data type
          dataType: 'json',
          // post data
          data: JSON.stringify(getFormData($('#form'))),
          // data:JSON.stringify({"name": $("#name").val(), "email": $("#email").val(), "phone": $("#phone").val(), "company": $("#company").val(), "comment": $("#company").val()}),
          success: function(result) {
            console.log(result);
            if (result.status == 0) {
              $(".modal-content").html(result.data);
            } else {
              var fields = result.data;
              for (var i = 0; i < fields.length; ++i) {
                $('#' + fields[i] + ':not([required])').after("<b class='error-text'>*Данное поле является обязательным для заполнения.</b>");
                $('#' + fields[i]).attr("required", true);
              }
            }
          },
          error: function(xhr, resp, text) {
            $(".modal-content").html("Что-то пошло не так");
          }
        })
      });
    },
    dataType: 'html'
  });
  $('.demo').on('click', function() {
    $('#ContactUsModal').modal({
      show: true
    });
  });
});
