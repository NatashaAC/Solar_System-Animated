const canvas = document.getElementById('solarSystem');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

// const moon = new Image();
// const earth = new Image();

// Sun Class
class Sun {
    constructor() {
        this.velocity = {
            x: 0,
            y: 0
        }

        const image = new Image();
        image.src = './img/sun.png';

        image.onload = () => {
            const scale = .75;
            this.image = image;
            this.width = image.width * scale;
            this.height = image.height * scale;
            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height / 2 - this.height / 2
            }
        }
    }

    drawSun() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height); 
    }

    updateSun() {
        if(this.image) {
            this.drawSun();
        }
    }
}

// Earth Class
class Earth {
    constructor() {
        this.velocity = 0.05;

        const image = new Image();
        image.src = './img/earth.png';

        image.onload = () => {
            const scale = .35;
            this.image = image;
            this.width = image.width * scale;
            this.height = image.height * scale;
            this.position = {
                x: canvas.width / 2 - this.width / 2 + 100,
                y: canvas.height / 2 - this.height / 2 + 100
            }
        }
    }

    drawEarth() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height); 
    }

    updateEarth() {
        if(this.image) {
            this.drawEarth();
        }
    }
}

// Earth's Orbit Class
class Orbit {
    constructor() {
        this.position = {
            x: 250,
            y: 250
        }

        this.radius = 140;
    }

    drawOrbit() {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.lineWidth = .5;
        ctx.strokeStyle = 'grey';
        ctx.stroke();
        ctx.closePath();
    }

    updateOrbit() {
        this.drawOrbit();
    }
}

// Moon Class
class Moon {
    constructor() {
        this.velocity = {
            x: 0,
            y: 0
        }

        const image = new Image();
        image.src = './img/moon.png';

        image.onload = () => {
            const scale = .10;
            this.image = image;
            this.width = image.width * scale;
            this.height = image.height * scale;
            this.position = {
                x: canvas.width / 2 - this.width / 2 + 125,
                y: canvas.height / 2 - this.height / 2 + 125
            }
        }
    }

    drawMoon() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height); 
    }

    updateMoon() {
        if(this.image) {
            this.drawMoon();
        }
    }
}


const sun = new Sun();
const earth = new Earth();
const moon = new Moon();
const orbit = new Orbit();

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, 500, 500);

    // console.log('sun!');
    sun.updateSun();
    orbit.updateOrbit();
    earth.updateEarth();
    moon.updateMoon();
}

animate();