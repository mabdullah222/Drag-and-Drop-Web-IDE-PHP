let dpe=document.createElement('div')

let component=document.getElementsByClassName('component')


function setAddParam()
{
    Array.from(document.getElementsByClassName('addparam')).forEach(element=>
        {
            element.addEventListener('click',(e)=>
            {
                let p=document.createElement('input')
                e.target.parentNode.children[3].appendChild(p)
            })
        })
}

function setbuttons()
{
    Array.from(document.getElementsByClassName('for')).forEach(element=>
        {
            element.addEventListener('click',(e)=>
            {
                e.target.parentNode.parentNode.childNodes[3].innerHTML=`<h3>Loop Condition</h3>
                <div id="forBlock">
                <label for="start">Start</label>
                <input type="text" name="start" id="start">
                <label for="operator">until</label>
                <select name="operator" id="operator">
                <option value=">=">&gt;=</option>
                <option value="<=">&lt;=</option>
                <option value="<">&lt;</option>
                <option value=">">&gt;</option>
                <option value="==">==</option>
                <option value="!=">!=</option>
                </select>
                <label for="end">End</label>
                <input type="text" name="end" id="end">
                <label for="varname">Variable</label>
                <input type="text" name="varname" id="varname">
                <h3>Do</h3>
            </div>
            
        <div id="loopDo" class="Do dropzone">
            
        </div>`
        setDropZones();
            })

        })
    

    Array.from(document.getElementsByClassName('while')).forEach(element=>
        {
            element.addEventListener('click',(e)=>
            {
                
                e.target.parentNode.parentNode.childNodes[3].innerHTML=`<h3>Loop Condition</h3>
                <div id="whileBlock">
                    <label for="compare">To Compare</label>
                    <input type="text" name="whileop1" id="compare">
                    <label for="operator">until</label>
                    <select name="operator" id="operator">
                        <option value=">=">&gt;=</option>
                        <option value="<=">&lt;=</option>
                        <option value="<">&lt;</option>
                        <option value=">">&gt;</option>
                        <option value="==">==</option>
                        <option value="!=">!=</option>
                    </select>
                    <label for="with">Compare With</label>
                    <input type="text" name="whileop2" id="with">
                    <h3>Do</h3>
                </div>
                
        <div id="loopDo" class="Do dropzone">
            
        </div>`;
        setDropZones();
            })
        })
    
}


function setDelete()
{
    let del=document.getElementsByClassName('delete')
    Array.from(del).forEach(element=>
        {
            element.addEventListener('click',e=>
            {
                let grand=e.target.parentNode.parentNode;
                grand.removeChild(e.target.parentNode);
            })
        })
}


let variable=`
<label for="varname">Name</label>
<input type="text" name="varname" id="varname" placeholder="">
<label for="varname">Value</label>
<input type="text" name="varvalue" id="varvalue" placeholder="">
<button class="delete">Delete</button>
`

let loop=`

<div id="loopheader">
            <label for="">Repeat</label>
            <button class="while">While</button>
            <button class="for">For</button>
        </div>
        <div id="loopcondition">
        </div>
    <button class="delete">Delete</button>
`

let arithmetic=`

<label for="operationname">Operation</label>
<select name="operator" id="operator">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
</select>

<label for="op1">Operand 1 </label>
<input type="text" name="varvalue" id="varvalue" placeholder="">

<label for="op2">Operand 2 </label>
<input type="text" name="op2" id="op2" placeholder="">
<label for="op2">Save to</label>
<input type="text" name="op2" id="op2" placeholder="">
<button class="delete">Delete</button>
`

let functioncreate=`
<div id="functionHeader">
    <label for="functionname">
        Function Name
    </label>
    <input type="text">
    <label for="params">Params</label>
    <div id="param"></div>
    <button class="addparam">Add Params</button>
    <h3>Do<h3>
</div>
<div id="functionDo" class="Do dropzone">

</div>
<button class="delete">Delete</button>
`

let functioncall=`
<label for="functionname">Function To Call</label>
<input type="text" name="functionname" id="functionname">
<label for="params">Params</label>
<div id="param"></div>
<button class="addparam">Add Params</button>
<button class="delete">Delete</button>
`


let ifcon=`
<h3>if</h3>
<div class="ifheader">
    <h3>Condition</h3>
    <label for="to">To Compare</label>
    <input type="text">
    <label for="operator">Operator</label>
    <select name="operator" id="operator">
    <option value=">=">&gt;=</option>
    <option value="<=">&lt;=</option>
    <option value="<">&lt;</option>
    <option value=">">&gt;</option>
    <option value="==">==</option>
    <option value="!=">!=</option>
    </select>
    <label for="with">Compare With</label>
    <input type="text">
    <h3>Do</h3>
</div>
<div class="ifDo Do dropzone">

</div>
<button class="delete">Delete</button>
`

