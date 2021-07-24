$("#profile-tab").click(function(){
  $(".tabs").removeClass("selected-tab");
  $("#profile-tab").addClass("selected-tab");
  $(".content-tabs").removeClass("active-content");
  $(".content-tabs").addClass("hidden-content");
  $("#profile-content").removeClass("hidden-content");
  $("#profile-content").addClass("active-content");
});
$("#combat-tab").click(function(){
  $(".tabs").removeClass("selected-tab");
  $("#combat-tab").addClass("selected-tab");
  $(".content-tabs").removeClass("active-content");
  $(".content-tabs").addClass("hidden-content");
  $("#combat-content").removeClass("hidden-content");
  $("#combat-content").addClass("active-content");
});
$("#skills-tab").click(function(){
  $(".tabs").removeClass("selected-tab");
  $("#skills-tab").addClass("selected-tab");
  $(".content-tabs").removeClass("active-content");
  $(".content-tabs").addClass("hidden-content");
  $("#skills-content").removeClass("hidden-content");
  $("#skills-content").addClass("active-content");
});
$("#powers-tab").click(function(){
  $(".tabs").removeClass("selected-tab");
  $("#powers-tab").addClass("selected-tab");
  $(".content-tabs").removeClass("active-content");
  $(".content-tabs").addClass("hidden-content");
  $("#powers-content").removeClass("hidden-content");
  $("#powers-content").addClass("active-content");
});
$("#inventory-tab").click(function(){
  $(".tabs").removeClass("selected-tab");
  $("#inventory-tab").addClass("selected-tab");
  $(".content-tabs").removeClass("active-content");
  $(".content-tabs").addClass("hidden-content");
  $("#inventory-content").removeClass("hidden-content");
  $("#inventory-content").addClass("active-content");
});
$("#dis-roll").click(function(){
  $(".triple").removeClass("selected");
  $("#dis-roll").addClass("selected");
  $("#roll-value").val(-1);
});
$("#nor-roll").click(function(){
  $(".triple").removeClass("selected");
  $("#nor-roll").addClass("selected");
  $("#roll-value").val(0);
});
$("#adv-roll").click(function(){
  $(".triple").removeClass("selected");
  $("#adv-roll").addClass("selected");
  $("#roll-value").val(1);
});

$(".str-save").click(function(){
  var msg = '<div class="message"><span class="char-name">Carla Copperleaf</span> rolled a Strength Saving Throw: '
  var result = Math.floor(Math.random() * 20) + 1;
  if (result == 20){
    msg += '<span class="result crit">'
  } else if (result == 1){
    msg += '<span class="result fail">'
  } else {
    msg += '<span class="result">'
  }
  msg += (result - 1).toString();
  msg += '</span></div>'
  $(".main-content").append(msg);
});

$(".dex-save").click(function(){
  var msg = '<div class="message"><span class="char-name">Carla Copperleaf</span> rolled a Dexterity Saving Throw: '
  var result = Math.floor(Math.random() * 20) + 1;
  if (result == 20){
    msg += '<span class="result crit">'
  } else if (result == 1){
    msg += '<span class="result fail">'
  } else {
    msg += '<span class="result">'
  }
  msg += (result + 3).toString();
  msg += '</span></div>'
  $(".main-content").append(msg);
});

$(".con-save").click(function(){
  var msg = '<div class="message"><span class="char-name">Carla Copperleaf</span> rolled a Constitution Saving Throw: '
  var result = Math.floor(Math.random() * 20) + 1;
  if (result == 20){
    msg += '<span class="result crit">'
  } else if (result == 1){
    msg += '<span class="result fail">'
  } else {
    msg += '<span class="result">'
  }
  msg += (result + 2).toString();
  msg += '</span></div>'
  $(".main-content").append(msg);
});

$(".int-save").click(function(){
  var msg = '<div class="message"><span class="char-name">Carla Copperleaf</span> rolled a Intelligence Saving Throw: '
  var result = Math.floor(Math.random() * 20) + 1;
  if (result == 20){
    msg += '<span class="result crit">'
  } else if (result == 1){
    msg += '<span class="result fail">'
  } else {
    msg += '<span class="result">'
  }
  msg += (result).toString();
  msg += '</span></div>'
  $(".main-content").append(msg);
});

$(".wis-save").click(function(){
  var msg = '<div class="message"><span class="char-name">Carla Copperleaf</span> rolled a Wisdom Saving Throw: '
  var result = Math.floor(Math.random() * 20) + 1;
  if (result == 20){
    msg += '<span class="result crit">'
  } else if (result == 1){
    msg += '<span class="result fail">'
  } else {
    msg += '<span class="result">'
  }
  msg += (result + 3).toString();
  msg += '</span></div>'
  $(".main-content").append(msg);
  $(".main-content").scrollTop = $(".main-content").scrollHeight;
});

$(".cha-save").click(function(){
  var msg = '<div class="message"><span class="char-name">Carla Copperleaf</span> rolled a Charisma Saving Throw: '
  var result = Math.floor(Math.random() * 20) + 1;
  if (result == 20){
    msg += '<span class="result crit">'
  } else if (result == 1){
    msg += '<span class="result fail">'
  } else {
    msg += '<span class="result">'
  }
  msg += (result + 6).toString();
  msg += '</span></div>'
  $(".main-content").append(msg);
});

$(".death-saves").click(function(){
  var msg = '<div class="message"><span class="char-name">Carla Copperleaf</span> rolled a Death Saving Throw: '
  var result = Math.floor(Math.random() * 20) + 1;
  if (result == 20){
    msg += '<span class="result crit">'
    $(".succ-check:not(:checked)").first().prop('checked', true);
    $(".succ-check:not(:checked)").first().prop('checked', true);
  } else if (result == 1){
    msg += '<span class="result fail">'
    $(".fail-check:not(:checked)").first().prop('checked', true);
    $(".fail-check:not(:checked)").first().prop('checked', true);
  } else {
    msg += '<span class="result">'
    if (result > 10){
      $(".succ-check:not(:checked)").first().prop('checked', true);
    } else {
      $(".fail-check:not(:checked)").first().prop('checked', true);
    }
  }
  msg += (result).toString();
  msg += '</span></div>'
  $(".main-content").append(msg);
});
