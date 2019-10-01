module.exports = function multiply(first, second) {

  let a = first
  let b = second
  //make the same lengths
  if (a.length > b.length) {
    while (a.length != b.length) b = '0'+ b
  }
  if (b.length > a.length) {
    while (a.length != b.length) a = '0'+ a
  }
  var m = []
  var mult = ''

let lenA = a.length
let lenB = b.length

//count the numbers of ranks
   for (let i = 0; i < lenA; i++) {
    for (let j = 0; j <lenB; j++) {
      m.push(0)
    }
   }

  for (let i = 0; i < lenA; i++) {
    for (let j = 0; j < lenB; j++) {
      m[lenA*lenB-1 - (i + j)] = m[lenA*lenB-1 - (i+j)] + a[lenA-1-j]*b[lenB-1-i]
    }
  }


//remake 2+ number of ranks
for (let i = lenA*lenB-1; i>-1; i--) {
  if (m[i] > 9) {
    m[i-1] = m[i-1] + Math.floor(m[i]/10)
    m[i] = m[i] - Math.floor(m[i]/10)*10
  }
}

for (let i = 0; i<lenA*lenB;i++) {
  mult += String(m[i])
}
//delete 1st zeros
let n_zero = 0
let k = 0
while ( k < lenA*lenB) {
  if (mult[k] == 0) n_zero+=1
  else break
  k+=1
}
mult = mult.slice(n_zero)

return mult
}
