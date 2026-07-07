let currentDuration = '';
let currentMIDuration = '';
const textarea = document.getElementById('MainTextArea');
const select = document.getElementById('Crit');
const input = document.getElementById('Theme');
const select2 = document.getElementById('System');
const dateTime = document.getElementById('myDateTime');
const zone = document.getElementById('ZO');
const selectMultiple = document.getElementById('TG');
const numberInput = document.getElementById('ops');
const opsN = document.getElementById('ops');
const business = document.getElementById('Business');
const times = document.getElementById('timeS');
const updtime = document.getElementById('UPDtime');
const updtextarea = document.getElementById('UPDTextArea');
const closedDateTime = document.getElementById('closedDateTime');
const FYITextArea = document.getElementById('FYITextArea');
const TimeCL = document.getElementById('TimeCL');

// Элементы REOPENED
const reopenedTime = document.getElementById('REOPENEDtime');
const reopenedTextarea = document.getElementById('REOPENEDTextArea');

// Элементы MI NEW
const MITextarea = document.getElementById('MITextArea');
const MISelect = document.getElementById('MICrit');
const MIInput = document.getElementById('MITheme');
const MISelect2 = document.getElementById('MISystem');
const MIDateTime = document.getElementById('MIDateTime');
const MIZone = document.getElementById('MIZO');
const MISelectMultiple = document.getElementById('MITG');
const MINumberInput = document.getElementById('MIOps');
const MIOpsN = document.getElementById('MIOps');
const MIBusiness = document.getElementById('MIBusiness');
const MITimes = document.getElementById('MITimeS');

// Элементы MI CLOSED
const MIClosedDateTime = document.getElementById('MIClosedDateTime');
const MITimeCL = document.getElementById('MITimeCL');
const MIClosedTextArea = document.getElementById('MIClosedTextArea');
const MIClosedText = document.getElementById('MIClosedText');
const MIBusinessC = document.getElementById('MIBusinessC');
const MIDurationDiff = document.getElementById('MIDurationDiff');

// Элементы для обновления MI CLOSED
const MIClosedTheme = document.getElementById('MIClosedTheme');
const MIClosedPriority = document.getElementById('MIClosedPriority');
const MIClosedSystem = document.getElementById('MIClosedSystem');
const MIClosedZO = document.getElementById('MIClosedZO');
const MIClosedTG = document.getElementById('MIClosedTG');
const MIClosedOPS = document.getElementById('MIClosedOPS');
const MIClosedTime = document.getElementById('MIClosedTime');

const modeSwitch = document.getElementById('modeSwitch');
const MIModeSwitch = document.getElementById('MIModeSwitch');
const newBlock = document.getElementById('NEW');
const MINewBlock = document.getElementById('MI_NEW');
const closedBlock = document.getElementById('CLOSED');
const MIClosedBlock = document.getElementById('MI_CLOSED');

// Переключение UPD/REOPENED
const updModeSwitch = document.getElementById('updModeSwitch');
const reopenedModeSwitch = document.getElementById('reopenedModeSwitch');
const updBlock = document.getElementById('UPD');
const reopenedBlock = document.getElementById('REOPENED');

function toggleUpdMode(showReopened) {
    if (showReopened) {
        updBlock.style.display = 'none';
        reopenedBlock.style.display = 'block';
        updModeSwitch.checked = true;
        reopenedModeSwitch.checked = true;
    } else {
        updBlock.style.display = 'block';
        reopenedBlock.style.display = 'none';
        updModeSwitch.checked = false;
        reopenedModeSwitch.checked = false;
    }
}

updModeSwitch.addEventListener('change', function() {
    toggleUpdMode(this.checked);
});

reopenedModeSwitch.addEventListener('change', function() {
    toggleUpdMode(this.checked);
});

// Переключение между режимами NEW/MI NEW и CLOSED/MI CLOSED
function toggleMode(showMI) {
    if (showMI) {
        newBlock.style.display = 'none';
        MINewBlock.style.display = 'block';
        closedBlock.style.display = 'none';
        MIClosedBlock.style.display = 'block';
        modeSwitch.checked = true;
        MIModeSwitch.checked = true;
    } else {
        newBlock.style.display = 'block';
        MINewBlock.style.display = 'none';
        closedBlock.style.display = 'block';
        MIClosedBlock.style.display = 'none';
        modeSwitch.checked = false;
        MIModeSwitch.checked = false;
    }
}

