---
geometry: "left=2cm, right=2cm, top=2.5cm, bottom=2.5cm"
---
# Zadání

## Název a téma
Naše aplikace se jmenuje: **Člověče, nezlob se! online s přáteli**

## Tým:  
- Adam Charvát  
- Karolína Virágová  

TODO: Oznacit kapitana

## Uživatelský průzkum a specifikace
Uživatel je člověk, který má rád deskové hry, ale má většinu přátel v zahraničí.
Chce si s nějakým takovým kamarádem zahrát Člověče, nezlob se! online přes internet.

TODO: Možná více zkonkretizovat?

### Požadavky uživatele:

#### Uživatel A
Shromáždění do lobby před začátkem hry, v lobby vidět kdo bude hrát za jakou barvu. Pohled na desku ze shora (2D). Automatické přesouvání figurek (kliknutí na figurku a ona se posune na příslušné místo). Zobrazit upozornění a kostku (tlačítko pro hození), když je hráč na řadě. Výměnu herní desky považuje za důležitou. Nevyplňovat chybějící hráče boty. Na konci hry výsledná obrazovak s pořadím a výhercem.

#### Uživatel B
Možnost vytvořit místnost (lobby) s kódem pro připojení ostatních hráčů. Tlačítko pro hození kostky. Manuální přesouvání figurky (označení figurky a kliknutí na cílové políčko). Časovač herního kola (časový limit pro hráče). Výměnu herní desky z klasické 2-4 na 5-6 nepovažuje vůbec za důležité. Ideálně mít možnost vyplnit zbylé hráče boty. Zobrazovat aktuální skóre. In-game chat.

#### Uživatel C
Možnost vidět ostatní hráče před začátkem hry, ale barvu vybírat až po zahájení hry. Preferuje 3D pohled na herní desku, aby bylo vidět více detailů. Manuální přesouvání, kde hráč klikne na figurku a poté na cílové políčko pro přesun. Tlačítko pro hod kostkou vždy k dispozici, bez nutnosti čekat. Možnost výměny desky je výhodou, ale není zásadní.
Chce možnost hrát i s boty, pokud nejsou dostupní všichni hráči. Preferuje stručný přehled výsledků,spíše rychlé zobrazeni pořadí. Také preferuje restartovat hru bez nutnosti vytvářet novou místnost(lobby).

#### Uživatel D
Uvítal by rychlé připojení do hry bez lobby. aby byla hra co nejrychhleji spuštěna. Je pro pohled shora(2D), aby se hra dala jednoduše ovládat a byla přehledná. Automatické přesouvání po kliknutí na fugirku, což zrychlí tah. Kostka se hází automaticky, aby byla hra svižnější. Výměnu herní desky nepovažuje za důležité- stačí jedna pevná varianta desky. Nechce boty ani jiná Ai řešení, preferuje hru pouze s reálními hráči. Konec hry bez podrobného skóre, pouze vítěz, Nepotřebuje průběžné skóre během hry.

#### Shrnutí požadavků
Aplikace je určena pro interaktivní hraní deskové hry a vychází z různých požadavků uživatelů. Uživatelé chtějí možnost shromáždění do lobby před začátkem hry, kde budou vidět, kdo hraje za jakou barvu, s preferencí pro 2D pohled na herní desku. Automatické přesouvání figurek a házení kostkou jsou žádány pro zrychlení hry. Uživatel B chce možnost vytvářet místnosti s kódem a časovač pro tahy, zatímco uživatel C preferuje 3D pohled a manuální přesouvání figurek, přičemž chce hrát i s boty, pokud nejsou dostupní všichni hráči. Uživatel D by uvítal rychlé připojení bez lobby, s jednoduchou 2D grafikou a automatickým hodem kostkou, preferuje hru pouze s reálnými hráči a požaduje stručné zobrazení výsledků bez detailního skóre. Výměna herní desky je pro některé uživatele důležitá, zatímco jiní ji považují za nepodstatnou. Všechny požadavky směřují k rychlému, přehlednému a intuitivnímu hernímu zážitku.

## Průzkum existujících řešení

### Aplikace 1: Člobrdo
Odkaz na aplikaci: https://fis-public.s3-eu-west-1.amazonaws.com/clobrdo/index.html

#### Inspirace:
- uživatelé nejsou nuceni přihlašovat se ani zadávat heslo pro vytvoření herní místnosti, což zrychluje zahájení hry.
- jednoduchý design zaměřený na základní herní mechanismy.

#### Výhody:
- rychlé spuštění hry bez nutnosti registrace.
- přehledný 2D pohled s jasně označenými startovními a cílovými poli.
- automatický pohyb figurek po kliknutí

