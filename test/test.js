function recursively_traverse_tree( node, objectified_post ) {
    if( node.firstChild ) {
        for( key in node.childNodes ) {
            recursively_traverse_tree( node.childNodes[key], objectified_post );
        }
    } else {
        const type = node.nodeName;

        if( type == "#text" || type == "DIV" ) {
            if( node.textContent ) {
                console.log( node.textContent );
                objectified_post.push( node.textContent );
            }
            return;
        } else if( type == "IMG" ) {
            objectified_post.push({
                src: node.src,
                name: "image name",
                alt: "alt desc"
            });
            return;
        }   
    }
}

function get_text() {
    const objectified_post = [];

    const myInput = document.getElementById("myInput");

    console.dir( myInput.childNodes );
    
    /*for( const key in myInput.childNodes ) {
        const element = myInput.childNodes[key];
        const type = element.nodeName;

        if( type == "#text" || type == "DIV" ) {
            if( element.textContent ) {
                console.log( element.textContent );
                objectified_post.push( element.textContent );
            }
        } else if( type == "IMG" ) {
            objectified_post.push({
                src: element.src,
                name: "image name",
                alt: "alt desc"
            });
        }
    };*/
    recursively_traverse_tree( myInput, objectified_post );

    console.dir( objectified_post );
}