const iconsList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

function getIconHtmlTemplate(iconInfo) {
  const { name, prefix, family, color } = iconInfo;

  return `
    <i class="${family} ${prefix}${name} ${color}"></i>
    <p>${name.toUpperCase()}</p>
  `;
}



const container = document.getElementById('icons-container');

iconsList.forEach(element => {
  const newBox = document.createElement('div');

  newBox.className = 'box show';
  newBox.innerHTML += getIconHtmlTemplate(element);

  container.append(newBox);
});


const selectHtml = document.getElementById('type-select');

selectHtml.addEventListener('change', function(event) {
  let input = event.target.value;
  let filteredList = [];
  
  if (input === 'all') {
    filteredList = iconsList;
  } else {
    filteredList = iconsList.filter((icon) => {
      return icon.type === input
    })
  }

  /*
  qui sarebbe stato più facile aggiungere il tipo di icona
  alle classi dell'<i>, e paragonare direttamente

  invece ho perso un sacco di tempo per provare a fare tutto
  dentro js
   */

  const showNames = filteredList.map((icon) => {
    return icon.name
  })
  const boxesHtml = container.querySelectorAll('.box');
  
  boxesHtml.forEach((box) => {
    // aggiungo la classe show nel caso fosse stata rimossa in precedenza
    box.classList.add('show')

    let show = false;
    
    const iconClasses = box.querySelector('i').classList;

    // verifico se le classi di <i> contengono il nome dell'icona che rimane dopo il filtro
    showNames.forEach(name => {
      if (iconClasses.contains(`fa-${name}`)) {
        show = true;
      }
    });

    if (!show) {
      box.classList.remove('show')
    }
  });
})