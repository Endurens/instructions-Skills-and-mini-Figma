/* Student Guide — чистый JS без React и сборки.
   Открывается двойным кликом или через VS Code (Live Server / Open with Live Server).
   Прогресс сохраняется в localStorage. */

"use strict";

var STEPS = [
  {
    id: 1,
    icon: "🔥",
    newContext: false,
    tag: "СКИЛЛ №1",
    tagClass: "tag-violet",
    title: "Grill me — скилл-«задира»",
    subtitle: "Установка готового скилла · 2 минуты",
    description:
      "Скилл из репозитория Мэтта Покока (mattpocock/skills). Прежде чем писать код — допросит ваш план: задаст неудобные вопросы, найдёт слабые места и заставит принять решения. Учит не принимать первый ответ ИИ как истину.",
    url: "https://github.com/mattpocock/skills",
    steps: [
      {
        label: "Открыть терминал",
        description:
          "Откройте терминал в папке проекта (или в любой папке, где нужен скилл). Node.js у вас уже установлен — npx заработает сам, ничего доустанавливать не нужно."
      },
      {
        label: "Установить скилл одной командой",
        description:
          "Скопируйте команду и вставьте в терминал:",
        code: "npx skills add mattpocock/skills --skill grill-me",
        codeLabel: "терминал",
        note: "CLI сам определит вашего агента и положит скилл в нужную папку: .claude/skills/ у Claude Code, .agents/skills/ у OpenCode"
      },
      {
        label: "Перезапустить агента и проверить",
        description:
          "Перезапустите нейронку (скиллы читаются при старте) и скажите: «grill me» + опишите любую идею. Вместо готового кода нейронка должна начать задавать вопросы по вашему плану."
      },
      {
        label: "Как пользоваться",
        description: "Скилл срабатывает на смысл, а не только на точную фразу:",
        bullets: [
          "«grill me на этот план»",
          "«poke holes in this» — найди дыры",
          "«stress test this before I build it»"
        ]
      }
    ]
  },
  {
    id: 2,
    icon: "🎨",
    newContext: false,
    tag: "СКИЛЛ №2",
    tagClass: "tag-sky",
    title: "UI/UX Pro Max — скилл-дизайнер",
    subtitle: "Установка готового скилла · 3 минуты",
    description:
      "Скилл из репозитория nextlevelbuilder/ui-ux-pro-max-skill. Внутри — база знаний: 79 UI-стилей, 192 палитры, 74 шрифтовые пары, 119 UX-правил. Объясняет, почему кнопка серая, а отступ 24px. Спасает от «дефолтного AI-дизайна».",
    url: "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
    steps: [
      {
        label: "Проверить Python",
        description:
          "Скилл ищет по своей базе через Python-скрипт. Проверьте, что Python 3 установлен:",
        code: "python --version",
        codeLabel: "терминал",
        note: "Если Python нет — скачайте с python.org и поставьте галочку «Add to PATH» при установке. На Mac/Linux команда: python3 --version"
      },
      {
        label: "Установить CLI установщика",
        description:
          "Официальный установщик скилла — npm-пакет ui-ux-pro-max-cli:",
        code: "npm install -g ui-ux-pro-max-cli",
        codeLabel: "терминал"
      },
      {
        label: "Установить скилл в проект",
        description:
          "Перейдите в папку проекта и выполните:",
        code: "uipro init --ai claude",
        codeLabel: "терминал · в папке проекта",
        note: "Для OpenCode: uipro init --ai opencode · Для всех агентов сразу: uipro init --ai all"
      },
      {
        label: "Перезапустить агента и проверить",
        description:
          "Перезапустите нейронку и попросите: «Сделай лендинг для SaaS-продукта». Скилл активируется сам и предложит осмысленную дизайн-систему — стиль, палитру, шрифты — с объяснением каждого решения."
      }
    ]
  },
  {
    id: 3,
    icon: "🧠",
    newContext: false,
    tag: "СКИЛЛ №3",
    tagClass: "tag-indigo",
    title: "Senior Fullstack — скилл-сеньор",
    subtitle: "Установка готового скилла · 2 минуты",
    description:
      "Скилл из большой коллекции инженерных скиллов alirezarezvani/claude-skills. Думает архитектурой: выбирает стек, оценивает качество кода и безопасность, ловит edge cases и «что сломается через месяц» — до того, как вы это почувствуете.",
    url: "https://github.com/alirezarezvani/claude-skills",
    steps: [
      {
        label: "Установить скилл одной командой",
        description:
          "Тот же установщик npx skills — скопируйте и вставьте в терминал:",
        code: "npx skills add alirezarezvani/claude-skills --skill senior-fullstack",
        codeLabel: "терминал",
        note: "Есть узкие варианты: senior-frontend и senior-backend — ставятся той же командой с другим именем скилла"
      },
      {
        label: "Перезапустить агента и проверить",
        description:
          "Перезапустите нейронку и спросите: «Что взять для пет-проекта: Next.js или Vite + Express?» Сеньор должен сравнить варианты с аргументами, а не выдать первый попавшийся ответ."
      },
      {
        label: "Как пользоваться",
        description: "Скилл срабатывает на характерные запросы:",
        bullets: [
          "«scaffold a new project» — создать проект по канонам",
          "«analyze code quality» — аудит качества кода",
          "«what stack should I use» — выбор стека"
        ]
      }
    ]
  },
  {
    id: 4,
    icon: "🧱",
    newContext: true,
    tag: "ОБЩИЙ ПРОЕКТ",
    tagClass: "tag-blue",
    title: "Шаг 1. Каркас, архитектура и канвас",
    subtitle: "10–12 минут · мини-Figma",
    description:
      "Строим мини-Figma в браузере: React + TypeScript + Vite + Tailwind. Сначала — каркас проекта со строгой файловой архитектурой, чтобы код не лежал «где-то там», затем холст: сетка, панорамирование (пробел + мышь), зум (колесо).",
    steps: [
      {
        label: "Создать проект с архитектурой",
        description:
          "Скопируйте промпт и вставьте в новый чат — нейронка развернёт проект и разложит код по полкам:",
        prompt:
          "Создай Vite-проект mini-figma на React + TypeScript + Tailwind CSS. Разложи код строго по этой архитектуре:\n\n- src/types/shape.ts — типы: Shape (прямоугольник/эллипс), Tool, координаты и размеры\n- src/constants/tools.ts — список инструментов и соответствие клавишам R/O/V\n- src/utils/geometry.ts — пересчёт экранных координат в координаты канваса (учёт зума и панорамирования)\n- src/hooks/useViewport.ts — панорамирование при зажатом пробеле + мышь, зум колесом от 10% до 400%, центрирование вида при старте\n- src/hooks/useShapes.ts — состояние фигур: список, добавление, изменение\n- src/hooks/useHotkeys.ts — заготовка горячих клавиш (подключим позже)\n- src/components/Canvas.tsx — холст на весь экран с сеткой на фоне\n- src/components/Shape.tsx — рендер одной фигуры (пока заготовка)\n- src/components/Toolbar.tsx — панель инструментов слева (пока каркас)\n- src/components/PropertiesPanel.tsx — панель свойств справа (пока каркас)\n- src/components/LayersPanel.tsx — панель слоёв справа (пока каркас)\n\nApp.tsx собирает Canvas и три панели. На этом шаге должно работать: сетка на фоне, панорамирование (пробел + мышь), зум колесом. Проверь, что npm run dev запускается без ошибок.",
        note: "Каждый шаг — отдельный контекст: создайте новую вкладку перед промптом"
      },
      {
        label: "Создать файл запуска start.bat",
        description:
          "В корне проекта (рядом с package.json) создайте файл start.bat с этим содержимым — двойной клик по нему будет запускать приложение:",
        code: "@echo off\ncd /d \"%~dp0\"\nif not exist node_modules (\n  echo Устанавливаю зависимости...\n  npm install\n)\nnpm run dev",
        codeLabel: "start.bat · корень проекта",
        note: "Скрипт сам ставит зависимости, если их нет, и стартует dev-сервер. Linux/Mac — просто npm run dev в терминале"
      },
      {
        label: "Проверить результат",
        description:
          "Запустите приложение (двойной клик по start.bat или npm run dev). Зажмите пробел и подвигайте мышь — холст панорамируется. Покрутите колесо — работает зум. На фоне сетка."
      },
      {
        label: "Отметить как сделано",
        description: "Если канвас двигается и зумится — шаг готов, переходите к следующему."
      }
    ]
  },
  {
    id: 5,
    icon: "▭",
    newContext: true,
    tag: "ОБЩИЙ ПРОЕКТ",
    tagClass: "tag-blue",
    title: "Шаг 2. Примитивы",
    subtitle: "10–12 минут · мини-Figma",
    description:
      "Оживляем каркас: инструменты прямоугольник и эллипс, создание фигур перетаскиванием и панель свойств с цветом. Код дописывается в существующие файлы архитектуры.",
    steps: [
      {
        label: "Добавить инструменты и панель свойств",
        description:
          "Вставьте промпт в новый чат:",
        prompt:
          "В проекте mini-figma добавь, не ломая существующую архитектуру: в src/components/Toolbar.tsx — инструменты «прямоугольник» и «эллипс»; в src/types/shape.ts — типы фигур, если их не хватает; в src/hooks/useShapes.ts — создание фигуры перетаскиванием мыши по канвасу (координаты через src/utils/geometry.ts, с учётом зума и панорамирования); в src/components/PropertiesPanel.tsx — смена цвета выбранной фигуры. Фигуры должны масштабироваться вместе с канвасом.",
        note: "Если что-то не работает — не переписывайте сами, скопируйте ошибку нейронке"
      },
      {
        label: "Проверить результат",
        description:
          "Выберите инструмент, зажмите мышь на канвасе и потяните — фигура должна создаться. Цвет должен меняться в панели свойств."
      },
      {
        label: "Отметить как сделано",
        description: "Если фигуры создаются и перекрашиваются — переходите к шагу 3."
      }
    ]
  },
  {
    id: 6,
    icon: "🖱️",
    newContext: true,
    tag: "ОБЩИЙ ПРОЕКТ",
    tagClass: "tag-blue",
    title: "Шаг 3. Интерактив",
    subtitle: "15 минут · мини-Figma",
    description:
      "Выделение кликом, рамка с маркерами, перетаскивание фигур, панель слоёв. Это минимум домашки — довести проект до этого шага.",
    steps: [
      {
        label: "Добавить интерактив",
        description:
          "Вставьте промпт в новый чат:",
        prompt:
          "В проекте mini-figma добавь, не ломая существующую архитектуру: выделение фигуры кликом с рамкой и маркерами вокруг неё (расширь src/components/Shape.tsx); перетаскивание выделенной фигуры мышью (логика в src/hooks/useShapes.ts, координаты через src/utils/geometry.ts); панель слоёв src/components/LayersPanel.tsx со списком всех фигур — клик по слою выделяет фигуру на канвасе.",
        note: "Если что-то не работает — не переписывайте сами, скопируйте ошибку нейронке"
      },
      {
        label: "Проверить результат",
        description:
          "Кликните по фигуре — появится рамка с маркерами. Потяните фигуру — она перемещается. На панели слоёв все фигуры, клик по слою выделяет фигуру."
      },
      {
        label: "Отметить как сделано",
        description: "Минимум домашки выполнен. Хотите больше — переходите к финальному шагу."
      }
    ]
  },
  {
    id: 7,
    icon: "⌨️",
    newContext: true,
    tag: "ФИНИШ",
    tagClass: "tag-green",
    title: "Шаг 4. Горячие клавиши",
    subtitle: "10 минут · мини-Figma",
    description:
      "Финальный штрих: горячие клавиши R/O/V как в настоящей Figma. Кто успеет — Undo/Redo (Ctrl+Z).",
    steps: [
      {
        label: "Добавить горячие клавиши",
        description:
          "Вставьте промпт в новый чат:",
        prompt:
          "В проекте mini-figma добавь горячие клавиши как в Figma: R — прямоугольник, O — эллипс, V — курсор. Список клавиш — в src/constants/tools.ts, обработку — в src/hooks/useHotkeys.ts. Для продвинутых: Undo/Redo по Ctrl+Z / Ctrl+Shift+Z — история изменений в src/hooks/useShapes.ts.",
        note: "Это финальный шаг — после него у вас работающий клон Figma"
      },
      {
        label: "Проверить результат",
        description:
          "Нажмите R — активен прямоугольник, O — эллипс, V — курсор. Для продвинутых: Ctrl+Z отменяет действие, Ctrl+Shift+Z возвращает."
      },
      {
        label: "Готово!",
        description: "У вас работающая мини-Figma. Месседж на выход: нейронка — напарник, а не джинн."
      }
    ]
  }
];

