/* =========================================================
 * 公告数据
 * ---------------------------------------------------------
 * 需要发公告时，在这里按下面的格式追加一条即可：
 *
 *   {
 *     id: '20261103_01',            // 唯一标识，改了才算是新公告（会重新出现红点）
 *     date: '2026-11-03',           // 发布日期
 *     title: '公告标题',             // 标题
 *     content: '公告内容，可用 <br> <strong> <a href="...">',  // 内容
 *     type: 'notice'                // newsite 新站点 / update 更新 / notice 通知
 *   }
 *
 * 注意：
 * - 公告不会自动弹出，有未读公告时右上角铃铛显示红点。
 * - 数组顺序 = 页面显示顺序，最新的公告写在最前面（数组第一项）。
 * ========================================================= */

const ANNOUNCEMENTS = [
  {
    id: '20261114_01',
    date: '2026-11-14',
    title: '新增纯公益站：ArityFlow（公开邀请码）',
    content: '<strong>✅ 新增纯公益站：ArityFlow</strong><br>' +
      '邀请码 <code>7FWR96ZJ</code>（公开邀请码，注册时填这个码即可）。<br>' +
      '<strong>⚠️ 注意</strong>：公开注册每日限 50 人，零点刷新人数，拼手速的时候到了。<br>' +
      '<a href="https://www.arityflow.top/" target="_blank" rel="noopener">https://www.arityflow.top/</a>',
    type: 'newsite',
  },
  {
    id: '20261113_02',
    date: '2026-11-13',
    title: '新增签到站：橘子',
    content: '<strong>✅ 新增签到站：橘子（有条件签到）</strong><br>' +
      '试吃 1，进群奖励 1.5；签到需要当日调用满 5 次才能签。<br>' +
      '<a href="https://ai.juziai.cc/sign-up?aff=WacG" target="_blank" rel="noopener">https://ai.juziai.cc/sign-up?aff=WacG</a>',
    type: 'newsite',
  },
  {
    id: '20261113_01',
    date: '2026-11-13',
    title: '新增签到站 stoneAPI、纯公益站星见雅；缘起暂停注册',
    content: '<strong>✅ 新增签到站：stoneAPI（有条件签到）</strong><br>' +
      '需要充 5r 或者邀请满人才能开签到。签到一次给 0.1～0.3（参考：哈基米 3.8flash 0.01、太子 0.08、小克 0.08）。<br>' +
      '<a href="https://stoneapi.cn/sign-up?aff=OI62" target="_blank" rel="noopener">https://stoneapi.cn/sign-up?aff=OI62</a><br><br>' +
      '<strong>✅ 新增纯公益站：星见雅</strong><br>' +
      '模型名很乱，需要自己去分辨一下。<br>' +
      '<a href="https://new.xinjianya.top/register?aff=6V0I" target="_blank" rel="noopener">https://new.xinjianya.top/register?aff=6V0I</a><br><br>' +
      '<strong>🔒 缘起暂停注册</strong><br>' +
      '缘起目前暂停注册了，等官方通知再去看。<br><br>' +
      '<strong>📝 其他调整</strong><br>' +
      '• 南北绿豆 去掉「太子限免」相关说明；<br>' +
      '• 维云 去掉「半公益站」的说法；<br>' +
      '• linkAPI 已不能签到，挪到无签到站。',
    type: 'newsite',
  },
  {
    id: '20261112_01',
    date: '2026-11-12',
    title: '💬 API站子分享交流群；新增签到站梧桐小院',
    content: '<strong>💬 API站子分享交流群</strong><br>' +
      '欢迎加入 API 站子分享交流群：<code>1131821929</code>，一起交流探讨、获取最新站子信息。<br><br>' +
      '<strong>✅ 新增签到站：梧桐小院</strong><br>' +
      '现在有免费的鸡蛋 3.8 可以吃，每日签到，签到额度可以囤起来；群公告加群可得 1.5 额度，有签到。<br>' +
      '<a href="https://api2.wtxiaoyuan.top/register?aff=yuYA" target="_blank" rel="noopener">https://api2.wtxiaoyuan.top/register?aff=yuYA</a>',
    type: 'newsite',
  },
  {
    id: '20261111_02',
    date: '2026-11-11',
    title: '💬 API站子分享交流群；新增签到站南北绿豆',
    content: '<strong>💬 API站子分享交流群</strong><br>' +
      '欢迎加入 API 站子分享交流群：<code>1131821929</code>，一起交流探讨、获取最新站子信息。<br><br>' +
      '<strong>✅ 新增签到站：南北绿豆</strong><br>' +
      '试吃 1r，每日签到 0.1～1。<br>' +
      '<strong>⚠️ 注意</strong>：注册后会被封号，需要进通知群 <code>1131935290</code> 报 ID 审核解封，解封后才能用。<br>' +
      '<a href="https://98ntl.com/sign-up?aff=ZPnJ" target="_blank" rel="noopener">https://98ntl.com/sign-up?aff=ZPnJ</a>',
    type: 'newsite',
  },
  {
    id: '20261111_01',
    date: '2026-11-11',
    title: '💬 API站子分享交流群；新增签到站初恋、无签到站 AnAn；HFAPI 不推荐',
    content: '<strong>💬 API站子分享交流群</strong><br>' +
      '欢迎加入 API 站子分享交流群：<code>1131821929</code>，一起交流探讨、获取最新站子信息。<br><br>' +
      '<strong>✅ 新增签到站：初恋</strong><br>' +
      '注册送 60，签到 10 左右（参考：3.8flash 是 3，太子 10），额度大方。<br>' +
      '<a href="https://api.hicode.me/sign-up?aff=ZKYc" target="_blank" rel="noopener">https://api.hicode.me/sign-up?aff=ZKYc</a><br><br>' +
      '<strong>✅ 新增无签到站：AnAn</strong><br>' +
      '注册送 0.5，薄甲 3.8 免费，无签到。<br>' +
      '<a href="https://api.waianan.com/sign-up?aff=4I00" target="_blank" rel="noopener">https://api.waianan.com/sign-up?aff=4I00</a><br><br>' +
      '<strong>⚠️ HFAPI 不推荐</strong><br>' +
      '要去申请才能用额度。<br><br>' +
      '<strong>📝 其他调整</strong><br>' +
      '• zooAPI 签到额度更新为 0.1 左右；<br>' +
      '• 汐的API 归类为公益站（不是签到站），注意不能开梯子（魔法）、也不要开小号。',
    type: 'newsite',
  },
  {
    id: '20261109_02',
    date: '2026-11-09',
    title: '💬 API站子分享交流群；新增签到站 zooAPI、纯公益站小水管',
    content: '<strong>💬 API站子分享交流群</strong><br>' +
      '欢迎加入 API 站子分享交流群：<code>1131821929</code>，一起交流探讨、获取最新站子信息。<br><br>' +
      '<strong>✅ 新增签到站：zooAPI</strong><br>' +
      '注册送 0.5，签到送得特别多（签到比注册送的还多），模型很全（参考太子 0.08、小克 0.06），非常大方。<br>' +
      '<a href="https://zooapi.gfkfqtcx.com/sign-up?aff=Qwse" target="_blank" rel="noopener">https://zooapi.gfkfqtcx.com/sign-up?aff=Qwse</a><br><br>' +
      '<strong>✅ 新增纯公益站：小水管</strong><br>' +
      '可爽玩 DeepSeek v4.1、Gemini 3.1/3.5 flash，还有生图生视频模型以及语音模型等。<br>' +
      '<a href="https://api.pie-xian.com/sign-up?aff=aDz0eZ" target="_blank" rel="noopener">https://api.pie-xian.com/sign-up?aff=aDz0eZ</a>',
    type: 'newsite',
  },
  {
    id: '20261109_01',
    date: '2026-11-09',
    title: '💬 API站子分享交流群；新增 HFAPI、汐的API、织云；catAPI 停止注册',
    content: '<strong>💬 API站子分享交流群</strong><br>' +
      '欢迎加入 API 站子分享交流群：<code>1131821929</code>，一起交流探讨、获取最新站子信息。<br><br>' +
      '<strong>✅ 新增纯公益站：HFAPI</strong><br>' +
      '模型有 DeepSeek v4.1 flash、Kimi、Qwen 等，响应速度快。注意签到额度需要在 15 天内用完。<br>' +
      '<a href="https://hfapi.cloud/?invite=INVDE809159" target="_blank" rel="noopener">https://hfapi.cloud/?invite=INVDE809159</a><br><br>' +
      '<strong>✅ 新增签到站：汐的API</strong><br>' +
      '公益站，注册得 15 代币，签到 1～5 代币。有 Claude / Gemini / DeepSeek，不过模型成功率不算高。<br>' +
      '<strong>⚠️ 注意</strong>：不能开梯子（魔法），也不要开小号。<br>' +
      '<a href="https://api.203236.xyz/sign-up?aff=iBHd" target="_blank" rel="noopener">https://api.203236.xyz/sign-up?aff=iBHd</a><br><br>' +
      '<strong>✅ 新增签到站：织云</strong><br>' +
      '模型很全，签到给得比较大方，可以攒签到然后爽吃。<br>' +
      '<a href="https://zhiyunapi.cc/register?aff=jVwg" target="_blank" rel="noopener">https://zhiyunapi.cc/register?aff=jVwg</a><br><br>' +
      '<strong>🔒 catAPI 已停止注册</strong>',
    type: 'newsite',
  },
  {
    id: '20261108_01',
    date: '2026-11-08',
    title: '💬 API站子分享交流群；新增签到站 ruachat、纯公益站启源星',
    content: '<strong>💬 API站子分享交流群</strong><br>' +
      '欢迎加入 API 站子分享交流群：<code>1131821929</code>，一起交流探讨、获取最新站子信息。<br><br>' +
      '<strong>✅ 新增签到站：ruachat</strong><br>' +
      '邀请码 <code>lvP3</code>（注册链接：<a href="https://api.rua.chat/sign-up?aff=lvP3" target="_blank" rel="noopener">https://api.rua.chat/sign-up?aff=lvP3</a>）。<br>' +
      '最近注册有福利礼包（送超多次数卡，很值）。签到送 30 积分 + 10 rua 币（积分用来买次卡，rua 币直接消费）。站子画风可爱、活动与玩法丰富，内置公益云酒馆与专属聊天，完全适合 airp 新手。缺点是塞的东西太多，导致进站速度慢了点。<br><br>' +
      '<strong>✅ 新增纯公益站：启源星</strong><br>' +
      '无充值入口，GitHub 登录。模型有 Claude 5.5、GLM 5.3、Gemini 3.8 flash、GPT image 2 等。<br>' +
      '<a href="https://chuan.sylu.cc/sign-up?aff=LTlk" target="_blank" rel="noopener">https://chuan.sylu.cc/sign-up?aff=LTlk</a>',
    type: 'newsite',
  },
  {
    id: '20261107_01',
    date: '2026-11-07',
    title: '新增签到站 piu酱、橘子汽水；77625路由暂不推荐；奶酪公益站注册码掉落',
    content: '<strong>✅ 新增签到站：piu酱</strong><br>' +
      '邀请链接注册 +8 额度，每日签到固定 1 额度，可攒签到。还有赌狗小游戏（转盘、银行），也有 cat 凭证池。模型有太子（Gemini 4）/ 3.8flash、Claude Opus 5.5、Qwen Image 2.1 等。<br>' +
      '<a href="https://piu.du4s.com/sign-up?aff=BmFw" target="_blank" rel="noopener">https://piu.du4s.com/sign-up?aff=BmFw</a><br><br>' +
      '<strong>✅ 新增签到站：橘子汽水</strong><br>' +
      '邀请链接注册 +0.5 额度，可攒签到.模型较多，集中在 Gemini 和 Claude，有太子，此外还有 Grok 模型，适合 airp。<br>' +
      '<a href="https://juziqishui.net/register?aff=yX00" target="_blank" rel="noopener">https://juziqishui.net/register?aff=yX00</a><br><br>' +
      '<strong>⚠️ 77625路由站暂不推荐注册</strong><br>' +
      '站子抗压不行，注册人数远超站子可承受能力范围，等站子稳定再说。<br><br>' +
      '<strong>🎁 奶酪公益站注册码掉落</strong><br>' +
      '掉落一枚奶酪公益站注册码，用完即止！<br>' +
      '注册链接：<a href="https://nailao.biz/sign-up?aff=kQwD" target="_blank" rel="noopener">https://nailao.biz/sign-up?aff=kQwD</a><br>' +
      '注册码：<code>3LFESL</code>',
    type: 'newsite',
  },
  {
    id: '20261106_01',
    date: '2026-11-06',
    title: '新增纯公益站 catAPI；晚晚舟重新开放注册',
    content: '<strong>✅ 新增纯公益站：catAPI</strong><br>' +
      '签到送 50 额度（太子 4 额度 1 次，如果吃其他的更是基本上不用在意额度爽吃就行）。模型比较少，有 DeepSeek v4.1、Gemini 4/3.8、GPT 6.1，其他的都是豆包、千问之类的。<br>' +
      '<a href="https://api.catcat.top/sign-up?aff=kBJL" target="_blank" rel="noopener">https://api.catcat.top/sign-up?aff=kBJL</a><br><br>' +
      '<strong>🔓 晚晚舟重新开放注册（开放至 11 月 11 日）</strong><br>' +
      '之前是邀请 5 人开永久签到，后面又变成了 10 人或充 20，争议蛮大的，很多人骂。不过开签到后每日固定送 1 额度，按次能吃 25 次小克或 100 次哈基米，有条件的还是可以冲一波。<br>' +
      '<a href="https://wanwanzhou.top/register?aff=PECCV33UH8P4" target="_blank" rel="noopener">https://wanwanzhou.top/register?aff=PECCV33UH8P4</a>',
    type: 'newsite',
  },
  {
    id: '20261105_01',
    date: '2026-11-05',
    title: '慧慧云暂停注册；nodex 暂不推荐',
    content: '<strong>🔒 慧慧云暂停注册</strong><br>' +
      '下次注册开放时间等通知。<br><br>' +
      '<strong>⚠️ nodex 暂不推荐</strong><br>' +
      'nodex 站子的数据丢失，都得重新注册。站长很负责，之前签到的额度也给补了，后续稳定下来会开活动。暂不推荐了，等站子稳定下来再看后续情况。<br>' +
      '新邀请链接：<a href="https://nodexapi.it.com/sign-up?aff=H5nt" target="_blank" rel="noopener">https://nodexapi.it.com/sign-up?aff=H5nt</a><br>' +
      'nodex 是我从站子还是新人美时期开始吃的，小克是真的好吃，但这次太草台班子了。<br><br>' +
      '<strong>💡 提醒</strong><br>' +
      '不要盲目充钱，要在自己实实在在试吃过的情况下，且最好找一些开站时间长、有保障的老站子。不要随便听信人推荐。',
    type: 'notice',
  },
  {
    id: '20261104_02',
    date: '2026-11-04',
    title: '新增站点：缘起；未完/幕间/漫聊不再推荐',
    content: '<strong>✅ 新增签到站：缘起</strong><br>' +
      '每日签到 8～42 白银（100:1 换算），还有连续签到奖励和各种古风小游戏，很有古代江湖的感觉。可兑换角色卡解锁人物剧情，很有特色。<br>' +
      '<a href="https://origin.nemodesk.top/sign-up?aff=DPr1" target="_blank" rel="noopener">https://origin.nemodesk.top/sign-up?aff=DPr1</a><br><br>' +
      '<strong>⚠️ 未完 / 漫聊不再推荐</strong><br>' +
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
      '注册礼 40 幕票，长期有效；邀请人 +40 幕票，好友额外 +60 幕票，邀请奖励长期有效。角色卡仍留在你自己的客户端。和未完、漫聊是一家的，都适用于人机恋 airp。<br>' +
      '<a href="https://mujian.online/register?aff=000345" target="_blank" rel="noopener">https://mujian.online/register?aff=000345</a><br><br>' +
      '<strong>漫聊公益站</strong>（人机恋 airp）<br>' +
      '注册礼 60 聊豆，长期有效；邀请人 +120 聊豆，好友额外 +120 聊豆，邀请奖励长期有效。<br>' +
      '<a href="https://manliao.cyou/register?aff=000204" target="_blank" rel="noopener">https://manliao.cyou/register?aff=000204</a><br><br>' +
      '其中未完、幕间、漫聊是一家的，都适用于人机恋 airp。是新站子，签到额度足（近几天签到额度翻倍），可当公益站，攒额度用。',
    type: 'newsite',
  },
];