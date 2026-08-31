---  
schema: cc-dash/session@1  
project: windows-reverse-learning  
session_id: s_2026-07-30_day8-apc  
started: 2026-07-30T00:00:00+08:00  
last_updated: 2026-08-31T00:00:00+08:00
status: in-progress
---  

# Session Progress — Windows 逆向学习  

## Plan  

### 第一阶段：Day 1-30（GPT-5.5 制定路线，Codex 逐课落地）

- [x] <!-- id:t_foundation dep:none --> 前期基础: CE入门 + 指针扫描 + LoadLibrary注入  
- [x] <!-- id:t_pe dep:none --> Day 1-4: PE 格式 (DOS/NT/COFF头/节表/导入/导出/重定位)  
- [x] <!-- id:t_inject_manual dep:none --> Day 5: 手动映射注入 (Manual Map, 模块列表不可见)  
- [x] <!-- id:t_inject_shellcode dep:none --> Day 6: Shellcode 注入 (PEB走法 + MASM)  
- [x] <!-- id:t_inject_hook dep:none --> Day 7: SetWindowsHookEx 钩子注入 (系统被动注入)  
- [x] <!-- id:t_inject_apc dep:t_inject_hook --> Day 8: APC 注入 (QueueUserAPC)  

**阶段一：注入收尾 (8-10)**  
- [x] <!-- id:t_inject_summary dep:t_inject_apc --> Day 9: 注入体系总结 — 六种方式对比表 + 统一分析五问 + 线程劫持原理
- [x] <!-- id:t_detect dep:t_inject_summary --> Day 10: 注入检测视角 — DEP/ASLR/CFG + 反注入思路  

**阶段二：Hook 体系 (11-15)**  
- [x] <!-- id:t_hook_iat dep:t_detect --> Day 11: x64 汇编 + IAT Hook — 调用约定/SSE浮点基础 + 替换导入表地址
- [x] <!-- id:t_hook_inline dep:t_hook_iat --> Day 12: Inline Hook — jmp detour/5字节/Trampoline/原子写入
- [x] <!-- id:t_hook_vtable dep:t_hook_inline --> Day 13: VTable Hook — C++虚函数表替换 + 对象逆向基础
- [x] <!-- id:t_hook_veh dep:t_hook_vtable --> Day 14: VEH Hook + SEH对比 — 向量化异常处理 + SEH机制 + x64表驱动异常(.pdata/.xdata)
- [x] <!-- id:t_hook_hwbp dep:t_hook_veh --> Day 15: 硬件断点 (HWBP) — DR0-DR7寄存器/单次触发/反检测  

**阶段三：反调试与保护 (16-20)**  
- [x] <!-- id:t_debugger dep:t_hook_hwbp --> Day 16: 调试器原理 — 断点触发/异常分发/DebugPort
- [x] <!-- id:t_anti_debug_peb dep:t_debugger --> Day 17: 反调试基础 — PEB.BeingDebugged/NtGlobalFlag/IsDebuggerPresent
- [x] <!-- id:t_anti_debug_time dep:t_anti_debug_peb --> Day 18: 高级反调试 — RDTSC计时/TLS回调/NtQueryInformationProcess
- [x] <!-- id:t_anti_anti_debug dep:t_anti_debug_time --> Day 19: 绕过反调试 — 手动Patch/ScyllaHide原理/反反调试思维
- [x] <!-- id:t_protection dep:t_anti_anti_debug --> Day 20: 软件保护综述 — 加壳/混淆/自修改/反篡改/VM保护概念

**阶段四：内核基础 (21-26)**  
- [x] <!-- id:t_kernel_arch dep:t_protection --> Day 21: 内核架构基础 — Ring0/Ring3/系统调用(syscall)/SSDT
- [ ] <!-- id:t_kernel_callback dep:t_kernel_arch --> Day 22: 内核回调机制 — PsSetCreateProcessNotifyRoutine + 驱动入口  
- [ ] <!-- id:t_kernel_ssdt dep:t_kernel_callback --> Day 23: SSDT Hook原理 — 内核级Hook/KD调试/VTL0/VTL1概念  
- [ ] <!-- id:t_kernel_comm dep:t_kernel_ssdt --> Day 24: 驱动通信 + 对象生命周期 — IOCTL/共享内存/引用计数/IRQL与锁  
- [ ] <!-- id:t_kernel_filter dep:t_kernel_comm --> Day 25: 过滤器驱动 — Minifilter(文件)/NDIS/WFP(网络)概念  
- [ ] <!-- id:t_kernel_ob dep:t_kernel_filter --> Day 26: 内核对象管理 — ObRegisterCallbacks/进程线程保护  

**阶段五：综合实战 (27-30)**  
- [ ] <!-- id:t_game_reverse dep:t_kernel_ob --> Day 27: 游戏逆向实战 — Unity/UE基础 + STL容器识别(vector/string) + 对象结构恢复  
- [ ] <!-- id:t_game_data dep:t_game_reverse --> Day 28: 游戏数据分析 — 存档格式/网络协议/资源文件分析 + 静态分析工具(IDA/Ghidra)  
- [ ] <!-- id:t_anti_cheat dep:t_game_data --> Day 29: 反外挂分析 — 检测引擎架构/特征码/行为检测/威胁建模/服务器侧校验  
- [ ] <!-- id:t_integration dep:t_anti_cheat --> Day 30: 综合闭环项目 — 完整分析报告: PE→注入→Hook→检测→保护→反外挂评估  

### 第二阶段：Day 31-60（GPT-5.5 建议，Day 30 后执行）

- [x] <!-- id:t_phase_a dep:t_integration --> Day 31-34: x64 汇编进阶 + SSE/AVX + 编译器优化识别  
- [x] <!-- id:t_phase_b dep:t_phase_a --> Day 35-38: C++ 对象模型 + RTTI + STL 容器恢复  
- [ ] <!-- id:t_phase_c dep:t_phase_b --> Day 39-41: SEH/VEH 深入 + x64 栈展开 + TLS/Loader 高级  
- [ ] <!-- id:t_phase_d dep:t_phase_c --> Day 42-45: 游戏数学 + 相机/矩阵/World-to-Screen  
- [ ] <!-- id:t_phase_e dep:t_phase_d --> Day 46-49: 调试器进阶 + Trace/Dump/自动化脚本  
- [ ] <!-- id:t_phase_f dep:t_phase_e --> Day 50-53: 版本 Diff + 特征码定位 + CE 进阶  
- [ ] <!-- id:t_phase_g dep:t_phase_f --> Day 54-57: Windows 多线程 + 同步机制 + Hook 稳定性  
- [ ] <!-- id:t_phase_h dep:t_phase_g --> Day 58-60: 第二次综合项目 + 完整逆向报告  

## Current Status  

进度: 38/60 — 第一阶段 30/30 完成，第二阶段 Day 31-34、Day 35-38 完成（8/30）
路线: Day 8-60 主路线保持不变；固定链路为 DS 理论前置 -> Sol 工程准备与后台验收 -> DS 用户实操教学/复盘/网站闭环；Sol 另负责学习计划大方向、高难救场和每 3-5 课定期抽查
教学阶段: DS 闭环维护
实操模型: Sol 负责实操工程制作与后台验收；DS 负责基础理论、用户实操教学、复盘与日常闭环；Sol 另负责大方向、救场和抽查
正在: Day 39-41 SEH/VEH 深入 + x64 栈展开 + TLS/Loader 高级 — 五块实操取证与复盘全部完成；进入 DS 网站闭环。Sol 已审计第二阶段现有两篇正式文章并定稿前三篇统一优化方向，Day 保持 in-progress 直至文章升级、构建和发布全部完成。
下一步: DS 按 Sol 网站优化方向卡结构化升级 Day 31-34、Day 35-38，并新增 Day 39-41 详细文章；node build.js 与页面门全部通过、线上发布核对后才把 Day 39-41 标记 done。

## Decisions

- <!-- at:2026-08-31T20:00:00+08:00 --> Day 39-41 已完成五块用户取证与复盘，用户通知 Sol 进入网站指导节点。Sol 审计 days.json：现有 phase2 只有 Day31-34（html 5440 字符）和 Day35-38（4911 字符），事实较丰富，不推倒重写；主要缺口是章节层级不够细、结论/证据/失败段重复、缺少逐概念恢复路径和 3 分钟自测。方向定稿：两篇结构化扩写并去重，新增 Day39-41 第三篇，按 x86 SEH 链、VEH 两路径、x64 表驱动展开、TLS/Loader 四主线组织；当前 MSVC 构建只确认 .pdata 与 unwind/handler 数据，不强称存在独立命名的 .xdata 节。t_phase_c、41/60 和下一课程只能在三篇文章、构建、发布与线上核对全部通过后更新。
- <!-- at:2026-08-31T19:40:00+08:00 --> 用户确认第二阶段 3-4 天合并块需要比单 Day 文章更充分，Sol 定稿为“一块一篇自包含详细主文章＋必要时附录”：六项 30 秒入口只作顶部索引，正文按概念分章并覆盖执行链、用户实测证据、边界、误区、对照、排错和 3 分钟自测；附录不计 Day、不重复入口。Day 31-34 与 Day 35-38 将回溯优化但不改变 done、课程结论或既有证据，安排在 Day 39-41 实操/复盘完成后的闭环维护中与本块文章一起审核，不打断当前取证。
- <!-- at:2026-08-31T19:30:00+08:00 --> 补充救场纠错完成：Sol 上次只修 Win32 无参数入口，遗漏了同课 x64 Day39_41ExceptionTlsLab，违反刚固化的调试器入口门槛。本次先新增红灯验收并复现无参数 usage/64，再把 x64 无参数分支改为 RunEvidence(true)，保留 --lab/--self-test/非法参数合同；Debug/Release 重建、DAY39_41_VERIFY 全量回归通过。x64dbg headless 以无参数启动，依次越过系统/TLS/入口/首次异常停点后真实命中 Day39_41VehHandler，日志 DAY39_X64_VEH_BREAKPOINT_HIT，testassert 通过。横向复查还同步修正 ReverseStrikeLabDay39_41 无参数默认证据模式，原 V1 无参数游戏入口及 Release 包回归通过。Day 保持 in-progress，交回 DS 继续实操。
- <!-- at:2026-08-31T19:18:51+08:00 --> 触发 Sol 补充救场：x64 校准段中，Day39_41ExceptionTlsLab.exe 的 main 仍要求 `--lab`/`--self-test` 参数（无参数走 usage 退出码 64），违反已立长期规则「调试器用户入口稳定性门槛」（用户工程默认无参数即可进入 lab 并可断）。已确认事实：① 无参数运行仅输出 `[loader] TLS callback before main` + usage 后退出（退出码 64），VEH/SEH/unwind 逻辑未执行；② `--lab` 运行输出全部 PASS（TLS_CALLBACK_BEFORE_MAIN / TLS_PER_THREAD / VEH_BEFORE_SEH / VEH_HANDLED_SKIPS_SEH / X64_UNWIND_CLEANUP）退出码 0；③ 用户已成功取证 x64「TLS 回调先于 main」（Day39_41TlsCallback 先停、入口断点次之、main 最后）。唯一缺口：Sol 上次只把 Win32 版改成无参数进 lab，x64 版漏改，需对称补修并真实验证「直接打开 EXE→下断→运行命中 Day39_41VehHandler」。教学阶段 DS 实操教学，Day 保持 in-progress。

- <!-- at:2026-08-31T19:10:00+08:00 --> 用户要求把本次启动入口教训覆盖到以后所有项目，已写入长期规则“调试器用户入口稳定性门槛”：x32dbg/x64dbg 用户工程默认无参数即可进入 lab 并可断；参数只留后台；Sol 交回前必须真实验证“直接打开 EXE→稳定下断→运行命中”，不能再以独立命令行成功或导出存在代替用户入口验收。确需参数/attach 时必须交付已复现的一键方式。该规则长期生效，不改变课程内容和 DS/Sol 分工。
- <!-- at:2026-08-31T19:00:00+08:00 --> Day 39-41 x32dbg 传参救场完成：旧 GUI 的“改变命令行→重启”未把 --lab 交给调试进程，外部 Start-Process 拼接参数又使 x32dbg 异常退出；因此把 Win32 校准程序的无参数分支改为默认 lab，保留 --lab、--self-test 与非法参数返回 64。Debug/Release 重建与全量验收通过；x32dbg 自带 headless 引擎以无参数真实启动目标并命中 Day39_41SehChainCheckpoint，证明 GUI 直接打开 EXE 后无需参数即可稳定到达断点。教学阶段恢复 DS 实操教学，Day 保持 in-progress。
- <!-- at:2026-08-31T18:40:47+08:00 --> 触发 Sol 救场：Day 39-41 Win32 SEH 链校准实操中，x32dbg（`C:\Users\Administrator\Desktop\x64dbug\release\x32\x32dbg.exe`）无法把 `--lab` 参数传给被调试程序 Day39_41SehChainX86.exe，导致程序始终走 argc!=2 分支直接退出（退出码 64），断点 Day39_41SehChainCheckpoint 永不命中。已确认事实：① 程序本身正常——命令行直接 `Day39_41SehChainX86.exe --lab` 输出 `head=00AFF68C chain_depth=5 / X86_SEH_CHAIN=PASS / READY_FOR_DEBUGGER` 退出码 0；不带参数输出 usage 退出码 64。② 断点设置正确——PE 导出表唯一导出符号即 Day39_41SehChainCheckpoint，x32dbg 断点地址 00B41041 已启用。③ 失败方法——GUI「改变命令行」填 --lab 后重启无效；命令行 `Start-Process x32dbg.exe "exe" --lab` 方式带参启动 x32dbg 自身崩溃（ExitCode 0xC000041D）。唯一缺口：缺一个能稳定把 --lab 传给程序的 x32dbg 启动/传参方式（或等价替代方案）。教学阶段 DS 实操教学，Day 保持 in-progress，等 Sol 救场。

