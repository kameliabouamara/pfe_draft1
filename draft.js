
const template = document.getElementById('informations');
tippy('rect',{
    content: template.innerHTML,
    trigger: 'click',
    placement: 'bottom',
    interactive: true,
});
function test(){
    fetch('api/place/query').then(function(response){
        response.json().then(function(json){
            console.log('response',json)
        });
    });
}
document.addEventListener('DOMContentLoaded',test,false);