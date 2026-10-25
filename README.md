# 60 天 Windows 逆向学习笔记

> 在线阅读：https://xxoingr.github.io/dongtaixuexi/

我的 60 天 Windows 逆向学习记录：在 AI 引导下，每节课都在专门编写的练习程序上动手实验并留下记录。这是我进入"安全 + AI"方向前打下的底层基础。

## 学习路线

| 阶段 | 天数 | 主题 |
| --- | --- | --- |
| 前置 | — | 内存分析工具入门 |
| 一 | Day 1–4 | Windows 可执行文件格式 |
| 二 | Day 5–10 | 模块加载机制与检测视角 |
| 三 | Day 11–15 | 函数拦截技术 |
| 四 | Day 16–20 | 调试器原理与软件保护 |
| 五 | Day 21–26 | Windows 内核基础 |
| 六 | Day 27–30 | 游戏安全分析 + 第一次综合项目 |
| 七 | Day 31–60 | 汇编与编译器、C++ 对象模型、异常处理、调试进阶、多线程，以及第二次综合项目 |

每节课的详细笔记和实验记录见[在线站点](https://xxoingr.github.io/dongtaixuexi/)。

## 学习方法

这套课程由我和两个 AI 分工完成：

| 角色 | 负责 |
| --- | --- |
| GPT / Codex | 制定 60 天总路线和阶段计划；处理实操中卡住的难题 |
| DeepSeek | 当老师：讲理论、带实操；维护笔记网站 |
| 我 | 跟着引导完成每一个实验，记录过程和结果 |

**收尾标准**：每节课讲完理论后，DeepSeek 会出题小测，答不上来就回头补，直到通过才算完成。同时每节课都要留下一条实验记录（工具、目标程序、结果），写入 `days.json` 并发布到网站。

**反思与改进**：AI 制定的路线贴合个人节奏，但部分内容缺少可靠出处。下一阶段计划以 GitHub 上成熟的开源学习资料为主线，AI 负责辅助讲解和检验。

## 技术实现

| 文件 | 作用 |
| --- | --- |
| `days.json` | 全部笔记数据（唯一数据源） |
| `build.js` | 读取 `days.json`，生成 `index.html` |
| `SESSION_PROGRESS.md` | 学习进度记录 |

更新流程：修改 `days.json` → `node build.js` → 推送到 `master`，由 GitHub Pages 自动发布。

## ⚠️ 免责声明

- 本仓库是个人学习笔记，只用于理解 Windows 底层原理和软件安全防护。所有实验都在本机、用自己编写的练习程序完成。
- 请勿把其中的技术用于未经授权的软件、游戏或系统，由此产生的一切后果由使用者自行承担。
- 笔记在 AI 引导下整理，可能有错误或不够严谨的地方，请以官方文档和权威资料为准。

## 致谢

学习中用到的工具：[x64dbg](https://x64dbg.com/)、[ScyllaHide](https://github.com/x64dbg/ScyllaHide)、[Cheat Engine](https://www.cheatengine.org/)、[HxD](https://mh-nexus.de/en/hxd/)、[Ghidra](https://ghidra-sre.org/)、IDA、WinDbg、Visual Studio。

## License

[MIT](LICENSE) © 2026 xxoingr