#### Nevýhody:
- omezené možnosti interakce, chybí možnost chatu nebo přizpůsobení hry.
- jednoduchá grafika a absence podrobnějších animací, což může být nevýhodou pro hráče hledající vizuální zážitek.

### Aplikace 2: Člověče nezlob se
Odkaz na aplikaci: https://www.vicko.cz/hry/online/clovece-nezlob-se/

#### Inspirace:
- snadný přístup k online hře bez nutnosti registrace.
- možnost hrát proti botům i živým hráčům v jedné hře.

#### Výhody:
- rychlá a intuitivní hratelnost.
- přehledné rozhraní a jasná pravidla.
- podpora různých herních režimů.

#### Nevýhody:
- může být dlouhé čekání na nalezení náhodných hráčů.
- grafika je jednoduchá, což může ovlivnit zážitek ze hry.

### Aplikace 3: Člověče nezlob se - Multiplayer
Odkaz na aplikaci: https://www.zahraj.cz/online-hra/lovee-nehnevaj-sa-multiplayer/

#### Inspirace:
- výměna herní desky?
- lokalizace?

#### Výhody:
- velmi přehledné uživatelské rozhraní **před začátkem hry**
- UI je přívětivé pro děti (velikost ovládacích prvků a rozporcování UI na více obrazovek, kdy každá má jasný význam)
- možnost přepnout mezi boty a reálnými hráči a zvolit počet hráčů/botů (2-4)
- při hře figurky, na které lze kliknout blikají nebo se ukazuje ručička nad kostkou, když je hráč na tahu
- hráči si můžou vybrat avatar z předdefinovaných, který se pak zobrazuje vedle jména

#### Nevýhody:
- nelze hrát s konkrétními lidmi, match making je random
- nejde vyměnit herní deska, může být nepřehledná pro některé uživatele, kteří neznají tuto variantu
- chybí šipky pro označení startovního pole nebo pole, ze kterého se dostává do domečku
- místo "auto-mode" mohlo být napsáno, že se za hráče bude automaticky házet kostkou a hýbat figurkama
- maximální počet hráčů jsou 4
- aplikace nepodporuje lokalizaci

### Aplikace 4: Ludo Wizard Game
Odkaz na aplikaci: https://www.hryprodivky.cz/h/ludo-wizard-game-clovece-nezlob-se

#### Inspirace:
- vyplnění hesla místnosti je uživatelsky lepší způsob, než že je heslo vygenerováno a zobrazeno?
- hra s náhodnými hráči nemá u člověče nezlob se smysl

#### Výhody:
- možnost hrát buď s boty, nebo random hráči, nebo přáteli
- vytvoření místnosti pro hraní s přáteli funguje tak, že host vyplní heslo, které sdělí ostatním hráčům a ti ho zadají
- na desce jsou označené startovní a končené pole
- časovač pro hození kostky

#### Nevýhody:
- v případě hraní s random hráči je čekací doba dlouhá (> 5min), navíc se stává, že hráči opustí hru - otázou je, zda-li má tento mód vůbec smysl
- na jednom startovním poli může být více figurek od více hráčů (figurky se nevyhazují)
- figurky jsou fantasy postavičky, které lze těžko od sebe rozeznat (není jasné od které barvy je která figurka)

### Závěry z průzkumu

1. **Rychlý a snadný přístup**: Všechny aplikace umožňují rychlé připojení bez nutnosti registrace, což výrazně zvyšuje uživatelský komfort. Hráči preferují možnost okamžitě začít hru, a proto je důležité mít jednoduchý proces vytváření herních místností.

2. **Intuitivní uživatelské rozhraní**: Přehledné a jasné rozhraní je klíčové pro pozitivní herní zážitek. Uživatelé si cení jednoduchého designu, který umožňuje snadnou orientaci v herních mechanismech, včetně jasného označení startovních a cílových polí.

3. **Možnosti interakce a přizpůsobení**: Hráči hledají možnosti, jak hru personalizovat a komunikovat s ostatními. Nedostatek interakčních prvků, jako je chat nebo možnost výběru konkrétních spoluhráčů, snižuje atraktivitu. Hráči chtějí mít možnost hrát s přáteli nebo proti botům podle svých preferencí.

### Inspirace pro vlastní návrh

1. **Zjednodušené přihlášení**: Implementovat systém, který umožní hráčům připojit se k hře bez nutnosti registrace. Uživatelé by měli mít možnost rychle vytvořit herní místnost s unikátním kódem, což je efektivní způsob, jak začít hrát, inspirovaný aplikací Člobrdo.

