---
geometry: "left=2cm, right=2cm, top=2.5cm, bottom=2.5cm"
---
# Report
Naše aplikace se jmenuje: **Člověče, nezlob se! online s přáteli**

## Autoři:  
- **Adam Charvát** (Kapitán)
- Karolína Virágová

## Cíl/zadání projektu
Cílem aplikace je vytvořit online hru s figurkami a hrací kostkou, která umožňuje interakci mezi hráči v místnosti (roomce). Aplikace bude poskytovat herní rozhraní, ve kterém se hráči mohou připojit do místnosti a provádět tahy s figurkami.

Každý člen týmu má jinou funkcionalitu, a výsledná aplikace tedy bude kombinací dvou různých přístupů k ovládání herních prvků.

*Aplikací* se myslí spojená funkcionalita frontendu a backendu (pro jednodušší obecný popis), tyto dvě části jsou jasně odděleny, jak vyplývá z návrhu API k BE(popsáno v souboru 00_login_navrh.pdf).

## Odchylky od původního zadání
*Body zadání, jejichž implementaci jsme nestihli:*
- Barvy nejsou viditelné v lobby.
- Výměna herní desky nebyla implementována.
- Časovač herního kola nebyl implementován.
- Adam Charvát: Oproti mému návrhu ve Figmě byl zrušen mezikrok mezi výsledkovou tabulkou a herní deskou ("Přejít na výsledky") a výsledky se zobrazí rovnou po skončení hry.
- Adam Charvát: Šipky na herní desce (pro startovní a cílové pole), vycházelo z kritiky existujících řešení

## Rozdělení práce členů týmu na Výsledné implementaci (pouze FE)
Každý člen týmu implementoval vlastní frontend. Implementace FE probíhala do samostatných složek pojmenovaných loginem daného autora.

## Výsledná implementace (Adam Charvát)
**Kontrolní prezentace**
Na kontrolní prezentaci nebyly explicitně uvedené žádné nedostatky, ale v reportu z mailu bylo uvedeno:
- *Propojení GUI komponent: Demonstruje pouze částečně, k lepšímu hodnocení projektu je vhodné ještě vylepšit/rozšířit.*
- Rozhodl jsem se to pro jistotu ve své části vylepšit, např. rozdělením větších komponent na komponenty menší a implementace komunikace mezi nimi.
- Např. z komponenty herní desky BoardComponent byly oddělány figurky a jsou řešené samostatnou komponentou PieceComponent. To stejné taky pro kostku.
- 
**Frontend**
Implementoval jsem celý frontend v Angularu samostatně.
Odkazy na klíčové části FE (komponent je složka s .html + .ts + .scss):
- **Hlavní menu + Obrazovka pro zadání přezdívky:** /frontend-xcharv23/src/app/components/main-menu
- **Lobby:** /frontend-xcharv23/src/app/components/lobby
- **Herní plocha:** /frontend-xcharv23/src/app/components/board
- **Stavová oznámení:** /frontend-xcharv23/src/app/components/footer
- **Konec hry a skóre:** /frontend-xcharv23/src/app/components/result-table
Další, které nejsou součástí návrhu:
- **Kostka:** /frontend-xcharv23/src/app/components/dice
- **Figurka:** /frontend-xcharv23/src/app/components/piece

## Výsledná implementace (Karolína Virágová)

**Kontrolní prezentace**
Na kontrolní prezentaci nebyly žádné připomínky, kromě částečné prezentace propojení GUI komponent.

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


## Struktura projektu

/
+ backend/  
+ frontend-xcharv23/  
+ frontend-xvirag00/    
+ readme.txt 

## Testování

### Uživatel A
#### 1. Informace o uživateli:
- **Věková skupina:** 18-28
- **Pohlaví:** Žena
- **Technická zdatnost:** Střední (Intermediate)
- **Pracovní zaměření:** Product management

#### 2. Popis průběhu testu:
Test probíhal online, uživatel měl za úkol si se mnou zahrát Člověče nezlob se, tedy naplnit cíl projektu, bez jakékoliv instruktáže.
Uživatel komentoval, co mu není jasné, co ho zmátlo, co nepochopil, atd.

Při prvním otevření webové stránky byl uživatel zmatený, jelikož tam bylo vstupní pole "Enter game code" a on nevěděl, kde má vzít kód hry.
Uživatel si myslí, že by bylo lepší dát "Create game" tlačítko jako první a pod to vstupní pole pro kód s "Join game" tlačítkem.

Na další obrazovce (lobby) uživatel klikne rovnou na tlačítko "Start game", předtím než se druhý klient připojí.
Uživateli z UI není jasné, že má v lobby počkat, než se všichni připojí a až potom zahájit hru.
Uživatel očekává, že po zahájení hry se budou moct ostatní připojit a kód hry uvidí i ve spuštěné hře.

