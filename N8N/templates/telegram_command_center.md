# N8N ШАБЛОН: TELEGRAM COMMAND CENTER

## ОПИСАНИЕ
Workflow для обработки команд Telegram бота @claude_shay_agent_bot

## СТРУКТУРА WORKFLOW

### Trigger: Telegram Webhook
```
URL: https://76.13.11.68:5678/webhook/telegram
Method: POST
```

### Router: Команды
```
/status  → Node: Check All Services
/content → Node: Generate Content
/orders  → Node: Shopify Orders
/report  → Node: Daily Report
/deploy  → Node: Deploy Service
/logs    → Node: Get Logs
/update  → Node: Update CLAUDE.md
```

### Node: Check All Services
```
1. Ping VPS1 (n8n)
2. Ping VPS2 (WordPress)
3. Check Shopify API
4. Check Docker containers
5. Return status to Telegram
```

### Node: Generate Content
```
1. Pick random topic from list
2. Call OpenAI/Claude API
3. Save to CONTENT_AGENT folder
4. Reply to Telegram with preview
```

### Node: Shopify Orders
```
1. GET /admin/api/orders.json (last 10)
2. Format: order #, product, status, total
3. Send summary to Telegram
```

## CREDENTIALS NEEDED
- Telegram Bot Token
- Shopify API Key + Secret
- OpenAI API Key
- VPS SSH access
