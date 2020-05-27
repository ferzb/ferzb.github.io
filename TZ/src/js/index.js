
function parallax() {
    const   bannerBG = document.querySelector('.banner'),
            witcherBG = document.querySelector('.inner');

    document.addEventListener('mousemove', (e) => {
    bannerBG.setAttribute('style', `background-position: calc(10% + ${Math.floor(e.screenX/100)}px) calc(10% + ${Math.floor(e.screenY/100)}px)`)

    witcherBG.setAttribute('style', `background-position: calc(0% + ${Math.floor(e.screenX/30)}px) calc(100% + ${Math.floor(e.screenY/30)}px)`)
    })
}

document.addEventListener('DOMContentLoaded', ()=>{

    const copyText = document.getElementById('code_text'),
      copyBtn = document.querySelector('.code_copy');
    
    copyBtn.addEventListener('click', () => {
        copyText.select();
        document.execCommand('copy');
    })

    if(document.documentElement.clientWidth >= 780){
        parallax();
    }

    window.addEventListener('resize', ()=>{
        if(document.documentElement.clientWidth >= 780){
            parallax();
        }
    })

    const   codeBox = document.querySelector('.code'),
            bounusPercent = document.querySelector('.bounus_percent'),
            bounusText = document.querySelector('.bounus_text'),
            btn = document.querySelector('.btn');

    codeBox.classList.remove('fade');
    bounusPercent.classList.remove('fade');
    bounusText.classList.remove('fade');
    btn.classList.remove('fade');
})