modeSwitch.addEventListener('change', function() {
    toggleMode(this.checked);
});

MIModeSwitch.addEventListener('change', function() {
    toggleMode(this.checked);
});

// Автоresize для REOPENED полей
function autoResizeReopened() {
    reopenedTextarea.style.height = 'auto';
    reopenedTextarea.style.height = reopenedTextarea.scrollHeight + 'px';
}
reopenedTextarea.addEventListener('input', autoResizeReopened);
autoResizeReopened();

// Автоresize для MI NEW полей
function autoResizeMI() {
    MITextarea.style.height = 'auto';
    MITextarea.style.height = MITextarea.scrollHeight + 'px';
}
MITextarea.addEventListener('input', autoResizeMI);
autoResizeMI();

function autoResizeMI2() {
    MIBusiness.style.height = 'auto';
    MIBusiness.style.height = MIBusiness.scrollHeight + 'px';
}
MIBusiness.addEventListener('input', autoResizeMI2);
autoResizeMI2();

// Автоresize для MI CLOSED полей
function autoResizeMIClosed() {
    MIClosedTextArea.style.height = 'auto';
    MIClosedTextArea.style.height = MIClosedTextArea.scrollHeight + 'px';
}
MIClosedTextArea.addEventListener('input', autoResizeMIClosed);
autoResizeMIClosed();

function autoResizeMIClosedText() {
    MIClosedText.style.height = 'auto';
    MIClosedText.style.height = MIClosedText.scrollHeight + 'px';
}
MIClosedText.addEventListener('input', autoResizeMIClosedText);
autoResizeMIClosedText();

function autoResizeMIBusinessC() {
    MIBusinessC.style.height = 'auto';
    MIBusinessC.style.height = MIBusinessC.scrollHeight + 'px';
}
MIBusinessC.addEventListener('input', autoResizeMIBusinessC);
autoResizeMIBusinessC();

function autoResize() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}
function autoResize2() {
    updtextarea.style.height = 'auto';
    updtextarea.style.height = updtextarea.scrollHeight + 'px';
}
function autoResize4() {
    FYITextArea.style.height = 'auto';
    FYITextArea.style.height = FYITextArea.scrollHeight + 'px';
}
function autoResize6(){
    business.style.height = 'auto';
    business.style.height = business.scrollHeight + 'px';
}

textarea.addEventListener('input', autoResize);
updtextarea.addEventListener('input', autoResize2);
FYITextArea.addEventListener('input', autoResize4);
business.addEventListener('input', autoResize6);

autoResize();
autoResize2();
autoResize4();
autoResize6();

// Функция для вставки ссылки из буфера обмена
async function insertLinkFromClipboard(textareaElement) {
    try {
        const start = textareaElement.selectionStart;
        const end = textareaElement.selectionEnd;
        const selectedText = textareaElement.value.substring(start, end);
        
        if (!selectedText) {
            alert('Пожалуйста, выделите текст, который нужно превратить в ссылку');
            return;
        }
        
        let url = '';
        try {
            const clipboardText = await navigator.clipboard.readText();
            if (clipboardText && (clipboardText.startsWith('http://') || clipboardText.startsWith('https://'))) {
                url = clipboardText;
            } else {
                url = prompt('Введите URL для ссылки:', clipboardText || 'https://');
                if (!url) return;
            }
        } catch (err) {
            url = prompt('Введите URL для ссылки:', 'https://');
            if (!url) return;
        }
        
        const linkText = `[${selectedText}](${url})`;
        
        const before = textareaElement.value.substring(0, start);
        const after = textareaElement.value.substring(end);
        textareaElement.value = before + linkText + after;
        
        const newCursorPos = start + linkText.length;
        textareaElement.selectionStart = newCursorPos;
        textareaElement.selectionEnd = newCursorPos;
        
        textareaElement.dispatchEvent(new Event('input'));
        
        if (textareaElement.id === 'closedText') {
            const event = new Event('input');
            closedText.dispatchEvent(event);
        }
        
        if (textareaElement.id === 'MIClosedText') {
            const event = new Event('input');
            MIClosedText.dispatchEvent(event);
        }
        
    } catch (error) {
        alert('Ошибка при вставке ссылки: ' + error.message);
    }
}

