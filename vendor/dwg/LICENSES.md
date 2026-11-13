# 도면 편집기 DWG 읽기 부품

`libredwg-web.js`(웹어셈블리 연결 코드)와 `libredwg-web.wasm`은 아래 오픈소스를 **고치지 않고 그대로** 복사한 것입니다.
DWG 서류를 「✎ 편집」으로 처음 열 때만 받습니다(앱 설치 때 미리 받지 않음, 약 11MB). 앱 화면(`js/dwg.js`)과는 따로, 작업 스레드(`dwg-worker.js`)에서만 돌아갑니다.

| 부품 | 버전 | 사용 조건 |
|---|---|---|
| @mlightcad/libredwg-web (wasm 폴더) | 0.8.8 | GPL-3.0 — https://github.com/mlightcad/libredwg-web |
| GNU LibreDWG (위 부품의 바탕) | libredwg-web 0.8.8에 들어 있는 판 | GPL-3.0 — https://www.gnu.org/software/libredwg/ · 소스 https://git.savannah.gnu.org/git/libredwg.git |

GPL-3.0 전문은 같은 폴더의 `COPYING`에 있습니다. 소스 코드는 위 주소에서 받을 수 있습니다.
(`dwg-worker.js`는 FIELDI가 쓴 짧은 연결 코드입니다.)

다시 받는 법: 임시 폴더에서 `npm install @mlightcad/libredwg-web@0.8.8` 뒤
`node_modules/@mlightcad/libredwg-web/wasm/libredwg-web.js` · `libredwg-web.wasm` 두 파일을 이 폴더로 복사합니다.

DWG로 **저장**은 이 판의 wasm에 DWG 쓰기 함수가 들어 있지 않아(`dwg_write_dxf` DWG→DXF만 있음) 아직 못 합니다. 저장은 DXF 새 판으로 합니다.
