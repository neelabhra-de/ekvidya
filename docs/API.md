# API scaffold

Base path: `/api`

- `GET /api/health` — returns service name, status and timestamp.

Future routes should preserve these boundaries:

- `/api/students` for registry and profile operations.
- `/api/verifications` for verification queue and history.
- `/api/institutions` for institution administration.
- `/api/discrepancies` for rule findings and resolutions.
- `/api/audit` for append-only activity history.

No route currently reads or writes external identity systems.
