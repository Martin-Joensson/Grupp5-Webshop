# 🏛️ Architecture Decision Record (ADR) Mall

---

# ADR-002: Val av authentication för inloggning

* **Status:** Beslutad
* **Datum:** 2026-09-23
* **Deltagare:** Martin, Josefin, Wilmer
* **Relaterad Issue/Ticket:** #14

---

## 1. Kontext & Problemställning
*Vilken utmaning eller vilket behov står vi inför? Vilka krav och begränsningar styr oss?*

Vi behöver skydda admin sidan från ogiltig ankomst. Vi behöver även skapa "mina sida" till kunder för att kunna visa sitt konto med köphistorik, favoriter och liknande saker. Denna sida måste endast vara tillgänglig till inloggad kund.

---

## 2. Övervägda Alternativ

| Tjänst             | Typ                         | Kostnad                                | Bästa egenskap                                     |
|--------------------|-----------------------------|----------------------------------------|----------------------------------------------------|
| NextAuth / Auth.js | Öppen källkod (Självhostad) | 100% Gratis                            | Extremt beprövad, enormt ekosystem.                |
| BetterAuth         | Öppen källkod (Självhostad) | 100% Gratis                            | Modernt, ramverksagnostiskt, inbyggd 2FA.          |
| Clerk              | GAS (Managed)               | Generös gratisnivå / Dyrt vid skalning | Färdiga UI-komponenter,snabbast setup.             |
| Kinde              | GAS (Managed)               | Generös gratisnivå / Prisvärt          | Mycket bra för B2B/SaaS, transparent prissättning. |
| Supabase           | GAS (Managed)               | Gratis upp till 50k användare/månad    | Lättintegrerat vid användande av Supabase databas  |


### Alternativ A: NextAuth

* **Fördelar:**
  - Öppen källkod och flexibel integration med Next.js.
  - Stöd för flera autentiseringsproviders, exempelvis social inloggning.
  - Ger teamet stor kontroll över autentiseringsflödet och integrationen med den egna databasen.
  - Kan anpassas efter webbshopens specifika krav.

* **Nackdelar:**
  - Kräver mer egen implementation av inloggningsgränssnitt och användarflöden.
  - Rollbaserad behörighet för admin och kund behöver implementeras och underhållas av teamet.
  - Teamet ansvarar för konfiguration, sessionhantering och integration med databasen.
  - Kräver att vi håller oss uppdaterade med aktuella versioner och rekommenderade Auth.js-mönster.


### Alternativ B: Kinde

* **Fördelar:**
  - Hanterad autentisering minskar behovet av att själva underhålla autentiseringsinfrastruktur.
  - Stöd för roller och behörigheter.
  - Stöd för organisationer, vilket kan vara användbart vid framtida B2B-funktionalitet.
  - Kan minska mängden egen kod som behövs för autentiseringsrelaterade funktioner.

* **Nackdelar:**
  - Beroende av en extern tjänst för autentisering.
  - Kostnader och eventuella begränsningar beror på valt abonnemang och användning.
  - Kräver integration mellan Kinde-användare och webbshopens egna kund- och orderdata.
  - Vi behöver fortfarande implementera och kontrollera behörigheter i applikationen.


### Alternativ C: BetterAuth

* **Fördelar:**
  - TypeScript-fokuserat och flexibelt autentiseringsramverk.
  - Öppen källkod och möjlighet att hantera autentiseringsdata i vår egen infrastruktur.
  - Kan integreras med vår databas och webbshopens övriga backendlogik.
  - Stöd för utökade autentiseringsfunktioner genom ramverkets funktioner och plugins.
  - Ger teamet stor kontroll över användarhantering och anpassning.
 
* **Nackdelar**:
  - Kräver mer egen implementation än en lösning med färdiga autentiseringskomponenter.
  - Teamet ansvarar för underhåll, uppdateringar och säker konfiguration.
  - Databasschema, sessionhantering och plugin-konfiguration behöver hanteras korrekt.
  - Vi behöver själva bygga och testa de autentiseringsflöden som webbshoppen kräver.


### Alternativ D: Clerk

* **Fördelar:**
  - Färdiga komponenter för inloggning, registrering och användarhantering.
  - Snabb att integrera med Next.js.
  - Hanterad autentiseringsinfrastruktur minskar vårt eget underhållsarbete.
  - Stöd för organisationer och användarhantering.
  - Kan ge en snabb väg till en fungerande och konsekvent användarupplevelse.

* **Nackdelar:**
  - Beroende av en extern tjänst för autentisering och användarhantering.
  - Kostnaderna kan öka beroende på antal användare och valda funktioner.
  - Anpassningar av användarflöden kan kräva att vi arbetar inom Clersks komponenter och API.
  - Vi behöver planera hur användaridentiteter kopplas till vår egen kund- och orderdata.
  - En eventuell framtida migrering till en annan lösning behöver planeras.


### Alternativ E: Supabase

* **Fördelar:**
  - Integreras med Supabase PostgreSQL-databasen, vilket kan förenkla backend-arkitekturen.
  - Stöd för e-postlösenord, magic links, OTP och social inloggning.
  - Row Level Security (RLS) kan användas för att begränsa databasåtkomst baserat på användaridentitet.
  - Kan användas tillsammans med Next.js och serverbaserade autentiseringsflöden.
  - Passar bra om vi redan använder Supabase som databas och backendplattform.

* **Nackdelar:**
  - Kräver egen implementation av autentiseringsgränssnitt om vi vill ha ett helt anpassat UI.
  - RLS-policyer kan bli komplexa och kräver noggrann testning.
  - Rollbaserad behörighet för administratörer måste designas och implementeras.
  - Beroende av Supabase som plattform för autentisering och andra backendfunktioner.
  - Felaktigt konfigurerade RLS-policyer eller serveråtkomst kan leda till säkerhetsproblem.

---

## 3. Beslut
*Vilket alternativ valde vi och varför?*
Vi beslutar att använda **Alternativ A: NextAuth**. Detta för att den är välbeprövad och har stor ekosystem, vilket gör det lättara att hitta information. För NextAuth så behöver vi skapa egna login-sidor m.m. vilket vi tänker är en bra övningssak.

---

## 4. Konsekvenser

### Positiva konsekvenser
* Teamet får en standiserad metod för authentisering som integrerar bra med Next.js
* Det finns gott dokumentation så teamet kan lär sig lättare.
* Allt ingår inte från början i NextAuth vilket ger teamet en bra möjlighet att få öva på att skapa sidor och funktionalitet på egen hand.

### Negativa konsekvenser / Risker
* Det blir mer arbete att få ett färdigt resultat p.g.a. att man behöver skapa många sidor och funktioner på egen hand med NextAuth.
* Teamet måste säkerställer att admin och kunder har rätt behörighet när vi själva skapar rollerna.
* Alla gruppen måste förstå hur NextAuth fungerar så att inte enbart en person kan arbeta med authentisering.
* Det är en större risk för säkerhetsbrister när vi själva ska skapa de sidor och funktionalitet som inte ingår från början i NextAuth.


---

## 5. Hur vi verifierar beslutet
*Hur vet vi att beslutet var lyckat?*

- [ ] Det går att navigera till "rätt" kundsida.
- [ ] Obehöriga kommer inte åt vare sig admin eller andras kundsidor.
