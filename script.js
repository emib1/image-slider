

(function (){
    const pictures =[
        "seaimg-0",
        "seaimg-1",
        "seaimg-2",
        "seaimg-3",
        "seaimg-4"
    ];

    //select both left and right button. Add event listeners
    const buttons = document.querySelectorAll(".btn");
    const imageDIV = document.querySelector(".img-container");
    let counter = 0;
    buttons.forEach(function(button){
        button.addEventListener("click", function(e){
            if (button.classList.contains("btn-left")){
                counter--
                if (counter <0){
                    counter =pictures.length-1;
                }
                imageDIV.style.backgroundImage = `url("/img/${pictures[counter]}.jpg")`
            }
            
            if (button.classList.contains("btn-right")){
                counter++
                if (counter > pictures.length -1){
                    counter =0;
                }
                imageDIV.style.backgroundImage = `url("/img/${pictures[counter]}.jpg")`  
            }

        });
                                    
    });

})();