- <!-- at:2026-08-31T00:00:00+08:00 --> Day 39-41 Sol 工程准备完成：新增同目录双架构最小校准 Lab——Win32 真实读取 FS:[0] 并遍历 Prev + Handler；x64 实测 VEH→SEH、VEH 已处理跳过 SEH、两层 __finally 展开清理、TLS 回调早于 main 与每线程 TLS 副本。ReverseStrikeLab V1 未被污染，另以 Day39Variant=true 构建独立 ReverseStrikeLabDay39_41.exe 应用变体。Debug/Release 运行、非法参数、导出、x64 PE Exception/TLS 目录与 unwindinfo、原 V1/Day35-38 回归均通过；教学阶段转 DS 实操教学，Day 仍 in-progress。

- <!-- at:2026-08-30T18:24:10+08:00 --> Day 35-38 正式完成并闭环：DS 按已定稿 phase2 结构在 days.json 新增唯一 day35-38 合并块对象（status=done）及一篇含六项复习入口的正式文章（对象布局/vptr/vtable/RTTI/vector/string），node build.js 验证通过（35 文章单元、35 复习入口、进度口径 30/30·8/30·38/60、无绝对化表述、无 Day 39+ 页面），仅暂存 SESSION_PROGRESS.md/days.json/index.html 三文件并提交 f3931e1 推送，线上 Pages 已核对（HTTP 200、38/60 进度、Day 35-38 页面存在）。t_phase_b 标记完成，plan 20/36→21/36，进度 38/60，当前课程转 Day 39-41，教学阶段 DS 理论前置。未提前展开或完成 Day 39-41。
- <!-- at:2026-08-30T17:00:00+08:00 --> Day 35-38 两段实操与 DS 实操后复盘完成：DS 引导用户实操取证——x64dbg 命令行传参反复不生效（进程始终走 argc==1 图形路径），改为 PowerShell 带 `--day35-38-lab` 启动停在等回车 + x64dbg attach 读内存取证。用户亲手读内存验证：对象开头 8 字节=vptr(指向 vtable)、vtable 两槽位=虚函数地址、RTTI 类型名 `.?AVDay35Boss@day35_38@@`、vector begin/end/capacity 三指针及 end-begin=64 字节=2 元素。复盘理解确认通过（vptr→vtable→虚函数地址；RTTI=vptr-8 读指针→COL→RVA 偏移→TypeDescriptor→类型名；vector 三指针反推元素数）。教学阶段转 DS 闭环维护，Day 保持 in-progress 等待网站闭环。
- <!-- at:2026-08-30T16:38:35+08:00 --> Day 35-38 Sol 工程准备完成：没有给既有 `PlayerState/BotState/WeaponDefinition` 强加虚函数或改变游戏 ABI，而是在同一 ReverseStrikeLab 新增最小 `Day35Actor/Day35Boss` 校准段，再应用到真实靶场结构与 STL 成员；提供 `--day35-38-evidence`/`--day35-38-lab` 及 `Day35_38ObjectCheckpoint`、`Day35_38VirtualDispatch`、`Day35_38StlCheckpoint` 三个导出锚点。x64 Debug/Release 从 `学习.sln` Rebuild、独立运行/交互等待、原 V1 全量回归、非法参数、导出/Release 虚调用反汇编和 Win32 调试事件三断点均通过；调试器实测 RTTI 链解析到 `.?AVDay35Boss@day35_38@@`，Debug/Release 的 STL 实现布局差异也被保留为当前 MSVC 构建事实。教学阶段转为 DS 实操教学，Day 仍未完成。
- <!-- at:2026-08-30T16:20:18+08:00 --> Day 35-38 理论前置完成并交接 Sol 工程准备：DS 已讲并逐条确认理解——this 指针=对象方法隐藏的第 0 参数、永远走 RCX；对象布局=字段按声明顺序排、区分"字段偏移(从哪开始)"与"对象总大小(到哪结束)"；vtable/vptr=多态机器真相(vptr 指向虚表、表里装各版本函数地址、调用是"读vptr→查表→取地址→跳"三段式)；RTTI=运行时类型信息、挨着 vtable、逆向靠类型名字符串认对象真身；STL 容器复习(vector=begin/end/capacity 三指针、string=短串就地长串外存 SSO)。按 v5.3 链路输出《给 Sol 的实操工程请求》，教学阶段改为 Sol 工程准备，Day 保持 in-progress。
- <!-- at:2026-08-27T23:31:16+08:00 --> Day 31-34 正式完成并闭环：DS 按 Sol 定稿的第二阶段网站结构改造 build.js（新增 `phase2` 合并块读取/校验/归一化渲染/覆盖日跳转/三段式进度），在 days.json 新增唯一 `phase2` 合并块对象（id=day31-34, status=done）及一篇含六项复习入口的正式文章，node build.js 验证通过（34 文章单元、34 复习入口、进度口径 30/30·4/30·34/60、无绝对化表述、无 Day 35+ 页面），仅暂存 SESSION_PROGRESS.md/days.json/build.js/index.html 四文件并提交 4333877 推送，线上 Pages 已核对（HTTP 200、34 复习入口、34/60 进度、Day 31-34 页面存在）。t_phase_a 标记完成，plan 19/36→20/36，进度 34/60，当前课程转 Day 35-38，教学阶段 DS 理论前置。未提前展开或完成 Day 35-38。
- <!-- at:2026-08-27T23:04:04+08:00 --> 用户要求消除 DS/Sol 对话不互通造成的隐含交接风险：今后凡会影响另一模型后续工作的持久改变，由作出改变的一方按归属直接写入长期规则、主 SESSION、靶场 SESSION 或正式文章，使另一方今后自动沿用；用户不需要每课反复传卡。只有当前工作确实要在两个模型之间立刻切换时才生成一次性交接卡。本次已把该同步门写入 `C:\Users\Administrator\Desktop\更新笔记助手.txt`。
- <!-- at:2026-08-27T23:00:28+08:00 --> 用户进一步明确：Day 1-30 网站优化不是只返修一次旧文章，而是 DS 今后每次新增课程文章都必须沿用的默认基线；最新一次通过 Sol 审核的网站结构与内容质量标准自动取代旧写法。该持续维护门已写入长期规则，后续 DS 发布前必须逐篇核对，不得恢复旧模板。
- <!-- at:2026-08-27T23:00:28+08:00 --> 第二阶段网站结构由 Sol 定稿：Day 1-30 旧数字键与 33 个既有六项复习入口原样保留；Day 31-60 按八个真实教学块写入 days.json 的独立 `phase2` 数组，一个教学块对应一篇文章、一个导航项和一个六项“30 秒复习入口”。build.js 需统一渲染单 Day 与合并块，任意覆盖日跳到所属块；in-progress 块不贡献完成天数，done 后一次贡献完整跨度，并分别显示第一阶段、第二阶段和总体进度。本决定不改变课程内容、主路线或完成状态。
- <!-- at:2026-08-27T18:55:44+08:00 --> 修复 Day 31-60 长期靶场跨会话交接缺口：此前已记录 ReverseStrikeLab V1 完成及“Day 31 起按映射使用”，但长期规则只要求 Sol 在用户主动提及时读取，主 SESSION 当前下一步也只写了专用对照 Lab，未明确 DS 自动恢复和“专用 Lab -> 长期靶场”的完整顺序。现已规定 DS/Sol 只要主线进入 Day 31-60 就自动读取靶场独立 SESSION；Day 31-34 先用 Day31_34X64OptimizationLab 取得干净证据，再在 ReverseStrikeLab 依次使用 `RslUpdatePlayerMovement`、`RslApplyDamage` 做应用识别，两段完成前不得闭环。此修正只补交接与教学顺序，不改变 Day 8-60 主路线、不新增课程、不提前完成任何 Day。
- <!-- at:2026-08-27T18:47:08+08:00 --> Day 31-34 Sol 工程准备完成：新增 `学习\Dll1\X64OptimizationLab` 并接入 `学习.sln`，同一 C++ 源码提供五参数整数/浮点、非易失寄存器压力、SSE/AVX 与优化探针，另以最小 MASM ABI 锚点稳定呈现 `sub rsp,28h`、影子空间及第 5 参数调用位置。Debug/Release x64 定向 Rebuild 均 0 警告 0 错误；独立运行、自测、非法参数、真实反汇编、导出锚点、标准 Win32 调试事件命中及 Release 单 EXE 边界均通过。教学阶段转为 DS 实操教学，Day 31-34 仍保持 in-progress，等待用户亲手取得证据。
- <!-- at:2026-08-25T00:30:00+08:00 --> 全站复习入口统一优化（内容质量维护，不改进度/主路线）：按 Sol 方向卡，前期基础 3 课 + Day 1-30 共 33 课全部补写统一的"30 秒复习入口"（六项：一句话核心结论/最小执行链/最易混点/证据锚点/忘了先看哪里/前后关联），分五批完成；旧"复习锚点/30 秒核心结论"升级、Day 14"关联与复习锚点"标题统一为"关联"。DS 自验通过（33 课恰好 1 个入口、六项齐全），node build.js 成功，index.html 含 33 处入口，进度仍 30/30。
- <!-- at:2026-08-25T00:45:00+08:00 --> 全站复习入口优化完成并通过 Sol 最终审核（内容质量维护闭环，不改进度/主路线）：经 DS 三轮返修（首轮 16 项概念边界/证据等级修正 + Day 10-17 入口位置统一；二轮清理正文/review/practice/log 旧结论残留；三轮定点修正 Day 22 正文"不只能看还能拦"与 Day 15 正文"正常程序从不写/永远全 0"两处绝对化表述）。最终提交 9c73deace0bcd3255c3e0915d1ce53db72118c3e，DS/Sol 独立重建/仓库本地/线上四方 SHA-256 均为 1A63E043FC2158B1123818C3DD2F582006FEFA56B0B1CE0F9150FC989C6E1E34，线上 33 处入口、进度 30/30。Sol 明确回复"全站复习入口审核通过"，无需继续返修。
- <!-- at:2026-08-25T00:10:00+08:00 --> Day 30 综合闭环项目正式完成：DS 理论前置（串珠成链）→ 引导式产出六环报告（用户口述 + DS 补全）→ Sol 多视角审核优化（三处纠偏：Hook 非仅改箭头、保护非绝对防住、补全 Day10/14/15/19/27/28）→ 用户确认最小问题（Inline Hook 改函数入口字节）→ days.json 写入 Sol 优化稿并 build 发布。第一阶段（Day 1-30）正式收官，进度 30/30 (100%)，下一步第二阶段 Day 31-34。
- <!-- at:2026-08-24T23:55:00+08:00 --> Day 30 报告已产出（六环串链）
- <!-- at:2026-08-24T23:40:00+08:00 --> Day 30 综合闭环项目：DS 理论前置完成（串珠成链 PE→注入→Hook→检测→保护→反外挂评估，以攻促防），用户经 ask 选择"引导式产出分析报告"。教学阶段转 DS 实操教学，由 DS 一次引导一个环节、用户用自己的话口述、DS 补正，六环节串成第一阶段总报告后落入 days.json 闭环。Day 30 不涉及 Sol 新工程。
- <!-- at:2026-08-24T23:20:00+08:00 --> Day 29 反外挂分析正式完成：DS 理论前置（分层设防/特征码/行为检测/威胁建模/服务器校验）→ Sol 制作中文 CS 风格自建训练靶场 Day29LayeredAntiCheatLab 并后台验收 → DS 微步实操（用户亲手扫描三个终端：已知特征=特征码命中/行为正常/拦截；变化特征=特征码未命中/行为警报/拦截；正常样本=特征码未命中/行为正常/放行）→ 复盘通过（已知特征靠外观命中特征码；变化特征靠行为层补抓；分层互补提高绕过成本）。days.json 已写入正式文章并 build 发布，进度 29/30。
- <!-- at:2026-08-24T22:41:55+08:00 --> 用户确认 Day 29 靶场采用 CS 风格并要求完整中文，同时指出上一版枪械像矩形工具枪。Sol 保留既有 Day 29 检测函数与取证顺序，只重做用户可见层：界面中文化，SIGNATURE/BEHAVIOR/VERDICT 以中英对照保留；场景改为程序化工业训练场；枪械改为原创卡宾枪，不直接复制第三方游戏资产。Day 保持 in-progress、教学阶段仍为 DS 实操教学，前两张交回卡均由本轮最终替换卡取代。
- <!-- at:2026-08-24T22:15:19+08:00 --> 用户亲自运行 Day 29 第一版图形程序后指出它仍像粗糙展示厅，且 Esc 直接结束，不符合 CS2 类靶场体验；已先通知 DS 暂停取证，用户随后批准方案 A。Sol 保留同一套 SIGNATURE→BEHAVIOR→VERDICT 检测函数，只重做图形交互层：默认先到主菜单，训练场增加程序化持枪视角、连续射击、30/90 弹药与换弹、三条靶道和移动人形靶、命中/曳光/HUD，以及原有三个扫描终端。Esc 现只进入 `PAUSED`，退出必须经菜单二次确认；这是 Day 29 自建模拟，不扩成完整回合/经济/拆包系统，也不修改 Day 31-60 的 ReverseStrikeLab。旧交回卡由本轮替换版交回卡取代，Day 保持 in-progress、教学阶段仍为 DS 实操教学。
- <!-- at:2026-08-24T21:46:41+08:00 --> 用户指出 Day 27-29 可安全图形化的游戏/数据课程不应默认只看 PowerShell，确认今后凡机制能在自建、安全场景中如实表达，用户实操优先采用“进入窗口→亲手操作→观察结果”；命令行降为 Sol 后台验收与故障诊断。Day 29 因用户尚未开始取证，直接将原控制台入口改为 3D 分层防御训练场：三个实体终端分别代表已知特征、改特征但有可疑行为、正常样本，靠近后按 E 才按 SIGNATURE→BEHAVIOR→VERDICT 动画显示实际检测函数的结果。画面明确标注 SELF-BUILT SIMULATION，不读取真实进程、不伪造真实反外挂能力。长期规则与学习上下文助手已同步加入“用户实操优先可视化 / 可视化不能伪造机制”，Day 保持 in-progress、教学阶段仍为 DS 实操教学。
- <!-- at:2026-08-24T21:22:40+08:00 --> Day 29 Sol 工程准备完成：新增纯用户态自建 `LayeredAntiCheatLab`，固定让三个模拟目标按 SIGNATURE→BEHAVIOR 顺序经过两层检测。已知目标命中 `DE AD BE EF` 并因 KNOWN_SIGNATURE 阻断；改特征目标把 `EF` 改为 `00`、第一层 MISS，但因模拟读其他进程内存与远程注入行为被第二层阻断；正常目标两层均未命中并放行。工程不读取真实进程、不接触真实外挂或游戏，服务器侧校验保持理论边界。Debug/Release、默认/分项目标/`--lab`/自测/非法参数、x64 PE、三个导出定位锚点与 Release 产物边界均已验收。Day 保持 in-progress，教学阶段转为 DS 实操教学。
- <!-- at:2026-08-23T20:40:00+08:00 --> Day 29 反外挂分析理论前置完成并交接 Sol 工程准备（用户已拍板走自建迷你 Demo 演示）。已讲并逐条确认理解：反外挂=分层设防多层叠加提高攻击成本；特征码=外挂"身份证照片"认已知外挂、怕加壳/改特征；行为检测=看可疑动作抓外挂（能抓新型）、风险是误伤正常程序；威胁建模=换位思考先列攻击路径→薄弱点→防御再有的放矢（用户能说出"站在攻击者角度问从哪下手、能打到什么"）；服务器侧校验=关键数据放服务器本地改不动（用户举 MC 服务器版例子）。实操形态经 ask 确认：自建迷你 Demo 演示（不碰真实外挂）。按 v5.3 链路输出《给 Sol 的实操工程请求》，教学阶段改为 Sol 工程准备，Day 保持 in-progress。
- <!-- at:2026-08-23T20:32:38+08:00 --> 用户授权 Sol 提前完成供 Day 31-60 长期复用的自有训练靶场 `ReverseStrikeLab`。V1 已完成并在独立 `学习\Dll1\ReverseStrikeLab\SESSION_PROGRESS.md` 留存权威工程状态：原生 C++20/x64、固定 raylib 6.0、程序化素材、单机战术 FPS；Debug/Release/独立运行包全量验收通过，并提供八个稳定导出锚点及逐阶段 `docs\LEARNING_MAP.md`。这是并行工程准备，不改变 Day 8-60 已确认课程内容或顺序，不把第二阶段任何 Day 提前标记完成；主线仍按当前 Day 29 的 DS 理论前置继续。
- <!-- at:2026-08-23T19:00:00+08:00 --> Day 28 游戏数据分析正式完成：DS 理论前置（存档=二进制账本/网络协议=电报/资源文件=解包/IDA-Ghidra 静态与动态互补）→ Sol 制作自建字节 BinaryDataAnalysisLab（16 字节存档 + 9 字节协议包）并后台验收 → DS 微步实操（用户亲手取证：gold offset=8 raw=40 E2 01 00 value=123456；小端序低位在前倒拼）→ 复盘两问通过（分析二进制=按字段偏移/大小/字节序翻译成人话；小端序低位字节放最前，用户先误说"00 放低位"后纠正）。days.json 已写入正式文章并 build 发布，进度 28/30。
- <!-- at:2026-08-23T18:58:55+08:00 --> Day 28 Sol 工程准备完成：新建纯用户态 `BinaryDataAnalysisLab` 并接入 `学习.sln`；自建 16 字节存档按 magic/version/level/gold/equipment_count/checksum 输出字段名、偏移、原始字节和值，自建 9 字节协议包按 opcode/payload_length/player_id/action 拆解，并把同一载荷翻译为人话。损坏存档在解析认可前因 checksum 不一致退出 3。工程只演示自建二进制结构解析，不含真实游戏、真实网络抓包、资源解包或 IDA/Ghidra 实操。Debug/Release、正常/分项/`--lab`/损坏校验和/非法参数、x64 PE、三个导出调试锚点与 Release 产物边界均已验收。Day 保持 in-progress，教学阶段转为 DS 实操教学。
- <!-- at:2026-08-23T00:40:00+08:00 --> Day 28 游戏数据分析理论前置完成并交接 Sol 工程准备（用户已拍板走自建迷你 Demo 演示）。已讲并逐条确认理解：存档格式=游戏写的二进制账本（看懂账本/找数据/绕过校验）；网络协议=客户端与服务器间的电报（抓包→看格式→破译含义）；资源文件=游戏目录里的货物与账本（先解包再逐类分析）；静态分析 IDA/Ghidra=不运行程序反汇编/反编译读机器码，与动态分析互补（用户能说出"静态不用运行、但网络协议等需运行时才出"的边界）。实操形态经 ask 确认：自建迷你 Demo 演示（不碰真实游戏/网络）。用户提出不知本机是否装有 IDA/Ghidra，已告知本课 Demo 用自带的十六进制查看即可、不强制装 IDA/Ghidra。按 v5.3 链路输出《给 Sol 的实操工程请求》，教学阶段改为 Sol 工程准备，Day 保持 in-progress。
- <!-- at:2026-08-23T00:30:00+08:00 --> 状态门闭环：用户已亲自回答 Day 27 第二题并答对（end 指向最后一个元素的下一格）。Day 27 恢复正式完成、进度 27/30、教学阶段回 DS 理论前置，下一步 Day 28。正式文章内容无变化，不重复发布网站（网站已发布版本 58d4194 保持）。
- <!-- at:2026-08-23T00:20:00+08:00 --> 触发"全阶段问题状态门"（更新笔记助手.txt 新增规则）：Day 27 第二题（end 指向最后一个元素本身还是下一格）DS 曾擅自代答并计为用户通过，用户指出其后两次回复仍在补充第一题、并未亲自回答第二题。按规则纠正：Day 27 暂回 in-progress、进度回 26/30、教学阶段改 DS 实操后复盘，暂停 Day 28；网站已发布不删不滚。现只重问第二题、不加答案不附带其他问题，等用户亲自回答。答对→恢复 Day 27 正式完成并继续 Day 28（文章内容无变化则不重复发布）；答不完整→老师式小步只纠一个关键点再问一个最小确认问题，等亲自回答后才闭环。
- <!-- at:2026-08-23T00:15:00+08:00 --> Day 27 游戏逆向实战正式完成：DS 理论前置（引擎=内存地图/STL 容器/vector 3 指针/string SSO/对象结构偏移）→ Sol 制作自建迷你 Demo GameMemoryLayoutLab（vector/短串/长串/PlayerRecord）并后台验收 → DS 微步实操（用户亲手取证：vector object_size=24 三指针 bytes_used=20=5×4；短串 Mage INLINE_SSO 就地存、长串 Legendary EXTERNAL_HEAP 外存；PlayerRecord 字段偏移 0/4/8/16）→ 复盘通过（vector 数字在体外靠 begin≠object 地址证明；end=最后一元素下一格；短串就地长串外存）。days.json 已写入正式文章并 build 发布，进度 27/30。
- <!-- at:2026-08-23T00:08:54+08:00 --> Day 27 Sol 工程准备完成：新建纯用户态 `GameMemoryLayoutLab` 并接入 `学习.sln`；使用本机真实 MSVC x64 `std::vector<int>` 与 `std::string`，通过 `_ITERATOR_DEBUG_LEVEL=0` 让 Debug/Release 都保持可教学布局。vector 固定 5 个 int、预留 8 格并输出对象中的 begin/end/capacity；短串 `Mage` 的 data 位于 string 对象内部且偏移 0，长串 `Legendary_Player_From_Day27` 的对象首指针与外部 data 地址一致；`PlayerRecord` 输出 id/health/score/team 的偏移与实际字段地址。工程明确不含真实游戏、内存扫描或 Unity/UE 运行时。Debug/Release、正常/`--lab`/非法参数路径、x64 PE、布局数学、Release 产物边界及三个导出调试锚点均已验收。Day 保持 in-progress，教学阶段转为 DS 实操教学。

