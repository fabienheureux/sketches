const initialTime = + new Date()
const Sketch = p => {
  let gray = 0;
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
  };

  p.draw = () => {
    p.background('#000')
    for (let i = 0; i < 900; i++) {
      let elapsedTime = (new Date() - initialTime) / 1000
      p.fill(
        127 + 127 * Math.sin(i * 0.01 + elapsedTime),
        127 + 127 * Math.sin(i * 0.011 + elapsedTime),
        127 + 127 * Math.sin(i * 0.012 + elapsedTime),
      )
      p.ellipse(
        (window.innerWidth / 2) + 100 * Math.sin(i * 0.02 + elapsedTime),
        50 + i,
        50 + 40 * Math.sin(i * 0.005 + elapsedTime),
        50 + 40 * Math.sin(i * 0.005 + elapsedTime)
      );
    }
  };
};

export default Sketch;
