import './index.css';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const hoverMe = document.querySelector("#hoverMe");
const destroy = document.querySelector("#destroy");

const tippyInstance = tippy(hoverMe!, {
    content: 'Hello, tippy',
    onHide: () => {
        console.log("### onHide")
        return false;
    },
})

destroy!.addEventListener('click', () => {
    tippyInstance.destroy();
})
