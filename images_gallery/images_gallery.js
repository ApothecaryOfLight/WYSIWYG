function show_gallery() {
}

function hide_gallery() {

}


function add_image_to_gallery() {
    const image_input = document.createElement("input");
    image_input.type = 'file';
    image_input.accept = 'image/*';
    image_input.setAttribute("multiple","");

    //Attach an event listener to the input element.
    image_input.onchange = e => {
        //Iterate through each file being added.
        for( let file_index = 0; file_index < e.target.files.length; file_index++ ) {
        //Create a file reader.
        const reader = new FileReader();

        //Read the file.
        reader.readAsDataURL( e.target.files[file_index] );

        //Attach an event listener to fire once the file is fully loaded.
        reader.onload = readerEvent => {
            //Store the image now that it's processed.
            store_image( readerEvent );
        }
        };
    }

    //Trigger the input element.
    image_input.click();
}

function store_image( inImageData ) {
  //Get size.
  const size = inImageData.total/1000000;
  if( size > 15 ) {
    alert( "Image too large!" );
    return;
  }

  //Get MIME type.
  const mime_type = inImageData.srcElement.result.substr(
    5,
    inImageData.srcElement.result.indexOf(";")-5
  );

  //Get the image data.
  const content = inImageData.target.result;
  const pos = inImageData.target.result.indexOf( "," );
  const data = content.substr( pos+1 );

  //Compose raw data string.
  const rawImageData = "data:" + mime_type + ";base64," + data;

  //Add the image to the array of image objects.
  images.push({
    "image_data": rawImageData
  });

  add_visible_image_to_gallery( rawImageData );
}

function add_visible_image_to_gallery( raw_image_data ) {
    const gallery_ref = document.getElementById("image_gallery");
    const image = document.createElement("img");
    image.src = raw_image_data;
    gallery_ref.appendChild( image );
}

function remove_image_from_gallery() {

}