$(document).ready(function(){
  alllog();
  setDate();
  addnewFild();
  calQty();
});

function alllog() {
  $('.moveforgot').on('click', function(){
    $('.forgot').addClass('forgotOpen');
    $('.login').removeClass('loginOpen');
    $('.register').removeClass('registerOpen');
  });
  $('.movelogin').on('click', function(){
    $('.forgot').removeClass('forgotOpen');
    $('.login').addClass('loginOpen');
    $('.register').removeClass('registerOpen');
  });
  $('.moveRegister').on('click', function(){
    $('.forgot').removeClass('forgotOpen');
    $('.login').removeClass('loginOpen');
    $('.register').addClass('registerOpen');
  });
}

function setDate(){
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  var today = year + "-" + month + "-" + day;
  document.getElementById('fordate').value = today;
}

var crthtml = `
  <div class="userInfo">
    <div class="userinfolist itemcode">
      <span>Item Code <b>*</b></span>
      <input type="text" class="userinput">
    </div>
    <div class="userinfolist description">
      <span>Description <b>*</b></span>
      <input type="text" class="userinput">
    </div>
    <div class="userinfolist quantity">
      <span>Quantity <b>*</b></span>
      <input type="text" class="userinput valqty">
    </div>
    <div class="userinfolist finish">
      <span>Finish <b>*</b></span>
      <input type="text" class="userinput">
    </div>
    <div class="userinfolist handing">
      <span>Handing <b>*</b></span>
      <input type="text" class="userinput">
    </div>
    <div class="userinfolist addbtns">
      <span>&nbsp;</span>
      <!-- <input type="button" value="Add" class="btnIndex"> -->
      <a href="javascript:void(0);" class="btnIndex">Add</a>
    </div>
  </div>
`;
function addnewFild(){
  var i = 1;
  $('body').on('click', '.btnIndex', function(){
    $(this).attr('class', 'closeIndex').text('Delete');
    $('#creatDiv').append(crthtml); i++; $('.itmInc > span').text(i);
  });
  $('body').on('click', '.closeIndex', function(){
    $(this).parent().parent().remove(); i--; $('.itmInc > span').text(i);
  });
}

function calQty(){
  $('body').on('keyup', '.valqty', function() {
    var total=0;
    $('.valqty').each(function(){ quantity = parseInt($(this).val());
      if (!isNaN(quantity)) { total += quantity; }
    });
    $('.qtyInc > span').text(total);
    $('body').on('click', '.closeIndex', function() {
      $('.valqty').each(function(){ quantity = parseInt($(this).val());
        if (!isNaN(quantity)) { total -= quantity; }
      });
      $('.qtyInc > span').text(total);
    });
  });
}