// ---------- состояние ----------
var completed = loadJson("lecture-plan-completed", []);
var subChecked = loadJson("lecture-plan-subchecked", {});
var completedSet = {};
completed.forEach(function (id) { completedSet[id] = true; });

function loadJson(key, fallback) {
  try {
    var raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (e) { return fallback; }
}
function save() {
  try {
    localStorage.setItem("lecture-plan-completed", JSON.stringify(Object.keys(completedSet).map(Number)));
    localStorage.setItem("lecture-plan-subchecked", JSON.stringify(subChecked));
  } catch (e) {}
}

// ---------- svg ----------
function svgCheck(cls) {
  return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
}
function svgExternal(cls) {
  return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
}
function svgCopy(cls) {
  return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
}
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ---------- копирование ----------
function copyText(text, btn) {
  function done() {
    if (!btn) return;
    var original = btn.innerHTML;
    btn.innerHTML = svgCheck("") + "<span>скопировано</span>";
    btn.classList.add("copy-ok");
    setTimeout(function () { btn.innerHTML = original; btn.classList.remove("copy-ok"); }, 2000);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text); done(); });
  } else { fallbackCopy(text); done(); }
}
function fallbackCopy(text) {
  var ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  document.body.removeChild(ta);
}

// ---------- рендер ----------
function pad(n) { return String(n).padStart(2, "0"); }