- <!-- at:2026-08-22T23:59:00+08:00 --> Day 27 游戏逆向实战理论前置完成并交接 Sol 工程准备（用户已拍板走自建迷你 Demo 演示）。已讲并逐条确认理解：游戏引擎=游戏底座决定内存布局，搞清引擎=拿到"内存对象怎么摆"的规律地图（核心收获是内存布局地图，不是编程语言）；STL 容器=C++ 现成工具，vector(动态数组)/string(字符串) 游戏里到处是；vector 长相=3 个指针 begin(开头)/end(已用结尾)/capacity(容量结尾=备用结尾)；string 长相=与 vector 近亲，但有 SSO(小字符串优化)：短字符串就地存、长字符串才外存留指针。最终目标=从地址堆里认出 vector/string/对象。实操形态经 ask 确认：自建迷你 Demo 演示（不碰真实游戏）。按 v5.3 链路输出《给 Sol 的实操工程请求》，教学阶段改为 Sol 工程准备，Day 保持 in-progress。
- <!-- at:2026-08-22T23:50:00+08:00 --> Day 26 内核对象管理正式完成：DS 理论前置（内核对象/句柄号码牌/ObRegisterCallbacks 句柄门前检查站/进程保护=在句柄门提前挡）→ Sol 制作纯用户态 ObjectHandleProtectionLab（两访问者先过句柄门前检查站，trusted_monitor 放行发句柄 0xD260 访问成功、untrusted_tool 拒绝不发句柄 NO_HANDLE 失败）并后台验收 → DS 微步实操（用户亲手取证：trusted_monitor checkpoint_seen→ALLOW→handle_issued→SUCCESS；untrusted_tool checkpoint_seen→DENY→handle_not_issued→FAILED reason=NO_HANDLE）→ 复盘两问通过（失败根因是没拿到句柄、reason=NO_HANDLE 为证；0xD260 是句柄号码牌不是对象）。days.json 已写入正式文章并 build 发布，进度 26/30。内核基础阶段（Day 21-26）收口。
- <!-- at:2026-08-22T23:38:11+08:00 --> Day 26 Sol 工程准备完成：新建纯用户态 `ObjectHandleProtectionLab` 并接入 `学习.sln`；固定两个访问者在发放模拟句柄前进入同一检查函数，`trusted_monitor` 被放行并取得 `0xD260` 后访问成功，`untrusted_tool` 与未知访问者均在句柄门前被拒绝、没有句柄且访问失败。工程明确标注不含驱动、ObRegisterCallbacks 或真实内核句柄过滤。Debug/Release、正常/`--lab`/未知访问者/非法参数路径、x64 PE、Release 产物边界及两个导出调试锚点均已验收。Day 保持 in-progress，教学阶段转为 DS 实操教学。

