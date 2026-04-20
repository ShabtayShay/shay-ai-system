# Content Agent Skill

Manage and update the n8n content agent workflow for automated publishing.

## Context

- n8n runs on VPS1 (76.13.11.68) via Docker
- Workflow: `workflows/content-agent-v2.json` (17 nodes)
- Pipeline: Webhook → Claude AI → Parse JSON → Publish

## Publishing Targets

- 10 WordPress sites on VPS2 (72.60.81.215)
- Telegram bot
- TikTok / Pinterest via Blotato API

## Instructions

When modifying or creating content agent workflows:
1. Preserve the existing node structure unless explicitly asked to change it
2. Always include error handling nodes for each publishing target
3. Use Claude API for content generation (Anthropic SDK)
4. Output must be valid JSON for downstream nodes
5. Test webhook triggers before activating workflows
