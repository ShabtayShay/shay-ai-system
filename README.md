# shay-ai-system

Automated income system: n8n + 10 WordPress + TikTok + Telegram + TeemDrop

## Architecture

**Traffic Flow:**
TeemDrop product → Shopify → TikTok/Reels/Shorts/Pinterest → Customer orders → TeemDrop fulfillment → Profit

**Content Agent Workflow (n8n):**
Webhook trigger → Claude AI → Parse JSON → Publish to 10 WordPress sites + Telegram + TikTok

## Infrastructure

| Service | Host | Purpose |
|---------|------|---------|
| n8n | VPS1 (76.13.11.68) | Workflow automation |
| WordPress x10 | VPS2 (72.60.81.215) | Content sites |
| Telegram | Bot | Content distribution |
| TikTok / Pinterest | Blotato API | Social traffic |

## Workflows

- `workflows/content-agent-v2.json` — Main content agent (17 nodes, active)

## Stack

- n8n automation, Docker, FastAPI
- Blotato (TikTok, Pinterest, YouTube)
- Supabase, Anthropic Claude API

## Status (2026-03-31)

- Content Agent: active, 17 nodes
- WordPress: 10 sites publishing
- Telegram: connected
- Pinterest: connected (board: mindovertoxicity)
- TikTok: requires media attachment (text-only not supported)
- Goal: 10,000 ILS/month automated income
