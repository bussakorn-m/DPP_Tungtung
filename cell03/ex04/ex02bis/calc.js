function isValidNumber(value) {
  if (!/^[0-9]+$/.test(value)) {
    return false;
  }

  return Number.isSafeInteger(Number(value));
}

$(document).ready(function () {
  $('#calculator-form').on('submit', function (event) {
    event.preventDefault();

    const leftText = $('#left').val().trim();
    const rightText = $('#right').val().trim();
    const operator = $('#operator').val();

    if (!isValidNumber(leftText) || !isValidNumber(rightText)) {
      alert('Error :(');
      return;
    }

    const left = Number(leftText);
    const right = Number(rightText);

    if ((operator === '/' || operator === '%') && right === 0) {
      const message = "It's over 9000!";
      alert(message);
      console.log(message);
      return;
    }

    let result;

    switch (operator) {
      case '+':
        result = left + right;
        break;
      case '-':
        result = left - right;
        break;
      case '*':
        result = left * right;
        break;
      case '/':
        result = left / right;
        break;
      case '%':
        result = left % right;
        break;
      default:
        alert('Error :(');
        return;
    }

    alert(result);
    console.log(result);
  });

  setInterval(function () {
    alert('Please, use me...');
  }, 30000);
});