function renderProgress() {
  var total = STEPS.length;
  var doneCount = Object.keys(completedSet).length;
  var pct = Math.round((doneCount / total) * 100);
  document.getElementById("progressCount").textContent = doneCount + "/" + total + " шагов";
  var fill = document.getElementById("progressFill");
  fill.style.width = pct + "%";
  if (pct === 100) fill.classList.add("full"); else fill.classList.remove("full");
  var hint = document.getElementById("progressHint");
  if (pct === 0) { hint.textContent = ""; }
  else if (pct === 100) { hint.textContent = "🎉 Готово! Скиллы стоят, мини-Figma работает."; }
  else { hint.textContent = pct + "% завершено — продолжайте!"; }
  document.getElementById("footerCount").textContent = doneCount + " из " + total + " выполнено";
}

function renderChips() {
  var box = document.getElementById("chips");
  box.innerHTML = STEPS.map(function (s) {
    var done = !!completedSet[s.id];
    return '<div class="chip' + (done ? " done" : "") + '">' +
      (done ? svgCheck("") : "<span>" + s.icon + "</span>") +
      "<span>" + esc(s.title) + "</span></div>";
  }).join("");
}

function substepHtml(stepId, sub, idx) {
  var key = stepId + "-" + idx;
  var checked = !!subChecked[key];
  var html = '<div class="substep' + (checked ? " checked" : "") + '" data-sub="' + key + '">';
  html += '<div class="checkbox">' + (checked ? svgCheck("") : "") + "</div>";
  html += '<div class="substep-body"><span class="substep-num">' + pad(idx + 1) + "</span>";
  html += '<div class="substep-content">';
  html += '<p class="substep-title">' + esc(sub.label) + "</p>";
  if (!checked) {
    if (sub.description) html += '<p class="substep-text">' + esc(sub.description) + "</p>";
    if (sub.link) {
      html += '<a class="substep-link" href="' + esc(sub.link.href) + '" target="_blank" rel="noopener noreferrer" data-stop="1">' +
        esc(sub.link.text) + svgExternal("") + "</a>";
    }
    if (sub.bullets) {
      html += '<ul class="bullets">' + sub.bullets.map(function (b) {
        return '<li><i>✦</i><span>' + esc(b) + "</span></li>";
      }).join("") + "</ul>";
    }
    if (sub.prompt) {
      html += '<div class="prompt-block"><div class="prompt-head"><span class="prompt-head-label"><span>✦</span> промпт для нейронки</span>' +
        '<button class="copy-btn" data-copy="' + esc(sub.prompt).replace(/"/g, "&quot;") + '" data-stop="1">' + svgCopy("") + "<span>копировать</span></button></div>" +
        '<pre class="prompt-text">' + esc(sub.prompt) + "</pre></div>";
    }
    if (sub.bullets === undefined && sub.code) {
      html += '<div class="code-block"><div class="code-lang"><span class="code-label">' + esc(sub.codeLabel || "команда") + "</span></div><pre><code>" + esc(sub.code) + "</code></pre>" +
        '<button class="code-copy" data-copy="' + esc(sub.code).replace(/"/g, "&quot;") + '" data-stop="1">' + svgCopy("") + "<span>копировать</span></button></div>";
    }
    if (sub.note) html += '<p class="note"><b>→</b><span>' + esc(sub.note) + "</span></p>";
  }
  html += "</div></div></div>";
  return html;
}

function renderCards() {
  var box = document.getElementById("steps");
  box.innerHTML = STEPS.map(function (step, i) {
    var done = !!completedSet[step.id];
    var html = '<article class="step-card animate-fade-up' + (done ? " completed-card" : "") + '" style="animation-delay:' + (i * 120) + 'ms">';
    html += '<div class="step-head"><div class="step-head-left">';
    html += '<div class="step-icon">' + (done ? '<span class="animate-check-pop">' + svgCheck("") + "</span>" : step.icon) + "</div>";
    html += "<div>";
    html += '<div class="step-meta"><span class="tag ' + step.tagClass + '">' + esc(step.tag) + "</span>" +
      '<span class="step-num">' + pad(i + 1) + " / " + pad(STEPS.length) + "</span></div>";
    html += "<h2>" + esc(step.title) + "</h2>";
    html += '<p class="step-sub">' + esc(step.subtitle) + "</p>";
    html += "</div></div>";
    if (step.url) {
      html += '<a class="site-link" href="' + esc(step.url) + '" target="_blank" rel="noopener noreferrer">' + svgExternal("") + "<span>репозиторий</span></a>";
    }
    html += "</div>";
    if (step.newContext) {
      html += '<div class="context-banner"><span>🗂️</span><p style="margin:0"><b>Каждый шаг — отдельный контекст.</b> Перед тем как вставлять промпт, создайте новую вкладку в чате с нейронкой — не продолжайте в старом чате.</p></div>';
    }
    html += '<p class="step-desc">' + esc(step.description) + "</p>";
    html += '<div class="substeps">' + step.steps.map(function (s, j) { return substepHtml(step.id, s, j); }).join("") + "</div>";
    html += '<div class="done-row">';
    html += done
      ? '<div class="done-label animate-slide-right">' + svgCheck("") + "Выполнено</div>"
      : "<div></div>";
    html += '<button class="done-btn' + (done ? " is-done" : "") + '" data-done="' + step.id + '">' +
      (done ? svgCheck("") + "Готово — отменить?" : "Отметить как сделано ✓") + "</button>";
    html += "</div></article>";
    return html;
  }).join("");

  var allDone = Object.keys(completedSet).length === STEPS.length;
  document.getElementById("finalBanner").style.display = allDone ? "block" : "none";
}

function renderAll() { renderProgress(); renderChips(); renderCards(); }

// ---------- события (делегирование) ----------
document.addEventListener("click", function (e) {
  var stop = e.target.closest("[data-stop]");
  if (stop) e.stopPropagation();

  var copyBtn = e.target.closest("[data-copy]");
  if (copyBtn) {
    e.stopPropagation();
    copyText(copyBtn.getAttribute("data-copy"), copyBtn);
    return;
  }
  var doneBtn = e.target.closest("[data-done]");
  if (doneBtn) {
    var id = Number(doneBtn.getAttribute("data-done"));
    if (completedSet[id]) { delete completedSet[id]; }
    else {
      completedSet[id] = true;
      // мини-конфетти
      var card = doneBtn.closest(".step-card");
      if (card) burst(card);
    }
    save(); renderAll();
    return;
  }
  var sub = e.target.closest("[data-sub]");
  if (sub) {
    var key = sub.getAttribute("data-sub");
    // клик по ссылке/кнопке внутри — не переключать чекбокс
    if (e.target.closest("a,button")) return;
    subChecked[key] = !subChecked[key];
    save(); renderAll();
  }
});

function burst(card) {
  var colors = ["#4f46e5", "#16a34a", "#f59e0b", "#ec4899", "#06b6d4"];
  var wrap = document.createElement("div");
  wrap.className = "confetti-wrap";
  for (var i = 0; i < 18; i++) {
    var c = document.createElement("div");
    c.className = "confetti";
    c.style.left = (10 + (i * 5) % 80) + "%";
    c.style.backgroundColor = colors[i % colors.length];
    c.style.animationDelay = (i * 60) + "ms";
    c.style.transform = "rotate(" + (i * 20) + "deg)";
    wrap.appendChild(c);
  }
  card.appendChild(wrap);
  setTimeout(function () { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); }, 1600);
}

document.getElementById("resetBtn").addEventListener("click", function () {
  completedSet = {}; subChecked = {}; save(); renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderAll();
