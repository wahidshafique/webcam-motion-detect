export default function Camera(p) {
    let rotation = 0
    let speed = 0

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
    };

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.rotation) {
            rotation = props.rotation * Math.PI / 180
        }
        if (props.speed) {
            speed = props.speed
        }
    };

    p.draw = function () {
        p.background(0)
        //p.noStroke()
        p.push()
        p.rotateY(rotation)
        p.box(100)
        p.pop()
        rotation+=0.01 + speed
    }
};