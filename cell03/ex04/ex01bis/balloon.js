const colors = ['red', 'green', 'blue'];
let colorIndex = 0;
let size = 200;

function updateBalloonSize() {
    $('#balloon').css({
        width: size + 'px',
        height: size + 'px'
    });
}

$(document).ready(function () {
    $('#balloon').on('click', function () {
        size += 10;
        colorIndex = (colorIndex + 1) % colors.length;
        $('#balloon').css('background-color', colors[colorIndex]);

        if (size > 420) {
            size = 200;
            colorIndex = 0;
            $('#balloon').css('background-color', colors[colorIndex]);
        }
        updateBalloonSize();
    });

    $('#balloon').on('mouseleave', function () {
        if (size > 200) {
            size += 10;
            updateBalloonSize();
        }
        colorIndex = (colorIndex + 1) % colors.length;
        $('#balloon').css('background-color', colors[colorIndex]);
        updateBalloonSize();
    });
});
