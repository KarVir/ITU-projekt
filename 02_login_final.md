---
geometry: "left=2cm, right=2cm, top=2.5cm, bottom=2.5cm"
---
# Report
Naše aplikace se jmenuje: **Člověče, nezlob se! online s přáteli**

## autoři:  
- **Adam Charvát** (Kapitán)
- Karolína Virágová

## Cíl/zadání projektu
Cílem aplikace je vytvořit online hru s figurkami a hrací kostkou, která umožňuje interakci mezi hráči v místnosti (roomce). Aplikace bude poskytovat herní rozhraní, ve kterém se hráči mohou připojit do místnosti a provádět tahy s figurkami.

Každý člen týmu má jinou funkcionalitu, a výsledná aplikace tedy bude kombinací dvou různých přístupů k ovládání herních prvků.

*Aplikací* se myslí spojená funkcionalita frontendu a backendu (pro jednodušší obecný popis), tyto dvě části jsou jasně odděleny, jak vyplývá z návrhu API k BE(popsáno v souboru 00_login_navrh.pdf).

## Rozdělení práce členů týmu na Výsledné implementaci (pouze FE)
Každý člen týmu implementoval vlastní frontend. Implementace Fe probíhala do samostatných složek nacházejíci se ve složce static, kde se nacházi složky pojmenované loginem daného autora. 

## Struktura projektu

/
+ backend/  
+ frontend-xcharv23/  
+ frontend-xvirag00/    
+ readme.txt 

## Informace o zapracování případných připomínek z Kontrolní prezentace
Na kontrolní prezentaci nrbyly žádné připomínky, kromě kromě částečné prezentace propojení GUI komponent.

### Propojení GUI komponent v React projektu
  Pro zajištění správné komunikace mezi těmito komponentami jsme využili mechanismus props (vstupních parametrů), který umožňuje předávat data a funkce mezi rodičovskými a dětskými komponentami.
  Stav jednotlivých komponent je spravován pomocí useState hooku, což umožňuje dynamickou změnu obsahu komponent v reálném čase. Pokud je potřeba, aby jedna komponenta reagovala na změny v jiné komponentě, používáme callback funkce, které se předávají jako props. Tyto callback funkce mohou aktualizovat stav v rodičovské komponentě, čímž se re-renderují i závislé komponenty.
  V aplikaci je propojení GUI komponent realizováno následujícím způsobem:

1. **Hlavní stránka (App.js)**:
   - Po spuštění aplikace se zobrazí hlavní stránka, která je implementována v komponentě `App.js`. Tato komponenta je zodpovědná za zobrazení úvodní obrazovky, na které jsou tlačítka pro navigaci do dalších částí aplikace.

2. **Komponenta Nickname**:
   - Po kliknutí na libovolné tlačítko na hlavní stránce se zobrazí komponenta `Nickname`. V této komponentě uživatel zadá své jméno. Po zadání jména a kliknutí na tlačítko se zobrazí komponenta `RoomInfo`.

3. **Komponenta RoomInfo**:
   - V `RoomInfo` uživatel vidí informace o místnosti a čeká na připojení všech hráčů. Jakmile jsou všichni hráči připojeni, vlastník místnosti může kliknout na tlačítko "Start", což spustí hru. Po stisknutí tohoto tlačítka se zobrazí komponenta `Board`, kde hra začne.

4. **Komponenta Board**:
   - Komponenta `Board` je hlavní herní obrazovka, kde hráči interagují s hrou (např. pohybují figurkami). Tato komponenta se zobrazí po stisknutí tlačítka "Start" v `RoomInfo`.

5. **Komponenta Ended**:
   - Po skončení hry se zobrazí komponenta `Ended`, která obsahuje výsledky hry. Tato komponenta také zobrazuje dvě tlačítka:
     - **Tlačítko "Zpět na hlavní stránku"**: Vrátí uživatele zpět na hlavní stránku.
     - **Tlačítko "Nová hra"**: Po stisknutí tohoto tlačítka se znovu zobrazí komponenta `Board`, čímž se spustí nová hra.


## Testování
### Uživatel A
#### 1. Informace o uživateli:
- **Věková skupina:**
- **Pohlaví:**
- **Technická zdatnost:** 
- **Pracovní zaměření:**  

#### 2. Popis průběhu testu:

### Uživatel B
#### 1. Informace o uživateli:
- **Věková skupina:**
- **Pohlaví:**
- **Technická zdatnost:** 
- **Pracovní zaměření:**

#### 2. Popis průběhu testu:

### Ponaučení uživatel A a B:
#### Poznatek 1: 
#### Poznatek 2:

### Uživatel C
#### 1. Informace o uživateli:
- **Věková skupina:** 52 let  
- **Pohlaví:** žena  
- **Technická zdatnost:** Mírně pokročilá, používá počítač a mobilní telefon k běžné administrativní práci, jako je e-mail, prohlížení webu a používání základních aplikací.
- **Pracovní zaměření:** Asistenka v mateřské škole  

#### 2. Popis průběhu testu:
Testování bylo zahájeno úvodem, kde byla účastnice seznámena s cílem testování a postupem. Následně byla poskytnuta aplikace, kterou měla otestovat. Během testování bylo prováděno pozorování a zaznamenáno zda byl úkol proveden bez pomoci nebo s ní. Účastnice se pomohla ptát, když nevěděla. Po skončení testování byla vyzvána k shrnuti problémů během používání aplikace narazila a jaké měla dojmy. Testování  probíhalo v klidném prostředí po dobu 30 minut.

### Uživatel D
#### 1. Informace o uživateli:
- **Věková skupina:** 25–30 let  
- **Pohlaví:** Muž  
- **Technická zdatnost:** Pokročilá, dovednosti v oblasti správy a údržby IT systémů, aplikací a zařízení. Je zkušený v používání softwarových nástrojů, včetně vývoje, administrace. Pravidelně se orientuje v nových technologiích
- **Pracovní zaměření:** IT technik
#### 2. Popis průběhu testu: 
Testování bylo zahájeno úvodem, kde byl účastník seznámen s cílem testování a postupem. Následně byla poskytnuta aplikace, kterou měl otestovat. Během testování bylo prováděno pozorování a zaznamenáno zda byl úkol proveden bez pomoci nebo s ní. Účastník se pomohl ptát, když nevěděla. Po skončení testování byla vyzvána k shrnuti problémů během používání aplikace narazila a jaké měla dojmy. Testování  probíhalo v klidném prostředí po dobu 30 minut.

### Ponaučení uživatel C a D:
#### Poznatek 1: 
Uživatel C si pochvaloval jednoduchý design. A však při prvním pohybu figurkou nevěděl, co má dělat. Ale podle zpráv si zobrazovaných mahoře uprostřed obrazovky si poradil. Uživatel nevěděl jestli má zadat kód mistnosti nebo ne při vytváření místnosti. 

#### Poznatek 2:   
Uživatel D si chválil možnost hrát s hru s přáteli a možnost zkopírování kódu místnosti. Orientace pro něj nebyla problém, také se mu líbilo automatické hození kostkou. A však při prvním pohybu  figurkou nevěděl, co má dělat. Nelíbilo se mu zobrazení kruhů v pozadí při hře.

#### Poznatek 3:   
Na otázku jaká varianta řešení se jim libala vice odpověděli:
(Uživatel C) mě se libila druhá varianta. kde byla možnost posunot figurky manuálně, ale nejsem ani prosti druhé variantě.b
Uživatel D se nemohl rozhodnout mezi variantami. Líbilo se mu, že je pozadí tmavé a automatický hod kostkou, ale preferuje automatický pohyb figurky.