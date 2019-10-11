QUnit.module('MAIN MODULE', {})

QUnit.test('TEST con', assert => {
  assert.equal(con(100, 4), 25, 'input1')
  assert.equal(con(90, 3), 30, 'input2')
  assert.equal(con(100.25, 5), 20.05, 'input3')
  assert.equal(con(12,50), 0.24, 'input4')
  assert.equal(con(20,4), 5, 'input5')
})
