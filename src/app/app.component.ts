import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { DaneOsobowe } from './dane_osobowe';
// import { Osoba } from './osoba';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//Zad 3.
// export class AppComponent implements OnInit {
//   // zmienna globalna dla komponentu
//   title = 'projekt1';
//   ngOnInit(): void {
//     console.log('Witaj świecie!!!');
//     console.log(this.title);
//     const stala = 'to jest stała której już nie idzie zmienić';
//     console.log('stala:', stala);
//     let zmienna1 = '';
//     zmienna1 = 'Pusty tekst';
//     zmienna1 = 'to jest zmienna którą można zmieniać w obrębie metody';
//     console.log('zmienna1:', zmienna1);
 
//     const x: number = 0;
//     const y: number = 1;
//     let wynik: number;
//     console.log("wynik dod: ",wynik = x+y)
//     console.log("wynik odej: ",wynik = x-y)
//     console.log("wynik mnoz: ",wynik = x*y)
//     console.log("wynik dziel: ",wynik = y/x)
 
 
//     let tekstLaczony = `przykładowy teks ${zmienna1},przykładowy teskt ${this.title} koniec`;
//     console.log(tekstLaczony);
//     console.log(`przykładowy tekst ${zmienna1} przykładowy teskt ${this.title} koniec`);
//   }
// }
 
//Zad 4.
// export class AppComponent implements OnInit {
//   liczba1: number = 0; // trzeba przypisać wartości
//   liczba2 = 4;
//   tekst1: string = "Epstein didn't kill himself"; // trzeba przypisać wartości
//   tekst2 = 'Ala ma kota';
//   isPrawda1: boolean = true; // trzeba przypisać wartości
//   isPrawda2 = false;
//   coKolwiek: any;
//   aktualnaGodzina: Date = new Date(); // aktualny czas
//   tablica1: Array<number> = new Array<number>();
//   tablica2: Array<string> = ["abc", "efg","hij"]; // trzeba przypisać wartości
//   tablica3: number[] = [1, 2, 4, 4, 7]; // number[] równoważny z Array<number>
//   tablica4: string[] = []; // trzeba przypisać wartości
//   tablicaAny1: Array<any> = new Array<any>();
//   tablicaAny2 = [1, 'aaa', true, false, 555, null];
//   ngOnInit(): void {
//     this.liczba1 = 99.4;
//     console.log('liczba1', this.liczba1);
//     console.log('liczba2', this.liczba2);
//     this.tekst1 = 'Kot ma Alę';
//     console.log('tekst1', this.tekst1);
//     console.log('tekst2', this.tekst2);
//     this.coKolwiek = false;
//     console.log('coKolwiek', this.coKolwiek);
//     this.coKolwiek = 11;
//     console.log('coKolwiek', this.coKolwiek);
//     console.log('isPrawda1',this.isPrawda1);
//     console.log('isPrawda2',this.isPrawda2);
//     console.log('aktualnaGodzina',this.aktualnaGodzina);
//     console.log('tablica1',this.tablica1);
//     console.log('tablica2',this.tablica2);
//     console.log('tablica3',this.tablica3);
//     console.log('tablica4',this.tablica4);
//     console.log('tablicaAny1',this.tablicaAny1);
//     console.log('tablicaAny2',this.tablicaAny2);
//   }
// }
 
//Zad 5.
// export class AppComponent implements OnInit{
//   name: String = "Andżej";
//   surname: string = "Duda";
//   age: number = 69;
//   ngOnInit(): void {
//     this.introducing(this.name, this.surname, this.age);
//     this.introducingOptAge(this.name, this.surname);
//     this.sum(-1,2)
//     console.log('f1: odejmowanie stringa od stringa:', f1Subtract('chrystus','jezus'))
//     console.log('f2:', f2Print('papiesz'))
//     f3Countdown(3)
//     f4combineString(this.name, 'Sapkowski');
//     f5_RAGE();
//     f6perhaps('krowa', 'kuczak');
//   }
// introducing(name: String, surname: string, age: number): void  {
//   console.log('imie: ', name, 'nazwisko: ', surname, 'wiek: ', age)
// }
// introducingOptAge(name: String, surname: string, age?: number): void  {
//   console.log('imie: ', name, 'nazwisko: ', surname, 'wiek: ', age)
// }
// sum(x: number, y: number): void{
//   return console.log(x, '+',y,'=',x+y);
// }
// }
 
