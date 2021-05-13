import Card from "../../components/Card";

const Void = () => {
  const fragShader = `
    varying vec3 vUv;

    void main() {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
  `;

  return <Card fragShader={fragShader} />;
};

export default Void;
