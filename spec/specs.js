describe('valid input', function() {
  it("should return true if the input is a number greater than 0", function() {
    expect(valid_input(2)).to.equal(true);
  });

  it("should return false if the input is a number is not divisible by 2", function() {
    expect(valid_input(3)).to.equal(false);
  });

  it("should return false if the input is a number is less 2", function() {
    expect(valid_input(-2)).to.equal(false);
  });

  it("should return false if the input is a string", function() {
    expect(valid_input("this_is_a_string")).to.equal(false);
  });

  it("should return false if number is disguised as a string", function() {
    expect(valid_input('6')).to.equal(false);
  });

  it("should return false if number is a float", function() {
    expect(valid_input(6.3)).to.equal(false);
  });
});


describe('Result', function() {
  it("should return Ping if number is divisible by 3", function() {
    expect(ping_pong(3)).to.equal('ping');
  });

  it("should return Ping if number is divisible by 5", function() {
    expect(ping_pong(5)).to.equal('pong');
  });

  it("should return Ping if number is divisible by 15", function() {
    expect(ping_pong(15)).to.equal('ping pong');
  });

  it("should return number if not divisible by 3, 5 or 15", function() {
    expect(ping_pong(19)).to.equal(19);
  });
});
