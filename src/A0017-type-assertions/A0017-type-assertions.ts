/* Recomendado */

// Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Ok';
input.focus();

/* Não recomendado */

// Type Assertion
const body4 = document.querySelector('body') as unknown as number;

// Non-null assertion(!)
const body2 = document.querySelector('body')!; // ! esse elemento não pode ser null.
body2.style.background = 'red';
