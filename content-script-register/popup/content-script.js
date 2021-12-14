'use strict';

const hostsInput =  document.querySelector("#hosts");
const codeInput =  document.querySelector("#code");

const defaultHosts = "*://*.com/*";
//this one works on div tags
/*const defaultCode = "\
foundElements = document.getElementsByTagName('div');\
for(i = 0; i < foundElements.length; i++) {\
  foundElements[i].innerHTML = '<h1>fart</h1>';\
}";*/
//attempting to find all with a certain class ID now
const defaultCode = "\
console.log('hi');\
wordlist=['keyword',\
          'another'];\
censorThis = function() {\
  foundElements = document.querySelectorAll('div.ytd-rich-grid-media .ytd-watch-next-secondary-results-renderer');\
  for(i = 0; i < foundElements.length; i++) {\
    allTextContent = foundElements[i].innerText.toLowerCase();\
    if(wordlist.some(function(v) { return allTextContent.indexOf(v.toLowerCase()) >= 0; })) {\
      console.log('ganked');\
      distractingMeta = foundElements[i].getElementsByTagName('a');\
      for(j = 0; j < distractingMeta.length; j++) {\
        distractingMeta[j].innerHTML = 'blocked';\
        distractingMeta[j].href = 'https://google.com';\
      }\
    }\
  }\
};\
censorThis();\
console.log('hi');\
let lastUrl;\
const observer = new MutationObserver(mutations => {\
  if(location.href == lastUrl)\
    return;\
  lastUrl = location.href;\
  censorThis();\
});\
const config = {\
  childList: true,\
  subtree: true\
};\
observer.observe(document.body, config);\
";

const testLog = "alert('alert'); console.log('log');";

hostsInput.value = defaultHosts;
codeInput.value = defaultCode;

function registerScript() {
  browser.runtime.sendMessage({
    hosts: hostsInput.value.split(","),
    code: codeInput.value
  });
}

document.querySelector("#register").addEventListener('click', registerScript);
