// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (num, arr) =>{
  return {
    specimenNum: num,
    dna: arr,
    // Mutate a random base in DNA
    mutate(){
      let i = Math.floor(Math.random() * arr.length);
      let base = returnRandBase();
      while (arr[i] == base){
        base = returnRandBase();
        console.log(base);
      }
      arr[i] = base;
      return arr;
    },
    // Compare current and passed in DNA
    compareDNA(arr2){
      let i = 0;
      let total = 0;
      while (i < this.dna.length){
        if( this.dna[i] == arr2.dna[i]){
          // console.log(i); to check index of matching base
          total++;
        }
        i++;
      }
      const percentage = Math.trunc((total/this.dna.length) *100);
      return `specimen #${this.specimenNum} and specimen #${arr2.specimenNum} have ${percentage}% DNA in common.`;
    },
    // Survival test
    willLikelySurvive(){
      let total = 0;
      for( let i = 0; i < this.dna.length ; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          total++
        }
      }
      // console.log(total);
      return ((total/this.dna.length)) >= .6 ? true : false;
    }
  };
};


const ex = pAequorFactory( 4, mockUpStrand());
const ex2 = pAequorFactory( 3, mockUpStrand());

console.log(ex.willLikelySurvive())
console.log(ex.dna)
console.log(ex2.dna)
console.log(ex.compareDNA(ex2));
// console.log(ex.dna)
// console.log(ex.mutate())
// console.log(ex.dna)