let elseifcon=`
<h3>Else if</h3>
<div class="elseifheader">
    <h3>Condition</h3>
    <label for="to">To Compare</label>
    <input type="text">
    <label for="operator">Operator</label>
    <select name="operator" id="operator">
    <option value=">=">&gt;=</option>
    <option value="<=">&lt;=</option>
    <option value="<">&lt;</option>
    <option value=">">&gt;</option>
    <option value="==">==</option>
    <option value="!=">!=</option>
    </select>
    <label for="with">Compare With</label>
    <input type="text">
    <h3>Do</h3>
</div>
<div class="elseifDo Do dropzone">

</div>
<button class="delete">Delete</button>
`


let elsecon=`
<h3>Else</h3>
<h3>Do</h3>
<div class="elseDo Do dropzone">

</div>
<button class="delete">Delete</button>
`


let read=`
<label for="filename">Filename</label>
<input type="text">
<button class="delete">Delete</button>
`


let write=`

<label for="filename">Filename</label>
<input type="text">
<label for="content">Content</label>
<textarea name="content" id="content" cols="30" rows="10"></textarea>
<button class="delete">Delete</button>
`

let echo=`
<h3>Write the variable names within ()</h3>
<textarea name="echotext" id="" cols="30" rows="10"></textarea>
<button class="delete">Delete</button>
`


Array.from(component).forEach(element=>
    {
       
        element.addEventListener('dragstart',e=>
        {
            console.log(dpe)
        })
        element.addEventListener('dragend',e=>
        {
            if (e.target.id=="variable")
    {
        div=document.createElement('div')
        div.innerHTML=variable
        div.setAttribute('class',"components variable")
        div.setAttribute('id','variable')
        dpe.appendChild(div)
    }
    else if(e.target.id=='functioncreate')
    {
        div=document.createElement('div')
        div.innerHTML=functioncreate
        div.setAttribute('class',"components function")
        div.setAttribute('id','function')
        dpe.appendChild(div)
        setAddParam()
        setDropZones()
    }
    else if(e.target.id=='functioncall')
    {
        div=document.createElement('div')
        div.innerHTML=functioncall
        div.setAttribute('class',"components call")
        div.setAttribute('id','call')
        dpe.appendChild(div)
        setAddParam()
        
    }
    else if(e.target.id=='readFile')
    {
        div=document.createElement('div')
        div.innerHTML=read
        div.setAttribute('class',"components read")
        div.setAttribute('id','read')
        dpe.appendChild(div)
    }
    else if(e.target.id=='writeFile')
    {
        div=document.createElement('div')
        div.innerHTML=write
        div.setAttribute('class',"components write")
        div.setAttribute('id','write')
        dpe.appendChild(div)
    }
    else if(e.target.id=='loop')
    {
        div=document.createElement('div')
        div.innerHTML=loop
        div.setAttribute('class',"components loop")
        div.setAttribute('id','loop')
        dpe.appendChild(div)
        setbuttons();
    }
    else if(e.target.id=='ifcon')
    {
        div=document.createElement('div')
        div.innerHTML=ifcon
        div.setAttribute('class',"components if")
        div.setAttribute('id','if')
        dpe.appendChild(div)
        setDropZones()
    }
    else if(e.target.id=='elseifcon')
    {
        div=document.createElement('div')
        div.innerHTML=elseifcon
        div.setAttribute('class',"components elseif")
        div.setAttribute('id','elseif')
        dpe.appendChild(div)
        setDropZones()
    }
    else if(e.target.id=='elsecon')
    {
        div=document.createElement('div')
        div.innerHTML=elsecon
        div.setAttribute('class',"components else")
        div.setAttribute('id','else')
        dpe.appendChild(div)
        setDropZones()
    }
    else if(e.target.id=='echo')
    {
        div=document.createElement('div')
        div.innerHTML=echo
        div.setAttribute('class',"components echo")
        div.setAttribute('id','echo')
        dpe.appendChild(div)
    }
    else if (e.target.id=='arithmetic')
    {
        div=document.createElement('div')
        div.innerHTML=arithmetic
        div.setAttribute('class',"components arithmetic")
        div.setAttribute('id','arithmetic')
        dpe.appendChild(div)
    }
    dpe.classList.remove('dropping')
    dpe=document.createElement('div')
    setDelete()

        })

    })



function setDropZones()
{
    let dropzones=document.querySelectorAll('.dropzone')
    Array.from(dropzones).forEach(element=>
        {
            element.addEventListener('dragover',e=>
            {
                e.preventDefault()
            })
            element.addEventListener('dragenter',e=>
            {
                e.target.classList.add('dropping')
                dpe=e.target
            })
            element.addEventListener('dragleave',e=>
            {
                e.target.classList.remove('dropping')
                // dpe=document.createElement('div')
            })
        })
}


setDropZones();