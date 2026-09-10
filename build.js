// build.js —— 从 days.json 生成 index.html
const fs = require('fs');
const data = JSON.parse(fs.readFileSync(__dirname + '/days.json', 'utf-8'));
const days = data;
const foundation = data.foundation || [];
const phase2 = Array.isArray(data.phase2) ? data.phase2 : [];

// 第二阶段八个固定教学块（路线图 / 进度 / 跳转的元数据，不代表已完成）
const PHASE2_BLOCKS = [
  { startDay: 31, endDay: 34, title: 'x64 汇编进阶 + SSE/AVX + 编译器优化识别' },
  { startDay: 35, endDay: 38, title: 'C++ 对象模型 + RTTI + STL 容器恢复' },
  { startDay: 39, endDay: 41, title: 'SEH/VEH 深入 + x64 栈展开 + TLS/Loader 高级' },
  { startDay: 42, endDay: 45, title: '游戏数学 + 相机/矩阵/World-to-Screen' },
  { startDay: 46, endDay: 49, title: '调试器进阶 + Trace/Dump/自动化脚本' },
  { startDay: 50, endDay: 53, title: '版本 Diff + 特征码定位 + CE 进阶' },
  { startDay: 54, endDay: 57, title: 'Windows 多线程 + 同步机制 + Hook 稳定性' },
  { startDay: 58, endDay: 60, title: '第二次综合项目 + 完整逆向报告' },
];

function isCompletedDay(day) {
  return day && (day.status === 'done' || (!day.status && day.title !== '待学习'));
}

function pageIdOf(kind, key) {
  if (kind === 'foundation') return 'course-f' + (Number(String(key).slice(1)) + 1);
  if (kind === 'day') return 'course-day' + key;
  return 'course-' + key;
}

// 归一化“文章单元”：foundation -> Day 1-30 -> phase2 合并块，按此顺序生成导航与页面
const units = [];
foundation.forEach((f, idx) => {
  const key = 'f' + idx;
  units.push({
    key,
    kind: 'foundation',
    short: '基础-' + (idx + 1),
    heading: '基础-' + (idx + 1) + ' — ' + f.title,
    isDone: true,
    inProgress: false,
    video: f.video || '',
    html: f.html || '',
    practice: f.practice || null,
    review: null,
    pageId: pageIdOf('foundation', key),
  });
});
for (let i = 1; i <= 30; i++) {
  const d = days[String(i)];
  units.push({
    key: String(i),
    kind: 'day',
    startDay: i,
    endDay: i,
    short: 'Day ' + i,
    heading: 'Day ' + i + ' — ' + d.title,
    isDone: isCompletedDay(d),
    inProgress: false,
    video: d.video || '',
    html: d.html || '',
    practice: d.practice || null,
    review: d.review || null,
    pageId: pageIdOf('day', String(i)),
  });
}
phase2.forEach((b) => {
  const range = b.startDay === b.endDay ? ('Day ' + b.startDay) : ('Day ' + b.startDay + '-' + b.endDay);
  units.push({
    key: b.id,
    kind: 'phase2',
    startDay: b.startDay,
    endDay: b.endDay,
    short: range,
    heading: range + ' — ' + b.title,
    isDone: b.status === 'done',
    inProgress: b.status === 'in-progress',
    video: b.video || '',
    html: b.html || '',
    practice: b.practice || null,
    review: null,
    pageId: pageIdOf('phase2', b.id),
  });
});

// ===== 进度口径 =====
let phase1Done = 0;
for (let i = 1; i <= 30; i++) {
  if (isCompletedDay(days[String(i)])) phase1Done++;
}
let phase2DoneDays = 0;
let phase2DoneBlocks = 0;
phase2.forEach((b) => {
  if (b.status === 'done') {
    phase2DoneDays += (b.endDay - b.startDay + 1);
    phase2DoneBlocks++;
  }
});
const totalCovered = phase1Done + phase2DoneDays;
const progressPct = Math.round(totalCovered / 60 * 100);

// 正文装饰：表格只在自身区域横向滚动，并为重点复习章节提供统一视觉层级。
function wrapTables(html) {
  return html
    .replace(/<table([^>]*)>/g, '<div class="table-wrap"><table$1>')
    .replace(/<\/table>/g, '</table></div>');
}