// Функция для вставки ссылки с подстановкой текста из буфера (закомментирована, но оставлена для совместимости)
// async function insertLinkFromClipboardWithText(textareaElement) {
//     try {
//         const start = textareaElement.selectionStart;
//         const end = textareaElement.selectionEnd;
//         const selectedText = textareaElement.value.substring(start, end);
//         
//         if (!selectedText) {
//             alert('Пожалуйста, выделите текст, который нужно превратить в ссылку');
//             return;
//         }
//         
//         let url = '';
//         let linkText = selectedText;
//         
//         try {
//             const clipboardText = await navigator.clipboard.readText();
//             if (clipboardText && (clipboardText.startsWith('http://') || clipboardText.startsWith('https://'))) {
//                 url = clipboardText;
//                 const useSelected = confirm(`Использовать "${selectedText}" как текст ссылки?\nНажмите "OK" для использования выделенного текста или "Отмена" для ввода своего текста.`);
//                 if (!useSelected) {
//                     linkText = prompt('Введите текст для ссылки:', selectedText);
//                     if (!linkText) return;
//                 }
//             } else {
//                 url = prompt('Введите URL для ссылки:', clipboardText || 'https://');
//                 if (!url) return;
//                 linkText = prompt('Введите текст для ссылки:', selectedText);
//                 if (!linkText) return;
//             }
//         } catch (err) {
//             url = prompt('Введите URL для ссылки:', 'https://');
//             if (!url) return;
//             linkText = prompt('Введите текст для ссылки:', selectedText);
//             if (!linkText) return;
//         }
//         
//         const linkResult = `[${linkText}](${url})`;
//         
//         const before = textareaElement.value.substring(0, start);
//         const after = textareaElement.value.substring(end);
//         textareaElement.value = before + linkResult + after;
//         
//         const newCursorPos = start + linkResult.length;
//         textareaElement.selectionStart = newCursorPos;
//         textareaElement.selectionEnd = newCursorPos;
//         
//         textareaElement.dispatchEvent(new Event('input'));
//         
//         if (textareaElement.id === 'closedText') {
//             const event = new Event('input');
//             closedText.dispatchEvent(event);
//         }
//         
//         if (textareaElement.id === 'MIClosedText') {
//             const event = new Event('input');
//             MIClosedText.dispatchEvent(event);
//         }
//         
//     } catch (error) {
//         alert('Ошибка при вставке ссылки: ' + error.message);
//     }
// }

// Добавляем обработчики горячих клавиш
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'V') {
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.id === 'MainTextArea' || 
                              activeElement.id === 'closedText' || 
                              activeElement.id === 'MITextArea' ||
                              activeElement.id === 'MIClosedText' ||
                              activeElement.id === 'UPDTextArea' ||
                              activeElement.id === 'REOPENEDTextArea')) {
            e.preventDefault();
            insertLinkFromClipboard(activeElement);
        }
    }
    if (e.ctrlKey && e.altKey && e.key === 'V') {
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.id === 'MainTextArea' || 
                              activeElement.id === 'closedText' || 
                              activeElement.id === 'MITextArea' ||
                              activeElement.id === 'MIClosedText' ||
                              activeElement.id === 'UPDTextArea' ||
                              activeElement.id === 'REOPENEDTextArea')) {
            e.preventDefault();
            insertLinkFromClipboardWithText(activeElement);
        }
    }
});
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'М') {
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.id === 'MainTextArea' || 
                              activeElement.id === 'closedText' || 
                              activeElement.id === 'MITextArea' ||
                              activeElement.id === 'MIClosedText' ||
                              activeElement.id === 'UPDTextArea' ||
                              activeElement.id === 'REOPENEDTextArea')) {
            e.preventDefault();
            insertLinkFromClipboard(activeElement);
        }
    }
    if (e.ctrlKey && e.altKey && e.key === 'М') {
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.id === 'MainTextArea' || 
                              activeElement.id === 'closedText' || 
                              activeElement.id === 'MITextArea' ||
                              activeElement.id === 'MIClosedText' ||
                              activeElement.id === 'UPDTextArea' ||
                              activeElement.id === 'REOPENEDTextArea')) {
            e.preventDefault();
            insertLinkFromClipboardWithText(activeElement);
        }
    }
});

