// Asynchronous Flickr Search
//
// Flickr reveals a searchable JSON Feed you can access via jQuery's $.getJSON()
// method. Use this to allow users to search for a tag or comma-separated list
// of tags and view the images that are found.
//
// Allow users to click the images to see a larger version with more information.

   
   

// Place your code here, inside the document ready handler.
  // Kevin Hudson 3020 2016



$(document).on('ready', function() {

  // click event function 
  $('button.search').click(function() {
    // searchbox input = variable tags 
    var tags = $('input[name="searchText"]').val();
    searchImages(tags);
    return false; // prevent a reload of the page which causes null in search box 
  });

  function searchImages(tags) {
    // create variable to shorten long API string 
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    //get tags from Flickr and datatype 

    $.getJSON(flickerAPI, {
        tags: tags,
        tagmode: "any",
        format: "json"
      }).done(function(data) {
        $('#images').empty();
        //function for each items pulled from Flickr then return count and item 
        $.each(data.items, function(i, item) {
          var newList = $('<li>'); // Creates new list with a class item in the HTML. Will be used for CSS styling as well 

          // setting list item to new list 

          $('<img>').attr("src", item.media.m).attr("title", item.title).attr("alt", item.description).appendTo(newList);

        var infoTitle =  $('<p>').html("Title : " + item.title).appendTo(newList);
        var infoDate =  $('<p>').text("Date/Time : " + item.date_taken).appendTo(newList);
        var infoAuthor = $('<p>').text("Author : " + item.author).appendTo(newList);
         var infoLink = $('<a>').attr('href', item.link).text('View on Flickr.').appendTo(newList);


          // then appent the list to the image here
          newList.appendTo('#images');
          // after 10 pictures discontinue list 
          if (i === 21) {
            return false;
          }
        });
      });
  }
  // I changed the footer text with Jquery.
  $("footer").text("Nate Hodge, WATS3020, Fall 2016.");
});



    // Create a function called `searchImages()`. This function will handle the
    // process of taking a user's search terms and sending them to Flickr for a
    // response.

    // Inside the `searchImages()` function, the following things should happen:

        // 1.   Accept a string value called `tags` as an argument. Example:
        //      `var searchPhotos = function(tags){`
        //
        // 2.   Define the location of the Flickr API like this:
        //      `var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";`
        //
        // 3.   Construct a `$.getJSON()` call where you send a request object
        //      including the tags the user submitted, and a `done()` handler
        //      that displays and refreshes the content appropriately.
        //
        // 4.   Update the display to add the images to the list with the id
        //      `#images`.

    // Attach an event to the search button (`button.search`) to execute the
    // search when clicked.

        // When the Search button is clicked, the following should happen:
        //
        // 1.   Prevent the default event execution so the browser doesn't
        //      Example: `event.preventDefault();`
        //
        // 2.   Get the value of the 'input[name="searchText"]' and use that
        //      as the `tags` value you send to `searchImages()`.
        //
        // 3.   Execute the `searchImages()` function to fetch images for the
        //      user.

    // STRETCH GOAL: Add a "more info" popup using the technique shown on the
    // Bootstrap Modal documentation: http://getbootstrap.com/javascript/#modals-related-target




