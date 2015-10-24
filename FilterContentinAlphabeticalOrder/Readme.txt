/***********************************************/
This Filter is used to sort the elements in alphabetical order with in particular range.
If you want to filter some elements from A to G.You can add this below filter and customize based on your needs.

Example:

sieapPortal.filter('startsWithAG', function () {
    return function (items) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (/a/i.test(item.name.substring(0, 1)) || /b/i.test(item.name.substring(0, 1)) || /c/i.test(item.name.substring(0, 1)) || /d/i.test(item.name.substring(0, 1)) || /e/i.test(item.name.substring(0, 1)) || /f/i.test(item.name.substring(0, 1)) || /g/i.test(item.name.substring(0, 1))) //You can customize the filter range.I added a to g here.if you want you can add or remove the alphabets from the condition {
                filtered.push(item);
            }
        }
        return filtered;
    };
});
