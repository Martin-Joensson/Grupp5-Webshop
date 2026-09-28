# 🏛️ Architecture Decision Record (ADR) Mall

---

# ADR-1: Val av State Management för varukorg

* **Status:** Beslutat
* **Datum:** 2026-09-21
* **Deltagare:** Martin, Josefin, Wilmer
* **Relaterad Issue/Ticket:** #7
---

## 1. Kontext & Problemställning
*Vilken utmaning eller vilket behov står vi inför? Vilka krav och begränsningar styr oss?*

Vi behöver hantera kundens varukorg i webbshoppen. Korgen ska kunna uppdateras från flera olika komponenter (produktsida, navbar-ikon, kassa) och användarens varor ska helst inte försvinna vid en sidomladdning. Vi måste bestämma hur vi hanterar detta tillstånd i Next.js App Router.

---

## 2. Övervägda Alternativ

### Alternativ A: React Context API med LocalStorage
* **Fördelar:** Inbyggt i React, inga externa beroenden, enkelt att komma igång med.
* **Nackdelar:** Kan orsaka onödiga omrenderingar vid frekventa uppdateringar, kräver manuell hantering av SSR/hydration mismatch vid synk mot LocalStorage.

### Alternativ B: Zustand med persist-middleware
* **Fördelar:** Lättviktigt (under 2kB), mycket snabbt, friktionsfri selector-modell som minimerar omrenderingar, inbyggt stöd för att persistera till LocalStorage eller Cookies.
* **Nackdelar:** Ett extra npm-paket att underhålla och lära sig.

### Alternativ C: Server State med Cookies och Server Actions
* **Fördelar:** Fungerar sömlöst med Server Components och kräver minimal JavaScript på klienten.
* **Nackdelar:** Mer komplext att implementera för snabba UI-uppdateringar utan fördröjning om inte optimistiska uppdateringar används.

---

## 3. Beslut
*Vilket alternativ valde vi och varför?*

Vi beslutar att använda **Alternativ B: Zustand med persist-middleware**. Detta ger oss ett flexibelt, globalt state som fungerar smidigt i våra Client Components, samtidigt som vi undviker boilerplate och får persistent varukorg "out of the box".

---

## 4. Konsekvenser

### Positiva konsekvenser
* Teamet får en standardiserad metod för globalt state som kan återanvändas för eventuella andra funktioner (t.ex. notifikationer/toast).
* Kunden får en modern köpupplevelse där korgen sparas mellan sessioner.
* Enkelt att testa och mocka.

### Negativa konsekvenser / Risker
* Vi måste säkerställa att vi hanterar Hydration i Next.js så att vi inte renderar korgens innehåll innan klienten mountat (för att undvika hydration warnings).
* Alla i gruppen måste förstå hur Zustands `useStore`-hook fungerar så att inte enbart en person kan arbeta med varukorgen.

---

## 5. Hur vi verifierar beslutet
*Hur vet vi att beslutet var lyckat?*

* [ ] Varor kan läggas till och tas bort från både produktsida och kassa.
* [ ] Antalet varor i navbar-badgen uppdateras omedelbart utan sidomladdning.
* [ ] Varukorgens innehåll finns kvar efter att sidan laddats om (`F5`).
* [ ] Inga Hydration-varningar syns i webbläsarkonsolen.