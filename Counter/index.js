 let count = 0
// connection to HTML h2
 let countEl = document.getElementById("count-el")

// Function of increment button
 function increment(){
     count += 1
     // Order for function to change countel element in HTML
     countEl.textContent = count   
     console.log(count)
 }

// Function of SAVE button

 let saveEl = document.getElementById("save-el")
   function save(){
   let countStr = count + " - "
// Order for saving results in saveEl element / += so it doesn't wipe out previous results
   saveEl.textContent += countStr
   // Order for restarting counting to 0
   countEl.textContent = 0
   count = 0


}

