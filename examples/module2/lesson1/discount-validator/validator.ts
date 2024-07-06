export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (!firstName) {
    errors.push('First name is required');
  }

  if (firstName?.length === 0) {
    errors.push('First name require at least 1 character');
  }

  if (!lastName) {
    errors.push('Last name is required');
  }

  if (lastName?.length < 1) {
    errors.push('Last name require at least 1 character');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  if (typeof age !== 'number') {
    throw new Error('Age must be a number');
  }

  return errors;
}
