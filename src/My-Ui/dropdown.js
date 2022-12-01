import './style/dropdown.css'

class Dropdown  {
    constructor(container){
        this.container = container;
        this.trigger = container.querySelector('.trigger');
        this.content = container.querySelector('.content');
    }
    init(){
        this.trigger.addEventListener('click', () => {
            this.content.classList.toggle('active');
            this.trigger.classList.toggle('active');
            console.log('click trigger')
        })
    }
}
export {Dropdown as default };