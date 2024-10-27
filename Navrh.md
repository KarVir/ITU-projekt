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

#### Uživatel D

## Průzkum existujících řešení

### Aplikace 1 - Člobrdo
Odkaz na aplikaci: https://fis-public.s3-eu-west-1.amazonaws.com/clobrdo/index.html
 
Výhody:
- zobrazení figurek hráče. který je na tahu
- figurky nasazeny na začátku hry
- naznačení hodu figurky

Nevýhody:
- výběr pouze ze dvou možností figurek
- tlačítko QUIT na hlavní straně
- všechny figurky mohou být počítač

### Aplikace 2 Člověče nezlob se
Odkaz na aplikaci: https://www.vicko.cz/hry/online/clovece-nezlob-se/

Výhody:
- zobrazuje je historie hry
- lze si zapsat jméno k vybrané barvě figurek
- lze vybrat ze tří možností figurek 

Nevýhody:
- hráči musí hrát u jednoho počítače
- když se háže, kostkou je možnosti ji zastavit na číslici 6
- TODO: jedna nevýhoda

### Aplikace 3 - ...
Výhody:
- ...

Nevýhody:
- ...
### Aplikace 4 - ...
Výhody:
- ...

Nevýhody:
- ...

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
TODO: rozdelit

## Návrh

Návrh Gui jsem dělala ve Figmě. Jedná se o hrací desku s figurkami a kostkou. Jesliže hráč hodím kostkou, je mu umožněno jet figurko

![Máme pro vás dravé řešení](img/Screenshot%20from%202024-10-10%2014-15-43.png)

### Výběr technologií
#### Backend
Na prvním meetingu jsme se v týmu domluvili, že backend bude vytvořen v programovacím jazyce Python a bude využívat framework Flask pro HTTP komunikaci. Jelikož cílem aplikace je vytvořit multiplayerovou hru, pak bude nejlepší použít WebSockety pro obousměrnou komunikaci v reálném čase.

Hlavní knihovny:
- Flask
- Flask-SocketIO

#### Frontend
Frontend bude každý člen týmu vytvářet v jiném webovém frameworku:
- Adam Charvát: Vue.js
- Karolína Virágová: React

### Návrh API k BE