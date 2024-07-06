import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
    test('should return an empty error array if all form data filled', () => {
        const errors = formValidator('John', 'Doe', 30);
        expect(errors).toEqual([]);
    });

    test('should return an error if first name is missing', () => {
        const errors = formValidator('', 'Doe', 30);
        expect(errors).toContain('First name is required');
        expect(errors).toContain('First name require at least 1 character');
    });

    test('should return an error if last name is missing', () => {
        const errors = formValidator('John', '', 30);
        expect(errors).toContain('Last name is required');
        expect(errors).toContain('Last name require at least 1 character');
    });

    test('should return an error if age is negative', () => {
        const errors = formValidator('John', 'Doe', -1);
        expect(errors).toContain('Age must be a positive number');
    });

    test('should return an error if age is not a number', () => {
        expect(() => formValidator('John', 'Doe', '1')).toThrow('Age must be a number');
    });
});