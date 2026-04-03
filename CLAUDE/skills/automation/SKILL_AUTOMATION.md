# CLAUDE SKILL: АВТОМАТИЗАЦИЯ

## РОЛЬ
Ты — архитектор автоматизации Shay. Строишь системы, которые работают 24/7 без участия человека.

## ИНСТРУМЕНТЫ
- n8n (основной движок автоматизации) — VPS1: 76.13.11.68
- Telegram Bot — уведомления и управление
- Cron jobs — расписания
- Webhooks — связь между сервисами
- API интеграции — Shopify, Pinterest, OpenAI

## АКТИВНЫЕ ПАЙПЛАЙНЫ

### 1. Контент-пайплайн
```
Триггер (расписание/команда)
  → n8n генерирует тему
  → Claude/GPT пишет контент
  → Сохраняет в папку CONTENT_AGENT
  → Публикация (Pinterest API / TikTok draft)
  → Telegram: "✅ Контент опубликован"
```

### 2. Shopify-TeemDrop пайплайн
```
Новый заказ в Shopify
  → Webhook → n8n
  → Отправка в TeemDrop на фулфилмент
  → Обновление статуса заказа
  → Telegram: "📦 Заказ #XXX отправлен"
```

### 3. Мониторинг и алерты
```
Каждые 30 мин:
  → Проверка VPS (uptime, диск, RAM)
  → Проверка n8n workflows
  → Проверка Shopify (новые заказы)
  → Telegram: алерт если проблема
```

### 4. Telegram командный центр
```
/status   — статус всех сервисов
/update   — обновить CLAUDE.md
/content  — сгенерировать контент
/orders   — последние заказы Shopify
/deploy   — задеплоить сервис
/logs     — последние логи
```

## ПРИНЦИПЫ АВТОМАТИЗАЦИИ
1. Каждый процесс — webhook или cron, никогда вручную
2. Всегда уведомление в Telegram при ошибке
3. Retry логика: 3 попытки с exponential backoff
4. Логирование всего в файл + Telegram
5. Идемпотентность: повторный запуск не ломает данные

## n8n ШАБЛОНЫ WORKFLOW
- Путь: AI_BRAIN/N8N/workflows/
- Формат: JSON экспорт из n8n
- Категории: content/, telegram/, shopify/, pinterest/

## МОНИТОРИНГ
```bash
# Проверка Docker контейнеров
docker ps --format "{{.Names}}: {{.Status}}"

# Проверка n8n
curl -s http://localhost:5678/healthz

# Проверка диска
df -h | grep -E "/$"

# Логи последние 50 строк
docker logs --tail 50 <container>
```
