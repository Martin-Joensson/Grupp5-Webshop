# 🤝 Gruppkontrakt: Titanium Brown Bears

| Information | Detaljer |
| :--- | :--- |
| **Projekt** | Webbshoppen – Kundportalen (Fas 2) |
| **Period** | 21 september 2026 – 13 oktober 2026 (v. 39 – v. 42) |
| **Primär kommunikation** | Gruppens egen kanal i Microsoft Teams |
| **Projektstyrning** | GitHub Projects |
| **Motto** | Fuzzy but Solid |
| **Referenser** | [PRD.md](./PRD.md) \| [ADR-mall](./ADR-mall.md) \| [Domänordlista](./GLOSSARY.md) |

---

## 🕒 1. Tid, Närvaro & Engagemang

För att skapa ett tryggt och förutsägbart arbetsklimat har vi kommit överens om följande:

* **Daily Standup:** Gruppen bestämmer vid kontraktsskrivningen en fast tid **mellan kl. 08:00 och 09:00**. Denna tid är obligatorisk och ska hållas varje dag (såvida inget akut inträffar). Mötet hålls i **gruppens egen kanal i Teams** (max 15 minuter) där alla svarar på:
  1. *Vad gjorde jag igår?*
  2. *Vad ska jag göra idag?*
  3. *Har jag några hinder (blockers) där jag behöver hjälp?*
  * **Vår spikade standup-tid:** Kl. **08:45**
* **Kärntid:** Vi förväntas vara tillgängliga för samarbete, parprogrammering och snabba frågor i **gruppens Teams-kanal** mellan kl. **09:00** och **16:00**.
* **Frånvaro & Förhinder:** Om någon blir sjuk eller får förhinder ska detta meddelas i **gruppens Teams-kanal** senast **30 minuter innan vår valda standup-tid**.
* **Ambitionsnivå i gruppen:**  
"Enough to get a job, not enough to burn out."
"Vi vill satsa på en stabil kärna med lite extra funktionalitet och bra användarflöden. Något som vi är stolta över att visa upp i våra portfolios."

---

## 🛠 2. Agilt Arbetssätt & Planering

Vi jobbar strukturerat för att behålla överblicken och undvika stress:

* **Sprintar:** Vi rekommenderar sprintar om **5** arbetsdagar (veckobaserade).
* **Sprint Planning:** Varje måndag kl. **9:00 - 10:00** går vi gemensamt igenom backloggen och fördelar veckans uppgifter.
* **Issues / Tickets:** Inget arbete påbörjas utan en tillhörande Issue på GitHub.
  * Varje Issue ska ha en tydlig beskrivning kopplad till [PRD.md](./PRD.md) samt en "Definition of Done".
* **Projektbräde:** Vi använder **GitHub Projects** och uppdaterar kolumnerna (*Product Backlog, Sprint Backlog (with sprint goal), In Progress, In Review, Done*) i realtid. En person bör inte ha mer än en sak "In progress" i taget. Innan du börjar på en ny issue, kolla om något ska reviewas.
* **Roterande Sprint Lead (Scrum Master):**  
  För att dela på ansvaret och ge alla erfarenhet av agilt ledarskap roterar vi rollen som *Sprint Lead* varje vecka. Sprint Lead öppnar mötena, håller koll på klockan (max 15 min standup) och ser till att GitHub Projects är uppdaterat:
  * **Vecka 39 (Sprint 1 - Uppstart & PRD):** `Gabriel`
  * **Vecka 40 (Sprint 2 - MVP-utveckling):** `Josefin`
  * **Vecka 41 (Sprint 3 - Moduler & Förfining):** `Wilmer`
  * **Vecka 42 (Sprint 4 - Slutleverans & Demo):** `Martin`

---

## 🤖 3. AI-Policy & Kodkultur

Hur vi använder AI-verktyg på ett sätt som gynnar hela gruppens lärande:

* **Inriktning för AI-användning:**
  * [ ] **Rådgivande:** Vi använder AI som ett bollplank för logik och felsökning, men skriver koden manuellt.
  * [X] **Middle road:** Vi använder AI som ett bollplank men också gör att mindre kodblock eller för att göra repetativa uppgifter. Den som checkar in koden ansvarar för att kunna förklara koden. 
  * [ ] **Generativ med full förståelse:** Vi använder AI för att generera kodblock, men den som checkar in koden ansvarar för att kunna förklara exakt vad den gör för resten av gruppen.
