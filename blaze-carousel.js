(function (){
    
    function getHtmlTags(tagClass)
    {
        return document.getElementsByClassName(tagClass)
    }

    function applyBlazeClasses()
    {
        for(let i=0;i<numberOfInnerContainers;i++)
        {
            let innerContainer = document.createElement("div")
            innerContainer.classList.add('blaze-inner-container')
            
            for(let j=0;j<n;j++)
            {
                if(items[0].classList.contains("blaze-inner-container")){
                    break;
                }
                else
                {
                    items[0].classList.add("blaze-item")
                    innerContainer.appendChild(items[0])                
                }
            }
            outerContainer.appendChild(innerContainer)
        }
    }

    function itemsPerSlide()
    {
        const items = getHtmlTags('blaze-outer-container')
        const outerContainerWidth = items[0].offsetWidth
        const item = items[0].children[0]
        const itemWidth = item.offsetWidth        
        return parseInt(outerContainerWidth/itemWidth)-1
    }

    const n = itemsPerSlide();
    const outerContainer = getHtmlTags("blaze-outer-container")[0]
    const items = outerContainer.children
    const numberOfInnerContainers = items.length % n ? parseInt(items.length/n + 1)  : items.length / n
    applyBlazeClasses()
    const innerContainersList = getHtmlTags('blaze-inner-container')

    document.getElementById("blaze-right-btn").addEventListener("click",function () { 

        for(var i=0;i<innerContainersList.length;i++)
        {
            rightValue = innerContainersList[i].style.right
            if(rightValue==='') {
                innerContainersList[i].style.setProperty('right','100%');
            }
            else
            {
                rightValue = parseInt(rightValue.replace('%',''))+100                
                if(numberOfInnerContainers*100 === rightValue){
                    return;
                }

                rightValue+='%'
                innerContainersList[i].style.setProperty('right',rightValue);
            }
        }
    })

    document.getElementById("blaze-left-btn").addEventListener("click",function () { 

        for(var i=0;i<innerContainersList.length;i++)
        {
            rightValue = innerContainersList[i].style.right
            if(rightValue==='') {
                innerContainersList[i].style.setProperty('right','0%');
            }
            else
            {
                rightValue = parseInt(rightValue.replace('%',''))-100                
                if(rightValue === -100){
                    return;
                }

                rightValue+='%'
                innerContainersList[i].style.setProperty('right',rightValue);
            }
        }
    })

})()

