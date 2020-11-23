
test('First test - result> true', () => {
  const isActive = true;
  if(isActive){
    throw new Error('Is not active');
  }
})
