// `an` is a global provided by assets/data/an
var randomAnecdoteIndex = Math.floor(Math.random() * Math.floor(an.length));
var randomAnecdote = an[randomAnecdoteIndex].anecdote;
var anecdoteElement = document.createElement('blockquote');
anecdoteElement.textContent = randomAnecdote;

var linkElement = document.createElement('a');
linkElement.setAttribute('href', './signatories');
linkElement.setAttribute('title', 'View all signatories and their stories');
linkElement.textContent = 'View more stories';

var sectionElement = document.createElement('section');
sectionElement.className = 'wrapper style2';
var containerElement = document.createElement('p');
containerElement.className = 'container';

containerElement.appendChild(anecdoteElement);
containerElement.appendChild(linkElement);
sectionElement.appendChild(containerElement);

document.getElementById('banner').insertAdjacentElement('afterend', sectionElement);