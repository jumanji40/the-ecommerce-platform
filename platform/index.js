let thecart=[];
 function add(item, price){

   
    if(item === "cart"){
        console.log(thecart.length);
        
        if (thecart.length > 0){
            for(let i=0; i <= thecart.length-1 ; i+= 2) {
                document.write("<h2>",thecart[i],"  ",thecart[i+1],"</h2>");
                console.log(thecart[i],thecart[i+1]);
            };
        }
        else{
            document.write("<h2>you've got nothing in your cart</h2>");
            console.log("nothing in the cart");
        }
    }
    
    else {
    thecart.push(item, price);
    console.log(thecart);
    };
};


