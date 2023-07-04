## Zadanie: Currency Exchange
### 1. Pobieranie i wyświetlanie danych
Pobierz z backendu `/api/currencies` listę walut i wyświetl je w formie rozwijanej listy z możliwością wyboru.

### 2. Obliczanie wartości
* Obsłuż wysyłanie na backend danych do obliczeń: `{ amount, currency }`
* Dodaj endpoint `/api/exchange`, który przyjmuje JSON w postaci:\
  `{ amount: <amount PLN>, target: <currency> }`\
  i zwraca obliczoną wartość w złotówkach (pobierz poprzez API NBP obecny kurs waluty). Przykład zapytania: [http://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json](http://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json)

### 3. Dodawanie nowej waluty
Dodaj endpoint dla administratora systemu, który pozwoli na dodanie nowej waluty
