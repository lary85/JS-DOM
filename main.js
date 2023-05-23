const body = document.querySelector('body')
const div = document.createElement('div')
const myComment = document.createComment('This is just a comment')
div.appendChild(myComment)
const divContainer = document.createElement('div')
body.appendChild(divContainer)
const h = document.createElement('h1')
h.textContent = 'Create a Student Account'
div.appendChild(h)
divContainer.appendChild(div)
console.log(body)
const p = document.createElement('p')
p.textContent = 'Sign up and start learning '
div.appendChild(p)
const div1 = document.createElement('div')
div.appendChild(div1)
const div2 = document.createElement('div')
const div3 = document.createElement('div')
div1.appendChild(div2)
div1.appendChild(div3)

console.log(div.nodeName)


const p1 = document.createElement('p')
p1.classList.add('firstname')
console.log(p1.classList)
p1.textContent = 'First Name'
const input1 = document.createElement('input')
input1.placeholder = 'Enter First Name';
div2.appendChild(p1)
div2.appendChild(input1)

const p2 = document.createElement('p')
p2.textContent = 'Last Name'
const input2 = document.createElement('input')
input2.placeholder = 'Enter Last Name'
div3.appendChild(p2)
div3.appendChild(input2)


const div4 = document.createElement('div')
div.appendChild(div4)
const p3 = document.createElement('p')
p3.textContent = 'Email'
const input3 = document.createElement('input')
input3.placeholder = 'Enter your Email'
div4.appendChild(p3)
div4.appendChild(input3)



const div5 = document.createElement('div')
div.appendChild(div5)
const p4 = document.createElement('p')
p4.textContent = 'Password'
const input4 = document.createElement('input')
input4.placeholder = 'Enter your Password'
div5.appendChild(p4)
div5.appendChild(input4) 

const p5 = document.createElement('p')
p5.textContent = 'By signing up you agree to our '
div.appendChild(p5)

const a = document.createElement('a')
a.textContent = ' Terms of service'
p5.appendChild(a)

const span = document.createElement('span')
span.textContent = ' and'
p5.appendChild(span) 

const a1 = document.createElement('a')
a1.textContent = ' Privacy Policy'
p5.appendChild(a1)

const button = document.createElement('button')
button.textContent = 'NEXT'
div.appendChild(button)
const editContainer = document.createElement('div')
div.appendChild(editContainer)

//styling in DOM
body.style.boxSizing = 'border-box'
divContainer.style.backgroundColor = 'grey'
divContainer.style.paddingBlock = '20px'
divContainer.style.display = 'grid'
divContainer.style.placeItems = 'center'
divContainer.style.width = '100vw'
div.style.alignContent = 'center'


// editContainer.style.paddingBlock = '8px'
// editContainer.style.backgroundColor = 'teal'
// editContainer.style.height = '30px'
// editContainer.textContent = 'You cannot edit me'
// editContainer.contentEditable = 'true'

h.style.color = 'black'
h.style.fontSize = '600'
h.style.fontWeight = '900'
h.style.fontFamily = 'sans-serif'

p.style.fontSize = 'larger'
p.style.fontWeight = 'bold'
p.style.fontFamily = 'sans-serif'

p1.style.fontWeight = 'bold'
p1.style.fontSize = 'large'
p1.style.fontFamily = 'sans-serif'

div1.style.display = 'flex'
div1.style.columnGap = '20px'

input1.style.padding = '10px 30px'
input1.style.borderRadius = '10px'
input1.style.outline = 'none'
input1.style.border = '1px solid blue'

p2.style.fontWeight = 'bold'
p2.style.fontSize = 'large'
p2.style.fontFamily = 'sans-serif'

input2.style.padding = '10px 30px'
input2.style.borderRadius = '10px'
input2.style.outline = 'none'
input2.style.border = '1px solid blue'


p3.style.fontWeight = 'bold'
p3.style.fontSize = 'large'
p3.style.fontFamily = 'sans-serif'

input3.style.padding = '10px 30px'
input3.style.borderRadius = '10px'
input3.style.outline = 'none'
input3.style.border = '1px solid blue'
input3.type = 'text'

p4.style.fontWeight = 'bold'
p4.style.fontSize = 'large'
p4.style.fontFamily = 'sans-serif'

input4.style.padding = '10px 30px'
input4.style.borderRadius = '10px'
input4.style.outline = 'none'
input4.style.border = '2px solid grey'
input4.style.border = '1px solid blue'
input4.type = 'password'


p5.style.fontWeight = '100'
p5.style.fontSize = 'large'
p5.style.fontFamily = 'sans-serif'

a.style.color = 'blue'
a.style.cursor = 'pointer'

a1.style.color = 'blue'
a1.style.cursor = 'pointer'

button.style.padding = '10px 30px'
button.style.borderRadius = '10px'
button.style.borderStyle = 'none'
button.style.color = 'blue'
button.style.fontWeight = 'bold'
button.style.fontSize = 'large'
button.style.fontFamily = 'sans-serif'
button.style.cursor = 'pointer'
button.style.border = '2px solid blue'




















