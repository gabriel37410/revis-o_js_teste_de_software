describe('string', function() {
  it('retorna o tamanho de uma string', function() {
    const str = 'teste';
    expect(str.length).toBe(5); // IMPLEMENTE
  });

  it('retorna o segundo char de uma string', function() {
    const str = 'abcde';
    expect(str.charAt(str.length-4) /*or str[1]*/).toBe('b'); // IMPLEMENTE
  });

  it('retorna o os 5 primeiros chars de uma string', function() {
    const str = 'abcdefghi';
    expect(str.substring(0, 5)).toBe('abcde'); // IMPLEMENTE
  });

  it('retorna a concatenação de duas strings', function() {
    const str_one = 'Hello';
    const str_two = ' World!';

    expect(str_one.concat(str_two)).toBe('Hello World!'); // IMPLEMENTE
  });

  it('retorna a interpolação de duas strings', function() {
    const str_one = 'Hello';
    const str_two = 'World';

    expect(`${str_one} ${str_two}!`).toBe('Hello World!'); // IMPLEMENTE
  });

  it('replace uma parte da string', function() {
    const str = 'Hello, World!';

    expect(str.replace("World!", "Student!")).toBe('Hello, Student!'); // IMPLEMENTE
  });

  it('split uma string', function() {
    const str = 'Isso é uma string';

    expect(str.split(' ')).toEqual(['Isso', 'é', 'uma', 'string']); // IMPLEMENTE
  });

  it('lower case uma string', function() {
    const str = 'ISSO É UMA STRING';

    expect(str.toLowerCase()).toBe('isso é uma string'); // IMPLEMENTE
  });

  it('upper case uma string', function() {
    const str = 'isso é uma string';

    expect(str.toUpperCase()).toBe('ISSO É UMA STRING'); // IMPLEMENTE
  });
});
