/* =========================================================
 * 公告 & 通知逻辑（弹窗提醒、未读红点、公告列表）
 * ========================================================= */

(function () {
  'use strict';

  const NOTIF_KEY = 'api-sites-seen-announcements';
  let seenIds = [];

  try {
    const stored = localStorage.getItem(NOTIF_KEY);
    if (stored) seenIds = JSON.parse(stored);
  } catch (e) { /* 隐私模式下忽略 */ }

  // 保存已读公告列表
  function saveSeen() {
    try {
      localStorage.setItem(NOTIF_KEY, JSON.stringify(seenIds));
    } catch (e) { /* 隐私模式下忽略 */ }
  }

  // 标记公告已读
  function markSeen(id) {
    if (!seenIds.includes(id)) {
      seenIds.push(id);
      saveSeen();
    }
    updateBadge();
  }

  // 更新小红点
  function updateBadge() {
    const badge = document.getElementById('announcementBadge');
    if (!badge) return;
    const unread = ANNOUNCEMENTS.filter(a => !seenIds.includes(a.id)).length;
    badge.hidden = unread === 0;
    badge.textContent = unread > 9 ? '9+' : String(unread);
  }

  // 渲染公告列表（最新的在最上面）
  function renderAnnouncements() {
    const list = document.getElementById('announcementList');
    if (!ANNOUNCEMENTS || ANNOUNCEMENTS.length === 0) {
      list.innerHTML = '<p style="text-align:center; color:#999; padding:2rem;">暂无公告</p>';
      return;
    }
    
    list.innerHTML = ANNOUNCEMENTS.map(a => {
      return `
        <article class="announcement-entry">
          <time>${a.date}</time>
          <h4>${a.title}</h4>
          <div>${a.content || ''}</div>
        </article>
      `;
    }).join('');
  }

  // 打开公告面板
  function openAnnouncements() {
    const panel = document.getElementById('announcementPanel');
    if (!panel) return;
    panel.hidden = false;
    renderAnnouncements();
    // 打开面板时标记所有公告已读（不管有没有滚动到）
    ANNOUNCEMENTS.forEach(a => markSeen(a.id));
  }

  // 关闭公告面板
  function closeAnnouncements() {
    const panel = document.getElementById('announcementPanel');
    if (!panel) return;
    panel.hidden = true;
  }

  // 绑定事件
  const btn = document.getElementById('announcementBtn');
  const closeBtn = document.querySelector('.panel-close');
  const panel = document.getElementById('announcementPanel');

  if (btn) btn.addEventListener('click', openAnnouncements);
  if (closeBtn) closeBtn.addEventListener('click', closeAnnouncements);
  if (panel) {
    panel.addEventListener('click', (e) => {
      if (e.target === panel) closeAnnouncements();
    });
  }

  // 初始化
  updateBadge();
})();