- <!-- at:2026-08-21T19:20:00+08:00 --> Day 26 内核对象管理理论前置完成并交接 Sol 工程准备（用户已拍板走纯用户态等价演示）。已讲并逐条确认理解：内核对象=内核统一管理的"东西"（进程/线程/文件，不是程序局部变量）；句柄 Handle=用户态访问内核对象的"号码牌"，凭号访问不碰真身（不同程序拿各自不同的句柄）；ObRegisterCallbacks=卡在"打开进程/线程句柄"这条必经之路上的检查站（回调），有人要打开进程就得先拿句柄、就在这步被回调检测；进程/线程保护=在句柄这道门提前设卡、把想动进程的人挡在拿到句柄之前（不是等它拿到句柄读内存才拦）；与 Day 25 过滤器同思路（检查站），只是 Day 25 卡文件/网络、Day 26 卡进程/线程句柄。实操形态经 ask 确认：纯用户态等价演示。按 v5.3 链路输出《给 Sol 的实操工程请求》，教学阶段改为 Sol 工程准备，Day 保持 in-progress。
- <!-- at:2026-08-21T19:00:00+08:00 --> Day 25 过滤器驱动正式完成：DS 理论前置（过滤器=中性检查站/机制中性善恶在人/Minifilter 卡文件/NDIS 卡底层数据包/WFP 卡上层程序+地址+端口）→ Sol 制作纯用户态 FilterCheckpointLab（3 请求先过检查站再 PASS/BLOCK/MODIFY）并后台验收 → DS 微步实操（用户亲手取证：notes.txt PASS 原样到达、malware.exe BLOCK 不达终点只有 destination_blocked、draft.tmp MODIFY 改写 draft.safe 终点收到 draft.safe；summary pass=1 block=1 modify=1 delivered=2）→ 复盘两问通过（BLOCK 关键证据是没有 destination_received；MODIFY 关键证据是终点收到改写后的 payload）。days.json 已写入正式文章并 build 发布，进度 25/30。
- <!-- at:2026-08-21T18:40:55+08:00 --> Day 25 Sol 工程准备完成：新建纯用户态 `FilterCheckpointLab` 并接入 `学习.sln`；三个固定请求都先进入同一个检查函数，再分别 PASS、BLOCK、MODIFY，其中 MODIFY 将 `draft.tmp` 改为 `draft.safe` 后才送达终点。工程不监控真实文件或网络，不调用 Minifilter/NDIS/WFP；理论映射和模拟边界均在输出中明确。Debug/Release、正常/`--lab`/未知请求/非法参数路径及两个导出锚点均已验收。Day 保持 in-progress，教学阶段转为 DS 实操教学。
- <!-- at:2026-08-20T21:40:00+08:00 --> Day 25 过滤器驱动理论前置完成并交接 Sol 工程准备（用户已拍板走纯用户态等价演示）。已讲并逐条确认理解：过滤器驱动=卡在必经之路、先过目再放行的"检查站"，本身中性（用户曾误以为"天生保护/被 Hook 才变恶意"，已纠正为"善恶取决于写驱动的人想让它干什么"）；Minifilter=卡文件读写路的检查站（实时防护/加密/监控）；NDIS=卡最底层网卡旁看原始数据包（不认识上层应用）；WFP=卡更上层应用与网络之间，能按程序+地址+端口拦；核心认知=机制中性善恶在人，杀软和外挂都在抢这些必经之路的关卡。用户曾把"过滤器驱动"误说成"保护机制"，已纠正为"过滤器/检查站机制"。实操形态经 ask 确认：纯用户态等价演示。按 v5.3 链路输出《给 Sol 的实操工程请求》，教学阶段改为 Sol 工程准备，Day 保持 in-progress。
- <!-- at:2026-08-20T21:20:00+08:00 --> Day 24 驱动通信 + 对象生命周期正式完成：DS 理论前置（驱动通信接待窗口/IOCTL 控制码+输入输出缓冲/共享内存/引用计数借还配平/IRQL与锁）→ Sol 制作纯用户态 DriverCommunicationLifecycleLab（指令分发 0x800 + 共享映射双视图 + 引用计数 1→2→1→0）并后台验收 → DS 微步实操（用户亲手取证：ioctl code=0x800 input 7,5→output 12；shared writer/reader 两地址读同一内容 match=true；引用计数归零 reclaimed=true；irql_lock=THEORY_ONLY）→ 复盘三问通过（两个门牌同一间房、共享内存无单独地址靠视图证明、计数归零才回收）。days.json 已写入正式文章并 build 发布，进度 24/30。
- <!-- at:2026-08-20T21:05:00+08:00 --> Day 24 Sol 工程准备完成：新建纯用户态 `DriverCommunicationLifecycleLab` 并接入 `学习.sln`。控制码 `0x800` 通过独立分发函数处理输入/输出缓冲区；共享内存使用 Windows 匿名文件映射并建立两个不同虚拟地址视图；引用计数按 1→2→1→0 演示归零回收。IRQL 与锁明确保持理论边界，不伪造用户态等价证据。Debug/Release、正常/`--lab`/未知控制码/非法参数路径和导出锚点均已验收。Day 保持 in-progress，教学阶段转为 DS 实操教学。
- <!-- at:2026-08-20T21:00:00+08:00 --> Day 24 驱动通信 + 对象生命周期理论前置完成并交接 Sol 工程准备（用户已拍板走纯用户态等价演示）。已讲并逐条确认理解：驱动通信=驱动开"接待窗口"、用户程序递单子不是闯进内核圈；IOCTL=递的"指令单"，核心是控制码（编号）+输入缓冲区（递进去的材料）+输出缓冲区（递回来的结果）；共享内存=两边共用一块内存直接读写，频繁大量传数据比一张张递单子快；引用计数=对象"还有谁在用"的记账本，降到 0 才回收，忘了减=内存泄漏、减多了=蓝屏（用户曾把"内存泄漏"误说成"数据泄露"已纠正）；IRQL 与锁=内核"别打架"的规矩，锁管"谁先进"、IRQL 管"谁优先/能不能停顿"。实操形态经 ask 确认：纯用户态等价演示。按 v5.3 链路输出《给 Sol 的实操工程请求》，教学阶段改为 Sol 工程准备，Day 保持 in-progress。
- <!-- at:2026-08-20T20:00:00+08:00 --> Day 23 SSDT Hook 原理正式完成：DS 理论前置（SSDT 全市总电话簿/SSDT Hook 改地址箭头/IAT 单程序 vs SSDT 全系统/驱动=门票/KD 调试/VTL0-VTL1 隔离）→ Sol 制作纯用户态 SSDTHookSimulationLab（函数指针表模拟 SSDT，只改服务号 0x23 表项）并后台验收 → DS 微步实操（用户亲手取证：改表前 dispatch service=0x23 target=0x7FF690EC1780→handler=ORIGINAL result=123；hook_action old=0x7FF690EC1780 new=0x7FF690EC1720；改表后同样 service=0x23→handler=HOOKED result=-23；same_service=true target_changed=true original_unchanged=true）→ 复盘两问通过（改的是表里的地址箭头不是函数本身；真 SSDT 影响全系统）。days.json 已写入正式文章并 build 发布，进度 23/30。
- <!-- at:2026-08-20T19:41:42+08:00 --> Day 23 Sol 工程准备完成：新建纯用户态 `SSDTHookSimulationLab` 并接入 `学习.sln`，用真实 C++ 函数指针表复现“服务号→地址→间接调用”，再只替换服务号 `0x23` 的表项以模拟 Hook；没有驱动、内核 API、真实 SSDT 写入或管理员依赖。Debug/Release、正常/`--lab`/非法参数路径和导出调试锚点均已后台验收。Day 保持 in-progress，教学阶段转为 DS 实操教学。
- <!-- at:2026-08-17T22:40:00+08:00 --> Day 23 SSDT Hook 原理理论前置完成并交接 Sol 工程准备（用户已拍板走纯用户态等价演示）。已讲并逐条确认理解：SSDT=内核"服务号→代码地址"的全市共享总电话簿；SSDT Hook=把表里某服务号指向的地址改成自己的地址（偷看/拦截/伪造，影响全系统，对比 IAT 只影响单程序）；改 SSDT 得先站 Ring0（驱动/提权=门票，非作弊手法本身）；SSDT 在内核、普通 Ring3 调试器被权限墙挡住，须用内核调试 KD/WinDbg；VTL0/VTL1=比 Ring0 更高一层的隔离房间，VTL0 的 Ring0 也看不到 VTL1。用户能答对 IAT vs SSDT 对比、驱动=门票、VTL 隔离边界。实操形态经 ask 确认：纯用户态等价演示。按 v5.3 链路输出《给 Sol 的实操工程请求》，教学阶段改为 Sol 工程准备，Day 保持 in-progress。
- <!-- at:2026-08-17T22:00:00+08:00 --> Day 22 内核回调机制正式完成：DS 理论前置（DriverEntry 报到/回调方向/PsSetCreateProcessNotifyRoutine/进程创建进行到一半被叫/DriverUnload 注销）→ Sol 制作纯用户态 KernelProcessEventLab（WMI 异步订阅 + IWbemObjectSink::Indicate 接收，真驱动因 Secure Boot 放弃）并后台验收 → DS 微步实操（用户亲手取证：先见 state=WAITING 后另窗起 cmd.exe，被动收到 ProcessStart name=cmd.exe pid=26688 parent=15144 与 PING.EXE pid=17456 parent=26688 父生子链，进程消失被动收到 ProcessStop）→ 复盘两问通过（WMI 订阅在 Ring3、真驱动回调在 Ring0；共同点=回调/先登记后被动通知）。days.json 已写入正式文章并 build 发布，进度 22/30。
- <!-- at:2026-08-17T21:06:05+08:00 --> Day 22 纯用户态实操采用 WMI intrinsic process events：`__InstanceCreationEvent/__InstanceDeletionEvent WITHIN 1` + `IWbemObjectSink::Indicate` 异步回调。直接 `Win32_ProcessStartTrace/StopTrace` 在本机非提升令牌下稳定返回 `WBEM_E_ACCESS_DENIED (0x80041003)`，加入 UnsecuredApartment 回调代理后仍相同，证明限制在事件结果集权限；不要求管理员的 intrinsic 方案由 WMI 内部 1 秒采样，用户程序自身不轮询、只被动阻塞等待。真驱动源码保留在 `KernelCallbackLab`，但已移出活动解决方案并清理生成的 `.sys`，Secure Boot 保持开启。
- <!-- at:2026-08-17T20:50:00+08:00 --> Day 22 路线变更：用户放弃真内核驱动路线（真驱动很麻烦）。Sol 已完成的真驱动工程（x64 Debug/Release、静态回调契约、嵌入签名）保留在案，但被 UEFI Secure Boot 阻止无法真实加载验收；用户不再走"关 Secure Boot / 暂停 BitLocker"这条路。改为纯用户态演示路线（不写驱动、不加载 .sys、零蓝屏风险），用 ETW 订阅内核进程事件（Microsoft-Windows-Kernel-Process 的 ProcessStart/ProcessStop）或 WMI Win32_ProcessStartTrace 演示"进程创建→被动收到通知"的回调/事件通知模式。理论边界不变：PsSetCreateProcessNotifyRoutine / DriverEntry / DriverUnload 仍为理论教学内容，实操以用户态订阅事件作为等价演示。教学阶段保持 Sol 工程准备，重新交接工程请求。
- <!-- at:2026-08-17T20:44:16+08:00 --> Day 22 保持课程指定的旧版 `PsSetCreateProcessNotifyRoutine`；其回调只直接给父 PID、PID 和 Create 布尔值，进程名由 PID 经 `PsLookupProcessByProcessId` + `PsGetProcessImageFileName` 补查。后者是可链接导出但非正式文档 API，教学证据只用于本机演示，不扩展为生产驱动方案。
- <!-- at:2026-08-17T20:31:03+08:00 --> Day 22 内核回调机制理论前置完成并交接 Sol 工程准备（用户已拍板走真内核驱动路线）。已讲并逐条确认理解：DriverEntry=驱动被加载进内核圈后的报到窗口（区别于 syscall 跨圈的门，别混）；回调 callback=把函数地址交给内核、事件发生时内核反过来调用你（方向与普通调用相反）；PsSetCreateProcessNotifyRoutine=在"进程 Ps"部门登记"进程创建/退出时通知我"；回调被叫时进程创建只进行到一半、手里拿到"是谁/从哪来/创建还是退出"的小档案，办完须快速返回否则拖慢全系统；回调盯的是"进程创建事件"本身、与恶意进程有没有登记无关（所以恶意进程躲不掉）；DriverUnload=卸载入口负责注销回调、不留空号否则蓝屏。用户能用自己的话串完整链并答对"回调在进程创建进行到一半被叫"这一关键点。实操形态经 ask 确认：真内核驱动（装 WDK + 测试签名），非纯用户态演示。按 v5.3 链路输出《给 Sol 的实操工程请求》，教学阶段改为 Sol 工程准备，Day 保持 in-progress。
- <!-- at:2026-08-16T23:10:00+08:00 --> Day 21 内核架构基础正式完成：DS 理论前置（Ring0/Ring3/syscall/SSDT + 查表找地址与 IAT 对照）→ Sol 制作 KernelArchitectureLab（纯用户态，不写驱动不改 SSDT）并后台验收 → DS 微步实操（用户亲手取证：--lab 打印 mode=Ring3(USER)/api=ntdll!NtQuerySystemInformation/syscall_opcode=0F 05；attach 后 Ctrl+G 到入口见 mov r10,rcx/mov eax,0x36/syscall/ret；F2 断点命中 INT3@DC62=入口+0x12 即 syscall 处；--no-wait 输出 ntstatus=0x00000000+transition=Ring3->syscall->Ring0->Ring3+done）→ 复盘两问通过（哪段是用户态/内核、为什么不能翻墙=权限隔离）。days.json 已写入正式文章并 build 发布（提交 a51416e），进度 21/30。
- <!-- at:2026-08-16T22:32:34+08:00 --> Day 21 Sol 工程准备完成：新建 `学习\Dll1\KernelArchitectureLab` 并接入 `学习.sln`，仅含 x64 用户态程序；Debug/Release 解决方案级构建、独立运行、正常/lab/非法参数路径均通过。标准 Win32 调试 API 在 Debug/Release 中都实际命中 `ntdll!NtQuerySystemInformation`；当前系统导出 RVA `0x9DC50`，入口 `+0x12` 为 `0F 05 syscall`，但 RVA、服务号和绝对地址均按 Windows 版本/ASLR 变化，教学必须优先用导出名定位。教学阶段转为 `DS 实操教学`，Day 保持 in-progress。
- <!-- at:2026-08-16T22:20:54+08:00 --> Day 21 内核架构基础理论前置完成并交接 Sol 工程准备。已讲并逐条确认理解：Ring3（用户态，权限低，崩了只影响自己）/Ring0（内核态，权限最高，碰一切）；权限隔离价值=防止单程序被入侵/有 bug 拖垮全系统；syscall=用户态向内核递申请单的唯一固定门（跨圈 Ring3→Ring0→Ring3，翻墙不行）；SSDT=内核的"服务号→代码地址"对照表，程序只报服务号不报人话；查表找地址与导入表（IAT）同类——IAT 是每家店门口路牌（只影响单程序）、SSDT 是全市地图（全系统共享），改 SSDT 即 SSDT Hook（Day 23 主角），与 Day 11/12 IAT/Inline Hook 同思路更高权限。用户能复述完整执行链：用户态 API → syscall 跨圈 → 查 SSDT → 执行 → 返回。按 v5.3 链路输出《给 Sol 的实操工程请求》，教学阶段改为 Sol 工程准备，Day 保持 in-progress。
- <!-- at:2026-08-15T23:00:00+08:00 --> Day 20 软件保护综述正式完成：DS 理论前置（五大概念）→ Sol 按方案 A 制作 ProtectionOverviewLab（字符串混淆 XOR + 完整性反篡改）并后台验收 → DS 微步实操教学（用户亲手取证：x64dbg 搜 DAY20_PLAIN_MARKER 命中/搜 DAY20_PROTECTED_MARKER 静态搜不到但 --lab 运行时还原；attach 改 payload 第一字节 31→30 后 integrity=TAMPERED+reaction=BLOCKED 退出码 20；对照不改 integrity=OK+feature_value=171+done 退出码 0）→ 复盘（攻击者掐出口不动检测的落点修正：改对账后的岔路口/让对账函数永远答对得上）。days.json 已写入正式文章并 build 发布，进度 20/30。
- <!-- at:2026-08-15T21:37:21+08:00 --> Day 20 Sol 工程准备完成：新建 `学习\Dll1\ProtectionOverviewLab` 并接入 `学习.sln`，x64/v145/C++20；Debug/Release Rebuild、正常/篡改/非法参数路径、明文存在与保护字符串静态消失均通过自动核查；标准 Win32 调试 API 实际命中导出锚点 `Day20VerifyIntegrity`（本轮 Debug RVA 0x1160），四个教学锚点均可由导出名稳定定位。统一 Debug/Release 目录只保留 EXE，PDB/导入库留在项目中间目录。Day 保持 in-progress，教学阶段转为 `DS 实操教学`。

