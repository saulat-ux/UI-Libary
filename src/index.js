import Tooltip from './My-Ui/tooltip'
import Dropdown from './My-Ui/dropdown';
import Tabs from './My-Ui/tabs';


const toolTip = new Tooltip(document.querySelector('.tooltip'));

toolTip.init();

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown)
    instance.init();
})
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();