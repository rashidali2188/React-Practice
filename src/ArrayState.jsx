import React, { useState } from 'react'

function ArrayState() {
  const [name, setName] = useState([
    'rashid ali',
    "mohsin Ali",
    "Shan Ali"
  ])
  function ChangeName(nme) {
    name[0] = nme
    setName([...name])
  }

  // array object
  const [emp, setEmp] = useState([{
    name: "Rashid Ali", salary: 20000,

  }
    ,
  {
    name: "mohsin Ali", salary: 20000

  }])
  function ChangeSalary(params) {
    emp[1].salary=params
    setEmp([...emp])
  }
  return (
    <div>
      <h1>Array State in React </h1>
      <input type="text" placeholder='enter name' onChange={(event) => ChangeName(event.target.value)} />
      {
        name.map((item, index) =>
          <h2 key={index}>{item}</h2>
        )
      }
      <hr />
      // array object 
      <input type="text" placeholder='enter salary' onChange={(event) =>  ChangeSalary(event.target.value)} />

      {
        emp.map((item2, index) =>
          <h3 key={index}> Name:{item2.name}, Salary:{item2.salary}</h3>
        )
      }
    </div>
  )
}

export default ArrayState
