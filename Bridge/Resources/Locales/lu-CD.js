Bridge.merge(new System.Globalization.CultureInfo("lu-CD", true), {
    englishName: "Luba-Katanga (Congo DRC)",
    nativeName: "Tshiluba (Ditunga wa Kongu)",

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
        currencySymbol: "FC",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: ".",
        currencyNegativePattern: 5,
        currencyPositivePattern: 1,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: ".",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Lum","Nko","Ndy","Ndg","Njw","Ngv","Lub"],
        abbreviatedMonthGenitiveNames: ["Cio","Lui","Lus","Muu","Lum","Luf","Kab","Lush","Lut","Lun","Kas","Cis",""],
        abbreviatedMonthNames: ["Cio","Lui","Lus","Muu","Lum","Luf","Kab","Lush","Lut","Lun","Kas","Cis",""],
        amDesignator: "Dinda",
        dateSeparator: "/",
        dayNames: ["Lumingu","Nkodya","Ndàayà","Ndangù","Njòwa","Ngòvya","Lubingu"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["Ciongo","Lùishi","Lusòlo","Mùuyà","Lumùngùlù","Lufuimi","Kabàlàshìpù","Lùshìkà","Lutongolo","Lungùdi","Kaswèkèsè","Ciswà",""],
        monthNames: ["Ciongo","Lùishi","Lusòlo","Mùuyà","Lumùngùlù","Lufuimi","Kabàlàshìpù","Lùshìkà","Lutongolo","Lungùdi","Kaswèkèsè","Ciswà",""],
        pmDesignator: "Dilolo",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d/M/yyyy",
        shortestDayNames: ["Lum","Nko","Ndy","Ndg","Njw","Ngv","Lub"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
