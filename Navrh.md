# Člověče, nezlob se! online s přáteli
Tým:
- Adam Charvát
- Karolína Virágová

TODO: Oznacit kapitana

## Uživatelský průzkum
Uživatel je člověk, který má rád deskové hry, ale má většinu přátel v zahraničí.
Chce si s nějakým takovým kamarádem zahrát Člověče, nezlob se! online přes internet.

### Požadavky uživatele:

POZOR: Před odevzdáním je nutné sumarizovat všechny uživatele do jenoho textu. Viz zadání projektu - "za celý tým proveďte shrnutí od všech členů týmu do jasné konkrétní detailní specifikace požadavků uživatele".

#### Uživatel A
Shromáždění do lobby před začátkem hry, v lobby vidět kdo bude hrát za jakou barvu. Pohled na desku ze shora (2D). Automatické přesouvání figurek (kliknutí na figurku a ona se posune na příslušné místo). Zobrazit upozornění a kostku (tlačítko pro hození), když je hráč na řadě. Výměnu herní desky považuje za důležitou. Nevyplňovat chybějící hráče boty. Na konci hry výsledná obrazovak s pořadím a výhercem.
#### Uživatel B
Možnost vytvořit místnost (lobby) s kódem pro připojení ostatních hráčů. Tlačítko pro hození kostky. Manuální přesouvání figurky (označení figurky a kliknutí na cílové políčko). Časovač herního kola (časový limit pro hráče). Výměnu herní desky z klasické 2-4 na 5-6 nepovažuje vůbec za důležité. Ideálně mít možnost vyplnit zbylé hráče boty. Zobrazovat aktuální skóre. In-game chat.

#### Uživatel C
Možnost vidět ostatní hráče před začátkem hry, ale barvu vybírat až po zahájení hry. Preferuje 3D pohled na herní desku, aby bylo vidět více detailů. Manuální přesouvání, kde hráč klikne na figurku a poté na cílové políčko pro přesun. Tlačítko pro hod kostkou vždy k dispozici, bez nutnosti čekat. Možnost výměny desky je výhodou, ale není zásadní.
Chce možnost hrát i s boty, pokud nejsou dostupní všichni hráči. Preferuje stručný přehled výsledků,spíše rychlé zobrazeni pořadí. Také preferuje restartovat hru bez nutnosti vytvářet novou místnost(lobby).
#### Uživatel D
Uvítal by rychlé připojení do hry bez lobby. aby byla hra co nejrychhleji spuštěna. Je pro pohled shora(2D), aby se hra dala jednoduše ovládat a byla přehledná. Automatické přesouvání po kliknutí na fugirku, což zrychlí tah. Kostka se hází automaticky, aby byla hra svižnější. Výměnu herní desky nepovažuje za důležité- stačí jedna pevná varianta desky. Nechce boty ani jiná Ai řešení, preferuje hru pouze s reálními hráči. Konec hry bez podrobného skóre, pouze vítěz, Nepotřebuje průběžné skóre během hry.
## Průzkum existujících řešení

### Aplikace 1: Člobrdo
Odkaz na aplikaci: https://fis-public.s3-eu-west-1.amazonaws.com/clobrdo/index.html

Inspirace:
- uživatelé nejsou nuceni přihlašovat se ani zadávat heslo pro vytvoření herní místnosti, což zrychluje zahájení hry.
- jednoduchý design zaměřený na základní herní mechanismy.

Výhody:
- rychlé spuštění hry bez nutnosti registrace.
- přehledný 2D pohled s jasně označenými startovními a cílovými poli.
- automatický pohyb figurek po kliknutí

Nevýhody:
- omezené možnosti interakce, chybí možnost chatu nebo přizpůsobení hry.
- jednoduchá grafika a absence podrobnějších animací, což může být nevýhodou pro hráče hledající vizuální zážitek.
### Aplikace 2: Člověče nezlob se
Odkaz na aplikaci: https://www.vicko.cz/hry/online/clovece-nezlob-se/

Inspirace:
- snadný přístup k online hře bez nutnosti registrace.
- možnost hrát proti botům i živým hráčům v jedné hře.

Výhody:
- rychlá a intuitivní hratelnost.
- přehledné rozhraní a jasná pravidla.
- podpora různých herních režimů.

Nevýhody:
- může být dlouhé čekání na nalezení náhodných hráčů.
- grafika je jednoduchá, což může ovlivnit zážitek ze hry.

