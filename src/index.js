import Tooltip from './My-Ui/tooltip'
import Dropdown from './My-Ui/dropdown';


const toolTip = new Tooltip(document.querySelector('.tooltip'));
console.log(toolTip);
toolTip.init();

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown)
    instance.init();
})