// Функции для вызова из onclick
window.insertLink = function(textareaId) {
    const element = document.getElementById(textareaId);
    if (element) {
        insertLinkFromClipboard(element);
    }
};

// window.insertLinkWithText = function(textareaId) {
//     const element = document.getElementById(textareaId);
//     if (element) {
//         insertLinkFromClipboardWithText(element);
//     }
// };

function formatDateTime(dateTimeStr) {
    if (!dateTimeStr) return '';
    
    const date = new Date(dateTimeStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

function Time(TimeStr) {
    if (!TimeStr) return '';
    
    const date = new Date(TimeStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

function validateNumber(input) {
    let value = input.value.replace(/\D/g, '');
    
    const maxDigits = 6;
    if (value.length > maxDigits) {
        value = value.slice(0, maxDigits);
    }
    
    input.value = value;
}

numberInput.addEventListener('input', function() {
    validateNumber(this);
});

numberInput.addEventListener('paste', function(e) {
    setTimeout(() => {
        validateNumber(this);
    }, 10);
});

MIOpsN.addEventListener('input', function() {
    validateNumber(this);
});

MIOpsN.addEventListener('paste', function(e) {
    setTimeout(() => {
        validateNumber(this);
    }, 10);
});

function getSelectedMultipleText(selectElement) {
    const selectedOptions = Array.from(selectElement.selectedOptions);
    if (selectedOptions.length === 0) return '';

    const selectedTexts = selectedOptions.map(option => option.text);
    return selectedTexts.join(', ');
}

const checkboxes = document.querySelectorAll('#check input[type="checkbox"]');

function getSelectedCheckboxesArray() {
    const selectedValues = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value);
        }
    });
    return selectedValues;
}

function getSelectedCheckboxesText() {
    const selectedValues = getSelectedCheckboxesArray();
    if (selectedValues.length === 0) return '';
    return selectedValues.join('\n');
}

function getCurrentDATA() {
    return {
        textareaText: textarea.value,
        selectText: select.options[select.selectedIndex]?.value ? select.options[select.selectedIndex].text : '',
        selectText1: select2.options[select2.selectedIndex]?.value ? select2.options[select2.selectedIndex].text : '',
        inputText: input.value,
        dateTimeText: formatDateTime(dateTime.value),
        TimeCTimeText: Time(closedDateTime.value),
        zoneText: zone.options[zone.selectedIndex]?.value ? zone.options[zone.selectedIndex].text : '',
        selectMultipleText: getSelectedMultipleText(selectMultiple),
        OpsText: opsN.value,
        businessText: business.value,
        timesText: times.value,
        checkboxesArray: getSelectedCheckboxesArray(),
        checkboxesText: getSelectedCheckboxesText(),
        FYITextAreaText: FYITextArea.value,
        TimeCLText: TimeCL.value
    };
}

function getCurrentMIDATA() {
    return {
        textareaText: MITextarea.value,
        selectText: MISelect.options[MISelect.selectedIndex]?.value ? MISelect.options[MISelect.selectedIndex].text : '',
        selectText1: MISelect2.options[MISelect2.selectedIndex]?.value ? MISelect2.options[MISelect2.selectedIndex].text : '',
        inputText: MIInput.value,
        dateTimeText: formatDateTime(MIDateTime.value),
        TimeCTimeText: Time(MIClosedDateTime.value),
        zoneText: MIZone.options[MIZone.selectedIndex]?.value ? MIZone.options[MIZone.selectedIndex].text : '',
        selectMultipleText: getSelectedMultipleText(MISelectMultiple),
        OpsText: MIOpsN.value,
        businessText: MIBusiness.value,
        timesText: MITimes.value,
        TimeCLText: MITimeCL.value
    };
}

async function copyAll() {
    const data = getCurrentDATA();
    const formattedBusinessText = data.businessText
        .split('\n')
        .map((line, i, arr) => arr.length === 1 ? line : (i === 0 ? `\n${line}` : `${line}`))
        .join('\n');
    
    if (!data.selectText || !data.inputText || !data.textareaText || !data.selectText1 || !data.dateTimeText || !data.zoneText || !data.selectMultipleText || !data.OpsText || !data.businessText || !data.timesText){
        alert('Заполните все поля');
        return;
    }

    const textToCopy = `**NEW**\n\n**${data.inputText}**\n\n> ${data.selectText}\n> ${data.selectText1}\n> ${data.dateTimeText}\n> ${data.zoneText}\n> ${data.selectMultipleText}\n> [OPS-${data.OpsText}](https://jira.crpt.ru/browse/OPS-${data.OpsText})\n\n**Бизнес-аффект:** ${formattedBusinessText}\n\n**${data.timesText}**\n${data.textareaText}`;
    
    try {
        await navigator.clipboard.writeText(textToCopy);
        alert('Скопировано!');
    } catch (err) {
        alert('Ошибка копирования');
    }
}

