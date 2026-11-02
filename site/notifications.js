/* 公告系统：不自动弹窗。
   有未读公告时，公告按钮上显示红点；点开公告界面红点即消失。
   公告内容写在 announcements.js 里（id 变了才算新公告）。 */
(() => {
  const panel = document.querySelector('#announcementPanel');
  const trigger = document.querySelector('#announcementBtn');
  const badge = document.querySelector('#announcementBadge');
  const list = document.querySelector('#announcementList');
  const KEY = 'api-sites-announcements-seen-v1';
  const entries = [...ANNOUNCEMENTS].reverse();

  let seen = new Set();
  try {
    const data = JSON.parse(localStorage.getItem(KEY));
    if (Array.isArray(data)) seen = new Set(data);
  } catch (e) { /* 忽略，按全部未读处理 */ }

  const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

  const markup = (item) =>
    `<article class="announcement-entry"><time>${esc(item.date)}</time><h4>${esc(item.title)}</h4><div>${item.content || ''}</div></article>`;

  list.innerHTML = entries.map(markup).join('') || '<p class="empty">暂无公告</p>';

  const unseen = () => entries.filter((item) => !seen.has(item.id));
  const syncBadge = () => { badge.hidden = unseen().length === 0; };
  syncBadge();

  let previousFocus;
  function open() {
    previousFocus = document.activeElement;
    panel.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    const close = panel.querySelector('.panel-close');
    if (close) close.focus();
    seen = new Set([...seen, ...entries.map((item) => item.id)]);
    try { localStorage.setItem(KEY, JSON.stringify([...seen])); } catch (e) { /* 忽略 */ }
    syncBadge();
  }
  function close() {
    panel.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    (previousFocus || trigger).focus();
  }

  trigger.addEventListener('click', () => (panel.hidden ? open() : close()));
  const closeBtn = panel.querySelector('.panel-close');
  if (closeBtn) closeBtn.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (panel.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); }
  });

  window.addEventListener('storage', (e) => {
    if (e.key !== KEY) return;
    try {
      const data = JSON.parse(e.newValue);
      seen = new Set(Array.isArray(data) ? data : []);
    } catch (err) { seen = new Set(); }
    syncBadge();
  });
})();
