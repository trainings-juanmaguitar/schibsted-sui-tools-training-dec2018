/* eslint-disable no-console */
export default function Foo() {
  console.log('this is a foo function!!')
  const o1 = {a: 1, b: 2, c: 3}
  const o2 = {...o1, d: 4}
  console.log(o2)
}