async function copyMIAll() {
    const data = getCurrentMIDATA();
    const formattedBusinessText = data.businessText
        .split('\n')
        .map((line, i, arr) => arr.length === 1 ? line : (i === 0 ? `\n${line}` : `${line}`))
        .join('\n');
    
    if (!data.selectText || !data.inputText || !data.textareaText || !data.selectText1 || !data.dateTimeText || !data.zoneText || !data.selectMultipleText || !data.OpsText || !data.businessText || !data.timesText){
        alert('Заполните все поля');
        return;
    }

    const textToCopy = `**MI NEW**\n\n**${data.inputText}**\n\n> ${data.selectText}\n> ${data.selectText1}\n> ${data.dateTimeText}\n> ${data.zoneText}\n> ${data.selectMultipleText}\n> [OPS-${data.OpsText}](https://jira.crpt.ru/browse/OPS-${data.OpsText})\n\n**Бизнес-аффект:** ${formattedBusinessText}\n\n**${data.timesText}**\n${data.textareaText}`;
    
    try {
        await navigator.clipboard.writeText(textToCopy);
        alert('Скопировано!');
    } catch (err) {
        alert('Ошибка копирования');
    }
}

async function copyUPD() {
    const updtextareaText = updtextarea.value;
    const UpdTimeText = updtime.value;

    if (!updtextareaText || !UpdTimeText){
        alert('Заполните все поля');
        return;
    }

    const updTextToCopy = `**UPD**\n\n**${UpdTimeText}**\n${updtextareaText}`;

    try {
        await navigator.clipboard.writeText(updTextToCopy);
        alert('Скопировано!');
    } catch (err) {
        alert('Ошибка копирования');
    }
}

async function copyUPD1() {
    const updtextareaText = updtextarea.value;
    const UpdTimeText = updtime.value;

    if (!updtextareaText || !UpdTimeText){
        alert('Заполните все поля');
        return;
    }

    const updTextToCopy = `**${UpdTimeText}**\n${updtextareaText}`;

    try {
        await navigator.clipboard.writeText(updTextToCopy);
        alert('Скопировано!');
    } catch (err) {
        alert('Ошибка копирования');
    }
}

async function copyREOPENED() {
    const reopenedText = reopenedTextarea.value;
    const reopenedTimeText = reopenedTime.value;

    if (!reopenedText || !reopenedTimeText){
        alert('Заполните все поля');
        return;
    }

    const textToCopy = `**REOPENED**\n\n**${reopenedTimeText}**\n${reopenedText}`;

    try {
        await navigator.clipboard.writeText(textToCopy);
        alert('Скопировано!');
    } catch (err) {
        alert('Ошибка копирования');
    }
}

async function copyREOPENED1() {
    const reopenedText = reopenedTextarea.value;
    const reopenedTimeText = reopenedTime.value;

    if (!reopenedText || !reopenedTimeText){
        alert('Заполните все поля');
        return;
    }

    const textToCopy = `**${reopenedTimeText}**\n${reopenedText}`;

    try {
        await navigator.clipboard.writeText(textToCopy);
        alert('Скопировано!');
    } catch (err) {
        alert('Ошибка копирования');
    }
}

const closedTheme = document.getElementById('closedTheme');
const closedPriority = document.getElementById('closedPriority');
const closedSystem = document.getElementById('closedSystem');
const closedZO = document.getElementById('closedZO');
const closedTG = document.getElementById('closedTG');
const closedOPS = document.getElementById('closedOPS');
const closedBusiness = document.getElementById('closedBusiness');
const closedTextArea = document.getElementById('closedTextArea');
const closedTime = document.getElementById('closedTime');
const durationDiff = document.getElementById('durationDiff');
const closedText = document.getElementById('closedText');
const BusinessC = document.getElementById('BusinessC');

