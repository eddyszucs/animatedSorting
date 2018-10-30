function createColumns() {
    $('.column').remove();
    var content = $('#content');
    var columnNumber = $('input:text').val();
    var columnWidth = ((content.width()*99/100)/columnNumber) + 'px';
    for(var i = 0; i < columnNumber; i++) {
        var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
        var columnHeight = Math.floor(Math.random() * (columnNumber - 1)) + 1;
        $('<div/>', {
            'class': 'column'
        }).css({'height':columnHeight+'px',
                'width': columnWidth,
                'background-color' :randomColor}).appendTo(content);
    }
}
//bubblesort starts here
function bubbleSort() {
    var columns = $('.column');
    var limit = columns.length-1;
    for(i=0;i<=limit;i++) {
        setTimeout(function(){
            columns.each(function() {
                let currentHeight = $(this).height()
                let nextHeight    = $(this).next().height()
                if( currentHeight > nextHeight && nextHeight != null) {
                    $(this).insertAfter($(this).next());
                }
            });
        }, 1);
    }

}
//bubblesort ends here

//quicksort starts here
function quickSort(columns, left, right) {
let index;
    if (columns.length > 1) {
        setTimeout(function() {
            index = partition(columns, left, right);
        }, 1);
        setTimeout(function() {
            if(left < (index - 1) ) {
                quickSort(columns, left, (index - 1));
            }
        }, 1);
        setTimeout(function() {
            if (index < right) {
                quickSort(columns, index, right);
            }
        }, 1);
    }

return columns;

}

function partition(columns, left, right) {
let pivot = $(columns[Math.floor((right+left)/2)]),
    i     = left,
    j     = right;
while (i<=j) {
    while ($(columns[i]).height() < pivot.height()) {
        i++
    }
    while ($(columns[j]).height() > pivot.height()) {
        j--;
    }
    if(i <= j) {
        swap(columns, i, j);
        i++;
        j--;
    }
}
return i;
}

function swap(columns, firstIndex, secondIndex) {
var temp, visualTemp;

visualTemp = columns[secondIndex];
$(columns[firstIndex]).insertAfter($(columns[secondIndex]));
$(visualTemp).insertBefore($(columns[firstIndex+1]));

temp = columns[firstIndex];
columns[firstIndex]  = columns[secondIndex];
columns[secondIndex] = temp;
}
//quicksort ends here
