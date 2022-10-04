function colorScheme() {
   const darkMode = document.querySelector('.color_scheme_modes-dark');
   const lightMode = document.querySelector('.color_scheme_modes-light');
   const html = document.documentElement;

   function darkActive() {
      html.classList.add('dark-mode');
   }

   function lightActive() {
      html.classList.remove('dark-mode');
   }

   darkMode.addEventListener('click', darkActive);
   lightMode.addEventListener('click', lightActive);
}
colorScheme();

function checkPrime() {
   const input = document.querySelector('#input_number');
   const btn = document.querySelector('button');
   const answer = document.querySelector('.answer_field p');

   function verifyPrime(event) {
      event.preventDefault();
      const number = Number(input.value);

      function isDivisible() {
         let i = (number - 1);
         while (i > 1) {
            if (number % i === 0) {
               return true;
            }
            i--;
         }
         return false;
      }

      if (!Number.isInteger(number) || number < 0) {
         answer.innerText = 'Type a positive integer number!';
      } else if (number === 2) {
         answer.innerText = `${number} is a Prime Number!`;
      } else if ((number % 2 === 0) || (isDivisible()) || (number === 1)) {
         answer.innerText = `${number} is NOT a Prime Number!`;
      } else {
         answer.innerText = `${number} is a Prime Number!`;
      }
   }

   btn.addEventListener('click', verifyPrime);
}
checkPrime();

function increaseAndDecrease() {
   const input = document.querySelector('#input_number');
   const plus = document.querySelector('.input_field-btns-plus');
   const minus = document.querySelector('.input_field-btns-minus');

   function increase() {
      return ++input.value
   }
   function decrease() {
      if (input.value == 0) {
         return input.value = 0;
      } else {
         --input.value
      }
   }

   plus.addEventListener('click', increase);
   minus.addEventListener('click', decrease);

}
increaseAndDecrease();