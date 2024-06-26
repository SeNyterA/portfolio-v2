import gsap from 'gsap';
import * as THREE from 'three';
import GlObject from './GlObject';
import fragment from './glsl/fragment-01.glsl';
import vertex from './glsl/vertex-01.glsl';
import Gl from './index';

const planeGeometry = new THREE.PlaneGeometry(1, 1, 32, 32);
const planeMaterial = new THREE.ShaderMaterial({
  vertexShader: vertex,
  fragmentShader: fragment,
});

const loader = new THREE.TextureLoader();

export default class extends GlObject {
  init(el, index, imgUrl) {
    super.init(el);

    this.geometry = planeGeometry;
    this.material = planeMaterial.clone();

    this.material.uniforms = {
      uTexture: { value: 0 },
      uTime: { value: 0 },
      uProg: { value: 0.5 },
      uIndex: { value: index },
    }

    this.imgUrl = imgUrl
    // this.img = this.el.querySelector('img');
    this.texture = loader.load(this.imgUrl, (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;

      this.material.uniforms.uTexture.value = texture;
    })

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.add(this.mesh);

    Gl.scene.add(this);
    this.addEvents();
  }

  updateTime(time) {
    this.material.uniforms.uTime.value = time;
  }

  addEvents() {
    this.mouseEnter();
    this.mouseLeave();
  }

  setImgUrl(imgUrl) {
    this.imgUrl = imgUrl;
    this.texture = loader.load(this.imgUrl, (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;

      this.material.uniforms.uTexture.value = texture;
    })
  }

  mouseEnter() {
    this.el.addEventListener('mouseenter', () => {
      gsap.to(this.material.uniforms.uProg, {
        duration: 1,
        value: 1,
        ease: 'power.inOut',
      });
    });
  }

  mouseLeave() {
    this.el.addEventListener('mouseleave', () => {
      gsap.to(this.material.uniforms.uProg, {
        duration: 1,
        value: 0,
        ease: 'power.inOut',
      });
    });
  }
}