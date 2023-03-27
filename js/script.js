class Student {
  name;
  lastname;
  age;
  votes = [];

  constructor(name, lastname, age, vote){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  getFullName() {
    return `${this.name} ${this.lastname}`;
  }

  addVote(vote) {
    this.votes.push(vote)
  }

  getVotesAvg() {
    let sum = 0;
    this.votes.forEach((vote) => {
      sum += vote;
    })
    return sum / this.votes.length
  }
}

const myStudent = new Student("Marco", "Mazzotti", 24, 10);
myStudent.addVote(5)
myStudent.addVote(7)
console.log(myStudent);
console.log(myStudent.getVotesAvg());
