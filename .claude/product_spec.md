# product_spec.md — Senury Product Specification

## 1. Summary
Senury is a **Komplettlösung für Notariate** — AI-assisted notary software for Germany that streamlines the entire notarial workflow. While **Kaufverträge** remain our primary focus and most mature feature, Senury supports a wide range of notarial documents and workflows including Schenkungen, Grundstücksübertragungen, and other urkundliche Beurkundungen.

**Important:** Senury supports drafting and workflow efficiency. **Legal review and final approval remain with qualified professionals.**

## 2. Target Users
Primary:
- Notare / Notariate (high-volume transactions)
- Notarfachangestellte / Sachbearbeitung

Secondary:
- Kanzleien supporting real-estate transactions
- Notarvertreter during drafting phases

## 3. Core User Outcome
From intake + supporting documents → to a usable, versioned contract draft export (DOCX) in minutes, across multiple document types.

## 4. Product Modules

### 4.1 Vorgänge (Case Management)
- Create/manage transactions ("Vorgänge")
- Statuses (Neu, In Prüfung, Entwurf bereit, Exportiert)
- Search, filters, basic audit trail
- Document type selection (Kaufvertrag, Schenkung, etc.)

### 4.2 Datenerfassung (Structured Intake)
- Forms for parties, object, price, rights/encumbrances, powers of attorney, deadlines
- Completeness checks
- Document upload and parsing
- Type-specific intake flows

### 4.3 Urkunden (Document Drafting) — *Flagship Feature*
**Primary:** Kaufverträge (most mature, best-tested)
**Also supported:**
- Schenkungsverträge
- Grundstücksübertragungen
- Erbbaurechtsverträge
- Auflassungsvormerkungen
- Other urkundliche Beurkundungen

Features:
- Template + clause library system
- Generation of first draft based on structured data
- Split-view editor: data/clause controls + document preview
- Version history (timestamps, author/action)
- Export: DOCX (required), PDF (optional)

### 4.4 Recherche (AI Legal Research)
- Chat-based interface for legal research
- Access to high-quality juridical databases
- Context-aware answers based on current document
- Clause alternatives and risk flagging
- Must include disclaimers (support only; no legal advice)

### 4.5 Kontrolle (Document Analysis) — *Perspective/Coming Soon*
- Rapid analysis of large legal document volumes
- Contract comparison and discrepancy detection
- Risk pattern identification
- Summary generation for long documents
- Timeline: Future release (not MVP)

## 5. Supported Document Types

### Fully Supported (MVP)
- **Kaufverträge** (primary focus)
  - Grundstückskaufverträge
  - Wohnungseigentum
  - Bebaute/unbebaute Grundstücke
  - Mit/ohne Makler

### Partially Supported (Beta)
- Schenkungsverträge
- Grundstücksübertragungen

### Planned
- Erbbaurechtsverträge
- Auflassungsvormerkungen
- Erbfolge- und Teilungsverträge
- Gesellschaftsverträge

## 6. Compliance & Trust Requirements
- **§203 StGB**: professional secrecy context; confidentiality-first design
- **DSGVO**: data minimization, purpose limitation, retention controls, DPA/AVV availability
- **ISO 27001**: align ISMS practices; avoid claiming certification unless confirmed

## 7. UX Principles
- Conservative, minimal, professional
- Workflow transparency (what changed, why, by whom)
- Reduce copy-paste and manual transfer
- Make review easy (diffs, versioning, checklist mindset)
- Context-aware assistance, not replacement

## 8. Key Messaging

### For Marketing
- "Senury ist die Komplettlösung für Ihr Notariat"
- "Kaufverträge in Minuten — und vieles mehr"
- "KI-gestützt, nicht KI-ersetzend"
- Focus on time savings for Kaufverträge, mention other capabilities

### For Product
- Always lead with Kaufvertrag capabilities
- Present other document types as "auch verfügbar"
- Recherche as standalone feature
- Kontrolle as "in Entwicklung" or "perspektivisch"

## 9. Metrics
- Time-to-first-draft (primary)
- Draft acceptance rate (with edits)
- Error categories reduced (missing fields, wrong placement)
- Lead-to-demo conversion (website)
- Feature adoption (Recherche vs. Drafting)

## 10. Non-Goals
- No autonomous legal decisions
- No promise of legal correctness
- No "one-click final contract without review" messaging
- No competitor comparisons in product copy
- Kontrolle is not part of MVP
