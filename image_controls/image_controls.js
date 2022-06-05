function mouse_over_image( image_dom ) {
    const image_ref = document.getElementById( image_dom );
    image_ref.style.border = "solid 1px blue";
}

function attach_image_controls() {
    
    const add_image_button = document.getElementById("get_image");
    add_image_button.addEventListener("click",add_image_to_gallery);

    const test_image_ref = document.getElementById("test_image");
    test_image_ref.addEventListener("mousedown",click_image);
    document.addEventListener("mousemove",move_image);
    test_image_ref.addEventListener("mouseup",release_image_click);
    document.addEventListener("mouseup",release_image_click);
}

function trim_px( inPixelString ) {
    return String(inPixelString).substring( 0, String(inPixelString).length -2 );
}

function move_image( event ) {
    if( mouse_object.is_image_select ) {
        /*console.dir( event );
        console.log("moving image");
        console.log( event.clientX );
        console.log( event.target.style.marginLeft );
        const stupid_javascript = String(event.target.style.marginLeft).substring()
        event.target.style.marginLeft += event.clientX;*/

        const marginLeftString = String(event.target.style.marginLeft);
        const marginLeftNumber = marginLeftString.substring( 0, marginLeftString.length-2 );
       // event.target.style.marginLeft = Number(marginLeftNumber) + event.clientX + "px";

       const half_x_ref = window.getComputedStyle( mouse_object.dom );
       const half_x = half_x_ref.getPropertyValue('width');
       const half_y = half_x_ref.getPropertyValue('height');


       const half_x_val = event.clientX - (trim_px(half_x)/2) + "px";
       const half_y_val = event.clientY - (trim_px(half_y)/2) + "px";

       //console.log( event.clientX + half_x_val  + "px");

       mouse_object.dom.style.paddingLeft = half_x_val;
       mouse_object.dom.style.paddingTop = half_y_val;
    }
}