2. **Atraktivní a funkční uživatelské rozhraní**: Navrhnout uživatelské rozhraní s přehlednými ovládacími prvky a jasnými označeními. Důraz na grafiku by měl být na úrovni, která zaujme, ale zároveň nebude příliš složitá. Zároveň by mělo být možné přepínat mezi 2D a 3D pohledy, aby si hráči mohli vybrat preferovaný způsob zobrazení.

3. **Vylepšené interakce**: Zvažte implementaci funkcí, které by mohly zvýšit angažovanost hráčů a zábavnost herního zážitku. Mělo by se jednat o prvky, které hráčům umožní interakci a strategické plánování během hry. Včetně možnosti přizpůsobení herního prostředí nebo automatizace určitých aspektů hry, pokud není k dispozici dostatek hráčů. Například by bylo výhodné mít schopnost zaplnit herní místnost boty, pokud se nesejde plný počet hráčů, podobně jako to dělá aplikace Ludo Wizard Game.


## Zadání

### Popis požadované cílové aplikace

Aplikace bude sloužit pro interaktivní hraní deskové hry, přičemž bude reflektovat různorodé preference a požadavky uživatelů.

#### 1. Lobby a připojení hráčů
- Aplikace umožní vytvoření **lobby** (herní místnosti) před začátkem hry, kde budou hráči moci vidět, kdo se připojil a zahájit hru.
- Uživatelé se mohou připojit prostřednictvím **unikátního kódu místnosti**.

#### 2. Pohled na herní desku
- Hlavní herní pohled bude v **jednoduchém 2D formátu** pro zajištění přehlednosti.
- **Výměna herní desky** mezi různými variantami (např. klasická deska pro 4 hráče a verze pro 5–6 hráčů) bude možná, ale nebude podmínkou pro spuštění hry.

#### 3. Pohyb figurek a házení kostkou
- Aplikace nabídne dvě varianty pohybu figurek: 
  - **Automatický pohyb** – hráč klikne na figurku a ta se automaticky přesune na příslušné políčko.
  - **Tlačítko pro hod kostkou** bude dostupné všem hráčům, aby měli kontrolu nad hodem.

#### 5. Uživatelské rozhraní a notifikace
- Když bude hráč na tahu, zobrazí se **upozornění a aktivní tlačítko pro hod kostkou**, čímž se zvýší plynulost a přehlednost hry.

#### 6. Výsledková obrazovka
- Na konci hry se zobrazí **výsledková tabulka** s pořadím hráčů a zvýrazněným vítězem.
- Výsledky budou stručné a přehledné, přičemž zůstanou dostupné pro rychlý přehled o průběhu hry.

### Klíčové částí FE
#### Hlavní menu
- **Input box pro kód hry** – pro připojení ke hře.
- **Tlačítka**:
  - **Připojit** – připojení ke hře po zadání kódu.
  - **Vytvořit** – vytvoření nové hry.

#### Obrazovka pro zadání přezdívky
- **Input box** pro zadání přezdívky.
- **Tlačítko "Pokračovat"** – pokračování do lobby po zadání přezdívky.

#### Lobby
- **Seznam připojených hráčů** – zobrazení všech aktuálně připojených hráčů.
- **Možnost spuštění hry pro hostitele** – hostitel má tlačítko pro spuštění hry.

#### Herní plocha
- **Virtuální herní deska** připomínající klasickou verzi hry s barevnými startovními poli, cílovými poli a cestou kolem dokola.
- **Jména hráčů** – zobrazení jmen hráčů v rozích herní desky.
- **Interaktivní kostka** – tlačítko pro hod kostkou, které náhodně vygeneruje číslo.
- **Figurky hráčů** – ikony figurek, které se pohybují po herní ploše podle hodnoty hodu.

#### Overlay text
- **Stavová oznámení**:
  - "Jsi na tahu" – indikace, že je řada daný hráči.
  - "Červená vyhodila zelenou" – upozornění na události ve hře.
  - "Zbývá 30s do konce tvého kola" – odpočítávání času na tah.

#### Konec hry a skóre
- Po ukončení hry se zobrazí **tabulka s výsledky** a možnost tlačítko restartu hry nebo návratu na hlavní obrazovku.

### Rozdělení práce v týmu na FE
Každý člen týmu bude vytvářet svůj frontend

# Návrh

## Návrh GUI

### Karolína Virágová
Návrh Gui jsem dělala ve Figmě.


| ![návrh](tmp/img.png){ width=325px } | ![návrh](tmp/img2.png){ width=325px } |
|---------------------------------------|---------------------------------------|
| *Popis obrázku 1*                     | *Popis obrázku 2*                     |

