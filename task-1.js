const parser = new DOMParser();

//XML, который будем парсить:

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

//Этап#2 - Получение данных:
//Парсинг XML:

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

//Получаю student-узлы список:

const listNode = xmlDOM.querySelectorAll('student');

//Записываю поочередно студентов в массив как объект:

const students = [];
for (let i = 0; i < listNode.length; i++) {
    //Получаю узел отдельного студента:
	let student = listNode[i];

    //Получаю узлы отдельного студента:
	let firstNode = student.querySelector('first');
	let secondNode = student.querySelector('second');
	let ageNode = student.querySelector('age');
	let profNode = student.querySelector('prof');
  
    //Получение данных из атрибутов:
	let langAtr = student.querySelector('name').getAttribute('lang');

    //Запись свойств студенту:
    const studentObj = {
      name: `${firstNode.textContent + " " + secondNode.textContent}`,
      age: Number(ageNode.textContent),
      prof: profNode.textContent,
      lang: langAtr
    }

    //Добавляю студента в массив:
	students.push(studentObj);
}

console.log(students);