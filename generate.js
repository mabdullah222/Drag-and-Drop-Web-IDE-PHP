code=""


function produceCode(node)
{
    if (node.id=='variable')
    {
        code+=`\$${node.children[1].value} = ${node.children[3].value};\n`;
    }
    else if(node.id=='call')
    {
        code+=`${node.children[1].value}(`
        for (let i=0;i<Array.from(node.children[3].children).length;i++)
        {
            let value=node.children[3].children[i].value
            if (value[0]!='"' && isNaN(parseInt(value)))
            {
                code+=`\$${value}`
            }
            else
            {
                code+=`${value}`
            }
            if (i!=Array.from(node.children[3].children).length-1)
            {
                code+=","
            }
            
        }
        code+=");\n"
    }
    else if(node.id=='read')
    {
        let name=node.children[1].value
        code+=`\$myfile = fopen("${name}", "r") or die("Unable to open file!");\n`;
        code+=`echo fread(\$myfile,filesize("${name}"));\n`;
        code+=`fclose(\$myfile);\n`
    }
    else if(node.id=='write')
    {
        let name=node.children[1].value
        let text=node.children[3].value
        code+=`\$myfile = fopen("${name}", "w") or die("Unable to open file!");\n`;
        code+=`\$txt = "${text}";\n`;
        code+=`fwrite(\$myfile, $txt);\n`;
        code+=`fclose(\$myfile);\n`
    }
    else if(node.id=='loop')
    {
        if (node.children[1].children[1].id=='whileBlock')
        {
            op1=node.children[1].children[1].children[1].value
            operator=node.children[1].children[1].children[3].value
            op2=node.children[1].children[1].children[5].value
            code+=`while (\$${op1} ${operator} ${op2}){\n`
        }
        if (node.children[1].children[1].id=='forBlock')
        {
            let start=node.children[1].children[1].children[1].value
            let operator=node.children[1].children[1].children[3].value
            let end=node.children[1].children[1].children[5].value
            let varname=node.children[1].children[1].children[7].value
            code+=`for(\$${varname}=${start};$${varname}${operator}${end};$${varname}++){\n`
        }
    }
    else if(node.id=="if" || node.id=="elseif")
    {
        op1=node.children[1].children[2].value
        op2=node.children[1].children[4].value
        op3=node.children[1].children[6].value
        if (op1[0]!='"' && isNaN(parseInt(op1)))
        {
            op1=`\$${op1}`
        }
        if (op3[0]!='"' && isNaN(parseInt(op3)))
        {
            op3=`\$${op3}`
        }   
        if (node.id=="if")
        {
            
            code+=`if(${op1} ${op2} ${op3}){\n`
        }
        else
        {
            code+=`else if(${op1} ${op2} ${op3}){\n`
        }
    }
    else if(node.id=="else")
    {
        console.log('Hello')
        code+=`else{\n`
    }
    else if(node.id=='function')
    {
        code+=`function ${node.children[0].children[1].value}(`
        Array.from(node.children[0].children[3].children).forEach((e,index)=>
            {
                if (e.value!='"' && isNaN(parseInt(e.value)))
                {
                    code+=`\$${e.value}`
                }
                else
                {
                    code+=`${e.value}`
                }
                if (index!=Array.from(node.children[0].children[3].children).length-1)
                {
                    code+=","
                }
            })
        code+="){\n"
    }
    else if(node.id=="arithmetic")
    {
        op1=node.children[1].value
        op2=node.children[3].value
        op3=node.children[5].value
        tosavein=node.children[7].value
        if (op2[0]!='"' && isNaN(parseInt(op2)))
        {
            op2=`\$${op2}`
        }
        if (op3[0]!='"' && isNaN(parseInt(op3)))
        {
            op3=`\$${op3}`
        }  
        code+=`$${tosavein}=${op2} ${op1} ${op3};\n`
    }
    else if(node.id=="echo")
    {
        let text=node.children[1].value
        new_text=""
        for (let i=0;i<text.length;i++)
        {
            if (text[i]=='(')
            {
                let vr=""
                i+=1
                while (text[i]!=')')
                {
                    vr+=text[i];
                    i++;
                }
                new_text+=`\$${vr}`
                
            }
            else
            {
                new_text+=text[i];
            }
        }
        code+=`echo "${new_text}"\n;`
    }
    console.log(code)
}


function produceElement(node)
{
    produceCode(node)      
    if (node.id=="loop")
    {
        Array.from(node.children[1].children[2].children).forEach(e=>
            {
                produceElement(e);
            })
        code+="}\n"
    }
    else if(node.id=="if")
    {   
        Array.from(node.children[2].children).forEach(e=>
            {
                produceElement(e);
            })
        code+="}\n"
    }
    else if(node.id=="elseif")
    {
        Array.from(node.children[2].children).forEach(e=>
            {
                produceElement(e);
            })
        code+="}\n"
    }
    else if(node.id=="else")
    {
        Array.from(node.children[2].children).forEach(e=>
            {
                produceElement(e);
            })
        code+="}\n"
    }
    else if(node.id=="function")
    {
        Array.from(node.children[1].children).forEach(e=>
            {
                produceElement(e);
            })
        code+="}\n"
    }
}


let generate=document.getElementById('generate')
let codebox=document.getElementById('cont3')
generate.addEventListener('click',e=>
{
    let middlebox=document.getElementById('middlebox')
    Array.from(middlebox.children).forEach(element=>
        {
            produceElement(element);
        })
    codebox.children[1].innerText=code
    document.forms[0]['code'].value=code
})

