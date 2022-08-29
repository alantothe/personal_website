


//Query Selectors 
let github = document.querySelector(".icon-tabler-brand-github")
let twitter = document.querySelector(".icon-tabler-brand-twitter")
let work = document.querySelector(".icon-tabler-code")
let resume = document.querySelector(".icon-tabler-file-invoice")
let email = document.querySelector(".icon-tabler-mail")
let iconTextDiv = document.querySelector(".icon-text")
let iconText = document.createElement("p")







// Event Listeners

// addEventListener('load', function(){
//     function slideUp (){
//     iconText.setAttribute("id", "work-text")
//     iconTextDiv.appendChild(iconText)
//     iconText.innerText = "Projects"}

//     setTimeout(slideUp, 800)

// })

github.addEventListener('mouseenter', function(){
    iconText.remove()
    
    console.log("I Hovered Github")
    iconText.setAttribute("id", "github-text")
    iconTextDiv.appendChild(iconText)
    iconText.innerText = "GitHub"

})
github.addEventListener('mouseleave',function (){
        console.log("OUT")
        iconText.remove()

    })
github.addEventListener('click', function(){
    let location = "https://github.com/alantothe"
    window.open(location)

})

twitter.addEventListener('mouseenter', function(){
    console.log("I Hovered Twitter")
    iconText.setAttribute("id", "twitter-text")
    iconTextDiv.appendChild(iconText)
    iconText.innerText = "Twitter"

})
twitter.addEventListener('mouseleave',function (){
    console.log("OUT")
    iconText.remove()

})
twitter.addEventListener('click', function(){
    let location = "https://twitter.com/alanmalpartida_"
    window.open(location)

})

work.addEventListener('mouseenter', function(){
    console.log("I Hovered Work")
    iconText.setAttribute("id", "work-text")
    iconTextDiv.appendChild(iconText)
    iconText.innerText = "Projects"

})
work.addEventListener('mouseleave',function (){
    console.log("OUT")
    iconText.remove()

})

resume.addEventListener('mouseenter', function(){
    console.log("I Hovered Resume")
    iconText.setAttribute("id", "resume-text")
    iconTextDiv.appendChild(iconText)
    iconText.innerText = "Resume"

})
resume.addEventListener('mouseleave',function (){
    console.log("OUT")
    iconText.remove()

})
resume.addEventListener('click', function(){
    
    location.href = "./resume/resume.html" 
})

email.addEventListener('mouseenter', function(){
    console.log("I Hovered Email")
    iconText.setAttribute("id", "email-text")
    iconTextDiv.appendChild(iconText)
    iconText.innerText = "E-Mail"

})
email.addEventListener('mouseleave',function (){
    console.log("OUT")
    iconText.remove()
})
email.addEventListener('click', function(){
    window.open('mailto:rubenamalpartida@gmail.com')

})


function disemvowel(str) {
    var newStr = "";
    for (i = 0; i <= str.length; i++) {
      if (str[i] != "a" || str[i] != "e" || str[i] != "i" || str[i] != "o" || str[i] != "u") {
        newStr += str[i]
      }
      return newStr;
    }
  }



