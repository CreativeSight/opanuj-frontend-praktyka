import { ZodError } from 'zod';
import { FormSchema, FormValues } from './models/Form';

const form = document.querySelector('#flight-form') as HTMLFormElement;
const errorContainer = document.querySelector('#errors') as HTMLUListElement;

const cleanErrors = () => (errorContainer.innerHTML = '');

const renderErrors = (error: ZodError) => {
  cleanErrors();

  error.errors.forEach((error) => {
    const listItem = document.createElement('li');

    listItem.textContent = error.message;
    errorContainer.appendChild(listItem);
  });
};

const validateForm = (values: FormValues) => {
  FormSchema.parse(values);
  console.log('Form is valid');
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries()) as FormValues;

  try {
    cleanErrors();
    validateForm(values);
  } catch (error) {
    if (error instanceof ZodError) {
      renderErrors(error);
      console.log(error);
    }
  }
});