// export function f1Subtract (x: any, y: any){
//   return x-y;
// }
// export function f2Print (val: string): string{
//   return val;
// }
// export function f3Countdown (x: number){
//   for(let i=x; i>=0; i--)
//   console.log('f3:',i)
// }
// export function f4combineString(word1: String, word2: string): string{
//   console.log('f4:',word1+word2)
//   return word1+word2
// }
// export function f5_RAGE(){
//   console.log('f5: AAAAARHAHRHARAHAAA!!!')
// }
// export function f6perhaps(x?: any, y?: any): any{
//   return console.log('f6:', 'perhaps multiplying these things will result in:', x*y)
// }
//Zad 6
// export class AppComponent implements OnInit {
//   // deklaracja zmiennych
//   liczba1: number = 1;
//   text1: string = 'a';
//   isDisable1: boolean = true;
//   pesel;
//   // deklaracja z inicjalizacją
//   liczba2 = 6;
//   text2 = 'moj tekst';
//   isDisable2 = false;
//   // tablice pare sposobów na deklaracje
//   tablica1: Array<string>;
//   tablica3 = [];
//   tablica2: Array<any> = new Array<any>();
//   tablica4 = [1, 2, 3, true, 'moj tekst'];
//   constructor() {
//     // inicjalizacja tablica1
//     this.tablica1 = new Array<string>();
//     this.pesel = 96121153279;
//   }
//   ngOnInit() {
//     // console log wyświetla wartość w konsoli przeglądarki
//     console.log('liczba2:', this.liczba2);
//     this.liczba1 = 1;
//     this.liczba1 += 1;
//     this.liczba1 += 1 + 2;
//     console.log('liczba1:', this.liczba1);
//     // Wywołanie funkcji
//     this.wyswietlText1('a');
//     this.isDisable2 = this.aktywne();
//     this.isDisable1 = this.aktywne();
//     this.wyswietlText1('b');
//     console.log('PESEL', this.pesel)
//     console.log('Czy suma ostatnich dwóch cyfr jest parzysta?', this.peselVerification(this.pesel))
//   }
//   // Metoda
//   wyswietlText1(value: string): void {
//     if (this.isDisable2 === true) {
//       console.log('tablica ' + value, this.tablica4);
//     } else {
//       console.log('brak danych');
//     }
//   }
//   aktywne(): boolean {
//     return true;
//   }
//   peselVerification(pesel: number): boolean{
//     let dziesiatki = Math.floor((pesel%100)/10);
//     let jednosci = pesel%10;
//     let sum = dziesiatki + jednosci;
//     return sum % 2 == 0 ? true : false;
//   }
// }
 
//Lab1 Zad 7
// export class AppComponent implements OnInit {
//   osoba: Osoba | undefined; // deklaracja
//   mojTyp: DaneOsobowe | undefined;
//   listaOsob1: Osoba[] = []; // deklaracja i inicjalizacja pustą tablicą []
//   listaOsob2: Osoba[] = [ // deklaracja z inicjalizacją
//     {
//       id: 23,
//       imie: 'Bożena'
//     },
//     {
//       id: 34,
//       imie: 'Dorota'
//     },
//     {
//       id: 55,
//       imie: 'Wojciech'
//     },
//     //this.mojTyp
//   ];
//   tablicaOsob: DaneOsobowe[] = [];
//   constructor() { }
//   ngOnInit() {
//     this.initOsoby();
//     console.log('osoba', this.osoba);
//     console.log('listaOsob1', this.listaOsob1);
//     console.log('listaOsob2', this.listaOsob2);
//     if (this.listaOsob1.length < 4) {
//       console.log(false);
//     } else if (this.listaOsob1.length > 4) {
//       console.log(true);
//     } else {
//       console.log('lista osób = 4');
//     }
 
//     let marcin: DaneOsobowe = new DaneOsobowe();
//     marcin.id = 1;
//     marcin.imie = 'marcin';
//     marcin.nazwisko = 'mróz';
//     marcin.kierowca = true;
//     marcin.wiek = 12;
//     marcin.motto = 'koko dżambo i do przodu'
//     this.tablicaOsob.push(marcin);
 
