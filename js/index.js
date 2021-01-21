import 'regenerator-runtime/runtime';
import  html2canvas from "html2canvas";

const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));
//pages-views-images
const initialPanel = document.querySelector('.initial-page');
const userDataPanel = document.querySelector('.user-data-wrap');
const resultPanel = document.querySelector('.result-page-wrap');
const salaryList = document.querySelectorAll('.result-info__list-item');
const firstMillionInfo = document.querySelector('.result-info__first-million');
const finalImg = document.querySelector('.result-controls__img');
const form = document.querySelector('.user-data-form');
const formPageImg = document.querySelector('.user-img-wrap__img');
//btns 
const goForwardBtn = document.querySelector('.initial-page__btn');
const calculateBtn = document.querySelector('.form__btn');
const saveBtn = document.querySelector('.result-controls__btn--black');
const closeBtn = document.querySelector('.result-controls__btn--close');

//Functions

const getSalaryDetails=(form => {
    const salary = parseInt(form.querySelector('#salary').value);
    const workingDays = parseInt(form.querySelector('#working-days').value);
    const workingHours = parseInt(form.querySelector('#working-hours').value);
    const salaryDetails = {salary, workingDays, workingHours};
    return salaryDetails;
})

const calculateResult=(details => {
    const perDay = (details.salary/details.workingDays).toFixed(2);
    const perHour = (perDay/details.workingHours).toFixed(2);
    const perMinute = (perHour/60).toFixed(2);
    let perSecond = (perMinute/60).toFixed(2);

    (perSecond < 0.01) ? perSecond = `poniżej 1 grosza` : '';
    
    const result = [perDay, perHour, perMinute, perSecond];
    return result;
})

const populateResult=((result, panel)=>{
    const listItems = panel.querySelectorAll('li span');
    listItems.forEach((item, index) => { 
        item.textContent = result[index];
    });
})
 const showResultPanel= async() => {
    await wait(50);
    firstMillionInfo.classList.add('active');
    finalImg.classList.add('active');
    salaryList.forEach(salary=> {
        salary.classList.add('active')
    });
}

const getDaysToMillion=(salary => {
    let daysToMillion = 0;
    const perNonWorkingDay = +(salary/30).toFixed(2);
    const hasRest = 1000000 % perNonWorkingDay ? true : false;
    (hasRest) ? daysToMillion = Math.floor(1000000/perNonWorkingDay+1) : daysToMillion=1000000/perNonWorkingDay;
    return daysToMillion;
});

const getDateToMillion=(days => {
    const miliseconds = Date.now() + (days*86400000);
    const dateObj = new Date(miliseconds);
    return `${dateObj.toLocaleDateString()}`;
});

const goForward = (()=> {
    initialPanel.classList.add('none');
    userDataPanel.classList.remove('none');
    form.classList.add('active');
    formPageImg.classList.add('active');
});

const moveFormImg = (()=> {
    formPageImg.classList.contains('submit-hover') ?
    formPageImg.classList.remove('submit-hover') :
    formPageImg.classList.add('submit-hover');
});

const saveResultImg = (()=> {
    html2canvas(document.querySelector("body")).then(canvas => {
        if(window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(canvas.msToBlob(),"zarobki.png")
        }
        else {
            const a = document.createElement('a');
            document.body.appendChild(a);
            a.href = canvas.toDataURL();
            a.download = 'twoje_zarobki.png';
            a.click();
            document.body.removeChild(a);
        }
    });
})

const closeApp = (()=> {
    resultPanel.classList.add('none');
    initialPanel.classList.remove('none');
    saveBtn.setAttribute("disabled", "");
});

//Event listeners
goForwardBtn.addEventListener('click', goForward);
calculateBtn.addEventListener('mouseover', moveFormImg);
calculateBtn.addEventListener('mouseout', moveFormImg);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstMilionSpan = document.querySelector('.result-info__first-million-date');
    const salaryPerMonth = getSalaryDetails(e.currentTarget).salary;
    const result = calculateResult(getSalaryDetails(e.currentTarget));
    const daysToMillion = getDaysToMillion(salaryPerMonth);
    
    populateResult(result, resultPanel);
    firstMilionSpan.textContent = getDateToMillion(daysToMillion);
    showResultPanel();
    e.currentTarget.reset();

    salaryList.forEach(salary=>salary.classList.remove('active'));
    firstMillionInfo.classList.remove('active');
    finalImg.classList.remove('active');
    userDataPanel.classList.add('none');
    resultPanel.classList.remove('none');
});

saveBtn.addEventListener('click', saveResultImg);

firstMillionInfo.addEventListener('transitionend', ()=> {
    saveBtn.removeAttribute('disabled');
})
closeBtn.addEventListener('click', closeApp);