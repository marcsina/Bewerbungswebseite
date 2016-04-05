var counter = 0;

$("#contactimg").on("click", function(){
    switch(counter){
        case 0:
            this.style.transform ="rotate(7deg)";
            break;
        case 1:
            this.style.transform="rotate(-40deg)";
            break;
        case 2:
            this.style.transform="scale(1.25,1.25)";
            break;
        case 3:
            this.style.transform="scale(0.75,0.75)";
            break;
        case 4:
            this.style.transform="rotate(-35deg)";
            break;
        case 5:
            this.style.transform="rotate(-7deg)";
            break;
        case 6:
            this.style.transform="rotate(40deg)";
            break;
        case 7:
            this.style.transform="rotate(35deg)";
            break;  
        case 8:
            this.style.transform="initial";
            counter=-1;
            break;
    }
    counter++;
    
});