//     let janusz: DaneOsobowe = new DaneOsobowe();
//     janusz.id = 2;
//     janusz.imie = 'janusz'
//     janusz.nazwisko = 'marciniak'
//     janusz.kierowca = false;
//     janusz.motto = ' to moje motto'
//     this.tablicaOsob.push(janusz);
 
//     let kasia: DaneOsobowe = new DaneOsobowe();
//     kasia.id = 3;
//     kasia.imie = 'kasia';
//     kasia.nazwisko = 'strączek';
//     kasia.kierowca = true;
//     kasia.wiek = 33;
//     kasia.motto = 'dobre, nie?'
//     this.tablicaOsob.push(kasia);
 
//     for(let osoby of this.tablicaOsob)
//     console.log('id:', osoby.id,'imie', osoby.imie, 'nazwisko:', osoby.nazwisko, 'wiek:', osoby.wiek, 'kierowca; ', osoby.kierowca,
//       'motto:', osoby.motto);
 
//   }
//   initOsoby() { // metoda inicjalizująca dane
//     this.osoba = new Osoba();
//     this.osoba.id = 1;
//     this.osoba.imie = 'Karol';
//     this.listaOsob1.push(this.osoba);
//     const osoba2 = new Osoba(); // const: stała
//     osoba2.id = 2;
//     osoba2.imie = 'Monika';
//     this.listaOsob1.push(osoba2);
//     let osoba3 = new Osoba(); // let zmienna lokalna
//     osoba3.id = 3;
//     osoba3.imie = 'Piotr';
//     this.listaOsob1.push(osoba3);
//     osoba3 = new Osoba();
//     osoba3.id = 4;
//     osoba3.imie = 'Teresa';
//     this.listaOsob1.push(osoba3);  
//   }
// }
 
//Lab 2 Ćw 1 
// export class AppComponent {
//   title = 'Angulara';
//   inputText = 'Przykladowy tekst';
//   date = new Date();
//   liczbaE = Math.E;
//   osoba = new Osoba('Jan Nowak', true, 56);
//   pi = Math.PI;
//   tablicaAny = [1, 'Ala', true, null, 21.37]
// }
 
// Lab 2 Ćw 2
// export class AppComponent {
//   title = 'Dni tygodnia';
 
//   dniTygodnia = [
//     'poniedziałek',
//     'wtorek',
//     ' środa ',
//     ' czwartek ',
//     ' piątek ',
//     ' sobota',
//     ' niedziela '
//   ];

//   title2 = 'Ludzie';
 

//   listaLudzi = [
//   new Osoba('Maciej', true, 22),
//   new Osoba('Monika', false, 44),
//   new Osoba('Michał', true, 18),
//   new Osoba('Ala', false, 12),
//   new Osoba('Olek', false, 77)
// ];
// } 

//Lab 2 Ćw 4
// export class AppComponent {
//   osoby?: Osoba[] = [];

//   dodajOsoby() {
//     this.osoby = [
//     new Osoba('Kasia', 'Nowak', 24),
//     new Osoba('Tomasz', 'null', 66),
//     new Osoba('Andrzej', 'Wolny', 36)
//     ];
//   }

//   usunOsoby() {
//     this.osoby = [];
//   }
//   }
//   class Osoba {
//   constructor(public imie: string, public nazwisko?: string | null | undefined,
//   public wiek?: number) { }
//   }

// Lab 2 cw 5
// export class AppComponent implements OnInit {
//   // zmienna globalna dla komponentu
//   title = 'projekt1';
//   inputText = 'Moj input';
//   zmienKolor = 'color-black';
//   zmienNapis = 'color-yellow';
//   isDisabled = true;
//   logo = '';
//   htmlContent = '';
//   ngOnInit(): void { }
//   zmienUstawienia() {
//   this.inputText = 'tekst zmieniony';
//   this.zmienKolor = 'color-brown';
//   this.isDisabled = false;
//   this.logo = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
//   this.htmlContent = '<i>Dawid Wojtas</i>'
// }
//   getClass(){
//     return this.zmienKolor;
//   }
//   }
