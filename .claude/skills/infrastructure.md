# Infrastructure Skill

Manage VPS servers, Docker containers, and deployment.

## Context

- VPS1 (76.13.11.68): n8n automation server (Docker)
- VPS2 (72.60.81.215): 10 WordPress sites
- Stack: Docker, FastAPI, Supabase

## Instructions

When working with infrastructure:
1. All services run in Docker containers — use docker-compose for deployments
2. Never expose sensitive ports without authentication
3. Use environment variables for all secrets (never hardcode)
4. Monitor container health and restart on failure
5. Backup WordPress databases daily
6. Keep n8n workflows version-controlled in this repo
