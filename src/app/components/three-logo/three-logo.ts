import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Input, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

@Component({
  selector: 'app-three-logo',
  standalone: true,
  template: `<div #container [style.width.px]="width" [style.height.px]="height" class="relative flex items-center justify-center"></div>`
})
export class ThreeLogoComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;
  @Input() width: number = 220;
  @Input() height: number = 48;

  private renderer?: THREE.WebGLRenderer;
  private animationId?: number;
  private isBrowser: boolean;
  private rotationSpeed = 0;
  private startTime = 0;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    setTimeout(() => this.initThreeJs(), 0);
  }

  initThreeJs() {
    const scene = new THREE.Scene();
    
    // Use a narrow FOV and move camera back to prevent clipping during rotation
    const camera = new THREE.PerspectiveCamera(15, this.width / this.height, 0.1, 100);
    camera.position.z = 24;
    camera.position.y = 0;

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.nativeElement.appendChild(this.renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xffdf80, 2);
    dirLight.position.set(3, 5, 4);
    scene.add(dirLight);
    const backLight = new THREE.DirectionalLight(0x4ade80, 1.5);
    backLight.position.set(-3, 2, -4);
    scene.add(backLight);

    // Load Font and Create Text
    const loader = new FontLoader();
    loader.load('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/fonts/helvetiker_bold.typeface.json', (font) => {
      const textGeo = new TextGeometry('Tajweedpage', {
        font: font,
        size: 1.7,
        depth: 0.3,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.03,
        bevelOffset: 0,
        bevelSegments: 3
      });
      
      textGeo.computeBoundingBox();
      const centerOffset = -0.5 * (textGeo.boundingBox!.max.x - textGeo.boundingBox!.min.x);
      const yOffset = -0.5 * (textGeo.boundingBox!.max.y - textGeo.boundingBox!.min.y);
      
      const faceMat = new THREE.MeshStandardMaterial({ color: 0x059669, roughness: 0.3, metalness: 0.2 });
      const sideMat = new THREE.MeshStandardMaterial({ color: 0xD4AF37, roughness: 0.4, metalness: 0.8 });
      
      const textMesh = new THREE.Mesh(textGeo, [faceMat, sideMat]);
      
      textMesh.position.x = centerOffset;
      textMesh.position.y = yOffset;
      
      group.add(textMesh);
    });

    this.startTime = Date.now();

    const animate = () => {
      this.animationId = requestAnimationFrame(animate);
      
      const elapsed = Date.now() - this.startTime;
      // Rotate after 3 seconds (3000ms)
      if (elapsed > 3000) {
        // Smoothly increase rotation speed
        this.rotationSpeed = Math.min(this.rotationSpeed + 0.0002, 0.015);
        group.rotation.y += this.rotationSpeed;
      }
      
      this.renderer!.render(scene, camera);
    };
    animate();
  }

  ngOnDestroy() {
    if (this.animationId !== undefined) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.domElement.remove();
    }
  }
}
