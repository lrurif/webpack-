import _  from "loadsh";
import './style/index.css'; //loader 解析css-loader=>解析css模块    style-loader=>将css插入到html页面中
import './style/a.scss';


function createDomElement() {
    let dom = document.createElement("div");
    dom.innerHTML = _.join(["h1","hello","world"],"");
    //赋值语句，只能添加一个
    // dom.className = box;
    //为class添加一个classname
    dom.classList.add("box");
    return dom;
}

let divDom = createDomElement();

document.body.appendChild(divDom);