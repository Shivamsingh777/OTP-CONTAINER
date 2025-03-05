const inputs = document.getElementById("inputs");



inputs.addEventListener("input", function (e) {
   const target = e.target;
   const val = target.value;
   if (isNaN(val)) {
    target.value = "";
    return;
   }
   if (val != "") {
    const next = target.nextElementSibling;
    if (next) {
        next.focus();
    };
}
   });



inputs.addEventListener("keyup", function (e) {
    
    const key = e.key.toLowerCase();

    if (key === "backspace" || key === "delete") {
        e.target.value = "";
        const prev = e.target.previousElementSibling;
    if (prev) {
        prev.focus();
    } 
    return; 
  }

  
});