- <!-- at:2026-08-15T21:11:57+08:00 --> Day 20 软件保护综述理论前置完成并交接 Sol 工程准备。五大概念均已讲并逐条确认理解：VM 保护（翻译机+字节码、VMP 是产品名、代价=大小与速度、重点保护、验证结果混入功能数据、木桶原理/掐出口打法）、加壳（打包压缩、藏入口点与导入表、dump 内存转储破法）、混淆（搅乱顺序/等价替换、费劲但能读懂、与 VM 的区别=改长相 vs 换执行者）、自修改（文件与运行对不上账、冲掉软件断点 CC、硬件断点 DR 寄存器可防）、反篡改（自查被改/防换环境、检测与反应分离=Day 19 打地鼠）、多层叠加提高逆向成本。用户已能用自己的话复述关键区别。按 v5.3 链路输出《给 Sol 的实操工程请求》，教学阶段改为 Sol 工程准备，Day 保持 in-progress。

- <!-- at:2026-08-14T20:00:00+08:00 --> Day 19 绕过反调试正式完成：救场后干净 x64dbg 会话重走完整实操——attach（无 C0000005 噪音）→ bp GuardDebugPort 命中 → 三处 Patch 逐处核对（1225 75 09→90 90、122E 74 18→EB 18 jmp 1248、1297 76 18→EB 18 jmp 12B1）→ F9 后控制台"15 轮全部通过，没有逃跑"+done；FatalExit 断点命中时调用栈为 CRT 正常收尾（exit→_wassert→FatalExit，无 day19 帧），警报器抓到的不是逃跑。复盘三问全部通过（Patch 改出口不改检测、打地鼠=分层接力检测需一次堵全、1 字节挤乱=CPU 按字节流读指令）。days.json 已写入正式文章并 build 发布，进度 19/30。

- <!-- at:2026-08-14T19:20:08+08:00 --> v5.3 协作基础设施已同步完成：长期规则、SESSION、`learning-closeout` skill、上下文助手源码/README/契约测试统一为 `DS 理论前置 -> Sol 工程准备 -> DS 实操教学 -> DS 实操后复盘 -> DS 闭环维护`；契约测试 8/8 通过。桌面正式入口 `学习上下文助手.exe` 已重建为 `2026-08-14-v5.3`，与构建产物 SHA-256 一致，实际启动标题和关闭清理验证通过；旧 v5.2 EXE 已保存在源码目录 backup 文件夹。本次协议与工具更新不构成 Day 19 学习证据，不改变 18/30 进度。

- <!-- at:2026-08-14T19:12:02+08:00 --> 用户确认协议升级为 v5.3“Sol 工程预制 -> DS 教学闭环”：DS 完成基础理论后主动输出 `【给 Sol 的实操工程请求】`；Sol 按既定课程内容制作/修改实验工程并后台完成构建、独立运行和调试检查点验收，随后输出 `【给 DS 的实操教学交回卡】`；DS 使用已验收工程完成用户微步实操教学、截图证据核对、复盘和网站日常闭环。工程或交回卡与可见证据冲突时再由 Sol 救场。课程内容与 Day 8-60 路线不变；Day 19 现有工程与救场结果不重做，当前直接交回 DS 实操教学。

- <!-- at:2026-08-14T19:06:46+08:00 --> Day 19 Sol 救场完成：`ntdll+0x1C286` 是 `RtlInitUnicodeStringEx` 的宽字符串扫描指令，异常线程实际为 GamePP 覆盖层的 `LoadLibraryW(GPP64.dll)` 注入线程；x64dbg 目录根部的 `Scylla.dll` 是自带导入表组件，plugins 目录为空，不存在 ScyllaHide 自动注入。隔离对照确认 `TlsCallbacks=0` 后仍加载 GPP64.dll、无 C0000005、程序正常以退出码1结束，因此故障分类为 x64dbg TLS 自动断点与 GamePP 注入初始化交互，而非 Day 19 代码、Patch、构建产物或 Windows 标准调试 API。已备份 `x64dbg.ini.day19-before-tls-fix.bak`，并将正式/隔离配置的用户及系统 TLS Callback 自动断点关闭；Day 保持 in-progress，交回 DS 继续实操与闭环。

- <!-- at:2026-08-14T18:55:00+08:00 --> Day 19 实操触发 Sol 救场：x64dbg 环境 C0000005@ntdll+0x1C286（LoadLibraryW 线程）噪音阻塞实操。"文件→打开"与"中途 attach"两种模式均复现，Shift+F9 放行两次失败（第一次/第二次异常来回跳）。已确认事实：①程序与三处 Patch 字节均正确（1225→90 90、122E→EB 18 jmp 1248、1297→EB 18 jmp 12B1），且第一轮实测门卫1 双红灯未逃跑、门卫2 RDTSC=40329279 超阈值接棒逃跑（打地鼠已取证）；②python 标准调试 API attach 全程零异常、DEBUG_PROCESS 与独立运行均正常——问题特定于 x64dbg 环境；③x64dbg 位于 C:\Users\Administrator\Desktop\x64dbug\release\x64\，目录含 Scylla.dll，attach 后 F9 即停在 ntdll+0x1C286 C0000005 且程序窗口存活（主线程被挂起）。失败方法：Shift+F9 放行（两次）、重开会话（无效）。唯一缺口：x64dbg 环境在该机的 C0000005@ntdll+0x1C286 噪音的绕过/关闭方法（候选：x64dbg 异常过滤设置忽略 C0000005、关闭 TLS 回调自动断点、ScyllaHide 注入相关设置）。救场状态：待 Sol。

- <!-- at:2026-08-12T19:30:00+08:00 --> Day 18 高级反调试正式完成：DS 理论前置（RDTSC 掐秒表/TLS 回调门槛岗哨/NtQueryInformationProcess 深层档案、挂钟 vs 手腕秒表、公告栏 vs 金库登记簿类比）全部通过理解确认；实操证据齐全——独立运行 [TLS] 0/0 + RDTSC 基线 55~210 万 cycles + DebugPort=0/PEB=0 退出 0；x64dbg 中途 attach 后 [7] 行起 DebugPort=0xFFFFFFFFFFFFFFFF、PEB=1（中途 attach 也亮，与 Day 17 堆标志 attach 不亮形成对照）；断点下在两次 rdtsc 之间（MeasureCycles 0x118D 循环顶）停留数十秒后复查 RDTSC=59074751553（约 1000 倍暴涨）；后台 DEBUG_PROCESS 验证器（day18_check.py）跨进程复核 DebugPort/PEB 与程序自查一致。实操坑记录：软件断点下循环顶反复命中（像 F9 没反应，需 F2 取消再放行）；双击运行控制台随 done 自动关闭；x64dbg attach 后先暂停属正常；x64dbg 自动 TLS 回调断点功能实测存在（停在 gpp64.dll 的 int 3）。AdvancedAntiDebugLab 项目（含 verify/day18_check.py）已入学习.sln。

- <!-- at:2026-08-09T23:59:00+08:00 --> Day 17 反调试基础正式完成：DS 理论前置（PEB 档案袋/BeingDebugged/IsDebuggerPresent 导入表痕迹/堆标志概念）全部通过理解确认；实操证据齐全——独立运行三检查点 0/0/0x00000000 退出 0；x64dbg 中途 attach 后 [复查] 1/1/0x00000000（堆标志不触发）；后台 DEBUG_PROCESS 创建 1/1/0x40000060（堆标志触发），三检查点各管一段实测成立。技术修正：网上常见的 NtGlobalFlag 读法（堆+0x68、KUSER_SHARED_DATA+0x320）在本机实测不可靠，跨进程读 PEB/堆 hexdump 核对后确定用堆头 +0x74 ForceFlags（x64）；AntiDebugLab 项目（含 verify/peb_probe.py 探针）已入学习.sln。

- <!-- at:2026-08-09T23:45:00+08:00 --> Day 16 调试器原理正式完成：DS 理论前置（断点触发→内核→异常分发顺序调试器最优先→DebugPort 双向专线→调试事件循环→反调试检查点）全部通过理解确认；实操证据齐全——独立运行 DebugPort=NULL + VEH 接住 0xE1234001 退出 0；x64dbg 中途 attach 后程序自查 DebugPort 变 0xFFFFFFFFFFFFFFFF（NULL→非空实时对比）；抛 0xE1234001 被 x64dbg 先停住（first-chance），Shift+F9 放行后 VEH 打印并 done；后台标准 Win32 调试 API 验证器（DebuggerLab\verify\dbg16_check.py、attach16_check.py）复现同一顺序、退出码 0。环境事实修正：x64dbg 创建进程模式在本机 ntdll 初始化期（LoadLibraryW 线程，ntdll+0x1C286 附近）必现 C0000005 噪音，Shift+F9→第二次异常（进程将终止）、F9→原地再停；Day 15 记录的"headless 特有、不影响 GUI"结论不成立；绕法=独立运行+中途 attach（attach 本身也是"调试器可以中途挂上"理论的实战验证）。Day16DebuggerLab（DebuggerLab 项目，含 verify 验证脚本）已入学习.sln。

- <!-- at:2026-08-09T01:50:00+08:00 --> Day 15 硬件断点（HWBP）正式完成：DS 理论前置（软件断点 vs 硬件断点、DR0-DR7 分工、触发条件、one-shot、反检测闭环）全部通过理解确认；实操证据齐全——普通 x64dbg 中 DR0-DR7 初始全 0、硬件执行断点（DR0=GameTick 地址、DR7=1）命中 RIP=GameTick、硬件写入断点（DR0=g_hp、DR7=0xD0001）命中 RIP=TakeDamage 写血量指令、软件断点 bp 同址命中；后台 Win32 调试 API 验证器复测执行/写入断点（DR6 bit0=1）全部成功。环境事实：x64dbg headless 有 ntdll C0000005 噪音（LoadLibraryW 线程，标准调试 API 下程序无异常），已定位为 headless 特有缺陷，不影响普通 GUI 实操。

- <!-- at:2026-08-07T02:45:00+08:00 --> 协议升级 v5.2（用户决定，Sol 备案）：日常闭环归 DS——DS 负责教学、实操引导、复盘、网站内容、日常实验代码与后台工程准备、网站落地（days.json/node build.js/发布/SESSION 状态维护）；Sol 只保留学习计划大方向与路线审核、高难救场和定期抽查（每 3-5 课核对网站内容与证据一致性）。v5.1 的 Sol 闭环职责废止。

- <!-- at:2026-08-07T02:15:00+08:00 --> 两模型制协议 v5.1 落地（Sol 验收修正后）：废止 Luna，DS 负责全部教学（含实操引导与读图核对、网站内容草稿【给 Sol 的网站内容摘要/复习锚点】），Sol 负责全部工程（构建/运行/调试取证/网站闭环/救场/路线审核）；《更新笔记助手.txt》重写为 v5.1，上下文助手 EXE v5 重建，learning-closeout 与 track-session skill 同步两模型化；Sol 硬规则：单课预算帽 ≤3%、故障先查 GitHub Actions（build 成功但 deploy 超时=服务端故障，等 10-30 分钟最多重推一次真实提交，禁止空提交/删文件试错）、交接卡自包含不重读全文、写网站保留 DS 草稿教学味道。Day 15 按新体系试跑。

- <!-- at:2026-08-06T21:30:43+08:00 --> 学习闭环低开销协议 v4 已落地：DS 网站内容交回卡优先触发原实操模型直接闭环，即使 SESSION 仍显示“DS 实操后复盘”也不再退回 DS；确定性闭环只保留一个 Luna/Sol 执行者，不创建同模型子代理，不重跑已验收实验。Day 完成、正式源文件、GitHub 构建、Pages 公开发布分开报告；Pages 推送后只做一次不超过 60 秒的状态检查，外部排队则记录唯一缺口并停止，不默认推空提交。桌面上下文助手已升级为 v4，提示词契约测试 4/4 和 EXE 启动验证通过；本次规则优化不改变当前 Day 状态，也不算学习证据。

