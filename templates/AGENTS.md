# AGENTS.md

<Jedno zdanie: czym jest projekt i jaki ma stack.>

## Stack (ustalony, nie zmieniać bez pytania)

- <język / framework>
- <narzędzia, CMS, baza, deploy>

## Commands

- `<install>`
- `<dev>`
- `<build / test>`

## Layout

- `<dir>`: <co tu leży>

## Conventions

- <reguła, której nie widać z samego kodu>
- Brak nowych zależności poza ustalonym stackiem bez zapytania usera.
- Nie dodawaj treści placeholder typu "Lorem ipsum" w commitowanym kodzie — użyj wyraźnie oznaczonych TODO albo zapytaj usera o realną treść.
- Nie wymyślaj danych (liczby, metryki, nazwy, cytaty) — jeśli user ich nie podał, zostaw TODO albo zapytaj.

## Gotchas

- <rzecz, którą łatwo zepsuć>

## Testy i formatowanie

- Przed uznaniem zadania za skończone uruchom `<komenda testów>`.
- Dla nowej logiki bez UI (helpery, reguły) dodaj kolokowany test, wzorując się na istniejących.
- Formatter (`<komenda>`) jest źródłem prawdy dla stylu — uruchom go przed commitem. Linter nie duplikuje reguł stylistycznych.
- Opcjonalnie: hook commit-msg (commitlint) wymusza Conventional Commits, zamiast polegać na samej konwencji w dokumentacji.

## Deploy i CI

- Czerwony CI traktuj tak samo jak czerwony build — nie mergować.
- Testy, które nie biegną w buildzie hosta (np. unit, e2e), muszą biec w CI jako wymagany check na PR.
- Dependabot otwiera PR-y z aktualizacjami — wymagają review usera, nie mergować automatycznie.
- Zmienne środowiskowe ustawia się w dashboardzie hosta (per environment), nie w repo. `.env.example` to tylko wzór dla lokalnego dev.

## Zakres i granice

- Nie publikuj (deploy, push do zdalnego repo) bez wyraźnej zgody usera na dany krok.
- Nie zmieniaj ustalonego stacku, struktury ani zasad projektu bez pytania — to decyzje usera, nie agenta.
- Przy niejasności co do treści (dane liczbowe, nazwy, zdjęcia) — pytaj usera, nie zgaduj.

Kiedy decydować samemu, a kiedy pytać:

- **Decyduj sam, bez pytania**: treść commit message, nazwy branchy, drobne konwencje kodu (formatowanie, nazwy zmiennych/plików) w ramach ustalonego stacku.
- **Pytaj, gdy jest więcej niż jedno rozsądne podejście**: wybór konkretnego wzorca/biblioteki/podejścia w ramach ustalonego stacku (np. jak rozbić plik na moduły) — jeśli nie ma jednego oczywistego rozwiązania, zatrzymaj się i zapytaj zamiast zgadywać.

## Model routing (agent AI)

- Boilerplate, testy, mechaniczne rename/refaktor — tani/szybki model wystarcza.
- Decyzje architektoniczne, routing, integracje, cokolwiek o dużym koszcie błędu — mocniejszy model.

## Styl komunikacji agenta

- W czacie: zwięźle, bez lania wody, bez grzecznościowych zwrotów — meritum, nie fluff. Nie dotyczy kodu, commitów i opisów PR — te zawsze pełnym, poprawnym językiem.
- Nie skracaj kosztem treści technicznej — liczby, nazwy plików, konkretne komendy zawsze zostają.

## Commit messages

- Konwencja: [Conventional Commits](https://www.conventionalcommits.org/) — prefiks `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `test:`, `ci:`. Subject po angielsku, tryb rozkazujący, bez kropki na końcu.
- Body tylko gdy "why" nieoczywiste z samego diffu (nie opisuj "co" — to widać w kodzie).
- Skill `/caveman-commit` generuje message w tym samym formacie (Conventional Commits, ultra-skompresowany) — użyj go swobodnie, nie zastępuje tej konwencji, tylko ją realizuje szybciej.
