window.onload = (load_event) => {
    console.log( "Loaded!" );

    const my_get_text_button = document.getElementById("get_text");
    my_get_text_button.addEventListener( "click", get_text_button );

    attach_event_listeners();
};

function get_text_button() {
    const text_field_element = document.getElementById("myInput");
    const text_field_value = text_field_element.value;
    console.log( "value: " + text_field_value );
    console.log( "text: " + text_field_element.text );
    console.log( "outerHTML: " + text_field_element.outerHTML );
    console.log( "outerText: " + text_field_element.outerText );
    console.log( "innerHTML: " + text_field_element.innerHTML );
    console.log( "innerText: " + text_field_element.innerText );
    console.dir( text_field_element );
}

function get_images() {

}

function store_images_in_gallery() {

}

function show_gallery() {

}

function hide_gallery() {

}

function copy_image_from_gallery() {

}

function emplace_image() {

}

