import React from 'react';
import Person from './Person';
function NameList() {
  const persons = [
    {
      id: 1,
      name: 'steve',
      age: 14,
      skill: 'meh'
    },
    {
      id: 1,
      name: 'dan',
      age: 24,
      skill: 'movies'
    }
  ]
  const personList = persons.map(person => <Person person={person}/>)
  return (
    <div>
      {
        personList
      }
    </div>
  );
}

export default NameList;