function sectionClass(title) {
  const text = title.replace(/<[^>]+>/g, '').trim();
  if (text.includes('30 秒复习入口')) return 'quick-review';
  if (text.includes('知识点小目录')) return 'lesson-toc';
  if (text.includes('自测')) return 'self-check';
  if (text.includes('失败') || text.includes('排错')) return 'trouble';
  if (text.includes('证据')) return 'evidence';
  if (text.includes('复习')) return 'review-three';
  return '';
}

function decorateSections(html) {
  const heading = /<h3\b([^>]*)>([\s\S]*?)<\/h3>/g;
  const marks = [];
  let match;
  while ((match = heading.exec(html))) marks.push({ start: match.index, title: match[2] });
  if (!marks.length) return html;

  let output = marks[0].start > 0 ? html.slice(0, marks[0].start) : '';
  for (let i = 0; i < marks.length; i++) {
    const start = marks[i].start;
    const end = i + 1 < marks.length ? marks[i + 1].start : html.length;
    const cls = sectionClass(marks[i].title);
    output += '<section class="sec' + (cls ? ' ' + cls : '') + '">' + html.slice(start, end) + '</section>';
  }
  return output;
}

// ===== 侧边栏导航 =====
let navItems = '';
units.forEach((u) => {
  const cls = u.isDone ? ' class="done"' : '';
  navItems += `    <a href="#${u.pageId}" data-day="${u.key}"${cls}><span class="dot"></span>${u.heading}</a>\n`;
});

// ===== 页面内容 =====
let pagesHtml = '';
units.forEach((u, idx) => {
  const active = idx === 0 ? ' active' : '';
  let tagHtml;
  if (u.isDone) tagHtml = '<span class="tag tag-done">✅ 已完成</span>';
  else if (u.inProgress) tagHtml = '<span class="tag tag-progress">⏳ 进行中</span>';
  else tagHtml = '<span class="tag tag-planned">⏳ 计划中</span>';
  const videoHtml = u.video ? ` &nbsp; ${u.video}` : '';
  const reviewHtml = u.review ? `
      <div class="review-box">
        <h3>复习入口</h3>
        <p><strong>已确认：</strong>${u.review.confirmed}</p>
        <p><strong>不要混淆：</strong>${u.review.pitfall}</p>
        <p><strong>下一步：</strong>${u.review.next}</p>
      </div>` : '';
  let ph = '';
  if (u.practice && u.practice.tools) {
    ph = `
      <div class="practice-box">
        <h3>🛠 实操记录</h3>
        <table>
          <tr><th style="width:80px">使用工具</th><td>${u.practice.tools}</td></tr>
          <tr><th>目标程序</th><td>${u.practice.target}</td></tr>
          <tr><th>过程 & 结果</th><td>${u.practice.result}</td></tr>
        </table>
      </div>`;
  }
  const articleHtml = decorateSections(wrapTables(u.html));
  const practiceHtml = wrapTables(ph);
  pagesHtml += `
    <div class="page${active}" id="${u.pageId}" data-day="${u.key}" data-short="${u.short}" data-kind="${u.kind}" data-start-day="${u.startDay || ''}" data-end-day="${u.endDay || ''}">
      <h2>${u.heading}</h2>
      <div class="day-meta">${tagHtml}${videoHtml}<span class="seq">第 ${idx + 1} / ${units.length} 篇</span></div>
      ${reviewHtml}${articleHtml}${practiceHtml}
    </div>
`;
});

// ===== 路线图 =====
const phases = [
  { name: 'PE 格式 (Day 1-4)', days: [1, 2, 3, 4] },
  { name: '注入基础 (Day 5-7)', days: [5, 6, 7] },
  { name: '注入收尾 (Day 8-10)', days: [8, 9, 10] },
  { name: 'Hook 体系 (Day 11-15)', days: [11, 12, 13, 14, 15] },
  { name: '反调试与保护 (Day 16-20)', days: [16, 17, 18, 19, 20] },
  { name: '内核基础 (Day 21-26)', days: [21, 22, 23, 24, 25, 26] },
  { name: '综合实战 (Day 27-30)', days: [27, 28, 29, 30] },
];

