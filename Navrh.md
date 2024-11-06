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
Možnost vidět ostatní hráče před začátkem hry, ale barvu přiřadit náhodně. Preferuje 3D pohled na herní desku, aby bylo vidět více detailů. Manuální přesouvání, kde hráč klikne na figurku a poté na cílové políčko pro přesun. Tlačítko pro hod kostkou vždy k dispozici, bez nutnosti čekat. Možnost výměny desky je výhodou, ale není zásadní.
Chce možnost hrát i s boty, pokud nejsou dostupní všichni hráči. Preferuje stručný přehled výsledků,spíše rychlé zobrazeni pořadí. Také preferuje restartovat hru bez nutnosti vytvářet novou místnost(lobby).

#### Uživatel D
Uvítal by rychlé připojení do hry bez lobby. aby byla hra co nejrychhleji spuštěna. Je pro pohled shora(2D), aby se hra dala jednoduše ovládat a byla přehledná. Automatické přesouvání po kliknutí na figurku, což zrychlí tah. Kostka se hází automaticky, aby byla hra svižnější. Výměnu herní desky nepovažuje za důležité- stačí jedna pevná varianta desky. Nechce boty ani jiná Ai řešení, preferuje hru pouze s reálními hráči. Konec hry bez podrobného skóre, pouze vítěz, Nepotřebuje průběžné skóre během hry.

### Shrnutí požadavků

#### 1. Lobby a připojení hráčů
- **Lobby**: Většina uživatelů preferuje shromáždění do lobby před začátkem hry. Lobby má zobrazovat seznam hráčů a jejich zvolené barvy, případně barvu přiřadit náhodně se začátkem hry.
- **Kód pro připojení**: Hráči se připojí po zadání kódu do stejné místnosti.
- **Restart hry**: Uživatelé požadují možnost restartovat hru bez nutnosti vytvářet novou místnost.

#### 2. Herní desku
- **2D pohled**: Preferovaný pohled shora.
- **Výměna herní desky**: Pro některé uživatele je možnost výměny herní desky důležitá, například varianta pro 5–6 hráčů oproti klasické desce pro 2–4 hráče. Jiní uživatelé tuto možnost nepovažují za zásadní a vystačí si s jednou pevnou verzí desky.

#### 3. Pohyb figurek a házení kostkou
- **Pohyb figurek**:
  - **Automatický pohyb**: Preferovaný některými uživateli. Hráč klikne na figurku, která se automaticky přesune na příslušné místo na desce.
  - **Manuální pohyb**: Požadovaný jinými uživateli. Hráč klikne na figurku a následně na cílové políčko pro přesun.
- **Házení kostkou**:
  - **Manuální hod kostkou**: Uživatelé preferují mít tlačítko pro hod kostkou, které se zobrazí, když je hráč na řadě. Někteří požadují, aby tlačítko bylo vždy k dispozici.
  - **Automatické házení kostkou**: Preferováno pro zrychlení hry. Kostka se automaticky vrhá, když je hráč na tahu.

#### 4. Upozornění a časovač
- **Upozornění pro hráče na tahu**: Notifikace a aktivní tlačítko pro hod kostkou, když je hráč na tahu.
- **Časovač tahu**: Možnost nastavení časového limitu na tah pro urychlení hry.

#### 5. Výsledková obrazovka
- **Konečný výsledek hry**: Na konci hry se zobrazí tabulka s výsledky, která bude ukazovat pořadí hráčů a vítěze. Pro některé uživatele stačí stručné zobrazení vítěze bez podrobného skóre, zatímco jiní preferují přehledné pořadí.

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

### Závěry z průzkumu (Aplikace 3,4)

1. Díky průzkumu jsme přišli na další způsob vytvoření kódu místnosti, kdy uživatel vymyslí kód sám, může to být pro něj pohodlnější, ale také ne, záleží na provedení - v aplikaci to bylo řešené špatně, jelikož se objevil input field s nadpisem "Password", chvíli jsem nevěděl, co se po mně chce, až pak mi došlo, že si mám vymyslet heslo místnosti - stačilo tam napsat "Create Room/Invite Password".
2. Hra s náhodnými hráči není pro "Člověče, nezlob se" vhodná. Navíc náš uživatel chce hrát se svými přáteli, takže pro nás nemá tento mód vůbec smysl. Na druhou stranu nám tento herní mód ukázal důležitost časovače herního kola, aby byla zachována plynulost hry.
3. Jelikož náš uživatel bude chtít hrát s kamarády ze zahraničí, pak přichází do úvahy lokalizace a výměna herní desky. Zahraniční varianta desky "Člověče, nezlob se" (Ludo) může být pro některé uživatele nepřehledná a to samé se dá říci o té verzi, která je známá v ČR. Implementace client-side výměny desky za jinou variantu, by nebyla možná, protože používá jiný počet polí. Lokalizaci lze jednoduše vyřešit tak, že hra bude pouze v angličtině, uživatel, který má spoustu přátel v zahraničí s největší pravděpodobností bude umět anglicky.
4. Bude lepší, když UI bude rozdělené do více částí, které na sebe logicky navazují, než aby se uživateli zobrazil formulář s 10 vyplňovacími poli.

