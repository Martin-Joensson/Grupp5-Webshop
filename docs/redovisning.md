# 🎤 Redovisning – Webbshoppen (Fas 2)

Den här instruktionen hjälper er att planera och genomföra en professionell, strukturerad och rättvis slutredovisning där alla i gruppen deltar aktivt.

* **Datum för presentation:** Tisdag 13 oktober 2026
* **Tidsram:** 15–20 minuter per grupp (inklusive frågor)
* **Format:** Muntlig presentation och live-demo via delad skärm i Teams
* **Körschema:** Ett detaljerat tidsschema med presentationstider för respektive grupp publiceras i Teams inför dagen.

---

# 🧠 Förberedelse – Inför redovisningen

Inför redovisningen ska ni:

## 1. Strukturera presentationen
Dela upp presentationen i tre tydliga delar:
* **Del 1: Förberedelse & Planering** (ca 4–5 min)
* **Del 2: Utförande & Demo** (ca 7–8 min)
* **Del 3: Resultat & Reflektion** (ca 4–5 min)

> ⚠️ **Obligatoriskt:** Alla i gruppen ska prata minst en gång och ha en tydlig roll i presentationen.

## 2. Planera överlämningar
Bestäm i förväg:
* Vem som presenterar vilken del och visar skärmen.
* Hur ni lämnar över ordet smidigt mellan varandra.
* Vem som sköter klickandet under demon medan en annan teammedlem talar.

---

# 🚀 Utförande – Innehållet under presentationen

> 💡 **Viktig princip:**  
> Sammanfatta och gör det överskådligt hellre än att fastna i för många koddetaljer! Lyft fram kärnan i era beslut och vad ni har lärt er.

---

## 🔹 Del 1: Förberedelse & Planering

Berätta hur ni tänkte innan ni började skriva kod:

* **Val av Fas 1-bas:** Vilken kodbas valde ni att bygga vidare på och vilka anpassningar behövde ni göra?
* **Agilt arbete & Gruppkontrakt:** Hur fungerade era dagliga standups, möten och ansvarsfördelning?
* **Kravnedbrytning:** Visa er ifyllda [PRD.md](file:///c:/docLocal/Lexicon/FE26/grupparbete/PRD.md) – hur bröt ni ner kundens krav i User Stories och acceptanskriterier?
* **Projektstyrning:** Visa ert projektbräde i GitHub Projects – hur rörde sig era tickets från "To Do" till "Done"?

---

## 🔹 Del 2: Utförande & Live-Demo

Demonstrera er applikation och förklara de tekniska besluten bakom den.

### 🧱 Grundfunktionalitet (MVP-Demo)
Demonstrera live i webbläsaren:
* **Produktsidan:** Rutnät och responsiv design.
* **Detaljsidan:** Dynamisk rutt (`/products/[id]`) och hur data hämtas.
* **Sök & Filtrering:** Visa hur URL:ens `searchParams` uppdateras vid sökning och filtrering.
* **Paginering:** Hur bläddring fungerar via URL-parametrar.
* **Varukorg:** Översikten och layouten för kassan.

### 🚀 Valda Fördjupningsmoduler
Presentera de moduler ni valde att implementera:
* **Vad:** Vilka fördjupningsmoduler valde ni?
* **Varför:** Varför var dessa relevanta för er applikation och er grupp?
* **Hur:** Visa hur funktionen fungerar i praktiken och vilka paket/tjänster ni använde.

### ⚙️ Tekniska Arkitekturbeslut (ADR)
* Presentera er ADR (1–2 stycken) kopplad till era valda moduler.
* Vilka alternativ övervägde ni (t.ex. Zustand vs Context för varukorgen, eller Clerk vs Auth.js för inloggning)?
* Varför landade ni i ert slutgiltiga val och vilka kompromisser/lärdomar medförde det?

### 🤖 AI-användning & Arbetssätt
* Hur använde ni AI-verktyg i projektet (som bollplank, kodgenerering, felsökning)?
* Vilka fördelar respektive fallgropar upplevde ni med AI-assisterad utveckling?

---

## 🔹 Del 3: Resultat & Reflektion

Avsluta med en ärlig och professionell tillbakablick:

* **Framgångar:** Vad fungerade bäst? Vad är teamet mest stolt över i leveransen?
* **Utmaningar:** Vilka tekniska eller organisatoriska hinder stötte ni på och hur löste ni dem?
* **Lärdomar:** Vad har ni lärt er om Next.js/React respektive om agilt teamsamarbete?
* **Om ni hade ytterligare två veckor:** Vad skulle vara ert nästa drag i produktbackloggen?

---

# ✅ Checklista inför redovisningsdagen

Säkerställ att ni bockat av följande före den 13 oktober:

* [ ] Alla i gruppen har en aktiv talarroll under presentationen.
* [ ] Ni har provkört presentationen på tid minst en gång (måltid: 15 minuter).
* [ ] Applikationen bygger utan fel (`npm run build`) och körs gärna i produktionsläge (`npm run start`) under demon för maximal prestanda.
* [ ] Ni har en backup-plan om nätverket skulle svika (t.ex. skärmdumpar eller förinspelad video av nyckelflöden).
* [ ] Länken till ert GitHub-repo (med färdigställd `PRD.md`, `README.md` och `docs/`) är redo att delas i chatten.

---

# 💡 Tips för en lyckad presentation

* **Visa i stället för att bara berätta:** Låt webbläsaren arbeta – visa användarflödet från klick till resultat.
* **Öva överlämningarna:** Att smidigt bolla ordet mellan teammedlemmarna ger ett sammansvetsat och professionellt intryck.
* **Var stolta och ärliga:** Att reflektera öppet kring vad som var svårt eller vad som inte hanns med visar på hög mognad och stark problemlösningsförmåga.

Lycka till! 🚀
