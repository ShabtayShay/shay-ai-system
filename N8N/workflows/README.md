# N8N WORKFLOWS — КАРТА

## VPS1: root@76.13.11.68
n8n доступен: http://76.13.11.68:5678

## КАТЕГОРИИ WORKFLOWS

### /content — Контент-автоматизация
- `auto_content_generator.json` — авто-генерация контента по расписанию
- `pinterest_auto_post.json` — публикация пинов
- `content_to_3_languages.json` — перевод RU→HE→EN

### /telegram — Telegram бот
- `telegram_command_center.json` — обработка команд бота
- `telegram_alerts.json` — уведомления и алерты
- `telegram_daily_report.json` — ежедневный отчёт

### /shopify — Shopify автоматизация
- `shopify_new_order.json` — обработка нового заказа
- `shopify_to_teemdrop.json` — отправка в TeemDrop
- `shopify_abandoned_cart.json` — напоминание о брошенной корзине

### /pinterest — Pinterest автоматизация
- `pinterest_scheduler.json` — расписание публикаций
- `pinterest_analytics.json` — сбор аналитики
- `pinterest_trending.json` — мониторинг трендов

## КАК ИМПОРТИРОВАТЬ
1. Открой n8n: http://76.13.11.68:5678
2. Settings → Import Workflow
3. Загрузи JSON файл из соответствующей папки
4. Настрой credentials
5. Активируй workflow

## БЭКАПЫ
Все бэкапы в: `AI_BRAIN/N8N/backups/`
Формат: `backup_YYYY-MM-DD.json`
