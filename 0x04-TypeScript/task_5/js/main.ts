interface MajorCredits {
  readonly _majorCreditsBrand: unique symbol;
  credits: number;
}

interface MinorCredits {
  readonly _minorCreditsBrand: unique symbol;
  credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    _majorCreditsBrand: subject1._majorCreditsBrand,
    credits: subject1.credits + subject2.credits,
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    _minorCreditsBrand: subject1._minorCreditsBrand,
    credits: subject1.credits + subject2.credits,
  };
}

const majorSubject1: MajorCredits = {
  _majorCreditsBrand: Symbol(),
  credits: 3,
};

const majorSubject2: MajorCredits = {
  _majorCreditsBrand: Symbol(),
  credits: 4,
};

const minorSubject1: MinorCredits = {
  _minorCreditsBrand: Symbol(),
  credits: 2,
};

const minorSubject2: MinorCredits = {
  _minorCreditsBrand: Symbol(),
  credits: 1,
};

const sumMajor = sumMajorCredits(majorSubject1, majorSubject2);
console.log('Sum of major credits:', sumMajor.credits);

const sumMinor = sumMinorCredits(minorSubject1, minorSubject2);
console.log('Sum of minor credits:', sumMinor.credits);

