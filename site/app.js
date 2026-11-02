(function () {
  'use strict';

  /* ---------- 皮肤：点图标弹出切换面板 ---------- */
  const THEME_KEY = 'api-sites-theme';
  const THEMES = [
    { id: 'default', name: '默认' },
    { id: 'berry', name: '粉雾' },
    { id: 'apple', name: '青苹果' },
    { id: 'neuro', name: '夜间' },
  ];

  function applyTheme(id) {
    const theme = THEMES.some((t) => t.id === id) ? id : 'default';
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* 隐私模式下忽略 */ }
    const current = THEMES.find((t) => t.id === theme);
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.title = '皮肤：' + current.name + '（点击切换）';
      btn.setAttribute('aria-label', '切换皮肤，当前为' + current.name);
    }
    document.querySelectorAll('.theme-option').forEach((opt) => {
      const active = opt.dataset.themeId === theme;
      opt.classList.toggle('active', active);
      opt.setAttribute('aria-checked', String(active));
    });
  }

  applyTheme(localStorage.getItem(THEME_KEY) || 'default');

  const themeToggle = document.getElementById('themeToggle');
  const themeMenu = document.getElementById('themeMenu');

  function closeThemeMenu() {
    if (!themeMenu || themeMenu.hidden) return;
    themeMenu.hidden = true;
    if (themeToggle) themeToggle.setAttribute('aria-expanded', 'false');
  }
  function openThemeMenu() {
    if (!themeMenu) return;
    themeMenu.hidden = false;
    if (themeToggle) themeToggle.setAttribute('aria-expanded', 'true');
  }

  if (themeToggle && themeMenu) {
    themeToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (themeMenu.hidden) openThemeMenu(); else closeThemeMenu();
    });
    themeMenu.addEventListener('click', (e) => {
      const opt = e.target.closest('.theme-option');
      if (!opt) return;
      applyTheme(opt.dataset.themeId);
      closeThemeMenu();
    });
    document.addEventListener('click', (e) => {
      if (themeMenu.hidden) return;
      if (e.target.closest('#themeMenu') || e.target.closest('#themeToggle')) return;
      closeThemeMenu();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeThemeMenu();
    });
  }

  /* ---------- 工具函数 ---------- */
  const $ = (s, el) => (el || document).querySelector(s);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
  // 只允许 http/https，没写协议的自动补 https://
  const safeUrl = (u) => {
    u = String(u || '').trim();
    if (!u) return '';
    if (!/^[a-z][a-z0-9+.-]*:/i.test(u)) u = 'https://' + u;
    return /^https?:\/\//i.test(u) ? u : '';
  };
  const toast = (msg) => {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove('show'), 1600);
  };
  const copy = async (text, label) => {
    if (!text) return toast('没有可复制的内容');
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (_) {}
      ta.remove();
    }
    toast('已复制' + (label ? ' ' + label : ''));
  };

  const STATUS = {
    ok: ['ok', '✅ 可用'],
    unstable: ['unstable', '⚠️ 不稳定'],
    closed: ['closed', '🔒 暂停注册'],
    dead: ['dead', '❌ 已失效'],
  };

  /* ---------- 标签页 ---------- */
  function switchTab(id) {
    document.querySelectorAll('.tab').forEach((b) => b.classList.toggle('active', b.dataset.tab === id));
    document.querySelectorAll('.panel').forEach((p) => p.classList.toggle('active', p.id === id));
  }
  document.querySelectorAll('.tab').forEach((b) => b.addEventListener('click', () => {
    switchTab(b.dataset.tab);
    history.replaceState(null, '', '#' + b.dataset.tab);
  }));
  if (location.hash === '#memo') switchTab('memo');

  /* =========================================================
   * 功能一：站子推荐（汇总 + 分类都由 SITES 生成）
   * ========================================================= */
  const siteId = (i) => 'site-' + i;

  function renderSummary() {
    const html = CATEGORIES.map((cat) => {
      const items = SITES.map((s, i) => ({ s, i })).filter((x) => x.s.category === cat.id);
      const names = items.length
        ? items.map(({ s, i }) =>
            `<a href="#${siteId(i)}" data-jump="${siteId(i)}">${esc(s.name)}</a>` +
            (s.condition ? '<span class="sum-cond">（有条件签到）</span>' : '')
          ).join('，')
        : '<span class="empty">暂无</span>';
      return `<div class="sum-row"><span class="sum-cat">${esc(cat.name)}：</span>${names}</div>`;
    }).join('');
    $('#summary').innerHTML = html;
  }

  function field(label, value, cls) {
    if (!value) return '';
    return `<dt>${label}</dt><dd class="${cls || ''}">${esc(value)}</dd>`;
  }

  function siteCard(s, i) {
    const st = STATUS[s.status] || STATUS.ok;
    const link = safeUrl(s.link);
    const linkBtn = link
      ? `<a class="btn primary" href="${esc(link)}" target="_blank" rel="noopener">${esc(s.linkText || '邀请链接 · 去注册')}</a>`
      : '<span class="btn primary disabled">链接待补充</span>';
    const codeBtn = s.inviteCode
      ? `<button class="btn" data-copy="${esc(s.inviteCode)}" data-label="邀请码">复制邀请码 ${esc(s.inviteCode)}</button>`
      : '';
    return `
      <article class="site" id="${siteId(i)}">
        <div class="site-top">
          <h4>${esc(s.name)}</h4>
          <span class="badge ${st[0]}">${st[1]}${s.statusText ? ' · ' + esc(s.statusText) : ''}</span>
        </div>
        ${s.condition ? `<div><span class="cond-tag">有条件签到：${esc(s.condition)}</span></div>` : ''}
        <dl class="info">
          ${field('适用范围', s.scope)}
          ${field('模型', s.models)}
          ${field('签到 / 额度', s.quota, 'pre')}
          ${field('注册方式', s.register)}
          ${field('说明', s.note)}
          ${field('注意', s.warn, 'warn')}
        </dl>
        ${s.checked ? `<div class="checked">最后检查：${esc(s.checked)}</div>` : ''}
        <div class="actions">${linkBtn}${codeBtn}</div>
      </article>`;
  }

  function renderCategories() {
    $('#categories').innerHTML = CATEGORIES.map((cat) => {
      const cards = SITES.map((s, i) => (s.category === cat.id ? siteCard(s, i) : '')).join('');
      const content = cards ? `<div class="grid">${cards}</div>` : '<p class="empty">暂无</p>';
      return `
        <div class="cat-block" id="cat-${cat.id}" data-cat="${cat.id}">
          <div class="cat-head"><h3>${esc(cat.name)}</h3><span>${esc(cat.desc)}</span></div>
          <div class="cat-content">${content}</div>
        </div>`;
    }).join('');
  }

  // 分类展开/收起
  document.addEventListener('click', (e) => {
    const head = e.target.closest('.cat-head');
    if (head) {
      const block = head.closest('.cat-block');
      if (block) block.classList.toggle('collapsed');
    }
  });

  // 点汇总里的名字 → 滚动到卡片并闪一下
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-jump]');
    if (a) {
      e.preventDefault();
      const el = document.getElementById(a.dataset.jump);
      if (el) {
        // 先确保所在分类是展开的
        const block = el.closest('.cat-block');
        if (block && block.classList.contains('collapsed')) {
          block.classList.remove('collapsed');
        }
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.remove('flash');
          void el.offsetWidth;
          el.classList.add('flash');
        }, 100);
      }
      return;
    }
    const c = e.target.closest('[data-copy]');
    if (c) copy(c.dataset.copy, c.dataset.label);
  });

  // 底部说明展开/收起
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('.notice-toggle');
    if (toggle) {
      const notice = toggle.closest('.notice');
      if (notice) notice.classList.toggle('collapsed');
    }
  });

  renderSummary();
  renderCategories();

  /* =========================================================
   * 功能二：我的站子备忘录（只存在本机浏览器 localStorage）
   * ========================================================= */
  const KEY = 'api-site-memo-v1';
  let memos = [];
  let groups = [{ id: 'default', name: '默认分组', collapsed: false }];
  const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
  const groupId = (id) => groups.some(g => g.id === id) ? id : 'default';
  let revealed = new Set();

  const load = () => {
    try {
      const stored = JSON.parse(localStorage.getItem(KEY));
      memos = Array.isArray(stored) ? stored : (stored && stored.items) || [];
      if (stored && !Array.isArray(stored) && Array.isArray(stored.groups)) {
        const ids = new Set();
        groups = stored.groups.filter(g => g && typeof g.id === 'string' && typeof g.name === 'string' && g.name.trim() && !ids.has(g.id) && ids.add(g.id))
          .map(g => ({ id: g.id, name: g.name.trim().slice(0, 40), collapsed: !!g.collapsed }));
        if (!groups.some(g => g.id === 'default')) groups.unshift({ id: 'default', name: '默认分组', collapsed: false });
      }
    } catch (e) { memos = []; }
    if (!Array.isArray(memos)) memos = [];
    memos = memos.filter(m => m && typeof m === 'object').map(m => ({ ...m, group: groupId(m.group) }));
  };
  const save = () => {
    try { localStorage.setItem(KEY, JSON.stringify({ version: 2, items: memos, groups })); }
    catch (e) { toast('保存失败：浏览器可能禁用了本地存储'); }
  };
  const mask = (k) => (k.length <= 8 ? '••••••' : k.slice(0, 5) + '••••••' + k.slice(-4));

  // 管理多个 API Keys
  let keyCounter = 0;
  function addKeyRow(label = '', value = '') {
    const id = ++keyCounter;
    const row = document.createElement('div');
    row.className = 'key-row';
    row.dataset.keyId = id;
    row.innerHTML = `
      <input type="text" class="key-label" placeholder="key${id}" value="${esc(label)}" data-key-label>
      <input type="text" placeholder="sk-xxxx" spellcheck="false" autocapitalize="off" value="${esc(value)}" data-key-value>
      <button type="button" class="btn small danger" data-remove-key="${id}">删除</button>
    `;
    $('#keysContainer').appendChild(row);
  }

  function getKeys() {
    const rows = document.querySelectorAll('.key-row');
    const keys = [];
    rows.forEach((row) => {
      const label = row.querySelector('[data-key-label]').value.trim();
      const value = row.querySelector('[data-key-value]').value.trim();
      if (value) keys.push({ label: label || 'key', value });
    });
    return keys;
  }

  function setKeys(keys) {
    $('#keysContainer').innerHTML = '';
    keyCounter = 0;
    if (!keys || !keys.length) {
      addKeyRow('', '');
    } else {
      keys.forEach((k) => addKeyRow(k.label, k.value));
    }
  }

  $('#addKeyBtn').addEventListener('click', () => addKeyRow('', ''));
  $('#keysContainer').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-remove-key]');
    if (btn) {
      const row = btn.closest('.key-row');
      if (row) row.remove();
      if (!document.querySelectorAll('.key-row').length) addKeyRow('', '');
    }
  });

  function renderMemos() {
    const q = $('#memoSearch').value.trim().toLowerCase();
    const list = memos.filter((m) => !q ||
      [m.name, m.invite, m.api, m.note].some((v) => String(v || '').toLowerCase().includes(q)));

    const card = (m) => {
      const invite = safeUrl(m.invite);
      const keys = m.keys || [];
      return `
        <article class="site memo-item">
          <div class="site-top"><h4>${esc(m.name)}</h4></div>
          ${m.invite ? `<div class="field"><span class="label">邀请链接</span><code>${esc(m.invite)}</code>
            <button class="btn small" data-copy="${esc(m.invite)}" data-label="邀请链接">复制</button></div>` : ''}
          ${m.api ? `<div class="field"><span class="label">API URL</span><code>${esc(m.api)}</code>
            <button class="btn small" data-copy="${esc(m.api)}" data-label="API URL">复制</button></div>` : ''}
          ${keys.map((k, i) => {
            const show = revealed.has(m.id + '-' + i);
            return `<div class="field"><span class="label">${esc(k.label)}</span><code>${esc(show ? k.value : mask(k.value))}</code>
              <button class="btn small" data-act="reveal" data-id="${m.id}" data-key-idx="${i}">${show ? '隐藏' : '显示'}</button>
              <button class="btn small" data-copy="${esc(k.value)}" data-label="${esc(k.label)}">复制</button></div>`;
          }).join('')}
          ${m.note ? `<p class="memo-note">${esc(m.note)}</p>` : ''}
          <div class="actions">
            ${invite ? `<a class="btn primary" href="${esc(invite)}" target="_blank" rel="noopener">打开站子</a>` : ''}
            <button class="btn" data-act="edit" data-id="${m.id}">编辑</button>
            <button class="btn danger" data-act="del" data-id="${m.id}">删除</button>
          </div>
        </article>`;
    };
    $('#memoList').innerHTML = (!list.length && q ? '<p class="empty">没有找到匹配的站子</p>' : '') + groups.map((g, i) => {
      const members = list.filter(m => groupId(m.group) === g.id);
      const total = memos.filter(m => groupId(m.group) === g.id).length;
      const closed = g.collapsed && !q;
      return `<section class="memo-group card">
        <div class="group-heading">
          <button type="button" class="group-toggle" data-group-action="toggle" data-group-id="${esc(g.id)}" aria-expanded="${!closed}" aria-controls="group-content-${i}">
            <svg class="group-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>
            <span>${esc(g.name)}</span><span class="group-count">${q ? members.length + '/' : ''}${total}</span>
          </button>
          <button type="button" class="btn small" data-group-action="rename" data-group-id="${esc(g.id)}">改名</button>
          ${g.id !== 'default' ? `<button type="button" class="btn small danger" data-group-action="delete" data-group-id="${esc(g.id)}">删除组</button>` : ''}
        </div>
        <div id="group-content-${i}" ${closed ? 'hidden' : ''}>
          ${members.length ? '<div class="grid">' + members.map(card).join('') + '</div>' : '<p class="empty">' + (q ? '本组无匹配站子' : '本组暂无站子，可在添加或编辑站子时选择此组。') + '</p>'}
        </div>
      </section>`;
    }).join('');
  }

  function renderGroupOptions(selected = $('#f-group').value) {
    $('#f-group').innerHTML = groups.map(g => `<option value="${esc(g.id)}">${esc(g.name)}</option>`).join('');
    $('#f-group').value = groupId(selected);
  }
  function askGroupName(current = '') {
    const input = prompt('请输入分组名称（最多 40 个字）', current);
    if (input === null) return null;
    const name = input.trim();
    if (!name || name.length > 40) { toast('组名不能为空，且最多 40 个字'); return null; }
    return name;
  }
  $('#addGroupBtn').addEventListener('click', () => {
    const name = askGroupName();
    if (!name) return;
    if (groups.some(g => g.name === name)) return toast('已存在同名分组');
    groups.push({ id: newId(), name, collapsed: false });
    save(); renderGroupOptions(); renderMemos();
  });
  $('#memoList').addEventListener('click', e => {
    const button = e.target.closest('[data-group-action]');
    if (!button) return;
    const g = groups.find(g => g.id === button.dataset.groupId);
    if (!g) return;
    const action = button.dataset.groupAction;
    if (action === 'toggle') g.collapsed = !g.collapsed;
    if (action === 'rename') {
      const name = askGroupName(g.name);
      if (!name) return;
      if (groups.some(other => other.id !== g.id && other.name === name)) return toast('已存在同名分组');
      g.name = name;
    }
    if (action === 'delete') {
      if (g.id === 'default' || !confirm('删除「' + g.name + '」分组？组内站子会移入「' + groups.find(x => x.id === 'default').name + '」，不会删除站子。')) return;
      memos.forEach(m => { if (m.group === g.id) m.group = 'default'; });
      groups = groups.filter(x => x.id !== g.id);
    }
    save(); renderGroupOptions(); renderMemos();
  });
  [['#expandGroupsBtn', false], ['#collapseGroupsBtn', true]].forEach(([selector, collapsed]) => {
    $(selector).addEventListener('click', () => {
      $('#memoSearch').value = '';
      groups.forEach(g => { g.collapsed = collapsed; });
      save(); renderMemos();
    });
  });

  function resetForm() {
    $('#memoForm').reset();
    $('#f-id').value = '';
    $('#formTitle').textContent = '添加我的站子';
    $('#saveBtn').textContent = '保存';
    $('#cancelBtn').hidden = true;
    setKeys([]);
  }

  $('#memoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      name: $('#f-name').value.trim(),
      invite: $('#f-invite').value.trim(),
      api: $('#f-api').value.trim(),
      keys: getKeys(),
      note: $('#f-note').value.trim(),
      group: groupId($('#f-group').value),
    };
    if (!data.name) return toast('请填写站子名字');
    const id = $('#f-id').value;
    if (id) {
      const m = memos.find((x) => x.id === id);
      if (m) Object.assign(m, data, { updated: Date.now() });
      toast('已更新');
    } else {
      memos.unshift(Object.assign({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), created: Date.now() }, data));
      toast('已保存');
    }
    save();
    resetForm();
    renderMemos();
  });

  $('#cancelBtn').addEventListener('click', resetForm);
  $('#memoSearch').addEventListener('input', renderMemos);

  $('#memoList').addEventListener('click', (e) => {
    const b = e.target.closest('[data-act]');
    if (!b) return;
    const m = memos.find((x) => x.id === b.dataset.id);
    if (!m) return;
    if (b.dataset.act === 'reveal') {
      const idx = b.dataset.keyIdx;
      const revealId = m.id + '-' + idx;
      revealed.has(revealId) ? revealed.delete(revealId) : revealed.add(revealId);
      renderMemos();
    } else if (b.dataset.act === 'edit') {
      $('#f-id').value = m.id;
      $('#f-name').value = m.name || '';
      $('#f-group').value = groupId(m.group);
      $('#f-invite').value = m.invite || '';
      $('#f-api').value = m.api || '';
      setKeys(m.keys || []);
      $('#f-note').value = m.note || '';
      $('#formTitle').textContent = '编辑：' + m.name;
      $('#saveBtn').textContent = '保存修改';
      $('#cancelBtn').hidden = false;
      $('#memoForm').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (b.dataset.act === 'del') {
      if (confirm('确定删除「' + m.name + '」吗？删除后无法恢复。')) {
        memos = memos.filter((x) => x.id !== m.id);
        save();
        renderMemos();
        toast('已删除');
      }
    }
  });

  // 导出备份
  $('#exportBtn').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify({ app: 'api-site-memo', version: 2, items: memos, groups }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = '我的站子备份-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast('已导出（文件里有 API Key，请妥善保管）');
  });

  // 导入备份（按 id 合并，不会清空已有记录）
  $('#importFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const obj = JSON.parse(reader.result);
        const items = Array.isArray(obj) ? obj : obj.items;
        if (!Array.isArray(items)) throw new Error('格式不对');
        const importedGroupMap = new Map([['default', 'default']]);
        if (!Array.isArray(obj) && Array.isArray(obj.groups)) {
          obj.groups.forEach(g => {
            if (!g || typeof g.id !== 'string' || typeof g.name !== 'string' || !g.name.trim()) return;
            const name = g.name.trim().slice(0, 40);
            if (g.id === 'default') {
              if (!memos.length && groups.length === 1) { groups[0].name = name; groups[0].collapsed = !!g.collapsed; }
              return;
            }
            const match = groups.find(x => x.id !== 'default' && x.name === name);
            const id = match ? match.id : newId();
            if (!match) groups.push({ id, name, collapsed: !!g.collapsed });
            importedGroupMap.set(g.id, id);
          });
        }
        let added = 0;
        items.forEach((it) => {
          if (!it || !it.name) return;
          // 兼容旧格式（单个 key 和 url 字段）
          let keys = it.keys || [];
          if (!keys.length && it.key) keys = [{ label: 'key1', value: it.key }];
          const invite = it.invite || it.url || '';  // 兼容旧的 url 字段
          const item = {
            id: String(it.id || Date.now().toString(36) + Math.random().toString(36).slice(2, 6)),
            name: String(it.name), invite: String(invite), api: String(it.api || ''),
            keys, note: String(it.note || ''), created: it.created || Date.now(),
            group: importedGroupMap.get(it.group) || 'default',
          };
          const i = memos.findIndex((x) => x.id === item.id);
          if (i >= 0) memos[i] = item; else { memos.push(item); added++; }
        });
        save();
        renderMemos();
        renderGroupOptions();
        toast('导入完成，新增 ' + added + ' 条');
      } catch (err) {
        toast('导入失败：文件格式不对');
      }
      e.target.value = '';
    };
    reader.readAsText(file);
  });

  load();
  renderGroupOptions();
  setKeys([]);
  renderMemos();
})();
