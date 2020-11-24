describe('Test in file demo.test.js', () =>{
  test('Second test - Strings equals', () => {
    const message1 = 'Hello Jimmy';
    const message2 = `Hello Jimmy`;

    expect(message1).toBe(message2);
  })
});