function autoResize3() {
    closedTextArea.style.height = 'auto';
    closedTextArea.style.height = closedTextArea.scrollHeight + 'px';
}

function autoResize5(){
    closedText.style.height = 'auto';
    closedText.style.height = closedText.scrollHeight + 'px';
}

function autoResize7(){
    BusinessC.style.height = 'auto';
    BusinessC.style.height = BusinessC.scrollHeight + 'px';
}

closedText.addEventListener('input', autoResize5);
closedTextArea.addEventListener('input', autoResize3);
autoResize3();
autoResize7();

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function ClosedTextArea() {
    return {
        ClosedTextareaText: closedTextArea.value,
    };
}

function updateClosed() {
    const data = getCurrentDATA();
    
    if (closedTheme) closedTheme.innerHTML = `Тема: ${escapeHtml(data.inputText)}`;
    if (closedPriority) closedPriority.innerHTML = `Приоритет: ${escapeHtml(data.selectText)}`;
    if (closedSystem) closedSystem.innerHTML = `Система: ${escapeHtml(data.selectText1)}`;
    if (closedZO) closedZO.innerHTML = `ЗО: ${escapeHtml(data.zoneText)}`;
    if (closedTG) closedTG.innerHTML = `ТГ: ${escapeHtml(data.selectMultipleText)}`;
    if (closedOPS) closedOPS.innerHTML = `OPS-${escapeHtml(data.OpsText)}`;
    if (BusinessC) BusinessC.innerHTML = `Бизнес-аффект: ${escapeHtml(data.businessText)}`;
    if (closedTime) closedTime.innerHTML = `${escapeHtml(data.timesText)}`;
    if (closedText) closedText.innerHTML = `${escapeHtml(data.textareaText)}`;

    if(closedText){closedText.value = data.textareaText; autoResize5();}
    if(BusinessC) {BusinessC.value = data.businessText; autoResize7();}
}

if (input) input.addEventListener('input', updateClosed);
if (select) select.addEventListener('change', updateClosed);
if (select2) select2.addEventListener('change', updateClosed);
if (zone) zone.addEventListener('change', updateClosed);
if (selectMultiple) selectMultiple.addEventListener('change', updateClosed);
if (opsN) opsN.addEventListener('input', updateClosed);
if (business) business.addEventListener('input', updateClosed);
if (times) times.addEventListener('input', updateClosed);
if (textarea) textarea.addEventListener('input', updateClosed);

updateClosed();

// Функции для MI CLOSED
function updateMIClosed() {
    const data = getCurrentMIDATA();
    
    if (MIClosedTheme) MIClosedTheme.innerHTML = `Тема: ${escapeHtml(data.inputText)}`;
    if (MIClosedPriority) MIClosedPriority.innerHTML = `Приоритет: ${escapeHtml(data.selectText)}`;
    if (MIClosedSystem) MIClosedSystem.innerHTML = `Система: ${escapeHtml(data.selectText1)}`;
    if (MIClosedZO) MIClosedZO.innerHTML = `ЗО: ${escapeHtml(data.zoneText)}`;
    if (MIClosedTG) MIClosedTG.innerHTML = `ТГ: ${escapeHtml(data.selectMultipleText)}`;
    if (MIClosedOPS) MIClosedOPS.innerHTML = `OPS-${escapeHtml(data.OpsText)}`;
    if (MIBusinessC) MIBusinessC.innerHTML = `Бизнес-аффект: ${escapeHtml(data.businessText)}`;
    if (MIClosedTime) MIClosedTime.innerHTML = `${escapeHtml(data.timesText)}`;
    if (MIClosedText) MIClosedText.innerHTML = `${escapeHtml(data.textareaText)}`;

    if(MIClosedText){MIClosedText.value = data.textareaText; autoResizeMIClosedText();}
    if(MIBusinessC) {MIBusinessC.value = data.businessText; autoResizeMIBusinessC();}
}

