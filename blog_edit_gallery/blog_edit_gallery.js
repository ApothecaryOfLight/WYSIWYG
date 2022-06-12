
const images = [];

function add_gallery_images() {

}

function delete_gallery_image() {

}

function emplace_gallery_image( GalleryImageReference ) {

}


function upload_images() {
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

function create_gallery_image_overlay( image_container_ref, image_ref ) {
  const overlay = document.createElement("div");
  overlay.classList = "blog_edit_gallery_image_control_overlay";

  const delete_button = document.createElement("button");
  delete_button.classList = "blog_edit_gallery_image_control_overlay_delete_button";
  delete_button.textContent = "X";
  delete_button.onclick = () => {
    image_container_ref.remove();
  }
  overlay.appendChild( delete_button );

  const emplace_button = document.createElement("button");
  emplace_button.classList = "blog_edit_gallery_image_control_overlay_emplace_button";
  emplace_button.textContent = "<-";
  emplace_button.onclick = () => {
    const image_element = document.createElement("img");
    image_element.src = image_ref.src;
    image_element.classList = "emplaced_image";

    const myEditField = document.getElementById("myInput");
    myEditField.appendChild( image_element );
  }
  overlay.appendChild( emplace_button );

  return overlay;
}

function add_visible_image_to_gallery( raw_image_data ) {
  const image_container = document.createElement("div");
  image_container.classList = "blog_edit_gallery_image_container";

  const image = document.createElement("img");
  image.src = raw_image_data;
  image.classList = "blog_edit_gallery_image";
  image_container.appendChild( create_gallery_image_overlay(image_container, image) );
  image_container.appendChild( image );

  
  const gallery_ref = document.getElementById("image_gallery");
  gallery_ref.appendChild( image_container );
}