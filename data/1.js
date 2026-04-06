                let currentDuration = '';
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
        const closedDateTime = document.getElementById('closedDateTime')
        const FYITextArea = document.getElementById('FYITextArea')
        const TimeCL = document.getElementById('TimeCL')
        
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
        updtextarea.addEventListener('input', autoResize2)
        FYITextArea.addEventListener('input', autoResize4)
        business.addEventListener('input', autoResize6)
        
        autoResize();
        autoResize2();
        autoResize4();
        autoResize6();


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

        function getSelectedMultipleText(){
            const selectedOptions = Array.from(selectMultiple.selectedOptions);
            if (selectedOptions.length === 0) return '';

            const selectedTexts = selectedOptions.map(option => option.text);
            return selectedTexts.join(', ');
        }

        // Получаем все чекбоксы
        const checkboxes = document.querySelectorAll('#check input[type="checkbox"]');

        // Функция получения выбранных значений в виде массива
        function getSelectedCheckboxesArray() {
            const selectedValues = [];
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    selectedValues.push(checkbox.value);
                }
            });
            return selectedValues;
        }

        // Функция получения текста с переносами строк (\n)
        function getSelectedCheckboxesText() {
            const selectedValues = getSelectedCheckboxesArray();
            if (selectedValues.length === 0) return '';
            
            // Объединяем через \n (каждый на новой строке)
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
        selectMultipleText: getSelectedMultipleText(),
        OpsText: opsN.value,
        businessText: business.value,
        timesText: times.value,
        checkboxesArray: getSelectedCheckboxesArray(),
        checkboxesText: getSelectedCheckboxesText(),
        FYITextAreaText: FYITextArea.value,
        TimeCLText: TimeCL.value
        };
        }
        
        async function copyAll() {
            const data = getCurrentDATA();
            
            if (!data.selectText || !data.inputText || !data.textareaText || !data.selectText1 || !data.dateTimeText || !data.zoneText || !data.selectMultipleText || !data.OpsText || !data.businessText || !data.timesText){
                alert('Заполните все поля')
                return;
            }

            const textToCopy = `**NEW**\n\n**${data.inputText}**\n\n> ${data.selectText}\n> ${data.selectText1}\n> ${data.dateTimeText}\n> ${data.zoneText}\n> ${data.selectMultipleText}\n> [OPS-${data.OpsText}](https://jira.crpt.ru/browse/OPS-${data.OpsText})\n\n**Бизнес-аффект:** ${data.businessText}\n\n**${data.timesText}**\n${data.textareaText}`;
            
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
                alert('Заполните все поля')
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

        const ffUPDText = updtextareaText
        .split('\n')
        .map(line => `> ${line}`)
        .join('\n');

            if (!updtextareaText || !UpdTimeText){
                alert('Заполните все поля')
                return;
            }

            const updTextToCopy = `>**${UpdTimeText}**\n${ffUPDText}`;

            try {
                await navigator.clipboard.writeText(updTextToCopy);
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
const closedTime = document.getElementById('closedTime')
const durationDiff = document.getElementById('durationDiff')
const closedText = document.getElementById('closedText')
const BusinessC = document.getElementById('BusinessC')

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


    if(closedText){closedText.value = data.textareaText; autoResize5()}
    if(BusinessC) {BusinessC.value = data.businessText; autoResize7()}

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
    currentDuration = result.join(' ');
    return currentDuration;
}
function updateDurationDifference() {
    const newDateTime = dateTime.value;
    const closedDateTimeValue = closedDateTime ? closedDateTime.value : '';
    
    if (newDateTime && closedDateTimeValue) {
        const diff = calculateTimeDifference(newDateTime, closedDateTimeValue);
        if (durationDiff) {
            durationDiff.textContent = diff;
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

if (closedDateTime) {
    closedDateTime.addEventListener('change', updateDurationDifference);
}

if (dateTime) {
    dateTime.addEventListener('change', updateDurationDifference);
}

updateDurationDifference();

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

       const closedTextToCopy = `**CLOSED**\n\n**${data.inputText}**\n\n> ${data.selectText}\n> ${data.selectText1}\n> ${dateRangeText} (${currentDuration})\n> ${data.zoneText}\n> ${data.selectMultipleText}\n> [OPS-${data.OpsText}](https://jira.crpt.ru/browse/OPS-${data.OpsText})\n> \n> **Бизнес-аффект:** ${data.businessText}\n> \n> **${data.timesText}**\n${formattedTextareaText}\n>\n\> **${data.TimeCLText}**\n${formattedClosedText}`;

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
    }

    const FYITextToCopy = `**FYI**\n${data.checkboxesText}\n${data.FYITextAreaText}\n\n**NEW**\n\n**${data.inputText}**\n\n> ${data.selectText}\n> ${data.selectText1}\n> ${data.dateTimeText}\n> ${data.zoneText}\n> ${data.selectMultipleText}\n> [OPS-${data.OpsText}](https://jira.crpt.ru/browse/OPS-${data.OpsText})\n\n**Бизнес-аффект:** ${data.businessText}\n\n**${data.timesText}**\n${data.textareaText}`

    try {
        await navigator.clipboard.writeText(FYITextToCopy);
        alert('Скопировано!');
    } catch (err) {
        alert('Ошибка копирования');
    }
}
