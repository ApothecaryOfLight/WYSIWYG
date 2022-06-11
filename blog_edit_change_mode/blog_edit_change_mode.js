

function render_edit_mode() {
    
}


function attach_change_mode_events() {
    const add_image_button = document.getElementById("get_image");
    add_image_button.addEventListener( "click", upload_images );

    
    const get_text_button = document.getElementById("get_text");
    get_text_button.addEventListener( "click", get_text );
}