### Aplikace 3: Člověče nezlob se - Multiplayer
Odkaz na aplikaci: https://www.zahraj.cz/online-hra/lovee-nehnevaj-sa-multiplayer/

Inspirace:
- výměna herní desky?
- lokalizace?

Výhody:
- velmi přehledné uživatelské rozhraní **před začátkem hry**
- UI je přívětivé pro děti (velikost ovládacích prvků a rozporcování UI na více obrazovek, kdy každá má jasný význam)
- možnost přepnout mezi boty a reálnými hráči a zvolit počet hráčů/botů (2-4)
- při hře figurky, na které lze kliknout blikají nebo se ukazuje ručička nad kostkou, když je hráč na tahu
- hráči si můžou vybrat avatar z předdefinovaných, který se pak zobrazuje vedle jména

Nevýhody:
- nelze hrát s konkrétními lidmi, match making je random
- nejde vyměnit herní deska, může být nepřehledná pro některé uživatele, kteří neznají tuto variantu
- chybí šipky pro označení startovního pole nebo pole, ze kterého se dostává do domečku
- místo "auto-mode" mohlo být napsáno, že se za hráče bude automaticky házet kostkou a hýbat figurkama
- maximální počet hráčů jsou 4
- aplikace nepodporuje lokalizaci

### Aplikace 4: Ludo Wizard Game
Odkaz na aplikaci: https://www.hryprodivky.cz/h/ludo-wizard-game-clovece-nezlob-se

Inspirace:
- vyplnění hesla místnosti je uživatelsky lepší způsob, než že je heslo vygenerováno a zobrazeno?
- hra s náhodnými hráči nemá u člověče nezlob se smysl

Výhody:
- možnost hrát buď s boty, nebo random hráči, nebo přáteli
- vytvoření místnosti pro hraní s přáteli funguje tak, že host vyplní heslo, které sdělí ostatním hráčům a ti ho zadají
- na desce jsou označené startovní a končené pole
- časovač pro hození kostky

Nevýhody:
- v případě hraní s random hráči je čekací doba dlouhá (> 5min), navíc se stává, že hráči opustí hru - otázou je, zda-li má tento mód vůbec smysl
- na jednom startovním poli může být více figurek od více hráčů (figurky se nevyhazují)
- figurky jsou fantasy postavičky, které lze těžko od sebe rozeznat (není jasné od které barvy je která figurka)

## Zadání
...
TODO: Asi to nějak lépe zformulovat a napsat...

V hlavním menu budou 2 tlačítka akce (připojit se do hry bude asi důležitější - takže větší, protože na to budeš klikat častěji)
1. Připojit se do hry
2. Vytvořit hru

Vytvořit hru by vygenerovalo nějaký textový kód, pomocí kterého se budou ostatní hráči připojovat do té dané hry/roomky.
Připojit do hry by jsi tam zadala ten kód.
...

---------
TODO smazat
Zadání
● popis požadované cílové aplikace,
● včetně klíčových částí FE
------------
Aplikace má za cíl projit hráče(zejména přátele) po celém světě. V hlavním menu se budou nacházet 2 tlačítka. 
1. tlačítko vytvořit hru 
- generovalo by textový kód, pomocí kterého  by se ostatní hrači připojovali do dané hry/roomky
2. tlačítko připojit se do hry
- po zadání kódu se zobrazí hrací deska a ostatní pripojení hráči
Nahrací desce se zobrazí figurky v modré, zelené, žluté a červené barvy a také tlačítko pro hod kostkou.

## Rozdělení práce v týmu na FE
Každý člen týmu bude vytvářet svůj frontend

## Návrh
Karolína Virágová
Návrh Gui jsem dělala ve Figmě. Jedná se o hrací desku s figurkami a kostkou.

![návrh](img/Screenshot%20from%202024-10-10%2014-15-43.png)

### Výběr technologií
#### Backend
Na prvním meetingu jsme se v týmu domluvili, že backend bude vytvořen v programovacím jazyce Python a bude využívat framework Flask pro HTTP komunikaci. Jelikož cílem aplikace je vytvořit multiplayerovou hru, pak bude nejlepší použít WebSockety pro obousměrnou komunikaci v reálném čase.

Hlavní knihovny:
- Flask
- Flask-SocketIO

#### Frontend
Frontend bude každý člen týmu vytvářet v jiném webovém frameworku:
- Adam Charvát: Vue.js
- Karolína Virágová: React- react, useState, useEffect 

### Návrh API k BE