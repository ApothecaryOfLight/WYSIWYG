function attach_event_listeners() {
    const add_image_button = document.getElementById("get_image");
    add_image_button.addEventListener("click",add_image_to_gallery);


    attach_image_controls();
}

const mouse_object = {
    start_click_x: 0,
    start_click_y: 0,
    is_image_selected: false,
    dom: null
}

function click_image( event ) {
    //console.dir( event );
    mouse_object.is_image_select = true;
    mouse_object.dom = event.target;
}

function release_image_click() {
    console.log( "release" );
    mouse_object.is_image_select = false;
    mouse_object.dom = null;
}

