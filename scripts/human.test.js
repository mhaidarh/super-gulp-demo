var assert = chai.assert
var expect = chai.expect

describe('Array', function () {
  it('should start empty', function () {
    var arr = []
    assert.equal(arr.length, 0)
  })
})

describe('Human', function () {
  describe('Human eating', function () {
    it('expect human.eat() to return string', function () {
      expect(human.eat()).to.be.a('string');
    })
    it('expect human to eat and gain energy', function () {
      expect(human.eat(1)).to.contain('Eat')
      expect(human.eat(1)).to.contain('Energy')
    })
  })

  describe('Human drinking', function () {
    it('expect human.drink() to return string', function () {
      expect(human.drink()).to.be.a('string');
    })
    it('expect human to eat and gain hidration', function () {
      expect(human.drink(1)).to.contain('Drink')
      expect(human.drink(1)).to.contain('Hidration')
    })
  })
})
