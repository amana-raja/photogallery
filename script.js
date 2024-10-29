let main = document.querySelector("#main");
let images  = document.querySelectorAll("img");



function update(previewPic) {
    console.log("its working")
    main.style.backgroundImage = `url('${previewPic.src}')`;
    main.innerHTML = previewPic.alt;
 
}


function undo() {
    main.style.backgroundImage = `url('')`;
    main.innerHTML = "Hover over an image to display here";
}

// adding tabindex to body 
function addtabindex() {
    for ( i = 0; i < images.length; i++) {
        let tabindex = i;
        images[i].setAttribute("tabindex",tabindex);
        
    }
    
}

// adding focus 
function addfocus() {
    images.tabindex.border = red;
}

// adding blur 
function myblur() {
    for (let i = 0; i < images.length; i++) {
        const element = images[i];
        images[i].alt= images[i].alt.toUpperCase();
    }
}
myblur();