* **Skydd mot "AI-dumping":**
  * Ingen teammedlem får checka in stora AI-genererade kodsjok eller ändra applikationens grundarkitektur utan att först ha förankrat det med gruppen.
  * Den som pushar kod ska kunna förklara koden rad för rad för vem som helst i teamet på begäran.
* **Code Reviews:** Innan en Pull Request (PR) mergas till `main` ska minst **2** annan teammedlem aktivt granska och godkänna koden.
* **Kunskapsdelning (60-minutersregeln):** Om någon kör fast i mer än **60** minuter ber man om hjälp i gruppens Teams-kanal eller startar en parprogrammeringssession.

---

## 🌿 4. Git-strategi, Säkerhet & Miljövariabler

För att undvika trasig kod och läckta lösenord:

* **Branching:** Vi skapar alltid nya feature-branches från `main`.  
  *Namnstandard:* `feature/[issue-nr]-[kort-beskrivning]` (t.ex. `feature/12-search-filter`).
* **Pull Request (PR) & Merge-flöde (Branschstandard):**
  1. **Skapa PR:** När en feature är klar skapar författaren en PR mot `dev` och länkar till relaterad issue.
  2. **Code Review & Approval:** Minst **2 andra teammedlemmar** måste granska koden och ge ett formellt **"Approve"** på GitHub. Ingen mergar sin egen PR utan godkännande.
  3. **Vem som mergar:** Det är **författaren själv (Author)** som klickar på "Merge pull request" när koden är godkänd, för att ta fullt ansvar för att den egna koden landar säkert i `dev`.
  4. I slutet på veckan mergar vi tillsammans `dev` till `main`.
* **Merge i Par (vid konflikter eller större arkitekturändringar):**
  * Om en PR innehåller större arkitekturskiften (t.ex. byte av databas) eller om merge-konflikter uppstår, mergar vi **aldrig ensamma**. Vi öppnar gruppens Teams-kanal och löser konflikten tillsammans via delad skärm.
* **Inga Force Pushes:** Vi gör aldrig `git push --force` till delade branches.
* **Säkerhet & Miljövariabler (`.env.local`):**
  * Vi pushar **ALDRIG** `.env.local` eller hemliga API-nycklar (t.ex. Clerk, Supabase, Stripe) till GitHub.
  * Den som lägger till en ny miljövariabel ansvarar för att uppdatera `.env.example` i repot och meddela gruppen i vår Teams-kanal.
* **Frekventa commits:** Vi pushar vår kod ofta (minst en gång per arbetsdag) i små, hanterbara commits.

---

## 💬 5. Kommunikation & Eskaleringsplan (Om någon tystnar)

Vi lovar att bemöta varandra professionellt och schysst:

* **Feedback:** Vi ger konstruktiv feedback på koden, aldrig på person.
* **Beslut:** Vi strävar efter konsensus. Vid oenighet röstar vi, och vid dött lopp rådfrågar vi läraren.
* **Eskaleringsplan om en teammedlem uteblir utan förvarning (AWOL-trappan):**
  1. **Steg 1 (30–45 min efter utebliven standup):** Teamet skickar ett personligt DM i Teams för att stämma av läget.
  2. **Steg 2 (Efter lunch kl. 13:00):** Gruppen håller en kort avstämning: *"Hur påverkas sprinten?"*. Personens eventuella blockerande tickets pausas eller omfördelas så att ingen annan hindras i sitt arbete.
  3. **Steg 3 (Slutet av dagen utan kontakt):** Gruppen kontaktar handledare/lärare gemensamt via Teams för att få stöd och reda ut situationen.

---

## ✍️ Underskrifter / Bekräftelse

Genom att skriva under/bekräfta godkänner vi att arbeta enligt detta kontrakt:

* **Medlem 1:** Martin – 21/9-2026
* **Medlem 2:** Josefin – 22/9-2026
* **Medlem 3:** Wilmer – 22/9-2026
* **Medlem 4:** [Namn] – [Datum]

---
*Detta kontrakt är ett levande dokument och kan revideras vid gruppens sprint-retrospectives om hela teamet är enigt.*
