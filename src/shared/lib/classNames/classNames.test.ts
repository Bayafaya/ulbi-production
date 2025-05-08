import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    const expected = 'someClassName';
    expect(classNames('someClassName')).toBe(expected);
  });
  test('with additional params', () => {
    const expected = 'someClassName class1 class2';
    expect(classNames('someClassName', {}, ['class1', 'class2'])).toBe(expected);
  });
  test('with mods params', () => {
    const expected = 'someClassName class1 class2 hovered scrollable';
    expect(classNames('someClassName', {hovered: true, scrollable:true }, ['class1', 'class2'])).toBe(expected);
  });
  test('with mods params false', () => {
    const expected = 'someClassName class1 class2 hovered';
    expect(classNames('someClassName', {hovered: true, scrollable:false }, ['class1', 'class2'])).toBe(expected);
  });
  test('with mods undefined', () => {
    const expected = 'someClassName class1 class2 hovered';
    expect(classNames('someClassName', {hovered: true, scrollable:undefined }, ['class1', 'class2'])).toBe(expected);
  });
});
