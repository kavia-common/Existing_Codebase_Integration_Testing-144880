Import diverse codebases (full-stack, microservices, mobile) into KAVIA. Test manifest handling, code understanding, modification accuracy, regression impact. Document import blockers, implementation success rates, and architectural comprehension gaps.

Backend startup (Express)
- This repository now includes a minimal Express backend to ensure container startup for integration testing.
- The server listens on PORT from environment (defaults to 3001).

Getting started
1) Install dependencies:
   npm install

2) Configure environment:
   - Optionally copy .env.example to .env and adjust.
   - By default, the server listens on 3001 if PORT is not set.

3) Start the server:
   npm start

Health check
- Endpoint: GET /health
- Response: { "status": "ok", "uptime": <number>, "timestamp": "<ISO string>" }

Notes
- Uses dotenv for environment configuration. Avoid hardcoding secrets.
- Logs are printed to stdout using morgan.
- CORS enabled for broad testing compatibility.
