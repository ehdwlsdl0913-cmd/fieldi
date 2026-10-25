# 3D 보기 부품 (FIELDI 1.6.0)

`fieldi-3d.min.js`는 아래 오픈소스를 esbuild로 하나로 묶은 것이고, `frag-worker.min.js`는 That Open Fragments의 작업용 파일 그대로입니다.
3D 화면을 처음 열 때만 받습니다(앱 설치 때 미리 받지 않음).

| 부품 | 버전 | 사용 조건 |
|---|---|---|
| @thatopen/fragments | 3.6.0 | MIT — https://github.com/ThatOpen/engine_fragment |
| three.js (+ OrbitControls) | 0.186.1 | MIT — https://github.com/mrdoob/three.js |
| web-ifc | 0.0.78 | MPL-2.0 — https://github.com/ThatOpen/engine_web-ifc (고치지 않고 그대로 씀) |
| pako, earcut, flatbuffers, lru-cache, xxhash-wasm | Fragments가 쓰는 판 | MIT / ISC / Apache-2.0 |

다시 묶는 법: 위 버전으로 npm 설치 뒤
`export * as THREE from 'three'; export * as FRAGS from '@thatopen/fragments'; export { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';`
를 `esbuild --bundle --format=esm --minify`로 묶고, `@thatopen/fragments/dist/Worker/worker.min.mjs`를 `frag-worker.min.js`로 복사합니다.
