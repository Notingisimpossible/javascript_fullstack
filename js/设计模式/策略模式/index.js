var $input = $('#input').val()
var val = {
  isEmpty: function() {
    return false
  },
  isTel: function() {
    return true
  }
}

var ise = val.isEmpty($input)
var isTel = val.isTel($input)

if (!ise && isTel) {
  alert("通过审核")
}

// $.fn.val
$.input.val({
  isEmpty: false,
  isTel: true
})