| ![návrh](tmp/img3.png){ width=325px } | ![návrh](tmp/img4.png){ width=325px } |
|---------------------------------------|---------------------------------------|
| *Popis obrázku 1*                     | *Popis obrázku 2*                     |

| ![návrh](tmp/img5.png){ width=325px } |
|---------------------------------------|
| *Popis obrázku 1*                     |


### Adam Charvát
TODO!

## Výběr technologií
### Backend
Na prvním meetingu jsme se v týmu domluvili, že backend bude vytvořen v programovacím jazyce Python a bude využívat framework Flask pro HTTP komunikaci. Jelikož cílem aplikace je vytvořit multiplayerovou hru, pak bude nejlepší použít WebSockety pro obousměrnou komunikaci v reálném čase.

Hlavní knihovny:
- Flask
- Flask-SocketIO

### Frontend
Frontend bude každý člen týmu vytvářet v jiném webovém frameworku:  
- Adam Charvát: Vue.js  
- Karolína Virágová: React  

## Návrh API k BE

### Datové struktury

#### Player
```ts
interface Player {
    id: number, // unique identifier
    name: string
}
```
#### Piece
```ts
interface Piece {
    ownerId: number, // Player.id
    position: number | null;
    commonPosition: number | null;
}
```
#### Game
```ts
interface Game {
    board: {
        /* e.g. 40 */
        commonLength: number,
        /* e.g. 4 */
        houseLength: number
    },
    players: [Player],
    pieces: [Piece],
    nextPlayerId: number // Player.id
}
```

#### Collision Info
```ts
interface CollisionInfo {
    action: 'kicked' | 'denied',
    position: number,
    piece: Piece,
    issuedBy: number // Player.id
}
```

### Socket.IO události

#### Události vyvolané knihovnou

Event `connect`

Event `disconnect`

#### Vlastní události

Události jsou vyvolávané voláním funkce `emit(eventName, data)`;

**Event** `session:create`\
*Vytvoření místnosti (lobby)*\
Client -> Server
```ts
data: {
    // přezdívka vlastníka místnosti
    name: string
}
```

**Event** `session:created`\
*Oznámení o vytvoření místnosti (error?)*\
Client <- Server
```ts
// klíč k místnosti (identifikátor)
data: string
```

**Event** `session:join`\
*Žádost o připojení do místnosti*\
Client -> Server
```ts
data: {
    // klíč k místnosti
    sessionKey: string,
    // přezdívka připojujícího se klienta
    name: string
}
```

**Event** `session:joined`\
*Odpověď o úspěšném připojení do místnosti*\
Client <- Server
```ts
data: {
    // aktuálně připojení klienti ve stejné místnosti
    players: [Player]
}
```

**Event** `session:newClient`\
*Oznámení všem klientům v jedné místnosti (kromě nově připojeného), že se připojil nový klient*\
Room:Clients <- Server
```ts
// nově připojený klient
data: Player
```

**Event** `session:newClient`\
*Oznámení všem klientům v jedné místnosti (kromě nově připojeného), že se připojil nový klient*\
Room[old Clients] <- Server
```ts
// nově připojený klient
data: Player
```

**Event** `game:start`\
*Žádost o zahájení hry*\
Client -> Server
```ts
// žádná další data se neposílají na server
data: null
```

**Event** `game:started`\
*Oznámení o zahájení hry*\
Room[all Clients] <- Server
```ts
data: Game
```

**Event** `game:play`\
*Žádost o hození kostky - vygenerování náhodného čísla*\
Client -> Server
```ts
data: null
```

**Event** `game:diceRolled`\
*Oznámení všem v místnosti, že hráč hodil kostku*\
Room[all Clients] <- Server
```ts
// ID hráče, který hodil kostku
playerId: number,
// Číslo 1 - 6
dice: number
```

**Event** `game:movePiece`\
*Žádost o pohnutí figurky*\
Client -> Server
```ts
data: {
    // společná pozice figurky, s kterou se má pohnout
    commonPosition: number
}
```

**Event** `game:deployPiece`\
*Žádost o umístění nové figurky na startovní pole*\
Client -> Server
```ts
data: null
```

**Event** `game:update`\
*Žádost všem klientům o upravení datového modelu hry*\
Room[all Clients] <- Server
```ts
data: {
    collision: CollisionInfo,
    updatedPiece: Piece,
    nextPlayerId: number
}
```

**Event** `game:end`\
*Žádost všem klientům o upravení datového modelu hry*\
Room[all Clients] <- Server
```ts
data: {

}
```

## Flask Routes

/synchronize request