let roadmap = '▶前期基础<span class="done"> ✅</span>\n';
phases.forEach((phase, idx) => {
  const allDone = phase.days.every((d) => isCompletedDay(days[String(d)]));
  const pfx = allDone ? '<span class="done"> ✅</span>' : '';
  if (idx > 0) roadmap += '  ├ ';
  roadmap += `▶${phase.name}${pfx}\n`;
});
roadmap += '  └ 第二阶段\n';
PHASE2_BLOCKS.forEach((blk) => {
  const obj = phase2.find((p) => p.startDay === blk.startDay && p.endDay === blk.endDay);
  let pfx;
  if (obj && obj.status === 'done') pfx = '<span class="done"> ✅</span>';
  else if (obj && obj.status === 'in-progress') pfx = '<span class="here"> ◀</span>';
  else pfx = '<span class="planned"> ⏳</span>';
  roadmap += `  ├ ▶Day ${blk.startDay}-${blk.endDay}: ${blk.title}${pfx}\n`;
});

const blockRanges = JSON.stringify(PHASE2_BLOCKS.map((b) => [b.startDay, b.endDay]));
const logHtml = data.log
  ? data.log.slice().sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; }).reverse()
      .map(function (entry) {
        return `<div class="log-entry"><div class="log-date">${entry.date}</div><div class="log-items">${entry.items.map(function (item) { return `<div class="log-item">${item}</div>`; }).join('')}</div></div>`;
      }).join('')
  : '';

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Windows 逆向 & 游戏安全 — 小佳的学习笔记</title>
<style>
:root{--bg:#f0f2f5;--sidebar-bg:#1a1d23;--sidebar-text:#a8adb8;--card:#fff;--text:#212529;--muted:#6c757d;--border:#dee2e6;--accent:#0d6efd;--code-bg:#f1f3f5;--table-stripe:#f8f9fa;--tag-done:#d1e7dd;--tag-text:#0f5132;--sw:264px;--content:940px}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Noto Sans SC",sans-serif;background:var(--bg);color:var(--text);line-height:1.7;display:flex;min-height:100vh;overflow-x:hidden}
a:focus-visible,button:focus-visible,input:focus-visible,summary:focus-visible{outline:2px solid #2563eb;outline-offset:2px}
.sidebar{position:fixed;top:0;left:0;bottom:0;width:var(--sw);background:var(--sidebar-bg);color:var(--sidebar-text);padding:22px 18px;overflow-y:auto;z-index:10;user-select:none}
.sidebar h2{color:#fff;font-size:1rem;margin-bottom:4px;border:none;padding:0}
.sidebar .sub{font-size:.72rem;color:#6b7280;margin-bottom:10px}
.side-block{background:#111318;border:1px solid #23262f;border-radius:10px;padding:10px 12px;margin-bottom:12px}
.progress{font-size:.75rem;color:#9ca3af}.progress .num{color:#e5e7eb;font-weight:600}.progress .bar{height:4px;background:#262930;border-radius:2px;margin-top:6px;overflow:hidden}.progress .bar .fill{height:100%;background:#34d399;border-radius:2px;transition:width .4s}
.jump{display:flex;gap:6px;margin:0}.jump input{flex:1;min-width:0;background:#0b0d11;border:1px solid #2b2f3a;color:#e0e3eb;border-radius:6px;padding:7px 10px;font-size:.8rem;outline:none}.jump input::placeholder{color:#6b7280}.jump input:focus{border-color:#60a5fa}.jump button{flex-shrink:0;background:#1e3a5f;color:#60a5fa;border:none;border-radius:6px;padding:0 12px;font-size:.78rem;cursor:pointer}.jump button:hover{background:#274b78}
.menu-toggle{display:none}
.fold{border-top:1px solid #262930;margin-top:10px;padding-top:8px}.fold>summary{cursor:pointer;font-size:.75rem;color:#9ca3af;font-weight:600;padding:4px 0;list-style:none}.fold>summary::-webkit-details-marker{display:none}.fold>summary::before{content:"▸ "}.fold[open]>summary::before{content:"▾ "}
.roadmap{font-size:.7rem;line-height:1.6;color:#6b7280;background:#111318;border-radius:6px;padding:10px 12px;margin-top:6px;white-space:pre-wrap}.roadmap .here{color:#fbbf24;font-weight:600}.roadmap .done{color:#34d399}.roadmap .planned{color:#6b7280}
.sidebar nav{display:block}
.sidebar nav a{display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:6px;color:var(--sidebar-text);text-decoration:none;font-size:.85rem;transition:all .15s;margin-bottom:2px}
.sidebar nav a:hover{background:#262930;color:#e0e3eb}
.sidebar nav a.active{background:#1e3a5f;color:#60a5fa;font-weight:600}
.sidebar nav a .dot{width:8px;height:8px;border-radius:50%;background:#374151;flex-shrink:0}
.sidebar nav a.active .dot{background:#60a5fa}
.sidebar nav a.done .dot{background:#34d399}
.main{margin-left:var(--sw);flex:1;display:flex;flex-direction:column;min-height:100vh;min-width:0}
.pc{flex:1;display:flex;flex-direction:column;width:100%;max-width:var(--content);margin:0 auto;padding:32px 32px 20px;min-width:0}
.page{display:none;flex:1}
.page.active{display:block}
.page h2{font-size:1.45rem;line-height:1.4;margin-bottom:4px}
.page .day-meta{color:var(--muted);font-size:.82rem;margin-bottom:18px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.page .seq{font-size:.75rem;color:#9aa2ae}
.tag{display:inline-block;padding:1px 8px;border-radius:4px;font-size:.75rem;font-weight:600}
.tag-done{background:var(--tag-done);color:var(--tag-text)}
.tag-progress{background:#fff8e1;color:#92400e}.tag-planned{background:#e9ecef;color:#6c757d}
h3{font-size:1.05rem;margin:22px 0 8px}
h4{font-size:.95rem;margin:16px 0 6px}
p{margin:8px 0}
ul,ol{margin:8px 0 8px 22px}li{margin:4px 0}
table{width:100%;border-collapse:collapse;margin:12px 0;font-size:.88rem}
th,td{padding:8px 10px;border:1px solid var(--border);text-align:left}
th{background:#e9ecef;font-weight:600}
tr:nth-child(even) td{background:var(--table-stripe)}
pre{background:#1e1e2e;color:#cdd6f4;padding:14px 18px;border-radius:6px;overflow-x:auto;margin:10px 0;font-size:.85rem;line-height:1.55}
code{font-family:"Cascadia Code","Fira Code","JetBrains Mono",monospace;font-size:.85em}
:not(pre)>code{background:var(--code-bg);padding:1px 5px;border-radius:3px;color:#d6336c}
pre code{background:none;padding:0;color:inherit}
.page code,.page td,.page th,.page p,.page li{overflow-wrap:anywhere}
.sec{padding:2px 0}
.sec.quick-review,.sec.lesson-toc,.sec.self-check,.sec.evidence,.sec.trouble,.sec.review-three{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:14px 16px;margin:16px 0}
.sec.quick-review{background:#eef5ff;border-color:#cfe2ff}.sec.quick-review h3{color:#0b4d9b;margin-top:0}
.sec.lesson-toc{background:#f8f9fa}.sec.self-check{background:#f5fdf8;border-color:#cdebd7}.sec.self-check h3{color:#0f5132;margin-top:0}
.sec.evidence{background:#fbfaff;border-color:#e4defa}.sec.trouble{background:#fffaf3;border-color:#f3e0c2}.sec.review-three{background:#fbfbfb}
.sec>h3:first-child{margin-top:0}.sec>*:last-child{margin-bottom:0}
.table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:12px 0;max-width:100%}.table-wrap table{margin:0}
details summary{cursor:pointer}.page details{border:1px solid var(--border);border-radius:8px;background:#fbfbfb;padding:8px 12px;margin:10px 0}.page details summary{font-weight:600;font-size:.9rem}
.practice-box{margin-top:28px;border-top:2px solid #34d399;padding-top:16px}
.practice-box h3{color:#0f5132;margin-top:0}
.review-box{border-left:4px solid #0d6efd;background:#eef5ff;padding:12px 16px;margin:0 0 18px;border-radius:6px}.review-box h3{color:#0b4d9b;margin:0 0 6px}.review-box p{margin:4px 0}
.planned-box{margin-top:18px;border-left:4px solid #fbbf24;background:#fff8e1;padding:14px 16px;border-radius:6px}
.planned-box h3{color:#92400e;margin-top:0}
.planned-box p{color:#5f4b1b}
.nav-bar{display:flex;align-items:center;justify-content:center;gap:20px;padding:16px 0 24px;border-top:1px solid var(--border);margin-top:20px}
.nav-bar button{padding:8px 18px;border:1px solid var(--border);background:var(--card);border-radius:6px;cursor:pointer;font-size:.88rem;color:var(--text);transition:all .15s}
.nav-bar button:hover{background:#e9ecef}
.nav-bar button:disabled{opacity:.35;cursor:default}
.nav-bar .pi{font-size:.85rem;color:var(--muted);min-width:80px;text-align:center}
.log-section{font-size:.7rem;color:#6b7280;padding-top:4px}.log-entry{margin-bottom:8px}.log-date{color:#fbbf24;margin-bottom:2px}.log-item{color:#6b7280;padding:1px 0}.log-item::before{content:"- ";color:#4b5563}
@media(max-width:900px){body{display:block}.sidebar{position:static;width:100%;max-height:none;padding:12px 14px}.sidebar .sub{display:none}.main{margin-left:0}.pc{padding:10px 14px 18px}.side-block{margin-bottom:8px;padding:8px 10px}.menu-toggle{display:block;width:100%;background:#262930;color:#e0e3eb;border:none;border-radius:6px;padding:9px 12px;font-size:.82rem;cursor:pointer;text-align:left;margin:0 0 8px}.menu-toggle::after{content:" ▾"}.sidebar.open .menu-toggle::after{content:" ▴"}.sidebar nav{display:none}.sidebar.open nav{display:block;max-height:52vh;overflow-y:auto;margin-bottom:8px}.fold{margin-top:6px;padding-top:6px}.page h2{font-size:1.2rem}h3{font-size:1rem}.table-wrap table{min-width:620px}}
</style>
</head>
<body>
<div class="sidebar" id="sidebar">
<div class="side-block">
<h2>学习笔记</h2>
<div class="sub">Windows 逆向 · 游戏安全</div>
<div class="progress"><span class="num">总体 ${totalCovered}/60</span> · 第一阶段 ${phase1Done}/30 · 第二阶段 ${phase2DoneDays}/30（块 ${phase2DoneBlocks}/8）<div class="bar"><div class="fill" style="width:${progressPct}%"></div></div></div>
</div>
<div class="side-block">
<button class="menu-toggle" id="mt" aria-expanded="false" aria-controls="course-nav">📚 课程目录</button>
<div class="jump"><input id="jump" type="text" placeholder="跳转：12 / Day 12 / 基础-2 / 31-34 / 50" autocomplete="off" aria-label="输入课程编号跳转"><button id="jb">跳转</button></div>
</div>
<details class="fold" id="fold-roadmap"><summary>课程路线</summary><div class="roadmap">${roadmap}</div></details>
<nav id="course-nav" aria-label="课程目录">
${navItems}</nav>
<details class="fold" id="fold-log"><summary>学习日志</summary><div class="log-section">
${logHtml}
</div></details>
</div>
<div class="main"><div class="pc">
${pagesHtml}
    <div class="nav-bar"><button id="pb" disabled>◀ 上一页</button><span class="pi" id="pi">${units[0].short} / ${units.length}</span><button id="nb">下一页 ▶</button></div>
</div></div>
<script>
(function(){
var pages=document.querySelectorAll(".page");
var navs=document.querySelectorAll("#course-nav a");
var pb=document.getElementById("pb");
var nb=document.getElementById("nb");
var pi=document.getElementById("pi");
var jump=document.getElementById("jump");
var jb=document.getElementById("jb");
var mt=document.getElementById("mt");
var sidebar=document.getElementById("sidebar");
var foldRoadmap=document.getElementById("fold-roadmap");
var foldLog=document.getElementById("fold-log");
var blocks=${blockRanges};
var total=pages.length;
var current=0;

function isNarrow(){return window.innerWidth<=900}
function shortOf(i){return pages[i].dataset.short}
function indexOfPageId(id){for(var i=0;i<total;i++){if(pages[i].id===id)return i}return -1}
function paint(i){
  for(var k=0;k<total;k++){pages[k].classList.remove("active");navs[k].classList.remove("active")}
  pages[i].classList.add("active");
  navs[i].classList.add("active");
  pb.disabled=i===0;nb.disabled=i===total-1;
  pi.textContent=shortOf(i)+" / "+total;
  document.title=shortOf(i)+" — Windows 逆向 & 游戏安全";
  if(!isNarrow()){try{navs[i].scrollIntoView({block:"nearest"})}catch(error){}}
}
function collapseMenu(){if(isNarrow()){sidebar.classList.remove("open");mt.setAttribute("aria-expanded","false")}}
function toTop(){window.scrollTo(0,0)}
function show(i,updateHash){
  if(i<0||i>=total)return;
  current=i;paint(i);
  if(updateHash!==false){
    var hash="#"+pages[i].id;
    if(location.hash===hash){toTop()}else{location.hash=hash}
  }else{toTop()}
}
function route(){
  var id=decodeURIComponent(location.hash.slice(1));
  if(!id)return;
  var idx=indexOfPageId(id);
  if(idx>=0){current=idx;paint(idx);toTop();return}
  var target=document.getElementById(id);
  if(!target)return;
  var page=target.closest?target.closest(".page"):null;
  if(page){
    var pageIndex=indexOfPageId(page.id);
    if(pageIndex>=0){current=pageIndex;paint(pageIndex)}
  }
  if(target.scrollIntoView)target.scrollIntoView();
}
function go(){
  var value=jump.value.trim().toLowerCase();
  var match;
  if((match=value.match(/^(?:基础|base|f)\\s*-?\\s*(\\d)$/))){
    var foundationIndex=+match[1];
    if(foundationIndex>=1&&foundationIndex<=${foundation.length}){show(foundationIndex-1);jump.value="";collapseMenu();return}
    jump.value="未找到，试试 基础-1 到 基础-${foundation.length}";return
  }
  if((match=value.match(/^(?:day\\s*)?(\\d{1,2})\\s*-\\s*(\\d{1,2})$/))){
    var start=+match[1],end=+match[2];
    for(var i=0;i<total;i++){
      if(pages[i].dataset.kind!=="foundation"&&+pages[i].dataset.startDay===start&&+pages[i].dataset.endDay===end){show(i);jump.value="";collapseMenu();return}
    }
    jump.value="未找到该课程块，试试 31-34 或 50-53";return
  }
  if((match=value.match(/^(?:day\\s*)?(\\d{1,2})$/))){
    var day=+match[1];
    for(var j=0;j<total;j++){
      var startDay=+pages[j].dataset.startDay,endDay=+pages[j].dataset.endDay;
      if(pages[j].dataset.kind==="day"&&startDay===day){show(j);jump.value="";collapseMenu();return}
      if(pages[j].dataset.kind==="phase2"&&startDay<=day&&day<=endDay){show(j);jump.value="";collapseMenu();return}
    }
    if(day>=31&&day<=60){
      var block=null;
      for(var k=0;k<blocks.length;k++){if(blocks[k][0]<=day&&day<=blocks[k][1])block=blocks[k]}
      jump.value=block?("Day "+block[0]+"-"+block[1]+" 尚未发布"):"该课程块尚未发布";
      return
    }
    jump.value="未找到，试试 1-30、31-53 或 基础-1";return
  }
  jump.value="未找到，试试 12、Day 12、基础-2、31-34 或 50";
}

pb.onclick=function(){if(current>0)show(current-1)};
nb.onclick=function(){if(current<total-1)show(current+1)};
for(var i=0;i<navs.length;i++){(function(idx){navs[idx].onclick=function(event){event.preventDefault();show(idx);collapseMenu()}})(i)}
jump.onfocus=function(){jump.select()};
jump.onkeydown=function(event){if(event.key==="Enter"){go();return false}};
jb.onclick=go;
mt.onclick=function(){var open=sidebar.classList.toggle("open");mt.setAttribute("aria-expanded",open?"true":"false")};
document.addEventListener("keydown",function(event){
  if(event.key!=="ArrowLeft"&&event.key!=="ArrowRight")return;
  var active=document.activeElement;
  if(active&&(active.tagName==="INPUT"||active.tagName==="TEXTAREA"||active.isContentEditable))return;
  if(event.key==="ArrowLeft"&&current>0)show(current-1);
  if(event.key==="ArrowRight"&&current<total-1)show(current+1);
});
window.addEventListener("hashchange",route);
if(isNarrow()){foldRoadmap.open=false;foldLog.open=false}else{foldRoadmap.open=true;foldLog.open=true}
if(location.hash){route()}else{paint(0)}
})();
</script>
</body>
</html>`;

fs.writeFileSync(__dirname + '/index.html', html.replace(/^[ \t]+$/gm, ''), 'utf-8');
console.log(`Generated: 第一阶段 ${phase1Done}/30, 第二阶段 ${phase2DoneDays}/30 (块 ${phase2DoneBlocks}/8), 总体 ${totalCovered}/60, 文章单元 ${units.length} (基础 ${foundation.length} + Day1-30 ${30} + phase2 ${phase2.length})`);
