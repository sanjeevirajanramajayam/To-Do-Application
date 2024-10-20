let count = 0;

function AddCheckbox()
{
    const input = document.getElementById("input");

    if (input.value != '')
    {
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("onclick", "Check(" + count.toString() + ")");
        checkbox.setAttribute("id", count.toString());
    
        const label = document.createElement("label");
        label.innerHTML = input.value + "    ";
        label.setAttribute("for", count.toString());
        label.setAttribute("id", "#" + count.toString());

        const button = document.createElement("button");
        button.innerHTML = "DELETE";
        button.setAttribute("onclick", "Delete(" + count.toString() + ")");
        button.setAttribute("id", "##" + count.toString());
    
        const div = document.getElementById("div1");

        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(button);

        var br = document.createElement("br");
        br.setAttribute("id", "$" + count.toString());
        div.appendChild(br);
        
        count++;
        input.value = '';
    }
}

function Check(count)
{
    if (document.getElementById(count).checked == true)
    {
        const label = document.getElementById("#" + count.toString());
        label.innerHTML = "<s>" + label.innerText + "</s>";
    }

    if (document.getElementById(count).checked == false)
    {
        const label = document.getElementById("#" + count.toString());
        label.innerHTML = label.innerText;
    }
}

function Delete(count)
{
    const button = document.getElementById("##" + count.toString());
    const label = document.getElementById("#" + count.toString());
    const checkbox = document.getElementById(count.toString());
    const br = document.getElementById("$" + count.toString());

    button.remove();
    label.remove();
    checkbox.remove();
    br.remove()
}