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
    
    // 相对时间计算
    function timeAgo(dateStr) {
      const now = new Date();
      const past = new Date(dateStr);
      const diffMs = now - past;
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);
      const diffDays = Math.floor(diffMs / 86400000);
      
      if (diffMins < 1) return '刚刚';
      if (diffMins < 60) return `${diffMins} 分钟前`;
      if (diffHours < 24) return `${diffHours} 小时前`;
      if (diffDays < 7) return `${diffDays} 天前`;
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} 周前`;
      return dateStr; // 超过 30 天显示原始日期
    }
    
    list.innerHTML = ANNOUNCEMENTS.map(a => {
      const typeLabel = a.type === 'newsite' ? '新站点' : a.type === 'update' ? '更新' : '通知';
      const typeClass = a.type === 'newsite' ? 'new' : a.type === 'update' ? 'update' : 'notice';
      const relativeTime = timeAgo(a.date);
      return `
        <div class="announcement-item" data-id="${a.id}">
          <div class="announcement-header">
            <span class="announcement-type ${typeClass}">${typeLabel}</span>
            <span class="announcement-date">${relativeTime}${relativeTime === a.date ? '' : ' · ' + a.date}</span>
          </div>
          <h3 class="announcement-title">${a.title}</h3>
          <div class="announcement-content">${a.content}</div>
        </div>
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
  const closeBtn = document.getElementById('closeAnnouncement');
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
