﻿var postsController = function (dataService) {

  function publish(id) {
    dataService.put("content/publish/" + id + "?flag=P", null, callback, fail);
  }

  function unpublish(id) {
    dataService.put("content/publish/" + id + "?flag=U", null, callback, fail);
  }

  function remove(id) {
    dataService.remove("content/remove/" + id, callback, fail);
  }

  function callback() {
    toastr.success('Updated');
    setTimeout(function () {
        window.location.href = webRoot + 'admin';
    }, 1000);
  }

  function filter() {
    var status = $('input[name=status-filter]:checked').val();
    var url = webRoot + "content?status=" + status;
    window.location.href = url;
  }

  return {
    publish: publish,
    unpublish: unpublish,
    remove: remove,
    filter: filter
  };
}(DataService);

// filters collapsable
$('.filter-group-title').on('click', function() {
  if ($(window).width() < 992) {
    $(this).toggleClass('active');
    $(this).parent().toggleClass('active');
  }
});