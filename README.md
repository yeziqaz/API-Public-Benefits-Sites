# API公益站合集（2026）

> 2026 年 **公益站 / 半公益站** 可用合集（推荐）
> 持续收集、整理、检测可用的 API 公益站 / 中转站，适用于日常聊天，也可以接入 Codex / Claude Code 等工具。

**关键词**：公益站、半公益站、API公益站、中转站、API中转站、免费API、AI中转站、OpenAI API、Claude API、Gemini API、Codex、Claude Code、2026

---

## 📌 适用范围

- 💬 **日常聊天**：接入 ChatGPT-Next-Web、LobeChat、Cherry Studio、ChatBox 等客户端
- 🧑‍💻 **编程工具**：可接入 Codex、Claude Code 等 AI 编程工具
- 🔌 **通用调用**：大多兼容 OpenAI 接口格式，填入 `Base URL` + `API Key` 即可使用

## 🏷️ 分类说明

**按适用场景分类：**

| 分类 | 说明 |
| --- | --- |
| 🌐 全能站 | 日常聊天 + Coding（Codex / Claude Code）都能用 |
| 🧑‍💻 纯 Coding 站 | 只适用于 Codex / Claude Code 等编程工具 |
| 💬 日常聊天站 | 只能日常聊天，不适合 Coding |

**按站点性质标注：**

| 类型 | 说明 |
| --- | --- |
| 🟢 公益站 | 完全免费，通常通过注册、签到或社区账号登录获取额度 |
| 🟡 半公益站 | 有免费额度 / 签到额度，也提供付费充值或订阅 |

> 状态说明：✅ 可用　⚠️ 不稳定 / 需排队 / 需错峰　❌ 已失效

## 📋 站点目录

- [🌐 全能站（日常聊天 + Coding）](#-全能站日常聊天--coding)
  - [维云](#维云)
- [🧑‍💻 纯 Coding 站（Codex / Claude Code）](#-纯-coding-站codex--claude-code)
  - [AnyRouter](#anyrouter)
  - [ShareChat](#sharechat)
- [💬 日常聊天站](#-日常聊天站)

---

## 🌐 全能站（日常聊天 + Coding）

| 站点名称 | 性质 | 日常聊天 | Coding | 每日签到 | 注册方式 | 状态 | 最后检查 |
| --- | --- | :---: | :---: | :---: | --- | :---: | --- |
| [维云](#维云) | 🟡 半公益 | ✅ | ✅ | ✅ | GitHub / Google | ✅ | 2026-10-26 |

### 维云

- **注册链接**：https://vsllm.cc/register?aff=GT3Z
- **注册限制**：需使用 **GitHub** 或 **Google** 账号注册
- **适用范围**：日常聊天 ✅　Coding ✅（适用范围广，适配多种格式接入）
- **模型**：Claude / Gemini / GPT / Grok / DeepSeek / MiniMax / Kimi / GLM / Qwen 等，模型很全
- **福利**：
  - 每日签到 ✅：签到送一天订阅（5h 轮换）
  - 另有每日抽卡等额外配额可以拿
- **亮点**：响应快、新手友好，各大软件都有对应的接入教程

---

## 🧑‍💻 纯 Coding 站（Codex / Claude Code）

| 站点名称 | 性质 | Codex | Claude Code | 每日签到 | 注册方式 | 状态 | 最后检查 |
| --- | --- | :---: | :---: | :---: | --- | :---: | --- |
| [AnyRouter](#anyrouter) | 🟢 纯公益 | ✅ | ✅ | ✅ | GitHub / edu 邮箱 | ⚠️ 需错峰 | 2026-10-26 |
| [ShareChat](#sharechat) | 🟢 公益 | ✅ | ❌ | ✅ | QQ 邮箱 | ✅ | 2026-10-26 |

### AnyRouter

- **注册链接**：https://anyrouter.top/register?aff=j0lk
- **注册方式**：**GitHub** 账号或 **edu 邮箱**
- **性质**：纯公益站，**没有充值入口**
- **适用范围**：只能接入 Claude Code 和 Codex
- **模型**：Claude 系列、GPT 系列
- **福利**：注册送 150+，每日签到再送 25
- **注意**：人多，高峰期可能用不了，建议**错峰使用**；除此之外没什么缺点

### ShareChat

- **注册链接**：https://new.sharedchat.cc/list/#/register?i=TgQc3
- **注册方式**：**QQ 邮箱**注册即可
- **适用范围**：Coding 站，**只能接入 Codex**
- **模型**：GPT-5.6 soil
- **福利**：每日签到，额度当天有效
- **用量规则**：每 3h 轮换恢复用量（按全站用量和 3h 窗口限制）

---

## 💬 日常聊天站

| 站点名称 | 性质 | 支持模型 | 每日签到 | 注册方式 | 状态 | 最后检查 |
| --- | --- | --- | :---: | --- | :---: | --- |
| 待收录 | - | - | - | - | - | - |

---

## 🛠️ 接入示例

### 日常聊天客户端

在客户端设置中填写：

- **API 地址（Base URL）**：站点提供的地址，一般形如 `https://example.com/v1`
- **API Key**：在站点后台创建的令牌（`sk-` 开头）
- **模型**：选择站点支持的模型名称

### Codex

```bash
export OPENAI_BASE_URL="https://example.com/v1"
export OPENAI_API_KEY="sk-xxxx"
```

### Claude Code

```bash
export ANTHROPIC_BASE_URL="https://example.com"
export ANTHROPIC_AUTH_TOKEN="sk-xxxx"
```

> 不同站点的接入方式可能略有区别，以各站点的教程为准。

## ⚠️ 免责声明

- 本仓库只做信息收集与整理，不对站点的稳定性、安全性负责。
- 公益站资源来之不易，请**合理使用、不要滥用**，不要倒卖额度。
- 请勿在第三方站点传输隐私信息或敏感数据。
- 半公益站充值前请先小额测试，谨慎付费。

## 🤝 贡献

发现新的公益站 / 中转站，或者某个站点已经失效？欢迎提交 Issue 或 PR。

---

⭐ 如果这个合集对你有帮助，欢迎点个 Star，方便更多人搜到！
