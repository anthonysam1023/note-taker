var $newNoteList = $("#title");
var $newNotetitle = $("#title");
var $newNotebody = $("#body");
var $submitBtn = $("#newNote-submit");
var $deleteBtn = $("#newNote-delete");

var getAndRendernewNote = function() {
  $.ajax({
    url: "/api/getnotes",
    method: "GET"
  }).then(function(data) {
    console.log(data)
    var $listItems = [];

    for (var i = 0; i < data.length; i++) {
      var newNote = data[i];

      var $li = $("<li class='list-group-item'>").data(newNote);
      var $row = $("<div class='row'>");
      var $col11 = $("<div class='col-11'>");
      var $newNoteP = $("<p>").body('"' + newNote.body + '"');
      var $titleP = $("<p class='float-right'>").body("- " + newNote.title);
      var $clearFix = $("<div class='clearfix'>");
      var $ratingP = $("<p class='float-right'>").body(newNote.rating);
      var $col1 = $("<div class='col-1'>");
      var $upIcon = $("<i class='fas fa-angle-up'>");
      var $downIcon = $("<i class='fas fa-angle-down'>");

      $li.append(
        $row.append(
          $col11.append($newNoteP, $titleP, $clearFix, $ratingP),
          $col1.append($upIcon, $downIcon)
        )
      );

      $listItems.push($li);
    }

    $newNoteList.empty();

    $newNoteList.append($listItems);
  });
};