var iconURL = chrome.extension.getURL('src/dl-icon.svg');

var item = document.createElement('a');
item.setAttribute('id', 'dl_link');
var icon = document.createElement('img')
icon.src = iconURL;
icon.width = 12;
icon.height = 12;
item.appendChild(icon);

var span = document.createElement('span');
span.className += 'num text-emphasized';
span.setAttribute('id', 'size_span');
item.appendChild(span);
item.style.textAlign = 'center';

document.querySelectorAll('.numbers-summary')[0].appendChild(item);

var s = document.createElement('script');
s.src = chrome.extension.getURL("src/inject.js");
(document.head||document.documentElement).appendChild(s);
