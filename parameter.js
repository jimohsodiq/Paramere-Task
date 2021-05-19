function convertFahrToCelsuis(f){


str = isNaN(f);
num = typeof(f);

let bool = Object.prototype.toString.call(f);

if(bool !== "[Object Number]" && !parseFloat(f)){
  let param = bool.split("");
  param[1] = param[1].substring(0, param[1].length-1);
  console.log(`${JSON.stringify(f)} is not a valid number but a/an ${typeof f}.`);
  return `${JSON.stringify(f)} is not a valid number but a/an ${typeof f}.`;
}


if (str){
  let result = `${f} is not a valid number but a/an ${num}'s type`
  console.log(result);
  console.log(num);
  return result;
}else{
  var c = (f - 32) * (5/9);
  var result = c.toFixed(4);
  console.log(result);
  console.log(num);
  return result;
}


if (typeof f === 'object') {
            if(Array.isArray(f)) {
                console.log('this is an array');
                return  `${f} is not a valid number but an Array`
            } else {
                console.log('this is an object');
                output = `${JSON.stringify(f)} is not a valid number but a/an ${typeof f}.`
                return  output
            }



          }



        }

        function checkYuGiOh(number) {
            let n = [];

            if (isNaN(number) || parseInt(number) <1) {
              console.log(`invalid Parameter: ${number}`);
              return `invalid Parameter: ${number}`;
            }
            for (let s = 1; s <= number; s++) {
                if (s % 2 === 0 && s % 3 === 0 && s % 5 === 0) {
                    n.push("yu-gi-oh");
                } else if (s % 2 === 0 && s % 3 === 0) {
                    n.push("yu-gi");
                } else if (s % 2 === 0 && s % 5 === 0) {
                    n.push("yu-oh");
                } else if (s % 3 === 0 && s % 5 === 0) {
                    n.push("gi-oh");
                } else if (s % 2 === 0) {
                    n.push("yu");
                } else if (s % 3 === 0) {
                    n.push("gi");
                } else if (s % 5 === 0) {
                    n.push("oh");
                } else {
                    n.push(s);
                }
            }
            console.log(n);
            return n;
          }
