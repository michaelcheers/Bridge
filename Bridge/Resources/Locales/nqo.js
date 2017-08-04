Bridge.merge(new System.Globalization.CultureInfo("nqo", true), {
    englishName: "N'ko",
    nativeName: "ߒߞߏ",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "ߝߙߍߕߍ߫ ߕߍ߫",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "ߘߊ߲߬ߒߕߊ߲߫-",
        positiveInfinitySymbol: "ߘߊ߲߬ߒߕߊ߲߫+",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 3,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 2,
        percentNegativePattern: 3,
        currencySymbol: "ߖߕ.",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 13,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 3,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 3
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["ߞߊ߯ߙ","ߞߐ߬ߓ","ߞߐ߬ߟ","ߞߎߣ","ߓߌߟ","ߛߌ߬ߣ","ߞߍ߲ߘ"],
        abbreviatedMonthGenitiveNames: ["ߓߌ߲ߠ","ߞߏ߲ߞ","ߕߙߊ","ߞߏ߲ߘ","ߘߓߕ","ߥߊ߬ߛ","ߞߊ߬ߙ","ߘߓߊ߬","ߕߎߟ","ߞߏ߲ߓ","ߣߍߣ","ߞߏ߬ߟ",""],
        abbreviatedMonthNames: ["ߓߌ߲ߠ","ߞߏ߲ߞ","ߕߙߊ","ߞߏ߲ߘ","ߘߓߕ","ߥߊ߬ߛ","ߞߊ߬ߙ","ߘߓߊ߬","ߕߎߟ","ߞߏ߲ߓ","ߣߍߣ","ߞߏ߬ߟ",""],
        amDesignator: "ߛ",
        dateSeparator: "/",
        dayNames: ["ߞߊ߯ߙߌ","ߞߐ߬ߓߊ߬ߟߏ߲","ߞߐ߬ߟߏ߲","ߞߎߣߎ߲ߟߏ߲","ߓߌߟߏ߲","ߛߌ߬ߣߌ߲߬ߟߏ߲","ߞߍ߲ߘߍߟߏ߲"],
        firstDayOfWeek: 6,
        fullDateTimePattern: "dddd, MMMM dd, yyyy tt hh:mm:ss",
        longDatePattern: "dddd, MMMM dd, yyyy",
        longTimePattern: "tt hh:mm:ss",
        monthDayPattern: "MMMM ߕߟߋ߬ dd",
        monthGenitiveNames: ["ߓߌ߲ߠߊߥߎߟߋ߲","ߞߏ߲ߞߏߜߍ","ߕߙߊߓߊ","ߞߏ߲ߞߏߘߌ߬ߓߌ","ߘߓߊ߬ߕߊ","ߥߊ߬ߛߌߥߊ߬ߙߊ","ߞߊ߬ߙߌߝߐ߭","ߘߓߊ߬ߓߌߟߊ","ߕߎߟߊߝߌ߲","ߞߏ߲ߓߌߕߌ߮","ߣߍߣߍߓߊ","ߞߏ߬ߟߌ߲߬ߞߏߟߌ߲",""],
        monthNames: ["ߓߌ߲ߠߊߥߎߟߋ߲","ߞߏ߲ߞߏߜߍ","ߕߙߊߓߊ","ߞߏ߲ߞߏߘߌ߬ߓߌ","ߘߓߊ߬ߕߊ","ߥߊ߬ߛߌߥߊ߬ߙߊ","ߞߊ߬ߙߌߝߐ߭","ߘߓߊ߬ߓߌߟߊ","ߕߎߟߊߝߌ߲","ߞߏ߲ߓߌߕߌ߮","ߣߍߣߍߓߊ","ߞߏ߬ߟߌ߲߬ߞߏߟߌ߲",""],
        pmDesignator: "ߥ",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["ߞߊ","ߞߐ","ߞߟ","ߞߎ","ߓߌ","ߛߌ","ߞߍ"],
        shortTimePattern: "tt hh:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
