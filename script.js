function outlined_to_full(el){
    el.src = el.src.replace("outlined","full");
    el.style.cursor = "pointer"
}

function full_to_outlined(el){
    el.src = el.src.replace("full","outlined");
}
