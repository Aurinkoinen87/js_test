

//  let a = prompt('Введите логин');
 

//  if(a=='Админ'){
//    let b = prompt('Введите пароль'); 
//     if(b=='Я главный'){
//         alert('Здравствуйте!');
//     } else if(b==null){
//         alert('Отменено');
//     } else if(b==''){
//         alert('Требуется ввести пароль');
//     } else {
//         alert('Неверный пароль');
//     }
     
//  } else if(a==null){
//      alert('Отменено');
//  } else if (a==''){
//      alert('Логин не введён');
//  } else {
//      alert('Я вас не знаю!');
//  }

  // for (let x = 1; x < 10; ++x ) {
  //   if(x % 2 == 0) {
  //  console.log(x);}
  //   } 



  // let i = 0;

  // while(i < 3) {
  //   console.log( `number ${i}!` );
  //   i++;
  // }



  
  // let x = 1;
  // while(x < 100) {
  //   x = prompt('Введите число больше 100');
  //   if(x == null) break;
    
  // }
  // console.log(x);
 



  // let n = 1;

  // while(n <= 20) {
  //   if(n % 2 !== 0){
  //   console.log(n);
  //    }
  //    n++;
  // }



  // const number = +prompt('Введите число между 0 и 3', '');

  // switch(number){
  //   case 0:
  //     alert('Вы ввели число 0');
  //     break;
  //   case 1:
  //     alert('Вы ввели число 1');
  //     break;
  //   case 2:
  //   case 3:
  //     alert('Вы ввели число 2, а может и 3');
  // }



  // function checkAge(age) {
  //   if (age >= 18) {
  //     return true;
  //   } else {
  //     return confirm('А родители разрешили?');
  //   }
  // }
  
  // let age = prompt('Сколько вам лет?', 18);
  
  // if ( checkAge(age) ) {
  //   alert( 'Доступ получен' );
  // } else {
  //   alert( 'Доступ закрыт' );}
  

  // function checkAge(age) {
  //   return age > 18 || confirm ('Родители разрешили?');
    
  // }


  let money = prompt('Ваш бюджет на месяц?'),
      time = prompt('Введите дату в формате YYYY-MM-DD');

  let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
    for(x = 0; x < 2; x++) {
    let compulsoryExpenses = prompt('Введите обязательную статью расходов в этом месяце'),
        compulsoryExpensesVolume = prompt('Во сколько обойдется?');
    }

    appData.expenses.compulsoryExpenses = compulsoryExpensesVolume;
    console.log(appData.expenses);