Bridge.merge(new System.Globalization.CultureInfo("mk", true), {
    englishName: "Macedonian",
    nativeName: "македонски",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: ".",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "ден",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: ".",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: ".",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["нед.","пон.","вт.","сре.","чет.","пет.","саб."],
        abbreviatedMonthGenitiveNames: ["јан.","фев.","мар.","апр.","мај","јун.","јул.","авг.","септ.","окт.","ноем.","дек.",""],
        abbreviatedMonthNames: ["јан.","фев.","мар.","апр.","мај","јун.","јул.","авг.","септ.","окт.","ноем.","дек.",""],
        amDesignator: "претпл.",
        dateSeparator: ".",
        dayNames: ["недела","понеделник","вторник","среда","четврток","петок","сабота"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, dd MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd, dd MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември",""],
        monthNames: ["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември",""],
        pmDesignator: "попл.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd.M.yyyy",
        shortestDayNames: ["не","по","вт","ср","че","пе","са"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy 'г'.",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
