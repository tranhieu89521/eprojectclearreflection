import { listProducts } from "./dumpData.js";
const query=window.location.search;
const urlparam=new URLSearchParams(query);
let products=[];
let cattpye=urlparam.get('cattype');
switch(cattpye){
    case 'types':
        let type=urlparam.get('category').toLowerCase();
        for(var i=0;i<listProducts.length;i++){
            var check=false;
            for(var j=0;j<listProducts[i].types.length;j++){
                if(listProducts[i].types[j].toLowerCase().includes(type)){
                   check=true;
                   break;
                }
            }
            if(check){
                products[products.length]=listProducts[i];
            }
        }
        break;
    case 'search':
        let search=urlparam.get('search').toLowerCase();
        for(var i=0;i<listProducts.length;i++){
            var check=false;
            if(listProducts[i].name.toLowerCase().includes(search)){
                check=true;
            }
            else if(String(listProducts[i].price.origin).toLowerCase().includes(search)){
                check=true;
            }
            else if(String(listProducts[i].price.sale).toLowerCase().includes(search)){
                check=true;
            }
            else if(listProducts[i].shape.toLowerCase().includes(search)){
                check=true;
            }
            else if(listProducts[i].detail.toLowerCase().includes(search)){
                check=true;
            }
            else if(listProducts[i].detailShort.toLowerCase().includes(search)){
                check=true;
            }
            else{
                for(var j=0;j<listProducts[i].category.length;j++){ 
                    if(listProducts[i].category[j].toLowerCase().includes(search)){
                        check=true;
                        break;
                    }
            }
                if(!check){
                    for(var j=0;j<listProducts[i].types.length;j++){
                        if(listProducts[i].types[j].toLowerCase().includes(search)){
                            check=true;
                            break;
                        }
                    }
                }
                if(!check){
                    for(var j=0;j<listProducts[i].materials.length;j++){
                        if(listProducts[i].materials[j].toLowerCase().includes(search)){
                            check=true;
                            break;
                        }
                    }
                }
            }
            if(check){
               products[products.length]=listProducts[i];
            }
        }
        break;
    case 'material':
        let material=urlparam.get('category').toLowerCase();
        for(var i=0;i<listProducts.length;i++){
            var check=false;
            for(var j=0;j<listProducts[i].materials.length;j++){
                if(listProducts[i].materials[j].toLowerCase().includes(material)){
                   check=true;
                   break;
                }
            }
            if(check){
                products[products.length]=listProducts[i];
            }
        }
        break;
    case 'category':
            let category=urlparam.get('category').toLowerCase();
            for(var i=0;i<listProducts.length;i++){
                var check=false;
                for(var j=0;j<listProducts[i].category.length;j++){
                    if(listProducts[i].category[j].toLowerCase().includes(category)){
                       check=true;
                       break;
                    }
                }
                if(check){
                    products[products.length]=listProducts[i];
                }
            }
            break; 
}
function loop(){
    document.getElementById('products').innerHTML='';
    for(var i=0;i<products.length;i++){
        document.getElementById('products').innerHTML+='<li>'+
        '<div class="product-item">'+
            '<div class="product-top">'+
                '<a href="./Detail.html?id='+products[i].id+'" class="product-thumb">'+
                    '<img src="'+products[i].img[0]+'" alt="" class="imageChange">'+
                '</a>'+
                '<a href="./Detail.html?id='+products[i].id+'" class="buy-now">Buy now</a>'+
            '</div>'+
            '<div class="product-introduce">'+
                '<div class="product-price"><strong>'+products[i].price.sale+' $</strong>&ensp;<del>'+products[i].price.origin+' $</del></div>'+
                '<div><br></div>'+
                '<div class="product-name"><strong><a href="./Detail.html?id='+products[i].id+'">'+products[i].name+'</a></strong></div>'+
            '</div>'+
        '</div>'+
    '</li>';
    }
}
loop();
function filter(){
    
    let materials=document.getElementsByClassName('materials');
    let shape=document.getElementsByClassName('shape');
    let price=document.getElementsByClassName('price');
    

}
function filter_types() {
    let types=document.getElementsByClassName('types');
    let check=false;
    for(var i=0;i<products.length;i++){
        for(var j=0;j<types.length;j++){
        }
    }
}