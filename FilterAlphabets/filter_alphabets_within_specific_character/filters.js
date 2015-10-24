sieapPortal.filter('startsWithAG', function () {
    return function (items) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (/a/i.test(item.name.substring(0, 1)) || /b/i.test(item.name.substring(0, 1)) || /c/i.test(item.name.substring(0, 1)) || /d/i.test(item.name.substring(0, 1)) || /e/i.test(item.name.substring(0, 1)) || /f/i.test(item.name.substring(0, 1)) || /g/i.test(item.name.substring(0, 1))) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});

sieapPortal.filter('startsWithHN', function () {
    return function (items) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (/h/i.test(item.name.substring(0, 1)) || /i/i.test(item.name.substring(0, 1)) || /j/i.test(item.name.substring(0, 1)) || /k/i.test(item.name.substring(0, 1)) || /l/i.test(item.name.substring(0, 1)) || /m/i.test(item.name.substring(0, 1)) || /n/i.test(item.name.substring(0, 1))) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});

sieapPortal.filter('startsWithOU', function () {
    return function (items) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (/o/i.test(item.name.substring(0, 1)) || /p/i.test(item.name.substring(0, 1)) || /q/i.test(item.name.substring(0, 1)) || /r/i.test(item.name.substring(0, 1)) || /s/i.test(item.name.substring(0, 1)) || /t/i.test(item.name.substring(0, 1)) || /u/i.test(item.name.substring(0, 1))) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});

sieapPortal.filter('startsWithVZ', function () {
    return function (items) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (/v/i.test(item.name.substring(0, 1)) || /w/i.test(item.name.substring(0, 1)) || /x/i.test(item.name.substring(0, 1)) || /y/i.test(item.name.substring(0, 1)) || /z/i.test(item.name.substring(0, 1))) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});
