
# ADR-003: Val av databas

* **Status:** Föreslagen
* **Datum:** 2026-09-23
* **Deltagare:** Martin, Josefin, Wilmer
* **Relaterad Issue/Ticket:** #16

---

## 1. Kontext & Problemställning
*Vilken utmaning eller vilket behov står vi inför? Vilka krav och begränsningar styr oss?*

Vi behöver hantera produkter i webbshoppen. Produkterna har tillhörande namn, pris, kvantititet, recensioner, osv som alla behöver vara kopplade till rätt produkt.

Vi behöver hantera roller på användare så att dom har rätt behörighet. (admin vs. customer)

---

## 2. Övervägda Alternativ

### *Val 1: databas:*


### Alternativ 1A: Supabase
* **Fördelar:**
  + Erbjuder en komplett plattform med färdiga verktyg utöver själva databasen.
  + Innehåller inbyggd autentisering (Auth), filhantering (Storage), realtidslyssnare och auto-genererade API:er.
  + Passar dig som vill ha en helhetslösning utan att bygga eget backend

* **Nackdelar:** 
  - Saknar automatisk "scale-to-zero".
  - Dyrare och mindre sömlös databas-branching.
  - Medför onödig overhead om man enbart vill ha en ren databas.


### Alternativ 1B: Neon
* **Fördelar:**
  + Renodlad, skalbar databastjänst utan extra kringtjänster.
  + Har stöd för databas-branchning (kopiera databasen för specifik utveckling eller PRs).
  + Passar dig som vill ha en separat, flexibel Postgres-databas och bygga resten själv

* **Nackdelar:**
  - Mindre komplett än superbase
  - Ingen inbyggda ekosystem av verktyg som med Supabase

---

### *Val 2: ORM:*


### Alternativ 2A: Prisma
* **Fördelar:**
  + Funktionsrik och säker ORM.
  + Eget schemaformat (`schema.prisma`).
  + Har en kraftfull databashanterare (**Prisma Studio**)
  + Trygg vid stor skala.

* **Nackdelar:**
  - Tyngre paketstorlekar och långsammare kallstart i serverless-miljöer


### Alternativ 2B: Drizzle
* **Fördelar:**
  + Lättviktig och "SQL-nära" ORM.
  + Koden skrivs i vanlig `TypeScript/JavaScript`.
  + Mycket snabba kallstarter.
  + Minimal påverkan på filstorlekar.

* **Nackdelar:**
  - Kräver goda kunskaper i SQL.
  - Kräver mer boilerplate kod för mer komplexa queries

---

## 3. Beslut

Vi beslutar att använda **Alternativ 1B: Neon** och **Alternativ 2A: Prisma**. Det ger oss möjligheter att lära oss om databas hantering utan för mycket boilerplate eller färdiga lösningar.

---

## 4. Konsekvenser

### Positiva konsekvenser
* Neon + Prism verkar vara en lösning som har en bra skärpunkt mellan komplexitet och kraftfullhet. 


### Negativa konsekvenser / Risker
* Ingen av oss har arbetat med Neon + Prisma förut så vi behöver förlita oss på dokumentation och lära oss under projektets gång.

---

## 5. Hur vi verifierar beslutet
*Hur vet vi att beslutet var lyckat?*

* [ ] Alla produkter finns i databasen
* [ ] Vi kan hämta alla produkter från databasen och visa på sidan.
* [ ] Det ska finnas en fungerande CRUD i databasen som kan användas med Adminsidans `add` och `edit` sidor.
