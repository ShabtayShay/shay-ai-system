# Telegram Bot Skill

Manage the Telegram bot for content distribution and notifications.

## Context

- Telegram bot connected to n8n workflow
- Used for content distribution and system notifications
- Part of the multi-channel publishing pipeline

## Instructions

When working with the Telegram bot:
1. Use Telegram Bot API for all interactions
2. Format messages with Markdown for readability
3. Include relevant media (images/videos) with posts
4. Use inline keyboards for interactive content
5. Rate limit: respect Telegram's 30 messages/second limit
6. Handle errors gracefully — retry with exponential backoff
