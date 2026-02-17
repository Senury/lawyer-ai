# Site Structure & Information Architecture

## Overview

This document defines the optimal URL hierarchy and content architecture for Senury's SEO strategy. The structure balances user experience, search engine optimization, and conversion optimization.

---

## Current State (12 Pages)

```
/                          (Home)
/produkt/                  (Product)
/preis/                    (Pricing)
/sicherheit/               (Security)
/ablauf/                   (Process)
/faq/                      (FAQ)
/ueber-uns/                (About)
/kontakt/                  (Contact)
/demo/                     (Demo)
/agb/                      (Terms)
/datenschutz/              (Privacy)
/impressum/                (Imprint)
```

---

## Target State (Expanded Architecture)

### Tier 1: Core Navigation (Primary Pages)

```
/                          (Home - Conversion hub)
├── /produkt/              (Product overview)
├── /loesungen/            (NEW - Solutions by use case)
├── /preis/                (Pricing)
├── /wissen/               (NEW - Knowledge hub)
├── /ueber-uns/            (About)
└── /kontakt/              (Contact)
```

**Purpose**: Main navigation items, highest crawl priority, primary conversion paths.

---

### Tier 2: Product & Solutions (Conversion Pages)

```
/produkt/
├── /produkt/vorgangsverwaltung/      (Case management feature)
├── /produkt/ki-drafting/             (AI drafting feature)
├── /produkt/recherche/               (Research feature)
├── /produkt/datenerfassung/          (Data capture feature)
├── /produkt/klauselbibliothek/       (Clause library feature)
└── /produkt/integrationen/           (Integrations)

/loesungen/                           (NEW - Solutions hub)
├── /loesungen/kaufvertraege/         (Property contracts)
├── /loesungen/schenkungen/           (Gifts)
├── /loesungen/ehevertraege/          (Marriage contracts)
├── /loesungen/grundstuecksrecht/     (Property law)
└── /loesungen/digitalisierung/       (Digital transformation)
```

**Purpose**: Deep product content for specific search intents, feature education, use case targeting.

**Schema Markup**:
- SoftwareApplication (product pages)
- HowTo (solution guides)
- FAQPage (feature FAQs)

---

### Tier 3: Knowledge Hub (Content Marketing)

```
/wissen/                              (Knowledge hub homepage)
├── /wissen/blog/                     (Blog)
│   ├── /wissen/blog/ki-notariat/     (AI in notary work)
│   ├── /wissen/blog/kaufvertraege/   (Property contracts)
│   ├── /wissen/blog/digitalisierung/ (Digital transformation)
│   └── /wissen/blog/sicherheit/      (Security & compliance)
├── /wissen/guides/                   (Long-form guides)
│   ├── /wissen/guides/kaufvertrag-erstellen/
│   ├── /wissen/guides/beurkundungsprozess/
│   ├── /wissen/guides/digitale-akte/
│   └── /wissen/guides/ki-im-notariat/
├── /wissen/vorlagen/                 (Templates)
│   ├── /wissen/vorlagen/kaufvertrag/
│   ├── /wissen/vorlagen/schenkung/
│   └── /wissen/vorlagen/vollmacht/
└── /wissen/glossar/                  (Glossary)
    ├── /wissen/glossar/auflassung/
    ├── /wissen/glossar/beurkundung/
    └── /wissen/glossar/grundbuch/
```

**Purpose**: SEO content hub, topical authority building, educational resources, lead magnets.

**Content Types**:
- Blog posts (800-1200 words, weekly)
- Guides (2000-4000 words, monthly)
- Templates (downloadables, gated)
- Glossary (definition pages, ongoing)

**Schema Markup**:
- Article (blog posts)
- HowTo (guides)
- FAQPage (glossary terms)
- BreadcrumbList (all pages)

---

### Tier 4: Trust & Conversion Support

```
/sicherheit/                          (Security & compliance)
├── /sicherheit/203-stgb/             (§203 StGB deep dive)
├── /sicherheit/dsgvo/                (GDPR compliance)
└── /sicherheit/iso27001/             (ISO 27001)

/referenzen/                          (NEW - Case studies)
├── /referenzen/notar-mueller/        (Customer story)
├── /referenzen/kanzlei-schmidt/      (Customer story)
└── /referenzen/...

/ressourcen/                          (NEW - Downloads)
├── /ressourcen/whitepaper-sicherheit/
├── /ressourcen/roi-rechner/
└── /ressourcen/checkliste-digitalisierung/
```

**Purpose**: Trust signals, social proof, lead generation, bottom-funnel conversion.

**Schema Markup**:
- Organization (security certifications)
- Review (case studies)
- Product (resources/downloads)

---

### Tier 5: Legal & Utility Pages

```
/ablauf/                              (Process - existing)
/faq/                                 (FAQ - existing)
/demo/                                (Demo booking - existing)
/karriere/                            (NEW - Careers)
/presse/                              (NEW - Press)

/legal/                               (NEW - Legal hub)
├── /legal/agb/                       (Terms - moved from /agb/)
├── /legal/datenschutz/               (Privacy - moved from /datenschutz/)
└── /legal/impressum/                 (Imprint - moved from /impressum/)
```

**Purpose**: Legal compliance, company information, recruitment.

---

## URL Structure Rules

### 1. Language & Localization
```
Current: German only
Future consideration: /at/ (Austria), /ch/ (Switzerland)
```

### 2. URL Format
- Lowercase only: `/kaufvertraege/` not `/Kaufvertraege/`
- Hyphens for spaces: `/ki-drafting/` not `/ki drafting/`
- Trailing slashes: Consistent use of `/page/` not `/page`
- No file extensions: `/guide/` not `/guide.html`

