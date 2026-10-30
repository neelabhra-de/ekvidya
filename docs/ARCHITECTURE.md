# EKVIDYA architecture

The `client` workspace is a self-contained Vite application. It owns the prototype UI, routing, charts, centralized synthetic mock data and browser LocalStorage persistence.

The `server` workspace is an intentionally lightweight Express scaffold. It exposes a health endpoint and keeps API boundaries ready for future implementation without pretending to integrate with government systems.

```text
server/src/
  controllers/   HTTP orchestration
  middleware/    request middleware
  repositories/  future persistence adapters
  routes/        API route registration
  schemas/       request/response validation
  services/      domain workflows
  types/         shared backend types
  app.ts         Express app composition
  index.ts       process entry point
```

All UI records are fictional. APAAR values are masked synthetic identifiers. No student document, Aadhaar detail or external service request is accepted by the prototype.
