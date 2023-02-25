let listProducts=window.listProducts;
const query=window.location.search;
const urlparam=new URLSearchParams(query);
let products=[];
let products_sort=[];
let page=[];
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
                products_sort[products_sort.length]=listProducts[i];
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
               products_sort[products_sort.length]=listProducts[i];
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
                products_sort[products_sort.length]=listProducts[i];
            }
        }
       checkfilter(material);
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
                    products_sort[products_sort.length]=listProducts[i];
                }
            }
            checkfilter(category);
            break; 
}
function loop(){
    document.getElementById('products').innerHTML='';
    for(var i=0;i<products.length;i++){
        var string='<div id="'+products[i].id+'" class="col-sm-4 mb-3">'+
        '<div class="card">'+
            '<a href="./Detail.html?id='+products[i].id+'">'+
                '<img src="'+products[i].img[0]+'" class="card-img-top">'+
            '</a>'+
            '<div class="card-body">'+
                '<div class="description-body">'+
                    '<div class="tag-products">';
                    for(var j=0;j<products[i].category.length;j++){
                        string+='<span class="badge text-bg-secondary">'+products[i].category[j]+'</span>';
                    }
                    string+='</div>'+
                    '<div class="text-description">'+
                        '<p class="name-product">'+
                            '<a href="./Detail.html?id='+products[i].id+'">'+
                               products[i].name+
                            '</a>'+
                        '</p>'+
                    '</div>'+
                    '<div class="content-product">'+
                        '<div class="info-product">'+
                            '<div class="price-product">'+
                                '<span class="origin-price m-1"><s>$'+products[i].price.origin+'</s></span>'+
                                '<span class="sale-price m-1">$'+products[i].price.sale+'</span>'+
                            '</div>'+
                            '<div class="decription-sumary">'+
                                '<p>'+
                                  products[i].detailShort+
                                '</p>'+
                            '</div>'+
                        '</div>'+
                        '<div class="payment-button">'+
                            '<a href="./Detail.html?id='+products[i].id+'" class="btn btn-dark">Buy now</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';
    document.getElementById('products').innerHTML+=string;
    document.getElementById(products[i].id).style.display='block';
    }
}
loop();
page1();
page_number(1);
function filter(){
    for(var i=0;i<products.length;i++){
        document.getElementById(products[i].id).style.display='block';
    }
    filter_category();
    filter_materials();
    filter_shape();
    page1();
    page_number(1);
}
function filter2(id,type){
   let checkbox=document.getElementsByClassName(type);
   for(var i=0;i<checkbox.length;i++){
      if(checkbox[i].value!=document.getElementById(id).value){
        checkbox[i].checked=false;
      }
   }
   if(type=='price'){
      filter_price();
   }
   filter();
}
function filter_category() {
    let category=document.getElementsByClassName('category');
    for(var j=0;j<category.length;j++){
        if(category[j].checked){
            for(var i=0;i<products.length;i++){
                if(document.getElementById(products[i].id).style.display=='block'){
                    let check=false;
                    for(var k=0;k<products[i].category.length;k++){
                        if(products[i].category[k].toLowerCase().includes(category[j].value.toLowerCase())){
                            check=true;
                            break;
                        }
                    }
                    if(check==false){
                        document.getElementById(products[i].id).style.display='none';
                    }
                } 
            }
        }
    } 
}

function filter_materials() {
    let materials=document.getElementsByClassName('materials');
    for(var j=0;j<materials.length;j++){
        if(materials[j].checked){
          for(var i=0;i<products.length;i++){
            if(document.getElementById(products[i].id).style.display=='block'){
                let check=false;
                for(var k=0;k<products[i].materials.length;k++){
                    if(products[i].materials[k].toLowerCase().includes(materials[j].value.toLowerCase())){
                        check=true;
                        break;
                    }
                }
                if(check==false){
                    document.getElementById(products[i].id).style.display='none';
                }
            }
          }
        }
    }
}

function filter_shape(){
    let shape=document.getElementsByClassName('shape');
    for(var j=0;j<shape.length;j++){
        if(shape[j].checked){
          for(var i=0;i<products.length;i++){
            if(document.getElementById(products[i].id).style.display=='block'){
                let check=false;
                if(products[i].shape.toLowerCase().includes(shape[j].value.toLowerCase())){
                    check=true;
                }
                if(check==false){
                    document.getElementById(products[i].id).style.display='none';
                }
            }
          }
          break;
        }
    }
}

function filter_price(){
    let price=document.getElementsByClassName('price');
    var check=false;
    for(var j=0;j<price.length;j++){
        if(price[j].checked){
          check=true;
          for(var i=0;i<products.length;i++){
              for(var k=(i+1);k<products.length;k++){
                  if(price[j].value=='Lowtohigh'){
                    if(products[i].price.sale>products[k].price.sale){
                        var product=products[i];
                        products[i]=products[k];
                        products[k]=product;
                    }
                  }
                  else{
                    if(products[i].price.sale<products[k].price.sale){
                        var product=products[i];
                        products[i]=products[k];
                        products[k]=product;
                    }
                  }
              }
          }
          
          break;
        }
    }
    if(check==false){
       products=products_sort.slice(0);
    }
    loop();
}
function checkfilter(value){
  let checkbox=document.getElementsByClassName('checkbox-filer');
  for(var i=0;i<checkbox.length;i++){
    if(checkbox[i].getElementsByTagName('input')[0].value.toLowerCase()==value){
        checkbox[i].style.display='none';
    }
  }
}
function page1(){
    page=[];
    for(var i=0;i<products.length;i++){
        if(document.getElementById(products[i].id).style.display=='block'){
            page[page.length]=i;
        }
    }
    var number_page;
    if((page.length%9)==0){
        number_page=page.length/9;
    }
    else{
        number_page=((page.length-(page.length%9))/9)+1;
    }
    document.getElementById('page').innerHTML='';
    if(number_page>1){
        for(var i=1;i<=number_page;i++){
            document.getElementById('page').innerHTML+='<li class="page-item"><button class="page-link" onclick="page_number('+i+')">'+i+'</button></li>';
        }
    }
}
function page_number(number){
    var end=number*9;
    if(end>page.length){
         end=page.length;
    }
    display_page();
    for(var i=((number-1)*9);i<end;i++){
        document.getElementById(products[page[i]].id).style.display='block';
    }
}
function display_page(){
    for(var i=0;i<products.length;i++){
         document.getElementById(products[i].id).style.display='none';
    }
}


