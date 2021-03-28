
const before = document.getElementById('before'); 
const after = document.getElementById('after'); 


const changeText = () => {
    let str = before.textContent;
    //console.log(str);
    after.innerText = str.replace(/\B'|'\B/g, '"');
};