### Inspirace pro vlastní návrh (Aplikace 3,4)

1. Každý zkusíme vyřešit jinou variantu vytvoření kódu místnosti:\
Adam: kód je vygenerován serverem\
Karolína: kód vymyslí a zadá uživatel
2. Časovač herního kola pro hození kostky.
3. Rozporcování UI na více obrazovek s jedním významem - např. obrazovka pro vyplnění přezdívky s tlačítkem "Pokračovat".

## Zadání
### Popis požadované cílové aplikace
TODO

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
- Adam Charvát: Angular
- Karolína Virágová: React

## Návrh API k BE

### Datové struktury

#### Player
```ts
interface Player {
    // Unikátní identifikátor hráče
    id: number,
    // Přezdívka hráče
    name: string,
    // Barva - red, green, blue, yellow
    color: string
}
```
#### Piece
```ts
interface Piece {
    // ID hráče, který vlastní figurku
    ownerId: number, // Player.id
    // Pozice vzhledem k celkové cestě, kterou musí figurka ujít
    // Pokud je pozice null, pak figurka ještě nebyla umístěna na herní desku
    // Pokud je pozice >= Game.commonLength, pak je figurka v domečku
    position: number | null;
    // Pozice v rámci společného místa herní desky,
    // pokud je společná pozice null, figurka ještě nebyla umístěna na herní desku, nebo je v domečku
    commonPosition: number | null;
}
```
#### Game
```ts
interface Game {
    board: {
        /* Délka společného místa na desce, klasicky 40 polí */
        commonLength: number,
        /* Délka domečku, klasicky 4 pole */
        houseLength: number,
        // Maximální počet hráčů
        maxPlayers: number,
        // Figurky
        pieces: [Piece],
    },
    // Hráči v místnosti
    players: [Player],
    // Hráč, který je na tahu
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

### Události vyvolané knihovnou

Event `connect`

Event `disconnect`

### Události vyvolané klientem

Události jsou vyvolávané voláním funkce `emit(eventName, payload, callback)`. Klient dostane `response` jako argument callbacku.

**Event** `session:create`\
*Vytvoření místnosti (lobby)*
```ts
payload: {
    // přezdívka vlastníka místnosti
    name: string
}

response: {
    // Klíč k nově vytvořené místnosti
    key: string,
    // Vlastník místnosti
    owner: Player,
    // Klienti v místnosti (zatím jen jeden)
    players: Player[]
}
```

**Event** `session:join`\
*Žádost o připojení do místnosti*
```ts
payload: {
    // Klíč k místnosti
    key: string,
    // Přezdívka připojujícího se klienta
    name: string
}

response: {
    // Klíč k místnosti
    key: string,
    // Vlastník místnosti
    owner: Player,
    // Nově připojený hráč
    me: Player,
    // Aktuálně připojení klienti ve stejné místnosti
    players: Player[]
}
```

**Event** `game:start`\
*Žádost o zahájení hry*

**Event** `game:play`\
*Žádost o hození kostky - vygenerování náhodného čísla*

**Event** `game:movePiece`\
*Žádost o pohnutí figurky*
```ts
payload: {
    // Společná pozice figurky, s kterou se má pohnout
    commonPosition: number
}
```

**Event** `game:deployPiece`\
*Žádost o umístění nové figurky na startovní pole*
```ts
data: null
```

### Události vyvolané serverem

Události jsou vyvolávané voláním funkce `emit(eventName, data)`.

**Event** `session:joined`\
*Oznámení všem klientům v jedné místnosti (kromě nově připojeného), že se připojil nový klient*
```ts
// Nově připojený klient
data: Player
```

**Event** `game:started`\
*Oznámení o zahájení hry všem klientům v místnosti*
```ts
// Data potřebná pro vykreslení herní desky GUIčkem
data: Game
```

**Event** `game:diceRolled`\
*Oznámení všem v místnosti, že hráč hodil kostku*
```ts
// ID hráče, který hodil kostku
playerId: number,
// Číslo 1 - 6
dice: number
```

**Event** `game:updated`\
*Žádost všem klientům o upravení datového modelu hry*
```ts
data: {
    // Informace o kolizi pokud nastala
    collision: CollisionInfo | null,
    // Aktualizovaná figurka, kterou je potřeba nahradit v datovém modelu
    updatedPiece: Piece,
    // Další hráč na tahu
    nextPlayerId: number
}
```

**Event** `game:ended`\
*Žádost všem klientům o upravení datového modelu hry*\
Room[all Clients] <- Server
```ts
data: {

}
```

## Flask Routes

/synchronize request