Herní desku a jak hýbat s figurkami, házet s kostkou pochopil uživatel rychle. Hru jsme dohráli bez dalších komplikací.

Zhodnocení: Uživatel nepochopil, jak se připojují ostatní hráči, jinak si myslí, že je UI intuitivní. Uživatel si myslí, že varianta řešení, kdy hýbe s figurkami manuálně je více interaktivní, dále mu přijde lepší varianta, kdy vymyslí kód místnosti, aby nebyl z náhodných znaků.

### Uživatel B
#### 1. Informace o uživateli:
- **Věková skupina:** 18-28
- **Pohlaví:** Žena
- **Technická zdatnost:** Pokročilá (Advanced)
- **Pracovní zaměření:** IT leader
#### 2. Popis průběhu testu:
Test probíhal online, uživatel měl za úkol si se mnou zahrát Člověče nezlob se, tedy naplnit cíl projektu, bez jakékoliv instruktáže.
Uživatel komentoval, co mu není jasné, co ho zmátlo, co nepochopil, atd.

Uživatel hned pochopil, jak funguje hlavní menu, nepopisoval stejné zmatení jako Uživatel A.
V lobby uživatel udělá to stejné, co Uživatel A, tedy si myslí, že může hru zahájit před připojením ostatních.

Uživatel popisuje, že pohyby na herní desce jsou nepřehledné a je těžké sledovat, co se děje.
Uživatel si myslí, že by bylo lepší, kdyby figurky jezdily pouze po bílých polích desky (ne šikmo), dále říká, že by bylo dobré, kdyby cílové políčko, na které se pohybuje figurka bylo zvýrazněné.

V případě, kdy uživatel má figurky na desce a jedna z nich je před domečkem a uživatel zároveň nehodil kostkou správný počet, aby se mohl do domečku dostat, tak by tato figurka neměla být zvýrazněna (neměla by blikat, že na ni může kliknout, když ve skutečnosti by přišel o tah).
Tato situace uživatele zmátla, na figurku kliknul a ta se nepohla a tah přešel na dalšího hráče.

Po delší době hraní uživatel popisuje, že dokáže lépe sledovat a chápat, co se děje na desce, ale celkově mu to přijde matoucí.

V průběhu testování byl identifikován bug, kdy se figurka nepohnula do domečku, i když podle čísla na kostce měla.
Hru jsme dohráli bez dalších komplikací.

Zhodnocení: Uživatel si myslí, že proces zahájení, vytvoření a připojení se do hry je jednoduchý. Přijde mu lepší manuální házení s kostkou, protože se stihne ve hře zorientovat a upozorní ho to, že je na tahu. Uvádí, že lidem se nechce vymýšlet kód místnosti, a proto je lepší vygenerovaný. 

#### Dva klíčové výsledky z pozorování (Uživatel A a B) - Adam Charvát:
- Zásadním problémem je spuštění hry před připojením ostatních. Do lobby je potřeba umístit text (vysvětlivku), že se čeká na připojení ostatních hráčů. Popřípadě umožnit připojení do existující hry, ale to je implementačně náročnější (nutná úprava backendu). Nebo po kliknutí v situaci, že je hráč v lobby sám a nemá zapnuté vyplnění boty, tak zobrazit pod tlačítkem červený text "Hra bude zahájena v režimu jednoho hráče.", pokud klikne znova, tak se hra zahájí.
- Lepší zvýraznění změn na herní desce, které uživatel popisuje (kolmý pohyb figurek a zvýraznění cílového pole), dále nezvýrazňovat figurky, s kterými uživatel nemnůže pohnout.

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

### Ponaučení uživatel C a D - Karolína Virágová:
#### Poznatek 1: 
Uživatel C si pochvaloval jednoduchý design. A však při prvním pohybu figurkou nevěděl, co má dělat. Ale podle zpráv si zobrazovaných mahoře uprostřed obrazovky si poradil. Uživatel nevěděl jestli má zadat kód mistnosti nebo ne při vytváření místnosti. 

#### Poznatek 2:   
Uživatel D si chválil možnost hrát s hru s přáteli a možnost zkopírování kódu místnosti. Orientace pro něj nebyla problém, také se mu líbilo automatické hození kostkou. A však při prvním pohybu  figurkou nevěděl, co má dělat. Nelíbilo se mu zobrazení kruhů v pozadí při hře.

#### Poznatek 3:   
Na otázku jaká varianta řešení se jim libala vice odpověděli:
(Uživatel C) mě se libila druhá varianta. kde byla možnost posunot figurky manuálně, ale nejsem ani prosti druhé variantě.b
Uživatel D se nemohl rozhodnout mezi variantami. Líbilo se mu, že je pozadí tmavé a automatický hod kostkou, ale preferuje automatický pohyb figurky.
