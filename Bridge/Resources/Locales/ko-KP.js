Bridge.merge(new System.Globalization.CultureInfo("ko-KP", true), {
    englishName: "Korean (North Korea)",
    nativeName: "한국어 (조선민주주의인민공화국)",

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
        currencySymbol: "₩",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 0,
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
        abbreviatedDayNames: ["일","월","화","수","목","금","토"],
        abbreviatedMonthGenitiveNames: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",""],
        abbreviatedMonthNames: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",""],
        amDesignator: "오전",
        dateSeparator: ". ",
        dayNames: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "yyyy년 M월 d일 dddd tt h:mm:ss",
        longDatePattern: "yyyy년 M월 d일 dddd",
        longTimePattern: "tt h:mm:ss",
        monthDayPattern: "MMMM d일",
        monthGenitiveNames: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",""],
        monthNames: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",""],
        pmDesignator: "오후",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "yyyy. M. d.",
        shortestDayNames: ["일","월","화","수","목","금","토"],
        shortTimePattern: "tt h:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "yyyy년 MMMM",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