if (MIInput) MIInput.addEventListener('input', updateMIClosed);
if (MISelect) MISelect.addEventListener('change', updateMIClosed);
if (MISelect2) MISelect2.addEventListener('change', updateMIClosed);
if (MIZone) MIZone.addEventListener('change', updateMIClosed);
if (MISelectMultiple) MISelectMultiple.addEventListener('change', updateMIClosed);
if (MIOpsN) MIOpsN.addEventListener('input', updateMIClosed);
if (MIBusiness) MIBusiness.addEventListener('input', updateMIClosed);
if (MITimes) MITimes.addEventListener('input', updateMIClosed);
if (MITextarea) MITextarea.addEventListener('input', updateMIClosed);

updateMIClosed();

function calculateTimeDifference(startDateStr, endDateStr) {
    if (!startDateStr || !endDateStr) return '';
    
    const start = new Date(startDateStr);
    const end = new Date(endDateStr);
    
    if (isNaN(start) || isNaN(end)) return '';
    
    let diffMs = end - start;
    
    if (diffMs < 0) {
        return 'Ошибка: дата закрытия раньше';
    }
    
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    diffMs -= days * (1000 * 60 * 60 * 24);
    
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    diffMs -= hours * (1000 * 60 * 60);
    
    const minutes = Math.floor(diffMs / (1000 * 60));
    
    let result = [];
    if (days > 0) result.push(`${days}дн.`);
    if (hours > 0) result.push(`${hours}ч.`);
    if (minutes > 0 || result.length === 0) result.push(`${minutes}мин.`);
    return result.join(' ');
}

function updateDurationDifference() {
    const newDateTime = dateTime.value;
    const closedDateTimeValue = closedDateTime ? closedDateTime.value : '';
    
    if (newDateTime && closedDateTimeValue) {
        const diff = calculateTimeDifference(newDateTime, closedDateTimeValue);
        if (durationDiff) {
            durationDiff.textContent = diff;
            currentDuration = diff;
            if (diff.includes('Ошибка')) {
                durationDiff.style.color = 'red';
            } else {
                durationDiff.style.color = '#4CAF50';
            }
        }
    } else if (durationDiff) {
        durationDiff.textContent = '—';
        durationDiff.style.color = '#999';
    }
}

function updateMIDurationDifference() {
    const newDateTime = MIDateTime.value;
    const closedDateTimeValue = MIClosedDateTime ? MIClosedDateTime.value : '';
    
    if (newDateTime && closedDateTimeValue) {
        const diff = calculateTimeDifference(newDateTime, closedDateTimeValue);
        if (MIDurationDiff) {
            MIDurationDiff.textContent = diff;
            currentMIDuration = diff;
            if (diff.includes('Ошибка')) {
                MIDurationDiff.style.color = 'red';
            } else {
                MIDurationDiff.style.color = '#4CAF50';
            }
        }
    } else if (MIDurationDiff) {
        MIDurationDiff.textContent = '—';
        MIDurationDiff.style.color = '#999';
    }
}

if (closedDateTime) {
    closedDateTime.addEventListener('change', updateDurationDifference);
}
if (dateTime) {
    dateTime.addEventListener('change', updateDurationDifference);
}
updateDurationDifference();

if (MIClosedDateTime) {
    MIClosedDateTime.addEventListener('change', updateMIDurationDifference);
}
if (MIDateTime) {
    MIDateTime.addEventListener('change', updateMIDurationDifference);
}
updateMIDurationDifference();

async function copyCLOSED() {
    const data = getCurrentDATA();
    const data2 = ClosedTextArea();

    if (!data.inputText || !data.selectText || !data.selectText1 || !data.dateTimeText|| !data.zoneText || !data.selectMultipleText || !data.OpsText || !data.businessText || !data.timesText || !data.textareaText || !currentDuration){
        alert('Заполните все поля');
        return;
    }
    
    const formattedTextareaText = data.textareaText
        .split('\n')
        .map(line => `> ${line}`)
        .join('\n');
    
    const formattedClosedText = data2.ClosedTextareaText
        .split('\n')
        .map(line => `> ${line}`)
        .join('\n');

    const formattedBusinessText = data.businessText
        .split('\n')
        .map((line, i, arr) => arr.length === 1 ? line : (i === 0 ? `\n> ${line}` : `> ${line}`))
        .join('\n');
    
    let dateRangeText = '';
    
    const openDate = data.dateTimeText;
    const closeDate = data.TimeCTimeText;
    
    const openDateOnly = openDate.split(' ')[0];
    const closeDateOnly = closeDate.split(' ')[0];
    
    if (openDateOnly === closeDateOnly) {
        const closeTimeOnly = closeDate.split(' ')[1];
        dateRangeText = `${openDate} - ${closeTimeOnly}`;
    } else {
        dateRangeText = `${openDate} - ${closeDate}`;
    }
    
    const closedTextToCopy = `**CLOSED**\n\n**${data.inputText}**\n\n> ${data.selectText}\n> ${data.selectText1}\n> ${dateRangeText} (${currentDuration})\n> ${data.zoneText}\n> ${data.selectMultipleText}\n> [OPS-${data.OpsText}](https://jira.crpt.ru/browse/OPS-${data.OpsText})\n> \n> **Бизнес-аффект:** ${formattedBusinessText}\n> \n> **${data.timesText}**\n${formattedTextareaText}\n>\n> **${data.TimeCLText}**\n${formattedClosedText}`;

    try {
        await navigator.clipboard.writeText(closedTextToCopy);
        alert('Скопировано!');
    } catch (err) {
        alert('Ошибка копирования');
    }
}

