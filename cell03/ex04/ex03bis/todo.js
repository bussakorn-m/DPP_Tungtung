function getCookie(name) {
  const cookie = document.cookie
    .split("; ")
    .find((part) => part.startsWith(name + "="));

  return cookie ? cookie.slice(name.length + 1) : null;
}

function loadTodos() {
  const saved = getCookie("todos");

  if (saved === null) {
    return [];
  }

  try {
    const todos = JSON.parse(decodeURIComponent(saved));
    return Array.isArray(todos) ? todos : [];
  } catch {
    return [];
  }
}

let todos = loadTodos();

function saveTodos() {
  document.cookie =
    "todos=" + encodeURIComponent(JSON.stringify(todos)) +
    "; max-age=31536000; path=/; SameSite=Lax";
}

function showTodos() {
  $('#ft_list').empty();

  todos.forEach((text, index) => {
    const item = $('<div></div>').text(text);

    item.on('click', () => {
      if (confirm(`ต้องการลบ "${text}" หรือไม่?`)) {
        todos.splice(index, 1);
        saveTodos();
        showTodos();
      }
    });

    $('#ft_list').append(item);
  });
}

$(document).ready(function () {
  $('#new').on('click', function () {
    const answer = prompt('to do !!:');

    if (answer === null || answer.trim() === '') {
      return;
    }

    todos.unshift(answer.trim());
    saveTodos();
    showTodos();
  });

  showTodos();
});