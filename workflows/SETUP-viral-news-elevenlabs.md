# 4 Viral News to AI Avatar Videos (ElevenLabs + Blotato)

Adapted from the original Blotato template — HeyGen replaced with ElevenLabs TTS.

## Workflow Flow

```
Schedule (10AM daily)
  -> Fetch HackerNews Top 10 Stories
  -> AI Agent picks most viral story + writes 30s script
  -> ElevenLabs TTS generates voiceover (your cloned voice)
  -> Blotato publishes to:
     - TikTok (Account 35761)
     - YouTube (Account 31739)
     - Pinterest (Account 5126)
  -> Telegram report to chat 896491515
```

## Pre-configured API Keys

| Service | Key | Status |
|---------|-----|--------|
| Blotato | `blt_qmAMnWrqk5VIEoCl2aZyogCwfkDjSvDDbQXNCkpgcU0=` | Set |
| ElevenLabs | `sk_7853d02e...6440b406` | Set |
| Voice ID | `YOUR_VOICE_ID` | **NEEDS UPDATE** |
| Telegram Bot Token | `$env.TELEGRAM_BOT_TOKEN` | Set via n8n env |

## Setup Steps

### 1. Import into n8n
1. Open n8n at `http://76.13.11.68:5678`
2. Go to **Workflows** -> **Import from File**
3. Select `viral-news-elevenlabs-blotato.json`

### 2. Replace YOUR_VOICE_ID
In these nodes, replace `YOUR_VOICE_ID` with your ElevenLabs cloned voice ID:
- **ElevenLabs Text-to-Speech** — in the URL field
- **ElevenLabs Get Captions** — in the URL field

### 3. Set n8n Environment Variable
Add `TELEGRAM_BOT_TOKEN` to n8n environment variables (Settings -> Variables).

### 4. Install Blotato Community Node (if not installed)
1. Go to **Settings** -> **Community Nodes**
2. Search for `n8n-nodes-blotato`
3. Install

### 5. Set up n8n Credentials
- **OpenAI** credential (for GPT-4o-mini script generation)
- Or swap for Anthropic Claude in the AI Agent node

### 6. Test
1. Deactivate all Blotato Publish nodes except TikTok
2. Run workflow manually
3. Check Blotato API Dashboard for results
4. Check Telegram for report

### 7. Activate
Toggle the workflow to **Active** for daily automated execution at 10AM.

## Key Difference: HeyGen vs ElevenLabs

- **HeyGen** = AI avatar video (talking head)
- **ElevenLabs** = Voice-only TTS (audio file)

For full video output, consider adding a video generation step between ElevenLabs and Blotato (e.g., using Creatomate, Shotstack, or FFmpeg to combine audio + images into video).
