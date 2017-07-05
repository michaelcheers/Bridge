Bridge.merge(new System.Globalization.CultureInfo("bem-ZM", true), {
    englishName: "Bemba (Zambia)",
    nativeName: "Ichibemba (Zambia)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "K",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Pa Mulungu","Palichimo","Palichibuli","Palichitatu","Palichine","Palichisano","Pachibelushi"],
        abbreviatedMonthGenitiveNames: ["Jan","Feb","Mac","Epr","Mei","Jun","Jul","Oga","Sep","Okt","Nov","Dis",""],
        abbreviatedMonthNames: ["Jan","Feb","Mac","Epr","Mei","Jun","Jul","Oga","Sep","Okt","Nov","Dis",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["Pa Mulungu","Palichimo","Palichibuli","Palichitatu","Palichine","Palichisano","Pachibelushi"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, d MMMM yyyy h:mm:ss tt",
        longDatePattern: "dddd, d MMMM yyyy",
        longTimePattern: "h:mm:ss tt",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Januari","Februari","Machi","Epreo","Mei","Juni","Julai","Ogasti","Septemba","Oktoba","Novemba","Disemba",""],
        monthNames: ["Januari","Februari","Machi","Epreo","Mei","Juni","Julai","Ogasti","Septemba","Oktoba","Novemba","Disemba",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["Pa Mulungu","Palichimo","Palichibuli","Palichitatu","Palichine","Palichisano","Pachibelushi"],
        shortTimePattern: "h:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
