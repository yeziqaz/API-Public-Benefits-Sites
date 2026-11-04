/* =========================================================
 * 公告数据
 * ---------------------------------------------------------
 * 需要发公告时，在这里按下面的格式追加一条即可：
 *
 *   {
 *     id: '20261103_01',            // 唯一标识，改了才算是新公告（会重新弹一次）
 *     date: '2026-11-03',           // 发布日期
 *     title: '公告标题',             // 标题
 *     content: '公告内容，可用 <br> <strong> <a href="...">',  // 内容
 *     type: 'notice'                // newsite 新站点 / update 更新 / notice 通知
 *   }
 *
 * 注意：
 * - 公告只在「首次出现」时自动弹一次，之后一直能在右上角通知里查看。
 * - 数组顺序 = 页面显示顺序，最新的公告写在最前面（数组第一项）。
 * ========================================================= */

const ANNOUNCEMENTS = [
  {
    id: '20261104_02',
    date: '2026-11-04',
    title: '新增站点：缘起；未完/幕间/漫聊不再推荐',
    content: '<strong>✅ 新增签到站：缘起</strong><br>' +
      '每日签到 8～42 白银（100:1 换算），还有连续签到奖励和各种古风小游戏，很有古代江湖的感觉。可兑换角色卡解锁人物剧情，很有特色。<br>' +
      '<a href="https://origin.nemodesk.top/sign-up?aff=DPr1" target="_blank" rel="noopener">https://origin.nemodesk.top/sign-up?aff=DPr1</a><br><br>' +
      '<strong>⚠️ 未完 / 幕间 / 漫聊不再推荐</strong><br>' +
      '签到额度只能当日使用无法攒签到，且主要是模型蠢蠢的，不再推荐。',
    type: 'update',
  },
  {
    id: '20261104_01',
    date: '2026-11-04',
    title: '新增 4 个站子：未完 / 悠米 / 幕间 / 漫聊',
    content: '<strong>未完公益站</strong>（人机恋 airp）<br>' +
      '注册礼 40 点，长期有效；邀请人 +60 点，好友额外 +60 点，邀请奖励长期有效。<br>' +
      '<a href="https://weiwan.me/register?aff=000444" target="_blank" rel="noopener">https://weiwan.me/register?aff=000444</a><br><br>' +
      '<strong>悠米</strong>（仅 airp，人机恋）<br>' +
      '签到需要加 QQ 群；可在站内调整预设，且已有小手机、酒馆预设。<br>' +
      '<a href="https://meeyo.org/register?ref=REF007786" target="_blank" rel="noopener">https://meeyo.org/register?ref=REF007786</a><br><br>' +
      '<strong>幕间公益站</strong>（人机恋 airp）<br>' +
      '注册礼 40 幕票，长期有效；邀请人 +40 幕票，好友额外 +60 幕票，邀请奖励长期有效。角色卡仍留在你自己的客户端。<br>' +
      '<a href="https://mujian.online/register?aff=000345" target="_blank" rel="noopener">https://mujian.online/register?aff=000345</a><br><br>' +
      '<strong>漫聊公益站</strong>（人机恋 airp）<br>' +
      '注册礼 60 聊豆，长期有效；邀请人 +120 聊豆，好友额外 +120 聊豆，邀请奖励长期有效。<br>' +
      '<a href="https://manliao.cyou/register?aff=000204" target="_blank" rel="noopener">https://manliao.cyou/register?aff=000204</a><br><br>' +
      '其中未完、幕间、漫聊是一家的，都适用于人机恋 airp。是新站子，签到额度足（近几天签到额度翻倍），可当公益站，攒额度用。',
    type: 'newsite',
  },
];