async function copyMICLOSED() {
    const data = getCurrentMIDATA();
    const closedTextValue = MIClosedTextArea.value;

    if (!data.inputText || !data.selectText || !data.selectText1 || !data.dateTimeText|| !data.zoneText || !data.selectMultipleText || !data.OpsText || !data.businessText || !data.timesText || !data.textareaText || !currentMIDuration){
        alert('Заполните все поля');
        return;
    }
    
    const formattedTextareaText = data.textareaText
        .split('\n')
        .map(line => `> ${line}`)
        .join('\n');
    
    const formattedClosedText = closedTextValue
        .split('\n')
        .map(line => `> ${line}`)
        .join('\n');

    const formattedBusinessText = data.businessText
        .split('\n')
        .map((line, i, arr) => arr.length === 1 ? line : (i === 0 ? `\n> ${line}` : `> ${line}`))
        .join('\n');
    
    let dateRangeText = '';
    
    const openDate = data.dateTimeText;
    const closeDate = data.TimeCTimeText;
    
    const openDateOnly = openDate.split(' ')[0];
    const closeDateOnly = closeDate.split(' ')[0];
    
    if (openDateOnly === closeDateOnly) {
        const closeTimeOnly = closeDate.split(' ')[1];
        dateRangeText = `${openDate} - ${closeTimeOnly}`;
    } else {
        dateRangeText = `${openDate} - ${closeDate}`;
    }
    
    const closedTextToCopy = `**MI CLOSED**\n\n**${data.inputText}**\n\n> ${data.selectText}\n> ${data.selectText1}\n> ${dateRangeText} (${currentMIDuration})\n> ${data.zoneText}\n> ${data.selectMultipleText}\n> [OPS-${data.OpsText}](https://jira.crpt.ru/browse/OPS-${data.OpsText})\n> \n> **Бизнес-аффект:** ${formattedBusinessText}\n> \n> **${data.timesText}**\n${formattedTextareaText}\n>\n> **${data.TimeCLText}**\n${formattedClosedText}`;

    try {
        await navigator.clipboard.writeText(closedTextToCopy);
        alert('Скопировано!');
    } catch (err) {
        alert('Ошибка копирования');
    }
}

async function copyFYI() {
    const data = getCurrentDATA();

    if (!data.checkboxesText || !data.FYITextAreaText){
        alert('Заполните все поля');
        return;
    }

    const formattedBusinessText = data.businessText
        .split('\n')
        .map((line, i, arr) => arr.length === 1 ? line : (i === 0 ? `\n${line}` : `${line}`))
        .join('\n');

    const FYITextToCopy = `**FYI**\n${data.checkboxesText}\n${data.FYITextAreaText}\n\n**NEW**\n\n**${data.inputText}**\n\n> ${data.selectText}\n> ${data.selectText1}\n> ${data.dateTimeText}\n> ${data.zoneText}\n> ${data.selectMultipleText}\n> [OPS-${data.OpsText}](https://jira.crpt.ru/browse/OPS-${data.OpsText})\n\n**Бизнес-аффект:** ${formattedBusinessText}\n\n**${data.timesText}**\n${data.textareaText}`;

    try {
        await navigator.clipboard.writeText(FYITextToCopy);
        alert('Скопировано!');
    } catch (err) {
        alert('Ошибка копирования');
    }
}
