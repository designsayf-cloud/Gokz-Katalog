const search = document.getElementById("search");
const produk = document.querySelectorAll(".produk");

search.addEventListener("keyup", function () {

    const keyword = search.value;

    produk.forEach(function(item){

        const id = item.dataset.id;

        if(id.includes(keyword)){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }

    });

});