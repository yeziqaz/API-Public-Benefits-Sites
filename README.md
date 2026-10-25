# API公益站合集（2026）

> 2026 年 **公益站 / 半公益站** 可用合集（推荐）
> 持续收集、整理、检测可用的 API 公益站，适用于日常聊天，也可以接入 Codex / Claude Code 等工具。

**关键词**：公益站、半公益站、API公益站、免费API、AI中转站、OpenAI API、Claude API、Gemini API、Codex、Claude Code、2026

---

## 📌 适用范围

- 💬 **日常聊天**：接入 ChatGPT-Next-Web、LobeChat、Cherry Studio、ChatBox 等客户端
- 🧑‍💻 **编程工具**：可接入 Codex、Claude Code 等 AI 编程工具
- 🔌 **通用调用**：大多兼容 OpenAI 接口格式，填入 `Base URL` + `API Key` 即可使用

## 🏷️ 分类说明

| 类型 | 说明 |
| --- | --- |
| 🟢 公益站 | 完全免费，通常通过注册、签到或 Linux.do 等社区账号登录获取额度 |
| 🟡 半公益站 | 有免费额度或签到额度，也提供低价付费充值 |

## 📋 站点列表

> 状态说明：✅ 可用　⚠️ 不稳定 / 需排队　❌ 已失效

### 🟢 公益站

| 站点名称 | 地址 | 支持模型 | 获取方式 / 限制 | 支持 Codex / Claude Code | 状态 | 最后检查 |
| --- | --- | --- | --- | --- | --- | --- |
| 待收录 | - | - | - | - | - | - |

### 🟡 半公益站

| 站点名称 | 地址 | 支持模型 | 免费额度 / 价格 | 支持 Codex / Claude Code | 状态 | 最后检查 |
| --- | --- | --- | --- | --- | --- | --- |
| 待收录 | - | - | - | - | - | - |

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

> 不同站点的接入方式可能略有区别，以各站点的说明为准。

## ⚠️ 免责声明

- 本仓库只做信息收集与整理，**与所列站点没有任何关系**，不对站点的稳定性、安全性负责。
- 公益站资源来之不易，请**合理使用、不要滥用**，不要倒卖额度。
- 请勿在第三方站点传输隐私信息或敏感数据。
- 半公益站充值前请先小额测试，谨慎付费。

## 🤝 贡献

发现新的公益站，或者某个站点已经失效？欢迎提交 Issue 或 PR。

---

⭐ 如果这个合集对你有帮助，欢迎点个 Star，方便更多人搜到！
