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
    id: '20261125_03',
    date: '2026-11-25',
    title: '移除 zooAPI；AnAn 明天中午 12:00 停止注册；nodex 暂停注册',
    content: '<strong>📝 移除站子：zooAPI</strong><br>' +
      'zooAPI 已从合集中删除，不再收录。<br><br>' +
      '<strong>⏰ AnAn 明天中午 12:00 停止注册</strong><br>' +
      '11 月 26 日中午 12:00 停止注册，<strong>很好吃</strong>，没注册的可以先注册着！<br>' +
      '<a href="https://api.waianan.com/sign-up?aff=4I00" target="_blank" rel="noopener">https://api.waianan.com/sign-up?aff=4I00</a><br><br>' +
      '<strong>🔒 nodex 暂停注册</strong><br>' +
      'nodex 目前暂停注册，等恢复后再看后续情况。',
    type: 'update',
  },
  {
    id: '20261125_01',
    date: '2026-11-25',
    title: '新增签到站：卡扣',
    content: '<strong>✅ 新增签到站：卡扣（有条件签到）</strong><br>' +
      '注册赠送 0.36 元；需在<strong>电脑上第一次安装【卡扣AI 管家】客户端</strong>并注册登录，登录后使用 1 次 AI 服务（例如连接 Codex 后调用一次）可获得 <strong>5 元额度</strong>。<br>' +
      '签到：网页签到 0.15，客户端签到 0.3。<br>' +
      '<strong>⚠️ 注意</strong>：这家不能破限，剧情向 RP 可以。<br>' +
      '<a href="https://kakouai.com/register?aff=HGCT5SXZS2J6" target="_blank" rel="noopener">https://kakouai.com/register?aff=HGCT5SXZS2J6</a>',
    type: 'newsite',
  },
  {
    id: '20261124_02',
    date: '2026-11-24',
    title: '新增签到站：玖时',
    content: '<strong>✅ 新增签到站：玖时（有条件签到）</strong><br>' +
      '注册送 1，累计充值 2 可开签到。<br>' +
      '参考价格：4h 0.04、k克 0.195、3.8flash 0.038。<br>' +
      '<a href="https://api.jiushi.xin/register?aff=wjtg" target="_blank" rel="noopener">https://api.jiushi.xin/register?aff=wjtg</a>',
    type: 'newsite',
  },
  {
    id: '20261124_01',
    date: '2026-11-24',
    title: '新增签到站 初雪 / 双子星',
    content: '<strong>✅ 新增签到站：初雪</strong><br>' +
      '注册送 2.5，有签到（刚签到是 0.49）。开业福利：4a / 3.8flash 0.08，新站子。<br>' +
      '<a href="https://thefirstsnow.top/sign-up?aff=i0Y7" target="_blank" rel="noopener">https://thefirstsnow.top/sign-up?aff=i0Y7</a><br><br>' +
      '<strong>✅ 新增签到站：双子星</strong><br>' +
      '注册送 30 额度 + 50 次模型使用（50 次 7 天内有效），每天登录送 5 次次数；只有哈基米（比例 1:10），有抗截断模型。参考价格：3.8 是 0.02、太子 0.4。<br>' +
      '<a href="https://www.onemodel8.com/register?invite=53441909" target="_blank" rel="noopener">https://www.onemodel8.com/register?invite=53441909</a>',
    type: 'newsite',
  },
  {
    id: '20261123_03',
    date: '2026-11-23',
    title: '站点调整：神秘的酒馆改为充值才开签到、卡皮巴拉取消签到',
    content: '<strong>📝 神秘的酒馆（改为有条件签到）</strong><br>' +
      '注册 1，现在需要<strong>充值任意金额才能开启签到</strong>，签到 0～1，给的还挺多（参考：k克 0.25，哈基米 0.0125）。<br>' +
      '<a href="https://hb.dockerspeeds.asia/sign-up?aff=rjz6" target="_blank" rel="noopener">https://hb.dockerspeeds.asia/sign-up?aff=rjz6</a><br><br>' +
      '<strong>📝 卡皮巴拉（取消签到，挪到无签到站）</strong><br>' +
      '现在没有签到了，注册送 2。<br>' +
      '<a href="https://kapibala.asia/sign-up?aff=uBiO" target="_blank" rel="noopener">https://kapibala.asia/sign-up?aff=uBiO</a>',
    type: 'update',
  },
  {
    id: '20261123_02',
    date: '2026-11-23',
    title: '新增无签到站：A6Api',
    content: '<strong>✅ 新增无签到站：A6Api</strong><br>' +
      '注册送 0.1 额度，无签到；<strong>模型非常多（3000+ 个）</strong>，渠道也多，挑模型能挑花眼。<br>' +
      '参考价格：3.8flash 0.02、4h 0.09、小克最低 0.0015。<br>' +
      '<a href="https://a6api.ai/?auth=register&aff=dRIQ" target="_blank" rel="noopener">https://a6api.ai/?auth=register&aff=dRIQ</a>',
    type: 'newsite',
  },
  {
    id: '20261123_01',
    date: '2026-11-23',
    title: '新增签到站 萨摩耶 / 小雨；waner～签到额度更新',
    content: '<strong>✅ 新增签到站：萨摩耶</strong><br>' +
      '走邀请进群绑定领试吃 1（群号 <code>727231938</code>）；签到额度是递增的，今天 0.02、明天 0.04 这样。活动期间价格：4a 0.06，3.8 0.008，4n 0.06，4h 0.04。<br>' +
      '<a href="https://samoyeye.com/sign-up?aff=YNqN" target="_blank" rel="noopener">https://samoyeye.com/sign-up?aff=YNqN</a><br><br>' +
      '<strong>✅ 新增签到站：小雨（有条件签到）</strong><br>' +
      '注册送 1，有签到；昨日用满 0.5 今日可签到。参考：小克 0.2、3.8flash 0.012、4 是 0.11。<br>' +
      '<a href="https://mixed.strai.life/sign-up?aff=Cfsi" target="_blank" rel="noopener">https://mixed.strai.life/sign-up?aff=Cfsi</a><br><br>' +
      '<strong>📝 waner～（爱玩）更新</strong><br>' +
      '签到额度实测 0.9 左右；签到只能用 free 分组，free 分组有哈基米 3.8flash/4n 和 4h。<br>' +
      '<a href="https://api.aiwanai.cc/sign-up?aff=tnZg" target="_blank" rel="noopener">https://api.aiwanai.cc/sign-up?aff=tnZg</a><br><br>' +
      '<strong>📝 标注调整</strong><br>' +
      '需要绑定 QQbot 才能签到的站子，不再标「有条件签到」，直接写「绑定 QQbot 签到」。',
    type: 'newsite',
  },
  {
    id: '20261122_04',
    date: '2026-11-22',
    title: '新增签到站 waner～（爱玩）、无签到站 51；易辞寻更换为风辞云',
    content: '<strong>✅ 新增签到站：waner～（爱玩）</strong><br>' +
      '注册 2，有签到；签到额度只能用 free 分组，free 分组里有哈基米 3.8flash/4n 和 4h。<br>' +
      '<a href="https://api.aiwanai.cc/sign-up?aff=tnZg" target="_blank" rel="noopener">https://api.aiwanai.cc/sign-up?aff=tnZg</a><br><br>' +
      '<strong>✅ 新增无签到站：51</strong><br>' +
      '新站子，注册送 3，无签到；适合酒馆新手，提供详细教学和帮助。<br>' +
      '<a href="https://51ai.io/register?aff=RKY89T7HJPSF" target="_blank" rel="noopener">https://51ai.io/register?aff=RKY89T7HJPSF</a><br><br>' +
      '<strong>📝 站子更换：易辞寻 → 风辞云</strong><br>' +
      '易辞寻站子已废弃，换成了风辞云：注册送 12.5，签到区间 ¥0.10 - ¥0.60，连续 7 天额外 ¥0.50。<br>' +
      '<a href="https://ezch.xydaim.cn/register?aff=7UHPDFVCTFY5" target="_blank" rel="noopener">https://ezch.xydaim.cn/register?aff=7UHPDFVCTFY5</a>',
    type: 'newsite',
  },
  {
    id: '20261122_03',
    date: '2026-11-22',
    title: '站点更新：Ainzy 改名云猫，改为签到站',
    content: '<strong>📝 云猫（原 Ainzy）</strong><br>' +
      '之前的无签到站 Ainzy 改名为云猫，现在是签到站：需充任意金额才能开启签到，进群 <code>314058103</code> 绑定签到。<br>' +
      '新链接：<a href="https://hk.ainzy.net/sign-up?aff=zJec" target="_blank" rel="noopener">https://hk.ainzy.net/sign-up?aff=zJec</a><br>' +
      '<strong>⚠️ 注意</strong>：进不去可开梯。',
    type: 'update',
  },
  {
    id: '20261122_02',
    date: '2026-11-22',
    title: '新增签到站 she / 易辞寻',
    content: '<strong>✅ 新增签到站：she</strong><br>' +
      '注册送 1，有签到。<br>' +
      '<a href="https://www.sheapi.top/sign-up?aff=c0ta" target="_blank" rel="noopener">https://www.sheapi.top/sign-up?aff=c0ta</a><br><br>' +
      '<strong>✅ 新增签到站：易辞寻</strong><br>' +
      '进群 <code>1135761090</code>；进不去可开梯。（现已废弃，换成风辞云）<br>' +
      '<a href="https://acf.xydaim.cn/sign-up?aff=ImRx" target="_blank" rel="noopener">https://acf.xydaim.cn/sign-up?aff=ImRx</a>',
    type: 'newsite',
  },
  {
    id: '20261122_01',
    date: '2026-11-22',
    title: '新增签到站 炉边酒馆 / 灰白云、无签到站 dsh / 芝士',
    content: '<strong>✅ 新增签到站：炉边酒馆</strong><br>' +
      '注册给 12，有签到（参考：Gemini4a 一次 0.02）。<br>' +
      '<a href="https://pub.els.edu.rs/sign-up?aff=oGkg" target="_blank" rel="noopener">https://pub.els.edu.rs/sign-up?aff=oGkg</a><br><br>' +
      '<strong>✅ 新增签到站：灰白云</strong><br>' +
      '邀请链接注册 1.5，每日签到固定 1，连签三天 +0.88。<br>' +
      '<a href="https://apis.yinlvai.cn/auth/register?code=wQcGHuoQ" target="_blank" rel="noopener">https://apis.yinlvai.cn/auth/register?code=wQcGHuoQ</a><br><br>' +
      '<strong>✅ 新增无签到站：dsh</strong><br>' +
      '无签到，国模，可当 Coding 用，送 0.1（1000 万 token）。<br>' +
      '<a href="https://dshapi.icu/register?aff=3X6CS4Y9LLLD" target="_blank" rel="noopener">https://dshapi.icu/register?aff=3X6CS4Y9LLLD</a><br><br>' +
      '<strong>✅ 新增无签到站：芝士</strong><br>' +
      '注册送 100 额度（10 比 1），无签到。<br>' +
      '<a href="https://zh1shi.top/register?aff=XHCK32YGE2VQ" target="_blank" rel="noopener">https://zh1shi.top/register?aff=XHCK32YGE2VQ</a>',
    type: 'newsite',
  },
  {
    id: '20261121_02',
    date: '2026-11-21',
    title: '新增签到站 mq / 卡皮巴拉',
    content: '<strong>✅ 新增签到站：mq</strong><br>' +
      '0.5 试吃，有签到。<br>' +
      '<a href="https://modelmq.top/sign-up?aff=SCcg" target="_blank" rel="noopener">https://modelmq.top/sign-up?aff=SCcg</a><br><br>' +
      '<strong>✅ 新增签到站：卡皮巴拉（有条件签到）</strong><br>' +
      '注册送 2，充任意金额开启签到。（现已取消签到，挪到无签到站）<br>' +
      '<a href="https://kapibala.asia/sign-up?aff=uBiO" target="_blank" rel="noopener">https://kapibala.asia/sign-up?aff=uBiO</a>',
    type: 'newsite',
  },
  {
    id: '20261121_01',
    date: '2026-11-21',
    title: '新增签到站 神秘的酒馆、无签到站 一枝春 / kevo；castorice 更正、长春叙链接更换',
    content: '<strong>✅ 新增签到站：神秘的酒馆</strong><br>' +
      '注册 1，签到 0～1，给的还挺多（参考：k克 0.25，哈基米 0.0125）。（现已改为充值任意金额才开签到）<br>' +
      '<a href="https://hb.dockerspeeds.asia/sign-up?aff=rjz6" target="_blank" rel="noopener">https://hb.dockerspeeds.asia/sign-up?aff=rjz6</a><br><br>' +
      '<strong>✅ 新增无签到站：一枝春</strong><br>' +
      '进群 <code>1127296762</code>，绑定送 2 额度；无签到。<br>' +
      '<a href="https://yizhichun.online/register?aff=WYATWF3CN364" target="_blank" rel="noopener">https://yizhichun.online/register?aff=WYATWF3CN364</a><br><br>' +
      '<strong>✅ 新增无签到站：kevo</strong><br>' +
      '注册送 1，无签到。<br>' +
      '<a href="https://ai.xiaowumin.top/sign-up?aff=uGc9" target="_blank" rel="noopener">https://ai.xiaowumin.top/sign-up?aff=uGc9</a><br><br>' +
      '<strong>📝 其他调整</strong><br>' +
      '• castorice 更正为无签到、也无试吃；<br>' +
      '• 长春叙 邀请链接换为 <a href="https://changchunxu.si/sign-up?aff=nS1O" target="_blank" rel="noopener">https://changchunxu.si/sign-up?aff=nS1O</a>。',
    type: 'newsite',
  },
  {
    id: '20261120_01',
    date: '2026-11-20',
    title: '新增签到站 myapi公益 / 小黑、无签到站 castorice',
    content: '<strong>✅ 新增签到站：myapi公益</strong><br>' +
      '注册 100 额度，群内绑定签到（群号 <code>714847682</code>），无哈基米。<br>' +
      '<a href="http://free.myaiapi.site:8080/register?aff=8SCF87TCJUTM" target="_blank" rel="noopener">http://free.myaiapi.site:8080/register?aff=8SCF87TCJUTM</a><br><br>' +
      '<strong>✅ 新增签到站：小黑</strong><br>' +
      '无试吃有签到，需开梯子；邀请码 <code>rBsw</code>。可在群公告找到微信群进入，让站长调特惠分组。<br>' +
      '<a href="https://api.xiaoheiapi.com/sign-up?aff=rBsw" target="_blank" rel="noopener">https://api.xiaoheiapi.com/sign-up?aff=rBsw</a><br><br>' +
      '<strong>✅ 新增无签到站：castorice</strong><br>' +
      '无签到，也无试吃。<br>' +
      '<a href="https://castorice.shop/sign-up?aff=e31g" target="_blank" rel="noopener">https://castorice.shop/sign-up?aff=e31g</a>',
    type: 'newsite',
  },
  {
    id: '20261119_01',
    date: '2026-11-19',
    title: '新增签到站 稳稳 / 狸猫 / 北洛 / 好梦 / 大米饭 / 薯条、无签到站 芋头饭；缘起改有条件签到、悠米暂停注册、nodex 活动',
    content: '<strong>✅ 新增签到站：稳稳</strong><br>' +
      '注册送 2，有签到；连续签到第 7 天 ¥1、第 15 天 ¥2.5、第 30 天起每 30 天 ¥5。<br>' +
      '<a href="https://wenwenapi.top/sign-up?aff=wJM0" target="_blank" rel="noopener">https://wenwenapi.top/sign-up?aff=wJM0</a><br><br>' +
      '<strong>✅ 新增签到站：狸猫</strong><br>' +
      '注册送 1，签到 0.05 左右。<br>' +
      '<a href="https://limao-api.com/sign-up?aff=doRB" target="_blank" rel="noopener">https://limao-api.com/sign-up?aff=doRB</a><br><br>' +
      '<strong>✅ 新增签到站：北洛</strong><br>' +
      '无试吃，签到 0.01～0.10；连续签到 7 天额外领取 $0.20～$0.30 随机额度。<br>' +
      '<a href="https://beiluoxi.xyz/register?aff=H23LNS4B3PLA" target="_blank" rel="noopener">https://beiluoxi.xyz/register?aff=H23LNS4B3PLA</a><br><br>' +
      '<strong>✅ 新增签到站：好梦（有条件签到）</strong><br>' +
      '当日消耗满 5 额度即可签到领奖。<br>' +
      '<a href="https://goodreamapi.online/register?aff=goAz" target="_blank" rel="noopener">https://goodreamapi.online/register?aff=goAz</a><br><br>' +
      '<strong>✅ 新增签到站：大米饭</strong><br>' +
      '注册送 2，签到 0.06 左右。<br>' +
      '<a href="https://damifan.xyz/sign-up?aff=UWRT" target="_blank" rel="noopener">https://damifan.xyz/sign-up?aff=UWRT</a><br><br>' +
      '<strong>✅ 新增签到站：薯条</strong><br>' +
      '注册送 0.88，用邀请码额外加 0.66；签到 0.15。每日 22:00–23:00 名称带「公益-」的模型限免，有 DeepSeek v4.1 flash 和 GLM 5.3 flash，参考小克 0.05（无哈基米模型）。<br>' +
      '<a href="https://leepdszz.top/sign-up?aff=e1GJ" target="_blank" rel="noopener">https://leepdszz.top/sign-up?aff=e1GJ</a><br><br>' +
      '<strong>✅ 新增无签到站：芋头饭</strong><br>' +
      '注册送 150，参考 gemini-4h / 3.8flash 一次 4、小克 35 一次。<br>' +
      '<a href="https://api2.yutou.fun/sign-up?aff=1cSH" target="_blank" rel="noopener">https://api2.yutou.fun/sign-up?aff=1cSH</a><br><br>' +
      '<strong>📝 其他调整</strong><br>' +
      '• 缘起 改成有条件签到，签到额度变为黄铜代币，需当天花完；<br>' +
      '• 悠米 暂停注册；<br>' +
      '• nodex 活动：11 月 18 号～20 号晚 8 点～11 点，太子全系列 + 3.8flash 0.02 一次调用。',
    type: 'newsite',
  },
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
      '无充值入口，GitHub 登录。模型有 the model、GLM 5.3、Gemini 3.8 flash、GPT image 2 等。<br>' +
      '<a href="https://chuan.sylu.cc/sign-up?aff=LTlk" target="_blank" rel="noopener">https://chuan.sylu.cc/sign-up?aff=LTlk</a>',
    type: 'newsite',
  },
  {
    id: '20261107_01',
    date: '2026-11-07',
    title: '新增签到站 piu酱、橘子汽水；奶酪公益站注册码掉落',
    content: '<strong>✅ 新增签到站：piu酱</strong><br>' +
      '邀请链接注册 +8 额度，每日签到固定 1 额度，可攒签到。还有赌狗小游戏（转盘、银行），也有 cat 凭证池。模型有太子（Gemini 4）/ 3.8flash、the model 5.5、Qwen Image 2.1 等。<br>' +
      '<a href="https://piu.du4s.com/sign-up?aff=BmFw" target="_blank" rel="noopener">https://piu.du4s.com/sign-up?aff=BmFw</a><br><br>' +
      '<strong>✅ 新增签到站：橘子汽水</strong><br>' +
      '邀请链接注册 +0.5 额度，可攒签到.模型较多，集中在 Gemini 和 Claude，有太子，此外还有 Grok 模型，适合 airp。<br>' +
      '<a href="https://juziqishui.net/register?aff=yX00" target="_blank" rel="noopener">https://juziqishui.net/register?aff=yX00</a><br><br>' +
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
      '之前是邀请 5 人开永久签到，后面又变成了 10 人或充 20，争议蛮大的，很多人骂。不过开签到后每日固定送 1 额度，按次能吃 25 次小克或 100 次哈基米，按量会更划算，有条件的还是可以冲一波。<br>' +
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