Odkazy na klíčové části FE (Adam Charvát):
- Hlavní menu + Obrazovka pro zadání přezdívky: /frontend-xcharv23/src/app/components/main-menu
- Lobby: /frontend-xcharv23/src/app/components/lobby
- Herní plocha: /frontend-xcharv23/src/app/components/board
- Stavová oznámení: /frontend-xcharv23/src/app/components/footer
- Konec hry a skóre: /frontend-xcharv23/src/app/components/result-table
Další, které nejsou součástí návrhu:
- Kostka: /frontend-xcharv23/src/app/components/dice
- Figurka: /frontend-xcharv23/src/app/components/piece

Odkazy na klíčové části FE (Karolína Virágová):
- Hlavní menu: /frontend-xvirag00/src/app.js
- Obrazovka pro zadání přezdívky: /frontend-xvirag00/src/Nickname.js
- Lobby: /frontend-xvirag00/src/RoomInfo.js
- Herní plocha: /frontend-xvirag00/src/Board.js
- Konec hry a skóre: /frontend-xvirag00/src/Ended.js

Adresářová struktura:
/
├───readme.txt
│
├───backend
│   │   .gitignore
│   │   README.md
│   │   requirements.txt
│   │
│   ├───src
│   │       collision.py
│   │       constant.py
│   │       debug_console.py
│   │       debug_web.py
│   │       game.py
│   │       main.py
│   │       piece.py
│   │       player.py
│   │       session.py
│   │       session_manager.py
│   │
│   ├───static
│   │   │   debug_socketio.html
│   │   │
│   │   ├───xcharv23
│   │   │       PUT_FE_HERE
│   │   │
│   │   └───xvirag00
│   │           PUT_FE_HERE
│   │
│   └───templates
│           board.html
│
├───frontend-xcharv23
│   │   .editorconfig
│   │   .gitignore
│   │   angular.json
│   │   package-lock.json
│   │   package.json
│   │   README.md
│   │   tsconfig.app.json
│   │   tsconfig.json
│   │   tsconfig.spec.json
│   │
│   ├───.vscode
│   │       extensions.json
│   │       launch.json
│   │       tasks.json
│   │
│   ├───public
│   │       favicon.ico
│   │
│   └───src
│       │   index.html
│       │   main.ts
│       │   styles.scss
│       │
│       └───app
│           │   app.component.html
│           │   app.component.scss
│           │   app.component.ts
│           │   app.config.ts
│           │   app.routes.ts
│           │   _variables.scss
│           │
│           ├───components
│           │   ├───board
│           │   │       board.component.html
│           │   │       board.component.scss
│           │   │       board.component.ts
│           │   │
│           │   ├───dice
│           │   │       dice.component.html
│           │   │       dice.component.scss
│           │   │       dice.component.ts
│           │   │
│           │   ├───footer
│           │   │       footer.component.html
│           │   │       footer.component.scss
│           │   │       footer.component.ts
│           │   │
│           │   ├───lobby
│           │   │       lobby.component.html
│           │   │       lobby.component.scss
│           │   │       lobby.component.ts
│           │   │
│           │   ├───main-menu
│           │   │       main-menu.component.html
│           │   │       main-menu.component.scss
│           │   │       main-menu.component.ts
│           │   │
│           │   ├───piece
│           │   │       piece.component.html
│           │   │       piece.component.scss
│           │   │       piece.component.ts
│           │   │
│           │   └───result-table
│           │           result-table.component.html
│           │           result-table.component.scss
│           │           result-table.component.ts
│           │
│           ├───core
│           │       board.ts
│           │       connection.ts
│           │       data.ts
│           │       events.ts
│           │       game.ts
│           │       session.ts
│           │
│           └───services
│                   game.service.ts
│                   session.service.ts
│
└───frontend-xvirag00
    │   .gitignore
    │   package-lock.json
    │   package.json
    │   PUT_FE_HERE
    │   README.md
    │
    ├───public
    │       favicon.ico
    │       index.html
    │       logo192.png
    │       logo512.png
    │       manifest.json
    │       robots.txt
    │
    └───src
            App.css
            App.js
            App.test.js
            Board.css
            Board.js
            coordinates.js
            Ended.css
            Ended.js
            index.css
            index.js
            logo.svg
            Nickname.js
            reportWebVitals.js
            RoomInfo.css
            RoomInfo.js
            setupTests.js
