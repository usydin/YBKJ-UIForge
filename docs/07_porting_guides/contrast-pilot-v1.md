# UIForge v1｜跨项目文字对比度验收试点
2026-11-27 · STATIC_TOKEN_PAIR_REVIEW / PRODUCT_RENDER_NOT_RUN

现有定位与设计原则继续有效，不创建统一视觉主题或React组件库。实际读取固定 LinkScope V2、NotiVision 和 HaoHomie Signature 三份完整 CSS token 源，按选定作用域提取变量并解析直接 var() 引用。26组明确配色按普通文字4.5:1内部设计目标计算，15组达到，11组低于，11组给出达到目标的文字专用修订候选。CSS引用与声明不是浏览器computed style；LinkScope badge以不透明panel为底并合成指定rgba层，实际渐变、底层、状态、字号、焦点及缩放必须在产品现场另验。

| 产品/主题/用途 | 原计算值 | 建议文字色 | 建议计算值 |
|---|---:|---|---:|
| LinkScope/light/faint-panel | 3.27 | #596b7e | 5.484 |
| LinkScope/light/faint-sidebar | 3.184 | #596b7e | 5.339 |
| LinkScope/light/badge-ok | 2.315 | #176344 | 6.507 |
| LinkScope/light/badge-warn | 2.093 | #805018 | 6.129 |
| LinkScope/light/badge-danger | 3.105 | #922f32 | 6.713 |
| LinkScope/dark/faint-panel | 3.835 | #91a1b0 | 6.293 |
| LinkScope/dark/faint-sidebar | 4.114 | #91a1b0 | 6.75 |
| LinkScope/dark/badge-danger | 3.989 | #f1a29c | 7.167 |
| NotiVision/light/device-normal | 4.151 | #0c694a | 6.019 |
| NotiVision/light/device-warning | 3.443 | #84510e | 6.038 |
| NotiVision/light/device-unknown | 3.641 | #505c67 | 6.1 |

## 复用方法
`node --input-type=module -e "import {selftest} from './tools/contrast.mjs'; console.log(selftest())"`（从UIForge根目录执行，Node现代ESM）。实际在隔离JavaScript执行环境运行同一函数 11/11 通过；未在本机Node或浏览器执行该命令。实际选定配色及建议结果见 [JSON](contrast-pairs-v1.json)。measure 接收 foreground/background 的 #RGB 或 #RRGGBB、可选 overlay:{color,alpha}；固定普通文字4.5阈值、判定用未四舍五入值，显示三位小数。不解析任意CSS，不检查全部可访问性，也不做自动改色。

## 采用规则
- LinkScope: 原品牌和图表色不变，仅对小字/状态文字单独新增text token或限定选择器；实测每个实际背景后采用，不能用全局替换波及图标、线条及图表。
- NotiVision: 仅浅色设备状态声明色对，新增文字专用语义token候选；保留 Fire/Fault/Offline/Unknown 等不同业务状态文字，不改变报警或设备状态机。隔离设备玫红属于产品业务映射，未经协议确认不新增状态或改变映射。
- HaoHomie: 保留 Signature 自有色板，已选配色通过不代表完整页面通过。
- CamVision/NotiDetect: 已定位桌面原生GUI源文件，本轮未读取完整样式或渲染；沿用既有商业UI原则、详细Log与协议字典入口，后续真实Windows显示缩放下验证，不把Web CSS移植进Qt/Tk。

新增文件：tools/contrast.mjs、docs/02_tokens/contrast-pairs-v1.json、docs/07_porting_guides/contrast-pilot-v1.md。复用范围：明确Web/桌面RGB配色对的静态核验；不适用于任意渐变、透明前景及完整WCAG认证。无外部依赖、网络、实际工厂数据、运行时业务修改或部署。后续由既有各产品研发线在稳定窗口采用建议并做浏览器/Windows实际验收，不另建产品PR。
