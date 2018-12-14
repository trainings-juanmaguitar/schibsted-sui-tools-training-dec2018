/* eslint-disable no-console */
export default function Foo() {
  console.log('this is a foo function!!')
  console.log('and a random message!!')
  const o1 = {a: 1, b: 2}
  const o2 = {...o1, c: 3}
  console.log(o2)
}
