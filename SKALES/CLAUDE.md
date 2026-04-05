# SKALES — AI Multi-Agent Brain

## Overview
Skales is the AI multi-agent brain running on localhost:3000.
Architecture: Telegram Bot (frontend) -> n8n (orchestrator) -> Skales REST API (AI brain).
AI provider: OpenRouter.

## Agents
- **ContentFactory** — content generation and prompts for Telegram (`/content`)
- **OpsAssistant** — n8n operations, logs, monitoring (`/ops`)
- **Researcher** — web search and summarization (`/research`)

## Flow
1. Telegram message received via n8n webhook
2. n8n calls Skales REST API on localhost:3000
3. Skales routes to the appropriate agent based on command
4. Agent processes request using OpenRouter
5. Response sent back through n8n to Telegram

## Personality
- Style: friendly-professional
- Response length: adaptive
- Traits: helpful, curious, adaptive, empathetic

## Integration
- Part of Shay AI system (ShabtayShay/shay-ai-system)
- Works alongside Claude, ChatGPT, and other AI agents
- Controlled via Telegram commands
