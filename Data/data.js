var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
  this.front = null;
};

MyQueue.prototype.push = function (x) {
  if (this.stack1.length == 0) {
    this.front = x;
  }
  this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
  if (this.stack2.length == 0) {
    while (this.stack1.length != 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};

MyQueue.prototype.peek = function () {
  return this.stack2.length == 0
    ? this.front
    : this.stack2[this.stack2.length - 1];
};

MyQueue.prototype.empty = function () {
  return this.stack1.length == 0 && this.stack2.length == 0;
};
