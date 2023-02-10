const tempprice = document.getElementById('price')
const tempdish = document.getElementById('dish')
const temptableid = document.getElementById('tablelist')
async function submitfunction(event){
    event.preventDefault()
    alert('Submitted')
    const tprice = event.target.price.value
    const tdish = event.target.dish.value
    const ttablelist = event.target.tablelist.value
    // const tbutton = () => {
    //     let deletebtn = document.createElement('button')
    //     deletebtn.appendChild(document.createTextNode('Delete'))
    // }
    //console.log(tprice)
    const tobj = {
        tprice,
        tdish,
        ttablelist,
        // tbutton
    }

    const res = await axios.post("https://crudcrud.com/api/ad3607c63bf243c9b012f6ebb4fedb23/orderinfo",tobj)
    //console.log(res)
    printinfo(res)
}

window.addEventListener('DOMContentLoaded',reloadedpage())

function printinfo(res){
    console.log(res)
    if(res.data.ttablelist === 'table1'){
        // console.log('1')
        const node = document.createElement('li')
        const textnode = document.createTextNode(`Price: ${res.data.tprice} Dish: ${res.data.tdish} Table No: ${res.data.ttablelist}`)
        node.appendChild(textnode)
        document.getElementById('t1').appendChild(node)
        let deletebtn = document.createElement('button')
        deletebtn.appendChild(document.createTextNode('Delete'))
        node.appendChild(deletebtn)
        deletebtn.id = res.data._id
        //console.log(deletebtn.id)
        document.getElementById(deletebtn.id).addEventListener('click',() => {
            console.log(deletebtn.id)
            deleteuserinfo(res.data._id)
        })
    }
    if(res.data.ttablelist === 'table2'){
        // console.log('2')
        const node = document.createElement('li')
        const textnode = document.createTextNode(`Price: ${res.data.tprice} Dish: ${res.data.tdish} Table No: ${res.data.ttablelist}`)
        node.appendChild(textnode)
        document.getElementById('t2').appendChild(node)
        let deletebtn = document.createElement('button')
        deletebtn.appendChild(document.createTextNode('Delete'))
        node.appendChild(deletebtn)
        deletebtn.id = res.data._id
        document.getElementById(deletebtn.id).addEventListener('click',() => {
            console.log(deletebtn.id)
            deleteuserinfo(res.data._id)
        })
    }
    if(res.data.ttablelist === 'table3'){
        // console.log('3')
        const node = document.createElement('li')
        const textnode = document.createTextNode(`Price: ${res.data.tprice} Dish: ${res.data.tdish} Table No: ${res.data.ttablelist}`)
        node.appendChild(textnode)
        document.getElementById('t3').appendChild(node)
        let deletebtn = document.createElement('button')
        deletebtn.appendChild(document.createTextNode('Delete'))
        node.appendChild(deletebtn)
        deletebtn.id = res.data._id
        document.getElementById(deletebtn.id).addEventListener('click',() => {
            console.log(deletebtn.id)
            console.log('print page called')
            deleteuserinfo(res.data._id)
        })
    }
    
}


async function reloadedpage(){
    console.log('reloaded')
    const newobj = await axios.get("https://crudcrud.com/api/ad3607c63bf243c9b012f6ebb4fedb23/orderinfo")
    //console.log(newobj.data)
    for(let a in newobj.data){
        if(newobj.data[a].ttablelist === 'table1'){
            // console.log('1')
            const node = document.createElement('li')
            const textnode = document.createTextNode(`Price: ${newobj.data[a].tprice} Dish: ${newobj.data[a].tdish} Table No: ${newobj.data[a].ttablelist}`)
            node.appendChild(textnode)
            document.getElementById('t1').appendChild(node)
            let deletebtn = document.createElement('button')
            deletebtn.appendChild(document.createTextNode('Delete'))
            node.appendChild(deletebtn)
            deletebtn.id = newobj.data[a]._id
            document.getElementById(deletebtn.id).addEventListener('click',() => {
                console.log(deletebtn.id)
                deleteuserinfo(newobj.data[a]._id)
            })
        }
        if(newobj.data[a].ttablelist === 'table2'){
            // console.log('2')
            const node = document.createElement('li')
            const textnode = document.createTextNode(`Price: ${newobj.data[a].tprice} Dish: ${newobj.data[a].tdish} Table No: ${newobj.data[a].ttablelist}`)
            node.appendChild(textnode)
            document.getElementById('t2').appendChild(node)
            let deletebtn = document.createElement('button')
            deletebtn.appendChild(document.createTextNode('Delete'))
            node.appendChild(deletebtn)
            deletebtn.id = newobj.data[a]._id
            document.getElementById(deletebtn.id).addEventListener('click',() => {
                console.log(deletebtn.id)
                deleteuserinfo(newobj.data[a]._id)
            })
        }
        if(newobj.data[a].ttablelist === 'table3'){
            // console.log('3')
            const node = document.createElement('li')
            const textnode = document.createTextNode(`Price: ${newobj.data[a].tprice} Dish: ${newobj.data[a].tdish} Table No: ${newobj.data[a].ttablelist}`)
            node.appendChild(textnode)
            document.getElementById('t3').appendChild(node)
            let deletebtn = document.createElement('button')
            deletebtn.appendChild(document.createTextNode('Delete'))
            node.appendChild(deletebtn)
            deletebtn.id = newobj.data[a]._id
            document.getElementById(deletebtn.id).addEventListener('click',() => {
                console.log(deletebtn.id)
                console.log('rload page called')
                deleteuserinfo(newobj.data[a]._id)
            })
        }
    }
    
}

function deleteuserinfo(id){
    let url='https://crudcrud.com/api/ad3607c63bf243c9b012f6ebb4fedb23/orderinfo'
    url=url+'/'+id.toString()
    alert(url)
    axios.delete(url);
    document.getElementById(id).parentElement.remove()
}

