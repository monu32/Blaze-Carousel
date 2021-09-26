(function (){
    
    function getHtmlTags(tagClass)
    {
        return document.getElementsByClassName(tagClass)
    }

    function applyBlazItemClass()
    {
        var items=getHtmlTags("blaze-outer-container")[0].getElementsByTagName("div");
        for(var i=0;i<items.length;i++) 
            items[i].classList.add('blaze-item')
    }
    
    function setBlazeItemActive(item)
    {
        item.classList.remove('blaze-item-inactive')
        item.classList.add('blaze-item-active')
    }

    function setBlazeItemInactive(item)
    {
        item.classList.remove('blaze-item-active')        
        item.classList.add('blaze-item-inactive')
    }

    function itemsPerSlide()
    {
        var outerContainzerWidth = getHtmlTags('blaze-outer-container')[0].offsetWidth;
        var item = getHtmlTags('blaze-item')[0];
        areaCoverByItem = item.offsetWidth + (outerContainzerWidth*2/100)
        return parseInt(outerContainzerWidth/areaCoverByItem)
    }

    function udpateSlides(l,r)
    {
        var i=0;
        while(i<len)
        {
            if(i>=l && i<=r)
            {
                setBlazeItemActive(items[i])
                lastActiveItem = i
            }
            else 
                setBlazeItemInactive(items[i])                
            i++;
        }
    }

    function udpateSlidesOnRightButton()
    {
        if(lastActiveItem===len-1)
            return
        else
            udpateSlides(lastActiveItem+1,lastActiveItem+n)
    }

    //0 1 2 3  4 5 6 7  8 9 10 11  12 13
    function udpateSlidesOnLeftButton()
    {
        if(lastActiveItem===n-1)
           return
        
        var activeItemsLen = getHtmlTags('blaze-item-active').length
        if(activeItemsLen < n)         
            udpateSlides(lastActiveItem - (n + activeItemsLen) +1,lastActiveItem-activeItemsLen)
        else
            udpateSlides(lastActiveItem - 2*n +1,lastActiveItem-n)
    }

    
    applyBlazItemClass()

    var lastActiveItem = -1;
    var items = getHtmlTags('blaze-item');
    var len = items.length
    var n = itemsPerSlide();

    udpateSlides(0,n-1);

    document.getElementById("blaze-right-btn").addEventListener("click",function () { 
        udpateSlidesOnRightButton();
    })

    document.getElementById("blaze-left-btn").addEventListener("click",function () { 
        udpateSlidesOnLeftButton();
    })

})()