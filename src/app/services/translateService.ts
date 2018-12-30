import { Injectable } from '@angular/core';
export class Word {
    turkmen : string;
    russian  : string;
    english  : string;
    constructor (_turkmen, _russian, _english){
      this.turkmen = _turkmen;
      this.russian = _russian;
      this.english = _english;
    }
}

@Injectable()
export class translateService {
    sellectedLanguage : number = 3;
    words : Word[]=[];
    constructor(){
        this.init();
    }
    change(to : number){
     this.sellectedLanguage = to;
    }

    getTranslate(word : string): string{
        let w = this.findWord(word);
       
        if (this.sellectedLanguage == 1) return w.turkmen;
        else if (this.sellectedLanguage == 2) return w.russian;
        return w.english;
    }

     findWord(word : String) : Word{
       for (let i = 0; i < this.words.length; i++){
           if (this.words[i].turkmen == word){
               return this.words[i];
           }
       }
    }

    init () {
      this.words.push(new Word("Baş sahypa","Главное меню","Main menu"));
      this.words.push(new Word("Registrasiýa","Регистрация","Sign up"));
      this.words.push(new Word("Olimpiadalar", "Олимпиады", "Contests"));
      this.words.push(new Word("Testler","Тесты","Tests"));
      this.words.push(new Word("Göreldeli okuwçylar","Рейтинг","Raiting"));
      this.words.push(new Word("Forum","Блог","Blog"));
      this.words.push(new Word("Informatika","Информатика","Informatics"));
      this.words.push(new Word("Matematika","Математика" ,"Math"));
      this.words.push(new Word("Rus dili","Русский язык","Russian language"));
      this.words.push(new Word("Iňlis dili","Английский язый","English"));
      this.words.push(new Word("Türkmen dili","Туркменский язык","Turkmen language"));
      this.words.push(new Word("Biologiýa","Биология","Biology"));
      this.words.push(new Word("Taryh","История","History"));
      this.words.push(new Word("Fizika","Физика","Physics"));
      this.words.push(new Word("Himiýa","Химия","Chemistry"));
      this.words.push(new Word("Gatnaş","Участвовать","Participate"));
      this.words.push(new Word("Gir","Вход","Sign in"));
      this.words.push(new Word("E-mail adres","E-mail почта","E-mail adress"));
      this.words.push(new Word("Parol","Пароль","Password"));
      this.words.push(new Word("Ady","Имя","Name"));
      this.words.push(new Word("Familiýa","Фамилия","Surname"));
      this.words.push(new Word("Synpy","Класс","Grade"));
      this.words.push(new Word("Welaýaty","Страна","Country"));
      this.words.push(new Word("Tassykla","Подтвердить","Confirm"));
      this.words.push(new Word("Üýtget","Изменить","Change"));
      this.words.push(new Word("Çyk","Выход","Quit"));
      this.words.push(new Word("dersinden","раунд","round"));
      this.words.push(new Word("bäsleşik","",""));
      this.words.push(new Word("Yza","Назад","Back"))
      this.words.push(new Word("bäsleşigi","",""));
      this.words.push(new Word("internet ders bäsleşigi","интернет олимпиада","online subject olympiad"));
      this.words.push(new Word("Ady we Familiýasy","Имя и Фамилия","Name and Surname"));
      this.words.push(new Word("Netijesi","Рейтинг","Raiting"));
      this.words.push(new Word("Siz eýýäm gatnaşdyňyz","Вы уже участвовали в этом раунде","You have already participated"));
      this.words.push(new Word("Haýyş akkaundyňyza giriň","Пожалюста войдите в свой аккаунт","Please sign in to your accaunt"));
      this.words.push(new Word("Haýyş dolduryň","Пожалуйста заполните данные","Please fill blanks"));
      this.words.push(new Word("Nädogry kod","Неправильный код","Wrong code"));
      this.words.push(new Word("Türkmenistan boýunça geçirilýän 'ZEHIN' internet ders",`"IOSC"-Международная интернет олимпмада среди школьников`,`"IOSC"-International Online Subject Contests`));
    }

}

