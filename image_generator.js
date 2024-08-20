const SearchForm = document.getElementById("search-form");
const SearchBox = document.getElementById("search-box");
const SearchResult = document.getElementById("Search-result");
const ShowMore = document.getElementById("show_more");
const AccessKey = "3HGbgt7nXT2D7c056AlgGiE_pRCkY6mGXdYztgvTErc";

let keyword = "";
let page = 1;

async function searchImages() 
{
    keyword =SearchBox.value;
                                                                     
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${AccessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    if (page === 1)
    {
        SearchResult.innerHTML=""
    }
    const results = data.results;
    results.map((result)=>{
        const image= document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target= "_blank";
        imagelink.appendChild(image);
        SearchResult.appendChild(imagelink);
        
    })
    ShowMore.style.display="block";
     
}
    SearchForm.addEventListener("submit",(e)=>{
   e.preventDefault();
   page=1;
   searchImages();

    });

    ShowMore.addEventListener("click",()=>{
        
        page++;
        searchImages();
     
         })