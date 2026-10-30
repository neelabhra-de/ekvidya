# EKVIDYA

**One Student. One Identity. Verified Future.**

EKVIDYA is a frontend-first Smart India Hackathon prototype for APAAR ID-based student data management and verification across AICTE-approved institutions. It uses synthetic records only and does not connect to APAAR, DigiLocker, Aadhaar, AICTE or any government database.

## Monorepo layout

```text
client/   React + Vite + TypeScript + Tailwind-ready frontend
server/   Express + TypeScript API scaffold
docs/     Architecture and API notes
```

## Run from the repository root

```bash
npm install
npm run dev
```

The frontend runs on Vite's default port and the API scaffold runs on `http://localhost:4000`.

## Build and test

```bash
npm run build
npm run build:client
npm run build:server
npm test
```

## Prototype capabilities

- Shared synthetic student records and institution data.
- LocalStorage persistence for record, verification and audit changes.
- Dashboard analytics, registry search/filtering, profile drawer and verification workflow.
- Explainable discrepancy detection and resolution.
- Institution management, bulk import simulation, reports, audit logs and settings.
- Frontend role simulation for Platform Administrator, Institution Administrator and Verification Officer.

## Branding

**EKVIDYA**  
*One Student. One Identity. Verified Future.*  
**Built by Algo-Rhythm**
