/* Lithuanian translation for the jQuery Timepicker Addon */
/* Written by Irmantas �iup�inskas */
$.datepicker.regional['lt'] = {
	closeText: 'U�daryti',
	prevText: '< Buv�s',
	nextText: 'Kitas >',
	currentText: '�iandien',
	monthNames: ['Sausis','Vasaris','Kovas','Balandis','Gegu��','Bir�elis',
	'Liepa','Rugpj�tis','Rugs�jis','Spalis','Lapkritis','Gruodis'],
	monthNamesShort: ['Sau','Vas','Kov','Bal','Geg','Bir',
	'Lie','Rugpj','Rugs','Spa','Lap','Gruo'],
	dayNames: ['Sekmadienis','Pirmadienis','Antradienis','Tre�iadienis','Ketvirtadienis','Penktadienis','�e�tadienis'],
	dayNamesShort: ['Sek','Pir','Ant','Tre','Ket','Pen','�e�'],
	dayNamesMin: ['S','P','A','T','K','Pn','�'],
	weekHeader: 'Sav',
	dateFormat: 'yyyy-mm-dd',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['lt']);

$.timepicker.regional['lt'] = {
	timeOnlyTitle: 'Pasirinkite laik�',
	timeText: 'Laikas',
	hourText: 'Valandos',
	minuteText: 'Minut�s',
	secondText: 'Sekund�s',
	timezoneText: 'Laiko zona',
	currentText: 'Dabar',
	closeText: 'U�daryti'
	timeFormat: 'h:m',
	ampm: false
};
$.timepicker.setDefaults($.timepicker.regional['lt']);
