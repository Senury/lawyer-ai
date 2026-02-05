# product_spec.md — Senury MVP Product Specification

## 1. Summary
Senury is AI-assisted notary software for Germany that generates structured first drafts of **Kaufverträge** (and related contracts) using guided data intake, templates, clause libraries, AI-assisted drafting, and research/chat features.

**Important:** Senury supports drafting and workflow efficiency. **Legal review and final approval remain with qualified professionals.**

## 2. Target Users
Primary:
- Notare / Notariate (high-volume transactions)
- Notarfachangestellte / Sachbearbeitung

Secondary:
- Kanzleien supporting real-estate transactions

## 3. Core User Outcome (MVP)
From intake + supporting documents → to a usable, versioned contract draft export (DOCX) in minutes.

## 4. MVP Scope
### 4.1 Modules
1) **Vorgänge (Case Management)**
- Create/manage transactions (“Vorgänge”)
- Statuses (Neu, In Prüfung, Entwurf bereit, Exportiert)
- Search, filters, basic audit trail

2) **Datenerfassung (Structured Intake)**
- Forms for parties, object, price, rights/encumbrances, powers of attorney, deadlines
- Completeness checks

3) **Draft Generation (Kaufvertrag)**
- Template + clause library system
- Generation of first draft based on structured data
- Split-view editor: data/clause controls + document preview

4) **Versioning & Export**
- Version history (timestamps, author/action)
- Export: DOCX (required), PDF (optional)

5) **Recherche & Chat (Assistive)**
- Ask questions about clauses, alternatives, risk flags
- Must include disclaimers (support only; no legal advice)

### 4.2 Non-Goals (MVP)
- No autonomous legal decisions
- No promise of legal correctness
- No “one-click final contract without review” messaging
- No competitor comparisons in product copy

## 5. Compliance & Trust Requirements
- **§203 StGB**: professional secrecy context; confidentiality-first design
- **DSGVO**: data minimization, purpose limitation, retention controls, DPA/AVV availability
- **ISO 27001**: align ISMS practices; avoid claiming certification unless confirmed

## 6. UX Principles
- Conservative, minimal, professional
- Workflow transparency (what changed, why, by whom)
- Reduce copy-paste and manual transfer
- Make review easy (diffs, versioning, checklist mindset)

## 7. Metrics (MVP)
- Time-to-first-draft
- Draft acceptance rate (with edits)
- Error categories reduced (missing fields, wrong placement)
- Lead-to-demo conversion (website)
