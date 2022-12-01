import './style/tooltip.css';
class Tooltip {
    constructor(element){
       this.element= element;
        this.message= element.getAttribute('data-message');
    }
    init(){

        // this is going to be the popup tooltip
        const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.message;
        this.element.appendChild(tip);

        this.element.addEventListener('mouseenter', ()=> {
            console.log('enter')
            tip.classList.add('active');
        })
        this.element.addEventListener('mouseleave', () => {
            tip.classList.remove('active');
            console.log('leave')
        })
    }
}
export { Tooltip as default};