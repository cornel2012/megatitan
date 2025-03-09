// Type definitions for three.js 0.69.0
// Project: http://mrdoob.github.com/three.js/
// Definitions by: Kon <http://phyzkit.net/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module THREE {
    export interface LoaderProgressEvent {
        lengthComputable: boolean;
        loaded: number;
        total: number;
    }

    export var REVISION: string;
    export var FrontSide: number;
    export var BackSide: number;
    export var DoubleSide: number;
    export var AdditiveBlending: number;
    export var RepeatWrapping: number;
    export var LinePieces: number;
    export var PCFSoftShadowMap: number;

    export class Vector2 {
        constructor(x?: number, y?: number);
        x: number;
        y: number;
        set(x: number, y: number): Vector2;
        copy(v: Vector2): Vector2;
        subVectors(a: Vector2, b: Vector2): Vector2;
    }

    export class Vector3 {
        constructor(x?: number, y?: number, z?: number);
        x: number;
        y: number;
        z: number;
        set(x: number, y: number, z: number): Vector3;
        copy(v: Vector3): Vector3;
        add(v: Vector3): Vector3;
        sub(v: Vector3): Vector3;
        multiply(v: Vector3): Vector3;
        multiplyScalar(scalar: number): Vector3;
        divideScalar(scalar: number): Vector3;
        clone(): Vector3;
        normalize(): Vector3;
        dot(v: Vector3): number;
        project(camera: Camera): Vector3;
        unproject(camera: Camera): Vector3;
        applyMatrix4(matrix: Matrix4): Vector3;
    }

    export class Matrix4 {
        constructor();
        elements: Float32Array;
        set(n11: number, n12: number, n13: number, n14: number,
            n21: number, n22: number, n23: number, n24: number,
            n31: number, n32: number, n33: number, n34: number,
            n41: number, n42: number, n43: number, n44: number): Matrix4;
        makeTranslation(x: number, y: number, z: number): Matrix4;
        makeRotationY(theta: number): Matrix4;
    }

    export class Box3 {
        constructor(min?: Vector3, max?: Vector3);
        min: Vector3;
        max: Vector3;
        setFromObject(object: Object3D): Box3;
    }

    export class Geometry {
        constructor();
        vertices: Vector3[];
        faces: Face3[];
        faceVertexUvs: Vector2[][][];
        boundingBox: Box3;
        computeBoundingBox(): void;
        computeFaceNormals(): void;
        computeVertexNormals(): void;
        applyMatrix(matrix: Matrix4): void;
        clone(): Geometry;
    }

    export class Face3 {
        constructor(a: number, b: number, c: number, normal?: Vector3, color?: Color, materialIndex?: number);
        a: number;
        b: number;
        c: number;
        normal: Vector3;
        vertexNormals: Vector3[];
    }

    export class Material {
        constructor();
        side: number;
        opacity: number;
        transparent: boolean;
        blending: number;
    }

    export class MeshBasicMaterial extends Material {
        constructor(parameters?: any);
        color: Color;
        map: Texture;
    }

    export class MeshPhongMaterial extends Material {
        constructor(parameters?: any);
        color: Color;
        map: Texture;
    }

    export class MeshFaceMaterial extends Material {
        constructor(materials?: Material[]);
        materials: Material[];
    }

    export class LineBasicMaterial extends Material {
        constructor(parameters?: any);
        color: Color;
    }

    export class ShaderMaterial extends Material {
        constructor(parameters?: any);
        uniforms: any;
        vertexShader: string;
        fragmentShader: string;
    }

    export class Color {
        constructor(hex?: number);
        setHex(hex: number): Color;
    }

    export class Texture {
        constructor(image?: HTMLImageElement);
        wrapS: number;
        wrapT: number;
        repeat: Vector2;
    }

    export class Object3D {
        constructor();
        position: Vector3;
        rotation: Vector3;
        scale: Vector3;
        visible: boolean;
        add(object: Object3D): void;
        remove(object: Object3D): void;
    }

    export class Mesh extends Object3D {
        constructor(geometry?: Geometry, material?: Material | Material[]);
        geometry: Geometry;
        material: Material | MeshFaceMaterial;
        castShadow: boolean;
        receiveShadow: boolean;
    }

    export class Line extends Object3D {
        constructor(geometry: Geometry, material: Material, mode?: number);
    }

    export class PerspectiveCamera extends Camera {
        constructor(fov?: number, aspect?: number, near?: number, far?: number);
        fov: number;
        aspect: number;
        near: number;
        far: number;
        updateProjectionMatrix(): void;
    }

    export class Camera extends Object3D {
        constructor();
        matrixWorldInverse: Matrix4;
        projectionMatrix: Matrix4;
    }

    export class Scene extends Object3D {
        constructor();
        fog: any;
        overrideMaterial: Material;
        autoUpdate: boolean;
        getScene(): Scene;
    }

    export class WebGLRenderer {
        constructor(parameters?: any);
        domElement: HTMLCanvasElement;
        setSize(width: number, height: number): void;
        clear(): void;
        render(scene: Scene, camera: Camera): void;
        clearDepth(): void;
        shadowMapEnabled: boolean;
        shadowMapSoft: boolean;
        shadowMapType: number;
        autoClear: boolean;
    }

    export class Shape {
        constructor();
        constructor(points: Vector2[]);
        constructor(points: { x: number; y: number; }[]);
        moveTo(x: number, y: number): void;
        lineTo(x: number, y: number): void;
        fromPoints(points: Vector2[] | { x: number; y: number; }[]): void;
        holes: Shape[];
        extractPoints(): { shape: Vector2[]; holes: Vector2[][]; };
    }

    export class Path extends Shape {
        constructor();
        constructor(points: Vector2[]);
        constructor(points: { x: number; y: number; }[]);
        fromPoints(points: Vector2[] | { x: number; y: number; }[]): void;
    }

    export class ShapeGeometry extends Geometry {
        constructor(shape: Shape, options?: any);
        constructor(shapes: Shape[], options?: any);
        addShape(shape: Shape, options?: any): void;
    }

    export class PlaneGeometry extends Geometry {
        constructor(width: number, height: number, widthSegments?: number, heightSegments?: number);
    }

    export class SphereGeometry extends Geometry {
        constructor(radius: number, widthSegments?: number, heightSegments?: number);
    }

    export class CylinderGeometry extends Geometry {
        constructor(radiusTop: number, radiusBottom: number, height: number, radiusSegments?: number);
    }

    export class HemisphereLight extends Light {
        constructor(skyColor?: number, groundColor?: number, intensity?: number);
    }

    export class DirectionalLight extends Light {
        constructor(color?: number, intensity?: number);
        position: Vector3;
        target: Object3D;
    }

    export class Light extends Object3D {
        constructor(hex?: number);
        color: Color;
    }

    export class Raycaster {
        constructor(origin?: Vector3, direction?: Vector3, near?: number, far?: number);
        ray: Ray;
        near: number;
        far: number;
        linePrecision: number;
        intersectObject(object: Object3D, recursive?: boolean): any[];
        intersectObjects(objects: Object3D[], recursive?: boolean): any[];
    }

    export class Ray {
        constructor(origin?: Vector3, direction?: Vector3);
        origin: Vector3;
        direction: Vector3;
    }

    export var ImageUtils: {
        crossOrigin: string;
        loadTexture(url: string, mapping?: any, onLoad?: Function, onError?: Function): Texture;
    };

    export class JSONLoader {
        constructor();
        crossOrigin: string;
        load(url: string, callback: (geometry: Geometry, materials: Material[]) => void, onProgress?: (event: any) => void): void;
    }
}