- <!-- at:2026-08-06T20:05:28+08:00 --> Day 14 最终事实审计通过：DS 交回卡已补齐实操后复盘与理解确认；本轮重新完成 Debug/Release x64 单项目 Rebuild 和独立运行，两个产物均返回 0，分别验证 `E0421401 -> VEH -> 108` 与 `E0421402 -> VEH declined -> SehFilter -> 200`。普通 x64dbg 的 `Day14VehHandler`/`SehFilter` 停点证据与当前源码、Debug RVA `0x1240/0x1400` 一致。`C0000005` 仅确认发生在普通 GUI 的嵌套异常处理者软件断点人工续跑场景，x64dbg 内部精确故障点仍未验证；不把推测升级为根因。x64 表驱动表述修正为：最终 Debug PE 有只读 `.pdata`，unwind/handler 数据位于只读 `.rdata`（文档常称 xdata），不声称本构建存在独立命名的 `.xdata` 节。

- <!-- at:2026-08-06T19:15:31+08:00 --> 学习系统规则审计完成：长期规则、`learning-closeout` skill、上下文助手源码/README 和 SESSION 的四阶段路由已统一；桌面 `学习上下文助手.exe` 重建为 `2026-08-06-v3`，当前“DS 实操后复盘”会自动推荐 DS，Luna/Sol 提示词强制在实操证据齐全后停止理论讲解并交出事实摘要。提示词合同自动测试 3/3 通过，旧 v2 备份和临时构建缓存已移入回收站；本次基础设施优化不算 Day 14 完成证据。

- <!-- at:2026-08-06T19:06:21+08:00 --> 学习闭环角色边界纠正：固定顺序改为“DS 理论前置 -> Luna/Sol 实操与取证 -> DS 实操后复盘与理解确认 -> 原 Luna/Sol 文件和网站闭环”。Codex 只验收实操工程与可见证据，不再承担实操后的整课理论讲解或理论考试；没有 DS 复盘交回卡时 Day 必须保持 in-progress。Day 14 已取得全部实操证据，当前正式进入 DS 实操后复盘阶段，days.json 仍为 planned，网站未生成、未发布。

- <!-- at:2026-08-06T18:36:27+08:00 --> Day 14 Sol 根因审计修正：旧 GUI 会话不是完整根因。干净 GUI 能稳定进入 `Day14VehHandler`，但用户从 handler 内的软件断点手动 F9 后仍复现同一 `ntdll C0000005`；隔离 headless 由脚本控制相同执行链则能从 `E0421401` handler 继续到 `E0421402`，证明目标代码和 Windows VEH 返回链可用，差异集中在普通 GUI 中“嵌套异常处理者软件断点后的人工续跑”。教学路线改为每个证据点使用新进程的一次性自动检查点，不再重复 F9/Shift+F9。

- <!-- at:2026-08-06T18:18:09+08:00 --> Day 14 命中 Luna 自动升级条件：同一 `ntdll` 访问异常在第一次异常和交回后的第二次异常重复出现，`Day14VehHandler` 断点始终未命中。已停止第三次同类尝试，将“实操模型”切换为 `5.6sol max（救场，直到当前 Day 验收）`；Day 14 保持 in-progress，唯一缺口为可信的调试器内 VEH/SEH 顺序证据。

