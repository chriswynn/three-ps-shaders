import Card from "../../components/Card";

const Strength = () => {
  const fragShader = `
    #define PI 3.1415926538
    varying vec3 vUv;
    uniform vec2 u_resolution;

    void main() {
      vec3 color = vec3(0.0);
      vec2 st = gl_FragCoord.xy / u_resolution;

      color += step(0.5 + cos(st.y * PI) * 0.25, st.x);

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  return <Card fragShader={fragShader} />;
};

export default Strength;
