let listProducts=window.listProducts;
const query=window.location.search;
const urlparam=new URLSearchParams(query);
let id=urlparam.get('id');
let product=listProducts[id-1];
let relate=[];
click_img(0);
document.getElementById('name').innerHTML=product.name;
document.getElementById('origin').innerHTML='<s>$'+product.price.origin+'</s>';
document.getElementById('sale').innerHTML='$'+product.price.sale;
let string_category='';
for(var i=0;i<product.category.length;i++){
    if(i==(product.category.length-1)){
        string_category+=product.category[i];
    }
    else{
        string_category+=product.category[i]+'<span> | - | </span>';
    }
}
document.getElementById('category').innerHTML=string_category;
let string_material='';
for(var i=0;i<product.materials.length;i++){
    if(i==(product.materials.length-1)){
        string_material+=product.materials[i];
    }
    else{
        string_material+=product.materials[i]+'<span> | - | </span>';
    }
}
document.getElementById('materials').innerHTML=string_material;
document.getElementById('dep').innerHTML=product.detail;
for(var i=0;i<listProducts.length;i++){
    if(listProducts[i].id!=id){
        for(var j=0;j<listProducts[i].category.length;j++){
          var check=false;
            for(var k=0;k<product.category.length;k++){
                if(listProducts[i].category[j]==product.category[k]){
                    relate[relate.length]=listProducts[i];  
                    check=true;
                    break;
                }
            }
            if(check){
              break;
            }
        }
    }
   if(relate.length==4){
        break;
   }
}
document.getElementById('relate').innerHTML='';
for(var i=0;i<4;i++){
    document.getElementById('relate').innerHTML+='<div class="col-md-3">'+
    '<div class="card mb-3" style="width: 100%;">'+
      '<a href="./Detail.html?id='+relate[i].id+'">'+
        '<img src="'+relate[i].img[0]+'" class="card-img-top">'+
      '</a>'+
      '<div class="card-body">'+
        '<div class="description-body">'+
          '<div class="text-description">'+
           '<p>'+
              '<a href="./Detail.html?id='+relate[i].id+'">'+relate[i].name+'</a>'+
            '</p>'+
            '<p class="card-text">'+relate[i].detailShort+'</p>'+
          '</div>'+
          '<a href="./Detail.html?id='+relate[i].id+'" class="button-exlore button">Explore</a>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>';
}
function click_img(p){
  let string_slider='';
  for(var i=0;i<product.img.length;i++){
    if(i==p){
      string_slider+='<img class="thumbnail active" onclick="click_img('+i+')" src="'+product.img[i]+'">';
      document.getElementById('image').innerHTML='<img src="'+product.img[i]+'">';
    }
    else{
      string_slider+='<img class="thumbnail" onclick="click_img('+i+')" src="'+product.img[i]+'">';
    }
  }
  document.getElementById('slider').innerHTML=string_slider;
}