### 3. Hierarchy Depth
- Maximum 3 levels deep: `/wissen/blog/category/post/`
- Prefer flat structure for SEO: `/loesungen/kaufvertraege/` not `/produkt/loesungen/vertraege/kaufvertraege/`

### 4. Redirect Strategy
```
# When restructuring
/agb/         → /legal/agb/         (301 redirect)
/datenschutz/ → /legal/datenschutz/ (301 redirect)
/impressum/   → /legal/impressum/   (301 redirect)
```

---

## Internal Linking Architecture

### Hub-and-Spoke Model

**Central Hub**: `/produkt/`
- Links to all feature pages
- Links to all solution pages
- Links to relevant guides

**Content Hub**: `/wissen/`
- Blog posts link to product pages contextually
- Guides link to features and solutions
- Glossary terms link to related content

**Authority Flow**:
```
Home (highest authority)
  ↓
Product / Solutions (pillar pages)
  ↓
Features / Use Cases (cluster content)
  ↓
Blog / Guides (long-tail content)
```

### Link Placement Guidelines

**Navigation Links** (Every page):
- Main nav: Product, Solutions, Pricing, Knowledge, About, Contact
- Footer: All Tier 1 + Legal pages
- Breadcrumbs: Show hierarchy

**Contextual Links** (Content pages):
- 3-5 internal links per 1000 words
- Link to product pages from solution content
- Link to guides from product pages
- Cross-link related blog posts

**CTA Links** (Conversion focus):
- Every page has clear "Demo buchen" CTA
- Solution pages link to relevant features
- Content pages link to related resources

---

## Content Pillar Strategy

### Pillar 1: Kaufverträge (Property Contracts)
**Hub Page**: `/loesungen/kaufvertraege/`
**Cluster Content**:
- `/wissen/guides/kaufvertrag-erstellen/`
- `/wissen/blog/kaufvertrag-fehler-vermeiden/`
- `/wissen/vorlagen/kaufvertrag-muster/`
- `/wissen/glossar/auflassung/`
- `/produkt/ki-drafting/` (feature link)

### Pillar 2: KI im Notariat (AI in Notary Work)
**Hub Page**: `/wissen/blog/ki-notariat/`
**Cluster Content**:
- `/wissen/guides/ki-im-notariat/`
- `/wissen/blog/ki-vs-mensch-notar/`
- `/produkt/ki-drafting/`
- `/sicherheit/203-stgb/` (compliance)

### Pillar 3: Digitalisierung (Digital Transformation)
**Hub Page**: `/loesungen/digitalisierung/`
**Cluster Content**:
- `/wissen/guides/digitale-akte/`
- `/wissen/blog/notariat-zukunft/`
- `/ressourcen/checkliste-digitalisierung/`
- `/referenzen/` (case studies)

---

## Navigation Structure

### Desktop Navigation
```
[Logo]  Produkte ▼  Lösungen ▼  Preise  Wissen ▼  Über uns  [Demo CTA]

Produkte Dropdown:
- Vorgangsverwaltung
- KI-Drafting
- Recherche
- Datenerfassung
- Alle Features →

Lösungen Dropdown:
- Kaufverträge
- Schenkungen
- Eheverträge
- Alle Lösungen →

Wissen Dropdown:
- Blog
- Guides
- Vorlagen
- Glossar
```

### Mobile Navigation
- Hamburger menu with accordion sections
- Sticky "Demo buchen" CTA at bottom
- Simplified: Products | Solutions | Pricing | Knowledge | About

---

## Sitemap Structure

### XML Sitemap Organization
```
sitemap-index.xml
├── sitemap-main.xml      (Tier 1 pages)
├── sitemap-product.xml   (Tier 2 product/solution)
├── sitemap-content.xml   (Tier 3 blog/guides)
├── sitemap-images.xml    (All images)
└── sitemap-changelog.xml (Last modified)
```

### Priority & Changefreq
| Page Type | Priority | Changefreq |
|-----------|----------|------------|
| Home | 1.0 | weekly |
| Product | 0.9 | weekly |
| Solutions | 0.9 | monthly |
| Pricing | 0.8 | monthly |
| Blog posts | 0.7 | never (update lastmod) |
| Guides | 0.8 | quarterly |
| Legal | 0.3 | yearly |

---

## Implementation Phases

### Phase 1 (Weeks 1-4): Foundation
- Set up URL structure
- Create /wissen/ hub page
- Implement redirects
- Update navigation

### Phase 2 (Weeks 5-8): Product Expansion
- Create /loesungen/ section
- Build feature pages
- Internal linking

### Phase 3 (Weeks 9-16): Content Hub
- Launch blog
- Create first 5 guides
- Build glossary foundation

### Phase 4 (Weeks 17-24): Advanced
- Case studies (/referenzen/)
- Resource downloads
- Multi-language prep

---

## Quality Gates

### Before Publishing New Pages
- [ ] Unique H1 tag
- [ ] Meta description (150-160 chars)
- [ ] Schema markup implemented
- [ ] Internal links to/from pillar pages
- [ ] Mobile-responsive design
- [ ] Core Web Vitals check
- [ ] Accessibility audit

### Content Thresholds
- **Pillar pages**: 2000+ words
- **Feature pages**: 1000+ words
- **Blog posts**: 800+ words
- **Guides**: 2000-4000 words
- **Glossary**: 300+ words per term

---

*Last Updated: February 2026*
*Next Review: Monthly during expansion*
