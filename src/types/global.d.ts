import { Container, Engine } from "tsparticles-engine";

declare global {
  interface Window {
    tsParticles: Engine;
  }
}

export {}; 