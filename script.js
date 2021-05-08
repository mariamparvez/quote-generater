var btn = document.getElementById('btn');
var quoteTxt = document.getElementById('quote-txt');
var quoteAuthor = document.getElementById('quote-author');
var final = document.getElementById('final');
var twitterbtn = document.getElementById('twitterbtn');

let result = [];
 const fetchUrl = ('https://type.fit/api/quotes')
     const getData = async function(){ 
        try{
            const response = await fetch(fetchUrl)
            result = await response.json()
                const quote = result.map(e => e.text)
                const author = result.map(e => e.author) 
                     const finalQoute = quote[Math.floor(Math.random()*quote.length)]
                     const finalAuthor = author[Math.floor(Math.random()*author.length)]
                        quoteTxt.innerHTML = `${finalQoute}`
                        !finalAuthor ? quoteAuthor.innerHTML = `- Unknown` : quoteAuthor.innerHTML = `- ${finalAuthor}`;
                        finalQoute.length > 50 ? `${quoteTxt.style.fontSize = '2rem'} - ${quoteAuthor.style.fontSize = '1.5rem'}` : undefined;                           
                            const tweetContent = () => 
                            {
                            const tweetThis = `https://twitter.com/intent/tweet?text=${finalQoute} \n - ${finalAuthor}`;
                            window.open(tweetThis, '_blank')
                            }
                                twitterbtn.addEventListener('click',tweetContent)
                    }   catch(error){
                quoteTxt.innerHTML = `Please refresh the page or try again later.`
        }   finally{
                final.innerHTML = `Refresh to know more quotes!!`
        }
     }
btn.addEventListener('click', getData);

getData()