 
alert('Opps! This website is still under construction!')
// moving cursor animation with gsap
gsap.set('.cursor',{xPercent:-50, yPercent: -50})

    let cursor = document.querySelector('.cursor')

    let mouseX;
    let mouseY;

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.to(cursor, 0.5, {x: mouseX, y:mouseY})
    })

   