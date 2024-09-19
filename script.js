const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector('#center').addEventListener("mousemove", throttleFunction((dets) => {
    // Create a new div element
    var div = document.createElement("div");

    // Add class and style to the div
    div.classList.add('imagediv');
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';

    var img = document.createElement("img");
    img.setAttribute("src", "https://images.unsplash.com/photo-1726458573518-04a433641cb4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    div.appendChild(img);

    gsap.to(img, {
        y: "0",
        ease: "power1.out",
        duration: 0.6,
    });

    gsap.to(img, {
        y: "100%",
        delay: 0.3,
        ease: "power3.in",
        duration: 0.6
    });

    // Append the div to the body
    document.body.appendChild(div);
    
    setTimeout(function(){
        div.remove();
    }, 2000);
}, 400));







