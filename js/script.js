var dragSrcEl = null;

function handleDragStart(e) {
// Сохраняем элемент, который будем перемещать
dragSrcEl = this;

e.dataTransfer.effectAllowed = 'move';
e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
if (e.preventDefault) {
e.preventDefault();
}

e.dataTransfer.dropEffect = 'move';

return false;
}

function handleDrop(e) {
if (e.stopPropagation) {
e.stopPropagation();
}

if (dragSrcEl != this) {
// Заменяем элементы в списке
dragSrcEl.innerHTML = this.innerHTML;
this.innerHTML = e.dataTransfer.getData('text/html');
}

return false;
}

// Добавляем обработчики событий для элементов списка
var items = document.querySelectorAll('#my-list li');
for (var i = 0; i < items.length; i++) {
items[i].addEventListener('dragstart', handleDragStart, false);
items[i].addEventListener('dragover', handleDragOver, false);
items[i].addEventListener('drop', handleDrop, false);
}