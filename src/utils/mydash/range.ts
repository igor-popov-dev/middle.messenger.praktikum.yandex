export function range(start = 0, end: number, step = 1, isRight = false) {
  const result = [];
    
  let stopCondition = (i:number) => i < end;
  if (!end) {
    end = start;
    start = 0;
  }
     
  if (end < start) {
    step = -1;
  }
    
  if (step < 0) {
    stopCondition = (i:number) => i > end;
  }
    
  if (step === 0) {
    stopCondition = () => result.length < end;
  }

  for (let i = start; stopCondition(i); i += step) {
    result.push(i);
  }
    
  if (isRight) {
    result.reverse();
  }

  return result;
}

//решение преподавателя https://playcode.io/880110
