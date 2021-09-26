(function (){
    
    function applyBlazItemClass()
    {
        var items=document.getElementsByClassName("blaze-outer-container")[0].getElementsByTagName("div");
        for(var i=0;i<items.length;i++) {
            items[i].classList.add('blaze-item')
        }
    }
    applyBlazItemClass()    
})()