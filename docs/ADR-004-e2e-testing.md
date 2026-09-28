# ADR-004: Val av e2e testning (end-to-end testing)

* **Status:** Föreslagen
* **Datum:** 2026-09-23
* **Deltagare:** Josefin, Martin, Wilmer
* **Relaterad Issue/Ticket:** #15

---

## 1. Kontext & Problemställning
*Vilken utmaning eller vilket behov står vi inför? Vilka krav och begränsningar styr oss?*

Simulerar riktiga användare: Testar hela flöden som inloggning, navigering och formulärinmatning i en produktionslik miljö.
Fångar integrationsfel: Säkerställer att frontend, API-rutter och databaser fungerar ihop.

---

## 2. Övervägda Alternativ

### Alternativ A: Playwright
* **Fördelar:** 
  + stöder moderna webbläsare (Chrome, Edge, Firefox, Safari out-the-box)
  + extremt snabbt
  + hanterar asynkrona komponenter väl 
  + kan enkelt integreras i utvecklingsmiljön

* **Nackdelar:** 
  - brantare inlärningskurva
  - yngre ekosystem

### Alternativ B: Cypress
* **Fördelar:** 
  - Fantastisk felsökning (kan spola tillbaka tiden och se exakt vad som händer när)
  - Enkel installation
  - Stort ekosystem

* **Nackdelar:** 
  - körs inuti webbläsaren och följaktligen svårt att hantera flera flikar, domäner eller iframes
  - inget stöd för Safari
  - kan vara långsammare än Playwright

### Alternativ C: Jest
* **Fördelar:** 
* **Nackdelar:** 
  - bara enhetstester (ingen e2e)

### Alternativ D: Vitest
* **Fördelar:**
* **Nackdelar:**
  - bara enhetstester (ingen e2e)

---

## 3. Beslut
*Vilket alternativ valde vi och varför?*

Vi beslutar att använda **Alternativ A: Playwright** därför att det stödjer fler webbläsare och integreras bra med Next.js. Cypress körs i webbläsaren vilket känns som en betydlig nackdel.

---

## 4. Konsekvenser

### Positiva konsekvenser
+ Vi får automatiserad e2e testning vilket gör det lättare att testa en bred mängd användarflöde och borde resultera i en stabilare, mer robust produkt.
+ Playwright är enkel att integrera i utvecklingsmiljön.

### Negativa konsekvenser / Risker
- Ingen av oss har använt Playwright tidigare.
- Playwright har en brant inlärningskurva.
- Det är ett yngre ekosystem vilket kanske betyder att det finns mer begränsad dokumentation.

---

## 5. Hur vi verifierar beslutet
*Hur vet vi att beslutet var lyckat?*

- [ ] Om vi upptäcker och kan rätta fel med hjälp av verktyget.
- [ ] Om Playwright hjälper oss hitta problem som vi annars hade missat.