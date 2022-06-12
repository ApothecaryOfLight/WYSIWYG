function recursively_traverse_tree( node, objectified_post ) {
    if( node.firstChild ) {
        for( key in node.childNodes ) {
            recursively_traverse_tree( node.childNodes[key], objectified_post );
        }
    } else {
        const type = node.nodeName;

        if( type == "#text" || type == "DIV" ) {
            if( node.textContent ) {
                objectified_post.push({
                    type: "text",
                    content: node.textContent
                });
            }
            return;
        } else if( type == "IMG" ) {
            objectified_post.push({
                type: "image",
                content: {
                    src: node.src,
                    name: "image name",
                    alt: "alt desc"
                }
            });
            return;
        }   
    }
}

function get_text() {
    const objectified_post = [];
    const myInput = document.getElementById("myInput");
    recursively_traverse_tree( myInput, objectified_post );
    console.dir( objectified_post );
}