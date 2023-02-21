import { listProducts } from "./dumpData.js";
const query=window.location.search;
const urlparam=new URLSearchParams(query);
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
                document.getElementById('products').innerHTML+='<li>'+
                '<div class="product-item">'+
                    '<div class="product-top">'+
                        '<a href="" class="product-thumb">'+
                            '<img src="'+listProducts[i].img+'" alt="" class="imageChange">'+
                        '</a>'+
                        '<a href="" class="buy-now">Mua ngay</a>'+
                    '</div>'+
                    '<div class="product-introduce">'+
                        '<a href="" class="product-name">'+listProducts[i].name+'</a>'+
                        '<div class="product-price">'+listProducts[i].price.sale+'</div>'+
                    '</div>'+
                '</div>'+
            '</li>';
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
                document.getElementById('products').innerHTML+='<li>'+
                '<div class="product-item">'+
                    '<div class="product-top">'+
                        '<a href="" class="product-thumb">'+
                            '<img src="'+listProducts[i].img+'" alt="" class="imageChange">'+
                        '</a>'+
                        '<a href="" class="buy-now">Mua ngay</a>'+
                    '</div>'+
                    '<div class="product-introduce">'+
                        '<a href="" class="product-name">'+listProducts[i].name+'</a>'+
                        '<div class="product-price">'+listProducts[i].price.sale+'</div>'+
                    '</div>'+
                '</div>'+
            '</li>';
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
                document.getElementById('products').innerHTML+='<li>'+
                '<div class="product-item">'+
                    '<div class="product-top">'+
                        '<a href="" class="product-thumb">'+
                            '<img src="'+listProducts[i].img+'" alt="" class="imageChange">'+
                        '</a>'+
                        '<a href="" class="buy-now">Mua ngay</a>'+
                    '</div>'+
                    '<div class="product-introduce">'+
                        '<a href="" class="product-name">'+listProducts[i].name+'</a>'+
                        '<div class="product-price">'+listProducts[i].price.sale+'</div>'+
                    '</div>'+
                '</div>'+
            '</li>';
            }
        }
        break;
    default:
}