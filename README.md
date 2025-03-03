# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
<summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:
Ymaro Blue

#### Je startniveau:
Zwart

#### Je focus:
Responsive
 
</details>





## Je website

<details open>
<summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:
https://www.nike.com/nl/en/w/shoes-y7ok

### Verbetringen die ik wil toepassen
 #### Overzicht Pagina 
 - Header en footer goed namaken en responsive
 - Pagina responsive
 - filters scrollend aan de bovenkant toevoegen(mobiel)
 - Meer filters werkend maken
 - (search toevoegen?)*
 
 #### Detail Pagina
 - scrollende banner info
 - Add to bag micro interactie bij het scrollen
 - Als favoriet markeren
 - (reviews en reviews schrijven ?)*
 
 *Met genoeg tijd
 
#### Screenshot(s) van de eerste pagina (small screen): 
##### Overzicht schoenen pagina
 ![All-shoes](https://user-images.githubusercontent.com/82333022/132381212-39a2de0f-88de-49ed-ae9a-d6f18828e74e.jpg)
 ![filters](https://user-images.githubusercontent.com/82333022/132382012-467ff124-fecd-4a85-a4c3-30806a0e4675.jpeg)


#### Screenshot(s) van de tweede pagina (small screen):
##### Schoen Detail Pagina <Enter>
 ![shoe-detail](https://user-images.githubusercontent.com/82333022/132381245-5a3573a5-3455-4562-8bad-0aab52b075e4.jpeg)
 ![details](https://user-images.githubusercontent.com/82333022/132384039-d3f1e951-1142-4865-8c3b-ae3fcf0ab1bd.jpeg)


 
</details>





## Breakdownschets (week 1)

<details>
<summary>uitwerken na afloop 2e werkgroep</summary>

## Html verbeteringen
 
### article 
 ![article-breakdown](https://user-images.githubusercontent.com/82333022/132528635-26027941-0b2a-439d-bd37-a63227d9f708.jpg)

### filter opties kleur
 ![filter-breakdown](https://user-images.githubusercontent.com/82333022/132528650-6751a8f6-26a5-4ac0-974f-8b80a9984a4c.jpg)

### Footer
 ![footer-breakdown](https://user-images.githubusercontent.com/82333022/132528673-8039aa44-b9c3-41e9-b879-e5c6bfd0958f.jpg)

</details>





## Voortgang 1 (week 2)

<details>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken
Eigenlijk is alles wat ik wilde doen tot nu toe goed gegaan. Dus geen problemen
 
Het aanpassen van de header/nav is nu responsive en ook echt overgenomen ipv een kleine versie van de desktop.
| ![image](https://user-images.githubusercontent.com/82333022/133604939-c65d8adc-39f0-4e97-9d27-74543225b84c.png) | ![image](https://user-images.githubusercontent.com/82333022/133605679-f71a7c04-0c5c-48d7-a6ab-a449bc442e12.png) |

 
En datzelfde geldt voor de footer, maar die is nog niet helemaal klaar, maar hij is wel responsive.
| ![image](https://user-images.githubusercontent.com/82333022/133605805-7dba9600-a65f-4f72-ad7e-78dbac4f57fa.png) | ![image](https://user-images.githubusercontent.com/82333022/133605558-5007710f-3540-40d1-b472-192ed1839e5b.png) |





### Agenda voor meeting
samen met je groepje opstellen

| student 1      | student 2          | student 3    | student 4        |
| ---            | ---                | ---          | ---              |
| dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
| en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
| ...            | ...                | ...          | ...              |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- punt 1
- punt 2
- nog een punt
- ...

</details>





## Voortgang 2 (week 3)

<details>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
Het maken van de mobile menu inclusief logica bij het uitklappen en laten sliden van de zijkant ging wel goed. 
Dit heb ik ook toegepast voor de filter menu alleen komt deze van de onderkant ipv de zijkant.

| Mobile menu     | Filter menu          |
| ---            | ---                |
| <img src="images/screenshots/mobile-menu.jpg" alt="Mobile menu">  | <img src="images/screenshots/filter-menu.jpg" alt="Filter menu">             |


### Agenda voor meeting
samen met je groepje opstellen

| student 1      |
| ---            |
| Wanneer kan je beter grid gebruiken dan flex  |
| Beste manier om grid te gebruiken in een layout |
| Het maken van een carousel |
| ...            |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Met grid kan je makkelijker dingen controllen
- Met Flex geef je het stuur meer aan de browser en dus beter te gebruiken voor simpele dingen

</details>





## Toegankelijkheidstest (week 4)

<details>
<summary>uitwerken na test in 8e voortgang</summary>

### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:

#### Join us
De voice assistant zei bij de links steeds hetzelfde woord terwijl er 3 verschillende links stonden

Ik heb dit niet op kunnen lossen


#### Shoetype 
Shoe type links werken niet met tab

Tab-index toevoegen


#### firefox
Op firefox kwam er een random scrollbar bij de filters

Geen overflow:scroll gebruiken, maar overflow:auto en correcte css om ook op firefox scrollbar te verwijderen
</details>





## Voortgang 3 (week 4)

<details>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
Het maken van de search/results ging een beetje stroefjes omdat ik niet precies wist hoe ik dit moest implementeren(lists.js). Maar toen het uiteindlijk gelukt was, is hij er wel mooi uitgekomen. Ik wilde eerst ook de lists.js gebruiken voor het filteren, maar dit heb ik uiteindelijk toch zelf gedaan
En naast het maken van de search heb ik ook de filters werken gemaakt inclusief counts voor welke filters actief zijn.

| search     | results          |
| ---            | ---                |
| <img src="images/screenshots/search.jpg" alt="Mobile menu">  | <img src="images/screenshots/search-results.jpg" alt="Filter menu">             |


### Agenda voor meeting
Deze week niet echt vragen voor mij


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- comments plaasten
- puntjes op de i zetten

</details>





## Eindgesprek (week 5)

<details>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken
Alles was eigenlijk al af, maar het ging deze week vooral om het zetten van de puntjes op de i en comments plaatsten en een paar schoonheidsfoutjes in de css weghalen.
En daarnaast ook het bijvullen en aanpassen van het shoelist object

### Screenshot(s)

hier screenshot(s) van je eindresultaat

| pagina 1     | pagina 2          |
| ---            | ---                |
| <img src="images/screenshots/pagina1.jpeg" alt="Mobile menu">  | <img src="images/screenshots/pagina2.jpeg" alt="Filter menu">             |
</details>





## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp scrollbar verwijderen, maar functionaliteit behouden
2. https://realfavicongenerator.net/ Favicon maken
3. https://listjs.com/ voor het maken van de searchable shoes
4. https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects verwijderen van dubbele items in een object
5. Nike.nl voor alle images

</details>