- <!-- at:2026-08-06T17:54:16+08:00 --> Day 14 后台预检完成：新建 `学习\Dll1\VEHHookLab` 并加入 `学习.sln`，x64/v145/C++20/Debug-PDB 和统一 `学习\Dll1\x64\Debug|Release\` 输出约定与前课一致。Day 14 项目 Debug Rebuild、Release 单项目 Rebuild、Debug/Release 独立运行均成功；`dumpbin /unwindinfo` 已列出三个关键函数的 x64 unwind 记录，普通调试器证据仍待用户操作确认。

- <!-- at:2026-08-03T11:50:48+08:00 --> Day 13 后台预检完成：独立 `VTableHookLab` 归入 `学习\Dll1\` 并加入 `学习.sln`；Debug/Release 输出统一到 `学习\Dll1\x64\Debug|Release\`。独立运行已验证 Add 的虚表 slot 0 被替换后结果从 8 变为 108，Multiply slot 1 保持 15，恢复 vptr 后 Add 回到 8；调试器内证据仍必须由后续实操确认。

- <!-- at:2026-08-03T12:51:54+08:00 --> Day 13 验收通过：用户能用大白话说明对象 vptr 指向 vtable 副本、slot 0 改为 HookAdd、HookAdd 调用保存的原 Add、恢复原 vptr；普通 x64dbg 已实测 RIP/模块/函数、RCX/RDX/R8、调用栈和副本 slot 0 字节证据；用户理解直接改公共 vtable 会影响共享对象且只读写入可能崩溃。正式文章已写入 days.json，待网站构建与发布验证。

- <!-- at:2026-08-02T21:46:03+08:00 --> 用户明确终止本次 Sol 救场并要求 Luna 重新接管 Day 12；这是对当前接管状态的直接覆盖。Day 12 继续保持 in-progress，Luna 不继承失败教学步骤、不假定现有代码正确，必须先独立复核和亲自跑通，再让用户操作；未验收前不更新 days.json 或网站。
- <!-- at:2026-08-02T21:46:03+08:00 --> Day12InlineHook 的 Debug/Release 输出已统一到 `学习\Dll1\x64\Debug|Release`，旧的 `学习\x64\Release\Day12InlineHook.exe` 已在重建时清理，避免再次误开 Release 版。
- <!-- at:2026-08-02T22:01:24+08:00 --> Luna 后台复核完成：InlineHookLab Debug/Release 均由 MSBuild Rebuild 成功；Debug `--no-break` 与 Release 独立运行均返回 0，Before/After/Restored 结果均为 18，Detour 字节为 `E9 0B 00 00 00 90 90 90`。隔离 x64dbg headless 已加载 Debug PDB 并在 `HookAdd` 停下，实测 `RIP=HookAdd`、`RCX=3`、`RDX=5`；这证明工程和寄存器验收目标成立，但普通 GUI 截图仍待用户复现。
- <!-- at:2026-08-02T22:01:24+08:00 --> 已备份并修正普通 x64dbg 的 `IgnoreRange`，移除覆盖全地址空间的 `nobreak`，保留 `C:\Users\Administrator\Desktop\x64dbug\release\x64\x64dbg.ini.day12-before-ignore.bak` 作为回退副本；不修改工程源代码。
- <!-- at:2026-08-02T22:12:32+08:00 --> 用户在普通 x64dbg GUI 中实际确认 `HookAdd` 停点，寄存器 `RCX=3`、`RDX=5`；这是当前 Day 12 的有效调试证据，已不再只是 headless 或后台推断。
- <!-- at:2026-08-02T22:16:41+08:00 --> 用户用自己的话理解了核心链路：改变的是执行路线/跳转地址，不改变 `RCX/RDX` 中的参数 `3/5`；核心概念复述门已满足。
- <!-- at:2026-08-02T22:19:41+08:00 --> 用户理解了 trampoline：把被覆盖的原代码留存下来，Hook 处理后再接着执行原代码；核心结构链理解门已满足。
- <!-- at:2026-08-02T22:27:43+08:00 --> Day 12 验收通过并正式收尾：用户完成 Inline Hook 执行链、参数保持、trampoline、指令边界失败点和 x64dbg 证据理解；下一 Day 恢复 Luna 日常实操模型。
- <!-- at:2026-08-02T22:27:43+08:00 --> 用户要求移除笔记主页上的情侣问卷跳转入口；已从 `build.js` 移除入口和样式，保留情侣问卷目录及其独立网站，不再从主笔记页跳转。
- <!-- at:2026-08-02T20:49:10+08:00 --> 学习基础设施统一为三段式：DS/V4flash max 只讲理论；Codex 5.6luna max 负责日常实操与闭环；同类失败两次、约 20 分钟无新证据、需要整体换方案或解释与证据冲突时，由 Luna 自动把“实操模型”切到 5.6sol max，Sol 接管当前 Day 直到验收。提示词助手与 `learning-closeout` skill 同步执行该协议；桌面 `学习上下文助手.exe` 是唯一正式入口。本次基础设施重构不构成 Day 12 完成证据。
- <!-- at:2026-08-02T20:20:44+08:00 --> 固定新分工：DS(V4flash max)只负责基础理论、类比和理解纠偏；Codex(日常5.6luna max，重大复盘可用5.6sol max)全权负责实验代码、构建运行、调试实操、验收、SESSION、正式笔记和网站。Codex 实操一次只给一个动作，后台工程未稳定前不让用户陪同试错。
- <!-- at:2026-08-02T20:20:44+08:00 --> Day 12 采用独立 `InlineHookLab` 源项目、输出 `Day12InlineHook.exe`。Debug 默认在 HookAdd 内放透明的无条件 INT3 教学检查点，`--no-break` 仅供后台独立运行；Release 不启用检查点。该设计不依赖 IsDebuggerPresent、旧断点数据库或固定 ASLR 地址。
- <!-- at:2026-07-31T23:40:00+08:00 --> Day 11 x64 汇编 + IAT Hook 完成。核心模型：IAT 槽位=8字节格子存地址；Hook=换格子里的地址，程序 call [槽位] 即跳进 Hook 函数。调试验证：寄存器 RDX/R8/R9 实测参数传递（规则1），调用栈 main → MyMessageBoxA 证明 IAT 被调包，弹窗内容被篡改证明 Hook 函数先执行再调原函数。
- <!-- at:2026-07-30T18:15:00+08:00 --> GPT-5.5 负责大方向规划，Codex 负责逐课教学+写代码。路线扩展为两阶段：第一阶段 Day 1-30（6个阶段），第二阶段 Day 31-60（8个阶段）  
- <!-- at:2026-07-30T18:15:00+08:00 --> Day 10 之后不再以"会多少种注入"为进度指标，而以"能否解释执行链/能用调试器验证/能分析检测与误报"为标准  
- <!-- at:2026-07-30T18:15:00+08:00 --> Day 11 加入 SSE/XMM 浮点基础（movss寄存器传参），避免分析游戏坐标时卡住  
- <!-- at:2026-07-30T18:15:00+08:00 --> Day 14 加入 SEH vs VEH 对比 + x64 表驱动异常（.pdata/.xdata）  
- <!-- at:2026-07-30T18:15:00+08:00 --> Day 24 加入内核对象生命周期/引用计数/IRQL安全意识  
- <!-- at:2026-07-30T18:15:00+08:00 --> Day 27 加入 STL 容器最低识别（vector<Entity*>/string/简单继承）  
- <!-- at:2026-07-30T18:15:00+08:00 --> 每日输出强制包含: 实验环境/已验证结论/推测结论/调试证据/失败实验/版本信息
- <!-- at:2026-07-31T01:30:00+08:00 --> Day 8 APC 注入完成。核心教训：APC 注入必须目标线程进入 Alertable State（SleepEx/WaitFor*Ex + TRUE），GetMessage 消息循环不触发。LoadLibraryA 无法处理中文路径，必须用 LoadLibraryW。MSVC 源文件 UTF-8 需加 /utf-8 编译选项。  
- <!-- at:2026-07-31T12:30:00+08:00 --> Day 9 注入体系总结完成并由 Codex 维护笔记网站。核心模型：先按代码载体、执行入口、Loader 责任、可见证据分析；防御侧以模块/内存/线程/上下文异常反推注入家族。
- <!-- at:2026-07-31T12:45:00+08:00 --> [已由 2026-08-02 新分工废止] 当时约定日常网站维护由 DS 执行；现已改为 Codex 全权负责正式笔记与网站闭环。
- <!-- at:2026-07-31T15:26:59+08:00 --> 已一次性升级前期基础与 Day 1-8 的正式笔记：保留原实验记录，补齐复习锚点、验证证据、误区排查、关联/防御视角和版本/资料方向；网站已重新生成。
- <!-- at:2026-07-31T15:50:48+08:00 --> 已建立 Codex/Reasonix/OpenCode 的学习闭环配置：验收通过后自动更新进度与笔记、生成校验网站并仅提交指定学习文件；提示词 EXE 已重建以携带同一规则。
- <!-- at:2026-07-31T16:01:16+08:00 --> 学习闭环升级为完成条件驱动：老师在教学中自动追踪概念复述、实验证据/失败诊断、误区/防御视角和验收；最后一个学习条件满足时主动发验收题，验收通过后自动收尾，无需用户宣布完成。
- <!-- at:2026-07-31T16:25:00+08:00 --> Day 10 注入检测视角完成：DEP 限制数据页执行，ASLR 随机化加载地址，CFG 校验间接控制流目标；检测应关联模块、私有可执行内存、线程入口和权限/写入历史，不能因未见 RWX 就判定安全。课程采用概念推理验收，尚未进行实时进程枚举实验。
- <!-- at:2026-08-01T00:05:00+08:00 --> Day 11 的 IATHook 已从错误的独立目录迁入 `学习\Dll1\IATHook`，加入 `学习.sln`，并修复了构建脚本路径、导入表 `OriginalFirstThunk` 回退与 `VirtualProtect` 错误检查；Day 11 尚未完成，必须等待用户实际运行验证。
- <!-- at:2026-08-01T00:05:00+08:00 --> 长期协作规则新增教学自检与学习代码工程约定：先确认前置知识/路径/范围，区分实测与推理；学习项目归入 `Dll1\学习.sln`，Release 运行包与调试产物分离。
- <!-- at:2026-08-01T00:22:00+08:00 --> 已审阅一份历史教学对话导出：它只能补充用户偏好与失败模式，不能覆盖当前进度。规则新增明确交接边界、连续工具失败的止损机制，以及禁止让用户充当命令转发者。
- <!-- at:2026-08-01T00:23:57+08:00 --> IATHook Release x64 构建通过（0 警告、0 错误）；统一 Release 目录仅保留 `IATHook.exe`，早期 Debug 版 exe/PDB 已清理。尚未由用户实际运行验证。
- <!-- at:2026-08-01T00:37:27+08:00 --> 已完成笔记网站审阅与生成器优化：课程进度统一显示 Day 10/30（基础单独计数），路线图补齐 Day 5-7，移动端侧栏改为顶部可滚动导航；Day 9 新增“复习入口”以明确证据边界、常见误区与 Day 10/11 的关联。已验证 days.json、生成页与 git diff --check；未发布，Day 11 仍等待运行验证。
- <!-- at:2026-08-01T00:45:37+08:00 --> Day 11 最小 IAT Hook 实验成功：首个 MessageBoxA 为 Hook 前对照；IAT 槽位从 user32!MessageBoxA 改为 exe 内 MyMessageBoxA；第二次弹窗正文被修改，控制台输出 Hook 命中，无崩溃/乱码。下一缺口是调试器证据、练习和验收，Day 11 保持进行中。

## Failed Attempts

- <!-- id:f_day29_release_lock task:t_anti_cheat --> Day 29 中文/枪械改版首次 Release Rebuild 因 PID 17384 正在运行旧 Release EXE 而出现 LNK1104/拒绝访问；确认进程路径精确指向本课产物后向该窗口发送正常关闭请求，再次从 `学习.sln` 重建成功。以后重建前先退出正在运行的靶场，不重复改输出路径或清理文件试错。

- <!-- id:f_day22_elevation task:t_kernel_callback --> Day 22 真实加载验收：第一次因 Codex 非管理员不能改 BCD；用户随后在管理员 PowerShell 运行脚本，证书导入步骤执行后 `bcdedit /set testsigning on` 明确返回“该值受安全引导策略保护”，确认根因是 UEFI Secure Boot，不是命令、驱动或签名失败。脚本已改为先检查 Secure Boot、BCD 成功后再导入证书；真实内核加载仍未执行。

- <!-- id:f_day14_gui_resume_from_veh task:t_hook_veh --> Sol 用隔离用户目录启动干净普通 x64dbg，已成功命中 `Day14VehHandler` 并由用户读出 `E0421401`；但随后人工 F9 仍在 `ntdll!00007FFE7336C286` 触发 `C0000005`。因此“只清旧 GUI 会话后继续手动运行”不足以修复，禁止第三次重复；后续改为新进程的一次性脚本检查点。

- <!-- id:f_day14_symbol_bp task:t_hook_veh --> 直接用 `bp day14vehhook.Day14VehHandler` 设置符号断点返回“无效地址”；改用当前进程模块基址加已核对的 handler RVA 设置 `00007FF7530A1240`，断点被 x64dbg 接受，但尚未命中。
- <!-- id:f_day14_ntdll_av task:t_hook_veh --> 设置 handler 断点后按 F9，x64dbg 在 `ntdll` 地址 `00007FFE7336C286` 首次停下，异常码为 `C0000005 / EXCEPTION_ACCESS_VIOLATION`；按一次 Shift+F9 交回后，同一地址变为第二次异常，`Day14VehHandler` 仍未命中。按升级规则停止继续当前路线，待 Sol 审计异常来源与调试器分发配置。

- <!-- id:f_day14_msbuild_path task:t_hook_veh --> 首次调用 `msbuild` 未找到命令；已定位 Visual Studio 18 Community 的 amd64 MSBuild 绝对路径，后续 Debug Rebuild 成功。
- <!-- id:f_day14_solution_release_oldprojects task:t_hook_veh --> 方案级 Release Rebuild 被既有 `HookDll` 的 `_wfopen` 安全警告和 `Dll1` 的预编译头错误阻断；Day 14 项目自身已在该次生成并通过单项目 Release Rebuild，未修改无关旧项目。

- <!-- id:f_day13_sandbox_build task:t_hook_vtable --> 首次 Day 13 MSBuild 在默认沙箱中无法创建桌面工程的 `VTableHookLab\x64\Debug\` 中间目录，报访问被拒绝；改用受控构建权限后 Debug/Release Rebuild 均成功，不能将该环境阻断误判为代码编译失败。

- <!-- id:f_day13_int3_loop task:t_hook_vtable --> Day 13 初版把 `__debugbreak()` 放进 HookAdd，普通 x64dbg 中表现为 `INT3` 地址来回切换，反复 F9 不能得到稳定的普通断点证据；已移除自带 INT3，改用符号 `HookAdd` 上的普通 F2 断点，并由用户实际命中。

- <!-- id:f_day12_wrong_release task:t_hook_inline --> 第一次新工程 x64dbg 尝试误开了旧路径 `学习\x64\Release\Day12InlineHook.exe`；截图入口 RVA `1A90` 与 Release PE 头一致，因此该次不构成 Debug 失败证据。工程输出目录随后已统一，旧误导副本已清理。
- <!-- id:f_day12_int3_ignore task:t_hook_inline --> 后续自动 INT3 路线仍未得到有效停点；已在 `x64dbg.ini` 确认 `IgnoreRange=00000000-00000000:first:log:debuggee,00000000-FFFFFFFF:nobreak:log:debuggee`，该规则覆盖断点异常 `0x80000003`，足以解释为何程序不暂停。禁止再让用户重复按 F9；Luna 必须先修正/隔离此配置并自行获得调试器证据。
- <!-- id:f_day12_ds task:t_hook_inline --> 旧 Day 12 InlineHook 工程虽能独立运行，但代码质量与 x64dbg 教学过程不可靠；用户授权后已删除旧项目、旧 Debug/Release 产物和解决方案引用，禁止重新使用。
- <!-- id:f_day12_break task:t_hook_inline --> 第一版 Codex InlineHookLab 独立运行成功，但普通/硬件断点未在用户 x64dbg 中命中；随后用 IsDebuggerPresent 控制 INT3 仍直接结束，原因是调试器隐藏设置可能使检测返回假。已移除该依赖，改为 Debug 默认无条件检查点；调试器内证据仍待实测，不能标记 Day 12 完成。
- <!-- id:f_day12_headless_entry task:t_hook_inline --> 初始 x64dbg headless `-c` 路线被默认 `EntryBreakpoint=1` 和启动时序截停在 system/mainCRTStartup；改用 `-cf` 脚本清除 `mainCRTStartup` 后才稳定命中 `HookAdd`，因此前面的 system/entry breakpoint 输出不算 Day 12 调试证据。

## Completed Work

- <!-- ref:t_anti_cheat at:2026-08-24T22:41:55+08:00 --> Day 29 中文与原创 CS 风格视觉替换完成：用户可见窗口标题、主菜单、HUD、任务、靶标、扫描流程、检测结果、暂停与退出确认均为中文，关键检测术语保留中英对照；运行时从 Windows 系统字体加载所需中文字形，不向 Release 包复制字体。工业靶场由混凝土地面/墙体、钢制分道、背板、顶梁灯和箱体构成；原创卡宾枪含枪管、木质护木、机匣、瞄具、握把、弹匣、枪托、双手持握、后坐/枪口火光和弹匣下移换弹。验证脚本先对旧程序因缺少 `visual_language=zh-CN` 正确失败，再在新程序转绿；Debug/Release 均从 `学习.sln` Rebuild 并通过完整控制台/UI/图形 smoke、非法参数与四张互异截图检查。Release 默认窗口标题实测为“第29天 - 分层防御训练靶场”，进程可独立存活并正常关闭；PE32+ x64 Windows GUI、三个导出 RVA `0x3870/0x3880/0x3910`、单 EXE 边界均核对。Release SHA256=`001D1B7D7A843E470DC15A97CA93F59033508DFFCFB8A0535F1943B34057DC21`；用户证据仍待 DS 微步引导。
- <!-- ref:t_anti_cheat at:2026-08-24T22:15:19+08:00 --> Day 29 CS2 类靶场改版完成：`LayeredAntiCheatLab` 默认进入带 START TRAINING/EXIT 的主菜单；游戏内支持 WASD/鼠标、左键连续射击、R 换弹、移动人形靶、命中标记与曳光、持枪 HUD、靠近终端按 E 分层扫描、F1 任务提示。Esc 状态机实测为 PLAYING→PAUSED，暂停菜单提供继续/重开/退出，退出另有确认层；`--ui-self-test` 锁定主菜单、暂停、重开清零、取消退出与确认退出路径。Debug/Release 从 `学习.sln` 定向 Rebuild 与全路径验证均通过；隐藏图形验收实际发射 3 发、命中 3 发、弹药 27/90，并分别导出且人工检查主菜单/游戏/暂停三张不同截图。首次暂停截图因双缓冲只读到旧游戏帧，已通过两帧稳定绘制修复，并在验证脚本加入二进制差异断言防回归。Release 仍为单一 x64 Windows GUI EXE，SHA256=`04855D0116E6060AE75893C10DD46AFF0106A34C4DC49ED3633DD5CA90B11144`；用户证据仍待 DS 微步引导。
- <!-- ref:t_anti_cheat at:2026-08-24T21:46:41+08:00 --> Day 29 用户实操入口完成视觉改版：复用既有固定 raylib 6.0，`Day29LayeredAntiCheatLab.exe` 默认直接进入 1280×720 第一人称 3D 训练场，支持 WASD/鼠标、靠近终端按 E 扫描、R 重置、F1 任务提示；三目标的画面结果均由原 `Day29MatchSignature`、`Day29ClassifyBehavior`、`Day29EvaluateTarget` 计算。控制台链路仅保留为 `--console`/`--console-lab` 后台模式。解决方案定向 Debug/Release Rebuild、双配置全路径验证、60 帧隐藏图形 smoke 与截图导出、默认无参数窗口存活、x64 Windows GUI PE、三导出、非法参数和单 EXE Release 边界全部通过。用户证据尚待 DS 微步引导，Day 保持 in-progress。
- <!-- ref:t_anti_cheat at:2026-08-24T21:22:40+08:00 --> Day 29 Sol 工程准备完成：`学习\Dll1\LayeredAntiCheatLab` 已接入 `学习.sln`；x64/v145/C++20 Debug/Release 从解决方案定向 Rebuild 成功。自动验收确认三种自建目标严格按第 1 层 SIGNATURE→第 2 层 BEHAVIOR 输出：已知特征命中并阻断，改动末字节后特征层 MISS 但行为层以两个可疑事件补抓，正常目标放行；`--lab` 可稳定停在完整证据画面，`--self-test` 与非法参数路径通过。`Day29MatchSignature`、`Day29ClassifyBehavior`、`Day29EvaluateTarget` 可按导出名定位；Release 运行目录只新增必要 EXE。用户实操证据尚待 DS 引导，Day 保持 in-progress。
- <!-- ref:t_game_data at:2026-08-23T18:58:55+08:00 --> Day 28 Sol 工程准备完成：`学习\Dll1\BinaryDataAnalysisLab` 已接入 `学习.sln`；x64/v145/C++20 Debug/Release 定向 Rebuild 均为 0 警告、0 错误。自动验收确认 16 字节存档逐字段输出 offset/raw/value 且 checksum=625 有效，9 字节协议包逐字段拆出 opcode/长度/载荷并得到 player_id=42、action=7；篡改 gold 首字节后 checksum 计算值 626 与存储值 625 不符，退出 3；非法参数退出 2。`--lab` 可稳定输出全部证据后等待 Enter，`Day28Checksum`、`Day28ParseSave`、`Day28ParsePacket` 可按导出名定位，Release 运行包仅新增必要 EXE。Day 保持 in-progress，教学阶段转为 DS 实操教学。
- <!-- ref:t_game_reverse at:2026-08-23T00:08:54+08:00 --> Day 27 Sol 工程准备完成：`学习\Dll1\GameMemoryLayoutLab` 已接入 `学习.sln`；x64/v145/C++20 Debug/Release 从解决方案定向 Rebuild 成功。自动验收从实际地址确认 vector 对象为 24 字节三指针布局且 `end-begin=20=5×4`、短 string 数据位于 32 字节对象内部、长 string 数据在对象外且首指针等于 `data()`、四个字段地址均等于对象基址加固定偏移；非法参数退出 2。`--lab` 稳定停在 `state=EVIDENCE_READY`，`Day27InspectVector`、`Day27InspectString`、`Day27InspectPlayer` 可按导出名定位，Release 运行包仅新增必要 EXE。Day 保持 in-progress，教学阶段转为 DS 实操教学。

- <!-- ref:t_kernel_ob at:2026-08-22T23:38:11+08:00 --> Day 26 Sol 工程准备完成：`学习\Dll1\ObjectHandleProtectionLab` 已接入 `学习.sln`；x64/v145/C++20 Debug/Release 从解决方案定向 Rebuild 成功。自动验收确认两个访问者都先经过 `BEFORE_HANDLE_ISSUE` 检查点：允许者获得 `0xD260` 并凭句柄访问成功，被拒绝者和未知访问者均不获得句柄且以 `NO_HANDLE` 失败；非法参数退出 2、未知访问者退出 3。`--lab` 稳定停在 `state=EVIDENCE_READY`，`Day26CheckHandleRequest` 与 `Day26UseIssuedHandle` 可按导出名定位，Release 运行包仅新增必要 EXE。Day 保持 in-progress，教学阶段转为 DS 实操教学。

- <!-- ref:t_kernel_filter at:2026-08-21T18:40:55+08:00 --> Day 25 Sol 工程准备完成：`学习\Dll1\FilterCheckpointLab` 已接入 `学习.sln`；x64/v145/C++20 Debug/Release 从解决方案定向 Rebuild 成功。自动验收确认请求 1/2/3 均先打印 `checkpoint_seen`，随后分别 PASS 并原样送达、BLOCK 并不送达、MODIFY 后以新内容送达；汇总为 pass=1/block=1/modify=1/delivered=2。未知请求退出 3、非法参数退出 2；`--lab` 稳定停在 `state=EVIDENCE_READY`，两个导出函数可按名称定位，Release 运行包仅含 EXE。Day 保持 in-progress，教学阶段转为 DS 实操教学。

- <!-- ref:t_kernel_comm at:2026-08-20T21:05:00+08:00 --> Day 24 Sol 工程准备完成：`学习\Dll1\DriverCommunicationLifecycleLab` 已接入 `学习.sln`；x64/v145/C++20 Debug/Release 从解决方案定向 Rebuild 成功。自动验收确认控制码 `0x800` 将输入 7/5 写回结果 12、两个不同映射视图共享 `DAY24_SHARED_MESSAGE`、引用计数 1→2→1→0 后 `reclaimed=true`；未知控制码退出 3、非法参数退出 2。`--lab` 稳定停在 `state=EVIDENCE_READY`，四个导出函数可按名称定位，Release 运行包仅含 EXE。Day 保持 in-progress，教学阶段转为 DS 实操教学。

- <!-- ref:t_kernel_ssdt at:2026-08-20T19:41:42+08:00 --> Day 23 Sol 工程准备完成：`学习\Dll1\SSDTHookSimulationLab` 已接入 `学习.sln`；x64/v145/C++20 Debug/Release 从解决方案定向 Rebuild 成功。自动验收确认同一服务号 `0x23` 改表前命中 `Day23OriginalService`（结果 123）、改表后命中 `Day23HookedService`（结果 -23），old/new/after 地址关系一致，非法参数退出码 2；`--lab` 可稳定停在 `state=EVIDENCE_READY`，三个导出名可作调试定位锚点。Release 运行包仅含 EXE。Day 保持 in-progress，教学阶段转为 DS 实操教学。

- <!-- ref:t_kernel_callback at:2026-08-17T21:06:05+08:00 --> Day 22 Sol 纯用户态工程准备完成：新建 `学习\Dll1\KernelProcessEventLab` 并接入 `学习.sln`；x64/v145/C++20 Debug/Release Rebuild 无警告，验证脚本实际先见 WAITING、再以稳定 cmd.exe 靶子捕获同 PID 的 ProcessStart/ProcessStop，非法参数退出码 2 也通过；Release 运行包只含必要 EXE。真驱动源码归档、项目移出活动解决方案、生成 `.sys` 已清理。Day 保持 in-progress，教学阶段转为 DS 实操教学。

- <!-- ref:t_anti_anti_debug at:2026-08-14T20:00:00+08:00 --> Day 19 正式完成：AntiAntiDebugLab 工程（`学习\Dll1\AntiAntiDebugLab`）接入 `学习.sln`，Debug/Release 编译与独立运行通过；普通 x64dbg 三处 Patch 实操证据齐全（1225→90 90、122E→EB 18、1297→EB 18），15 轮全部通过无逃跑 done；打地鼠现象（只堵门卫1 时门卫2 RDTSC=40329279 接棒逃跑）与 1 字节挤乱坑均实测取证；用户理解确认与复盘通过；Sol 救场（x64dbg TLS 自动断点与 GamePP 注入交互致 C0000005，已关闭并备份）记录在案。

- <!-- ref:t_anti_debug_peb at:2026-08-09T23:59:00+08:00 --> Day 17 正式完成：AntiDebugLab 工程（`学习\Dll1\AntiDebugLab`）接入 `学习.sln`，Debug/Release 编译与独立运行通过；普通 x64dbg 中途 attach 实操证据齐全（[复查] 1/1/0x00000000，堆标志不触发）；后台 DEBUG_PROCESS 创建验证 1/1/0x40000060；用户理解确认与复盘通过；NtGlobalFlag 偏移实测修正（用堆头 +0x74 ForceFlags）已记录。

- <!-- ref:t_debugger at:2026-08-09T23:45:00+08:00 --> Day 16 正式完成：DebuggerLab 工程（`学习\Dll1\DebuggerLab`）接入 `学习.sln`，Debug/Release 编译与独立运行通过；普通 x64dbg 中途 attach 实操证据齐全（DebugPort NULL→非空、0xE1234001 先到调试器 first-chance、Shift+F9 放行后 VEH 处理、done 退出）；用户理解确认与复盘通过；创建期 ntdll C0000005 噪音的绕法（独立运行+attach）已记录，Day 15"headless 特有"结论作废。

- <!-- ref:t_hook_hwbp at:2026-08-09T01:50:00+08:00 --> Day 15 正式完成：HWBPLab 工程（`学习\Dll1\HWBPLab`）接入 `学习.sln`，Debug/Release 编译与独立运行通过；普通 x64dbg 实操三连（执行断点/写入断点/软件断点对比）证据齐全，用户理解确认与复盘通过，反作弊检测原理（查 CC 防软件断点、读 DR 防硬件断点）复述正确。

- <!-- ref:t_hook_veh at:2026-08-06T20:05:28+08:00 --> Day 14 正式完成：DS 理论前置与实操后复盘门均满足；Debug/Release 编译和独立运行、普通 x64dbg 中 `E0421401/E0421402` 先到 VEH 以及 `SehFilter` 的 RIP/RCX、Debug PE 的 `.pdata`/unwind 元数据均通过核对；失败实验及“已验证/推测”边界已保留。下一 Day 恢复 Luna 日常实操模型。

- <!-- ref:t_hook_vtable at:2026-08-03T11:50:48+08:00 --> 完成 Day 13 `VTableHookLab` 工程创建、解决方案接入、Debug/Release Rebuild 和独立运行验证；当前唯一缺口是普通 x64dbg 中的 HookAdd 停点与寄存器/对象虚表证据，Day 13 尚未验收。

- <!-- ref:t_hook_vtable at:2026-08-03T12:51:54+08:00 --> Day 13 正式完成：完成 VTable Hook 工程、独立运行、普通 x64dbg 停点、参数寄存器、调用栈、对象 vptr/虚表副本内存证据、概念复述和失败点理解；days.json 已更新为 done，网站生成验证待完成。

- <!-- ref:t_hook_inline at:2026-08-02T22:01:24+08:00 --> 完成 Day 12 工程后台预检、Debug/Release 重建、独立运行核验、隔离 x64dbg headless 停点验证和普通 x64dbg 异常配置修正；Day 12 仍保持 in-progress，等待用户在普通 GUI 中复现并完成概念/失败点/验收闭环。
- <!-- ref:t_hook_inline at:2026-08-02T22:12:32+08:00 --> 用户完成普通 x64dbg `HookAdd` 停点复现，实测 `RCX=3`、`RDX=5`；仍需核对 detour 字节和执行链，并通过概念/失败点/验收后才能收尾。
- <!-- ref:t_hook_inline at:2026-08-02T22:16:41+08:00 --> 用户完成 Inline Hook 核心概念复述：只改变执行路线，不改变参数寄存器内容；仍需完成失败点理解与验收。
- <!-- ref:t_hook_inline at:2026-08-02T22:19:41+08:00 --> 用户能用大白话解释 trampoline 的作用；当前还需完成最后的 Day 12 验收题。
- <!-- ref:t_hook_inline at:2026-08-02T22:27:43+08:00 --> Day 12 正式文章已写入 days.json 并标记 done；node build.js 生成 Day 12/30 页面，验证 JSON、核心文章内容、移除情侣入口和 git diff --check 均通过。

## Verification Results

### Day 14 — Successfully Verified

- 依赖与完成门：Day 13 已完成；DS 理论前置、Sol 实操/调试证据、DS 实操后复盘交回卡和理解确认全部存在，无未解决实操缺口。
- 工程与构建：`VEHHookLab` 属于 `学习.sln`，x64/v145/C++20；Debug 与 Release 单项目 Rebuild 均成功并生成各自的 `Day14VEHHook.exe`。
- 独立运行：Debug/Release 均退出码 0；`E0421401` 路径输出 `VEH handled`、108，`E0421402` 路径输出 `VEH declined -> SEH filter`、200。
- 调试证据：普通 x64dbg 已分别确认 `E0421401`、`E0421402` 到达 `Day14VehHandler`；新进程停在 `day14vehhook!SehFilter+0` 时 `RCX=E0421402`。当前 Debug 二进制再次确认 `Day14VehHandler=RVA 0x1240`、`SehFilter=RVA 0x1400`。
- x64 元数据：当前 Debug PE 为 PE32+ x64，Exception Directory 指向只读 `.pdata`；`dumpbin /unwindinfo` 可见函数表、`__C_specific_handler` 与 scope table，unwind 数据 RVA 落在只读 `.rdata`。

### Day 14 — Preserved Boundary

- 普通 x64dbg GUI 中从嵌套异常处理者的软件断点人工续跑会在历史会话的同一 `ntdll` 地址出现 `C0000005`；它是真实访问违例且不是本课设计的自定义异常。已验证差异集中在该 GUI 续跑场景，但未验证 x64dbg 内部精确故障点，因此只保留现象、范围和稳定替代路线，不写成已确认根因。
- `0x1240/0x1400` 是本轮 Debug 构建 RVA；Release 优化和后续重建可改变函数布局，ASLR 也会改变绝对地址。

## Key Paths  

- 解决方案: `C:\Users\Administrator\Desktop\学习\Dll1\学习.sln`  
- Day 12 源项目: `C:\Users\Administrator\Desktop\学习\Dll1\InlineHookLab\`
- Day 12 Debug: `C:\Users\Administrator\Desktop\学习\Dll1\x64\Debug\Day12InlineHook.exe`
- Day 12 Release: `C:\Users\Administrator\Desktop\学习\Dll1\x64\Release\Day12InlineHook.exe`
- Day 14 源项目: `C:\Users\Administrator\Desktop\学习\Dll1\VEHHookLab\`
- Day 14 Debug: `C:\Users\Administrator\Desktop\学习\Dll1\x64\Debug\Day14VEHHook.exe`
- Day 14 Release: `C:\Users\Administrator\Desktop\学习\Dll1\x64\Release\Day14VEHHook.exe`
- x64dbg 配置: `C:\Users\Administrator\Desktop\x64dbug\release\x64\x64dbg.ini`
- 网站仓库: `C:\Users\Administrator\Desktop\dongtaixuexi\`  
- 网站在线: https://xxoingr.github.io/dongtaixuexi/  
- 新会话提示词工具: `C:\Users\Administrator\Desktop\学习上下文助手.exe`
- 提示词助手源码: `C:\Users\Administrator\Documents\Codex\2026-07-31\ds-codex-4\outputs\learning-context-assistant\learning_context_assistant.py`
- 学习数据: `C:\Users\Administrator\Desktop\dongtaixuexi\days.json`  
- Day 31-60 长期训练靶场: `C:\Users\Administrator\Desktop\学习\Dll1\ReverseStrikeLab\`
- 训练靶场独立进度: `C:\Users\Administrator\Desktop\学习\Dll1\ReverseStrikeLab\SESSION_PROGRESS.md`
- 训练靶场 Release 运行包: `C:\Users\Administrator\Desktop\学习\x64\Release\ReverseStrikeLabPackage\`

## Standings  

### 教学框架  
用户不是要代码助手，是要长期学习辅助者。教学必须：概念→底层原理→逆向视角→验证→误区→关联。  
代码先讲"为什么/解决什么/设计思路/执行流程"再给代码。  
用户猜测时先拆解推理再判断对错。  

### 用户偏好  
中文沟通，英文术语加括号解释。新手需详细引导，不要甩大纲。  
学习方式：B站视频 + AI辅助 + 动手验证。每天投入时间多。  
固定双 AI 模式：DS(V4 Pro)负责日常全流程；Sol(5.6sol max)负责学习计划大方向、高难救场和定期抽查。
模型切换由 Codex 自动判断并写入“实操模型”；用户只描述现象和理解，不负责判断技术难度。

### 每天教学结构 (GPT-5.5 制定)  
1.今日目标 2.前置知识检查 3.核心概念 4.Windows底层原理 5.逆向者视角 6.防御/反外挂视角 7.最小可运行实验 8.调试验证 9.常见错误与崩溃原因 10.32/64位差异 11.与之前课程的关联 12.课后练习 13.验收问题 14.笔记网站文章大纲  

### 每天输出的强制笔记区块 (GPT-5.5 制定)  
- 实验环境 (Windows版本/x64或x86/编译器版本/Debug或Release/工具版本)  
- 已验证结论  
- 仅为推测的结论  
- 调试证据 (寄存器/调用栈/内存布局/模块和偏移)  
- 失败实验 (现象/原因/修复)  
- 版本相关内容  
- 官方资料来源 (Microsoft Learn/Windows Internals/工具文档)  

### 技能  
已安装: find-skills, grill-me, grill-with-docs, improve-codebase-architecture, track-session  
