

const btn = document.getElementById("btn");

btn.addEventListener("click",(e) => {
    e.stopPropagation();
    let x = e.offsetX;
    let y = e.offsetY;


    const upperBtn = document.getElementById("upperBtn");
    let span = document.createElement('span');
    span.style.left= x + "px";
    span.style.top= y + "px";
    upperBtn.appendChild(span);

    setTimeout(() => {
        span.remove();
     },1000)
})




