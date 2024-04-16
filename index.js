const $li = document.querySelectorAll('li');
$li.forEach((node) => {
    node.addEventListener('mousedown', function(event) {
        const $result = document.querySelector('.result');
        const value = node.innerText.trim();
        const resultValue = $result.innerText.trim();
        if(value === 'AC') {
            $result.innerText = '0';
        } else if(value === 'DEL') {
            $result.innerText = resultValue.slice(0, -1);
        } else if(value === '=') {
            $result.innerText = eval(resultValue);
        } else {
            if(resultValue === '0' || resultValue === 'Infinity' || resultValue === '-Infinity' || resultValue === 'NaN' || resultValue === 'undefined' || resultValue === 'null') {
                $result.innerText = value;
            } else {
                $result.innerText = resultValue + value;
            }
        }
    })
})