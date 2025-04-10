const apiurl = "https://api.mymemory.translated.net/get?q=hello&langpair=en|ru";
const button = document.getElementById("translate-btn");
const textarea1 = document.getElementById("textarea1");
const textarea2 = document.getElementById("textarea2");
const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const speak1 = document.getElementById("speak1");
const speak2 = document.getElementById("speak2");
let languages = {
    "en": "English",
    "ru": "Russian",
    "de": "German",
    "fr": "French",
    "es": "Spanish",
    "zh": "Chinese",
    "ja": "Japanese",
    "nl": "Dutch",
    "pt": "Portuguese",
    "it": "Italian"
}
document.addEventListener('DOMContentLoaded', () => {
    Object.entries(languages).forEach(([key, value]) => {
        select1.innerHTML += `<option value="${key}">${value}</option>`;
        select2.innerHTML += `<option value="${key}">${value}</option>`;
    })
})
textarea1.addEventListener("input", async () => {
    const textInput = encodeURIComponent(textarea1.value);
    const select1Value = select1.value;
    const select2Value = select2.value;

    if (textInput.trim() === '' || select1Value === select2Value) {  
        textarea2.value = '';
    } else{
        try {
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${textInput}&langpair=${select1Value}|${select2Value}`);
            const data = await response.json();
            textarea2.value = data.responseData.translatedText;
        } catch(error) {
            console.log(error);
        }
    }
})

button.addEventListener("click", async () => {
    const textInput = encodeURIComponent(textarea1.value);
    const select1Value = select1.value;
    const select2Value = select2.value;

    if (textInput.trim() === '' || select1Value === select2Value) {  
        textarea2.value = '';
    } else{
        try {
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${textInput}&langpair=${select1Value}|${select2Value}`);
            const data = await response.json();
            textarea2.value = data.responseData.translatedText;
        } catch(error) {
            console.log(error);
        }
    }
})

speak1.addEventListener("click", () => {
    const textToSpeak = textarea1.value;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    speechSynthesis.speak(utterance);
})

speak2.addEventListener("click", () => {
    const textToSpeak = textarea2.value;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    speechSynthesis.speak(utterance);
})