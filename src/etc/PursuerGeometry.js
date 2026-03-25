/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import * as THREE from "three";

class PursuerGeometry extends THREE.BufferGeometry {
  constructor() {
    super();

    const vertices = [];
    const indices = [];

    // 頂點 (正確 0-8)
    vertices.push(0.0, 0.8, 0.0); // 0 頂點
    vertices.push(0.6, 0.2, 0.4); // 1
    vertices.push(0.6, 0.2, -0.4); // 2
    vertices.push(-0.6, 0.2, -0.4); // 3
    vertices.push(-0.6, 0.2, 0.4); // 4
    vertices.push(0.7, -0.3, 0.5); // 5
    vertices.push(0.7, -0.3, -0.5); // 6
    vertices.push(-0.7, -0.3, -0.5); // 7
    vertices.push(-0.7, -0.3, 0.5); // 8

    // ==================== 正確 indices (只用 0-8) ====================
    // 上錐 (頂點連四邊)
    indices.push(0, 1, 2);
    indices.push(0, 2, 3);
    indices.push(0, 3, 4);
    indices.push(0, 4, 1);

    // 側面 (上→下層)
    indices.push(1, 5, 6); // 右前
    indices.push(1, 6, 2);
    indices.push(2, 6, 7); // 右後
    indices.push(2, 7, 3);
    indices.push(3, 7, 8); // 左後
    indices.push(3, 8, 4);
    indices.push(4, 8, 5); // 左前
    indices.push(4, 5, 1);

    this.setIndex(indices);
    this.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3),
    );
    this.computeVertexNormals();

    this.scale(0.5, 0.5, 0.5);
    this.computeBoundingSphere();
  }
}

export { PursuerGeometry };
