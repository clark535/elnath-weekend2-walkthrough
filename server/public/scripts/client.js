$(document).ready(onReady); 

function onReady() {
    //event listener
    $('.operButton').on('click', function() {
        // get values of fof inputs and the button
        var firstValue = $('#firstNumber').val();
        var secondValue = $('#secondNumber').val();
        var operator = $(this).data('oper');//tied to the data-oper from the button in index,
        //this is the button click... the operator is important
        //call a function to do calculation (ajax)
        calculation(firstValue, secondValue, operator);
    });
    $('#clearButton').on('click', function() {
        //clear out values from input and results.
        $('#firstNumber').val('');
        $('#secondNumber').val('');
        $('#result').text('');
    })
}

//math function for sever req
function calculation(x, y, oper) {
    var mathQuery = {
        firstNum: x,
        secondNum: y,
        operator: oper
    }
    //POST request
    $.ajax({
        method: 'POST',
        url: '/math',
        data: mathQuery,
        success: function(response) {
            getMath();
        },
        error: function(error) {
            console.log('Error in POST');
        }
    });
}

//GET math from server
function getMath() {
    $.ajax({
        method: 'GET',
        url: '/math',
        success: function(response) {
            $('#result').text(response.result);
            $('#history').append('<p>' + response.history.first + '' + response.history.oper + '' + response.history.second + '=' + response.result + '</p>');
        },
        error: function(error) {
            console.log(' error in GET', error);
        }
    });
}