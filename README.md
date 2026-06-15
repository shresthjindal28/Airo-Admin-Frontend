# AIRO Admin Frontend

Standalone Next.js app for the AIRO platform operations console.

## Setup

```bash
npm install
cp .env.example .env   # or copy from frontend/.env
npm run dev            # http://localhost:3001
```

## Environment

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_BASE_URL` | Backend API base (e.g. `http://localhost:8000/api/v1`) |
| `NEXT_PUBLIC_APP_NAME` | Display name in shell |

## Routes

- `/admin/login` — sign in
- `/admin/signup` — self-signup (if enabled on backend)
- `/admin/dashboard` — home
- `/admin/doctors` — doctor management
- `/admin/verification` — pending approvals
- `/admin/ai-jobs` — AI job retry
- `/admin/audit-logs` — audit trail
- `/admin/system-health` — monitoring

Runs on port **3001** by default so it can run alongside the doctor frontend on 3000.
