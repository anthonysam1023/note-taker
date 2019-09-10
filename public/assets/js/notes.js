var $newNotesList = $("#newNotes-list");
var newNote = $("#num-newNotes");

var getAndRendernewNotes = function () {
  $.ajax({
      method: "GET",
      url: "/api/getnotes"
    })
    .then(function (data) {
      console.log(data)
      var $newNotesListItems = [];

      for (var i = 0; i < data.length; i++) {
        var newNotes = data[i];

        var $li = $("<li class='list-group-item'>");
        var $title = $("<p>").text("Title: " + newNotes.title);
        var $body = $("<p>").text("Body: " + newNotes.body);

        $li.append($title, $body);

        $newNotesListItems.push($li);
      }

      $newNotesList.append($newNotesListItems);
      newNote.text($newNotesListItems.length);
    });
};

getAndRendernewNotes();

$(document).on("click", ".delete", function () {

})