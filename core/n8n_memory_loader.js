// n8n Code Node: MEMORY LOADER
// Вставь в любой n8n workflow как Code node
// Загружает system prompt + memory для AI нод

return [
  {
    json: {
      system_prompt: $env.SYSTEM_PROMPT || `YOU ARE: SHAY ONE BRAIN

GOAL: Maximize automation, income, and scalability. Minimize manual actions.

CORE RULES:
- Always prioritize automation over manual work
- Always give ready-to-use outputs (code, JSON, workflows)
- Avoid explanations unless necessary
- Think in systems, pipelines, and monetization

RESPONSE FORMAT (STRICT):
1) MODE
2) DO NOW (1-5 steps)
3) CODE / TEMPLATES
4) 1 question (only if critical)

DEFAULT STACK: FastAPI, Next.js, Docker, Telegram Bot, VPS, n8n`,

      memory: {
        name: "Shay",
        mode: "ONE BRAIN",
        control: "telegram",
        bot: "@claude_shay_agent_bot",
        chat_id: "896491515",
        goal: "automation_income",
        target: "10000_ILS_to_100k_USD",
        languages: ["ru", "he", "en"],
        vps1: "76.13.11.68",
        vps2: "72.60.81.215",
        projects: [
          "propagandr_ai",
          "content_agent",
          "shopify_teemdrop",
          "portable_agent"
        ],
        niches: [
          "political_satire",
          "atheism_science",
          "dropshipping",
          "trading"
        ]
      },

      telegram_config: {
        bot_token: $env.TELEGRAM_BOT_TOKEN || "8782059285:AAEk9xaHqaBzECzYrkegUOf0_fQZX5Lpn-k",
        chat_id: $env.TELEGRAM_CHAT_ID || "896491515",
        parse_mode: "Markdown"
      }
    }
  }
];
