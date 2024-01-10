/*const accessKey = "IvRE8r3toUTeXYF6TMtyY4ud1jE9HZx_dsI4an6TFFM";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");

const searchResults = document.querySelector(".search-results");

const showMore = document.getElementById("show-more-button");


let inputData = "";
let page = 1;

async function searchImages()
{
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client-id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if(page === 1)
    {
        searchResults.innerHTML = "";
    }

    results.map((result) => {
        // fetching from api 
        const imagewrapper=document.createElement('div');
        imagewrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.link.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;  


        // appending on website
        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imageLink);
        searchResults.appendChild(imagewrapper);

    });

    page++;
    if(page > 1)
    {
        showMore.style.display = "block";
    }
}


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
})


showMore.addEventListener("click", () => {
    searchImages();
})*/

const accessKey="IvRE8r3toUTeXYF6TMtyY4ud1jE9HZx_dsI4an6TFFM";

    const formEle=document.querySelector('form')
    const inputEle=document.querySelector('#search-input')
    const container=document.querySelector('.search-results')
    const showMore=document.querySelector('#show-more-button')

     let page=1;
     let inputData='';

     async function searchImage(){
        inputData=inputEle.value;
        const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
        
        let response =await fetch(url);
        const data=await response.json()

        const results=data.results

        if (page===1) {
            container.innerHTML=''
        }

        results.map((result)=>{
            const imageWrapper=document.createElement('div');
            imageWrapper.classList.add('search-result');
            const image=document.createElement('img');
            image.src=result.urls.small;
            image.alt=result.alt_description;
            const imageLink=document.createElement('a');
            imageLink.href=result.links.html;
            imageLink.target="_blank";
            imageLink.textContent=result.alt_description;

            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageLink);
            container.appendChild(imageWrapper);
        });

        page++;
        if (page>1) {
            showMore.style.display='block';
        }
     }

     formEle.addEventListener('submit',(event)=>{
        event.preventDefault()
        page=1;
        searchImage()
     })
     showMore.addEventListener('click',()=>{
          searchImage();
     })
