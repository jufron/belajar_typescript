


function callMe(value : string) : string;
function callMe(value : number) : number;

function callMe(value : any) {
  if (typeof value === 'string') {
    return value;
  } else if (typeof value === 'number') {
    return value;
  }
}

export { callMe };