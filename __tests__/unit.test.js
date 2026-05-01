// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//function 1 - isPhoneNumber
//True tests
test('test valid phone numbers with -', () => {
   expect(isPhoneNumber('998-256-9451')).toBe(true);
});

test('test valid phone numbers with parentheses', () => {
  expect(isPhoneNumber('(998) 256-9451')).toBe(true);
});

//False tests
test('test invalid phone numbers with letters', () => {
  expect(isPhoneNumber('abj-kdf-aksf')).toBe(false);
});

test('test invalid phone numbers with not enough digits', () => {
 expect(isPhoneNumber('998-256')).toBe(false);
});


//function 2 - isEmail
//True tests
test('tests valid email and returns true', () => {
  expect(isEmail("test@gmail.com")).toBe(true);
});
test('tests valid email and returns true', () => {
  expect(isEmail("123hello@yahoo.com")).toBe(true);
});

//False tests
test('tests invalid email and returns false', () => {
  expect(isEmail("1234567@324233")).toBe(false);
});
test('tests invalid email and returns false', () => {
  expect(isEmail("himyname234@gmail.asdfjksf")).toBe(false);
});

//function 3 - isStrongPassword
//True tests
test('tests strong password and returns true', () => {
  expect(isStrongPassword("home")).toBe(true);
});
test('tests strong password and returns true', () => {
  expect(isStrongPassword("hello123_fkasfd")).toBe(true);
});

//False tests
test('tests weak password and returns false', () => {
  expect(isStrongPassword("cat")).toBe(false);
});
test('tests invalid password and returns false', () => {
  expect(isStrongPassword("afdjsklfjdsklfjdsa;fjdksalfjklds")).toBe(false);
});

//function 4- isDate
//True tests
test('test valid date', () => {
  expect(isDate('05/01/2026')).toBe(true);
});

test('test valid date with single digit for mon', () => {
  expect(isDate('5/1/2026')).toBe(true);
});

//False tests
test('test wrong format: invalid date with year/month/date', () => {
 expect(isDate('2026-05-01')).toBe(false);
});

test('test invalid date with no year', () => {
expect(isDate('05-01')).toBe(false);
});

//function 5 - isHexColor
//True tests
test('tests valid hex color and returns true', () => {
  expect(isHexColor("#fff")).toBe(true);
});
test('tests valid hex color and returns true', () => {
  expect(isHexColor("#000000")).toBe(true);
});
//false tests
test('test invalid hex color with invalid characters', () =>{
  expect(isHexColor('#123xyz')).toBe(false);
});

test('test invalid hex color with wrong length', () =>{
  expect(isHexColor('#1234')).toBe(false);
});