// Write your JS here
const hero = {
    name: "Herb",
    heroic: true,
    inventory: ["blub"],
    health: 10,
    weapon: {type: "axe", damage: 2}
    
    
            
    }
    function rest(hero) {
        hero.health = 10
        if (hero.health === 10){
            alert("You are refreshed!")}
           
        return hero
        
    }
 
    

    
    function pickUpItem(para1) {
           
        dagger = {type: "dagger", damage: 2}
        hero.inventory.push(dagger)  
        return hero
    
}//Pseudo-Code: put equipped weapon into inventory, add new weapon to inventory
    pickUpItem(hero)
    


function equipWeapon(para1) {  
    if(hero.inventory === []){
        return hero  } else {      
             weapon1 = hero.inventory[0]
             weapon1 = hero.weapon 
             
             return hero
    }  
    //Pseudo-Code: take new weapon out of inventory and equip it
}
equipWeapon(hero)
    hero.inventory = []
    
    
   const herocopy = Object.entries(hero)
    
    function displayStats(param1){
        
        
        for (key in param1) {
            const list1 = document.createElement("li")
            list1.innerText = herocopy.key 
            const list2 = document.getElementById('heroobject')
            list2.appendChild(list1)  
        }
    }

    displayStats(herocopy)

    function submitName() {
        // gather data
        const inputField = document.getElementById('inputField')
        const name = inputField.value
       
    
        if(  !name){
            alert('You forgot to fill in your name or message!')
            return null
        }
        
            
        
        const h4 = document.createElement('h4')
        
      
        h4.innerHTML = `Hero's name: ${name} said:`
       
        
        inputField.appendChild(h4)
        
        
        inputField.value = null
    }
      