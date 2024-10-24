const AllProduct = document.querySelectorAll(".ProductArea .Preview")
const AllPreviewProdcut= document.querySelectorAll(".AllPreviewProduct .modal")
window.onload=()=>{

  AllProduct.forEach((product)=>{
    product.addEventListener("click",()=>{
      let NameProduct=product.getAttribute("data-target")
      AllPreviewProdcut.forEach((preview)=>{
        let previewName = preview.getAttribute("data-target")
        if(NameProduct==previewName){
          preview.classList.add("show")
          preview.style.display="block"
        }
      })
    })
  })

}
AllPreviewProdcut.forEach((preview)=>{
  preview.querySelectorAll(".close").forEach((btn)=>{
    btn.addEventListener("click",()=>{
      preview.classList.remove("show")
      preview.style.display="none"
    })
  })
})