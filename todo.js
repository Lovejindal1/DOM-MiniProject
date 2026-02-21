let btn=document.querySelector('button')
let ul= document.querySelector('ul')
let inp=document.querySelector('input')

btn.addEventListener('click',function(){
    let task=inp.value;
    inp.value='';
    console.log(task);
    let item=document.createElement('li');
    item.innerText=task;
    ul.appendChild(item); 

    let delbtn=document.createElement('button');
    delbtn.innerText="delete";
    delbtn.classList.add('delete');

    item.appendChild(delbtn);
})

// let delbtns=document.querySelectorAll('.delete');
// for(delbtn of delbtns){
//     delbtn.addEventListener('click', function(){
//         // console.log("element deleted");
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }    //this is not working for if we add more list then trying to delete new list which was added ,they are not deleted so we see event Delegation


// if we trigered to its parent first (div);
ul.addEventListener("click",function(event){
    // console.dir(event.target.nodeName); //yeh btayega kis per click hua hai btn per ya li per 
    // console.log('btn clicked!');
    let listItem=event.target.parentElement;
    listItem.remove();
    console.log("deleted");
    
})