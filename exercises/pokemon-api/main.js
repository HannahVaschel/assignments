const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon")
xhr.send()

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
        const pokeData = JSON.parse(xhr.responseText)
        acceptData(pokeData)
    
    }
} 

function acceptData(data){
    for(let i = 0; i < data.objects[0].pokemon.length; i++){
        const p = document.createElement('p')
        p.textContent = data.objects[0].pokemon[i].name
        document.body.appendChild(p)
        
        
    }
}
