const edittask = 0;

function AddTask()
{
    const input = document.getElementById("input");
    const div = document.getElementById("todo-app");

    const taskdiv = document.createElement("div");
    taskdiv.setAttribute("class", "task");

    const label = document.createElement("label");
    label.innerHTML = input.value;
    label.setAttribute("class", "container");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    const span = document.createElement("span");
    span.setAttribute("class", "checkmark")

    const button = document.createElement("button");
    button.setAttribute("id", "removebutton")
    button.innerHTML = "Delete";

    const button2 = document.createElement("button");
    button2.setAttribute("id", "editbutton");
    button2.innerHTML = "Edit";

    label.appendChild(checkbox);
    label.appendChild(span);

    taskdiv.appendChild(label);
    taskdiv.appendChild(button);
    taskdiv.appendChild(button2);
    taskdiv.setAttribute("title", "0");

    div.appendChild(taskdiv);

    input.value = '';

    div.addEventListener("click", function(e)
        {
            if (e.target.tagName === "INPUT")
            {
                if (e.target.checked == true)
                {
                    console.log(e.target.parentElement);
                    e.target.parentElement.style.textDecoration = "line-through";
                }
                else
                {
                    e.target.parentElement.style.textDecoration = "none";
                }
            }
            else if (e.target.tagName === "BUTTON")
            {
                if (e.target.innerHTML === "Delete")
                {
                    e.target.parentElement.remove()
                }

                else if (e.target.innerHTML === "Edit" && e.target.parentElement.title === "0")
                {
                    console.log(e.target);
                    const rowdiv = document.createElement("div");
                    rowdiv.setAttribute("class", "row");

                    const editinput = document.createElement("input");
                    editinput.setAttribute("placeholder", "Edit your task");
                    editinput.setAttribute("id", "editinput");

                    const editbutton = document.createElement("button");
                    editbutton.innerHTML = "OK";
                    editbutton.setAttribute("id", "okbutton");

                    rowdiv.appendChild(editinput);
                    rowdiv.appendChild(editbutton);

                    e.target.parentElement.appendChild(rowdiv);
                    e.target.parentElement.title = "1";
                }

                else if (e.target.innerHTML === "OK")
                {
                    e.target.parentElement.parentElement.firstChild.firstChild.data = e.target.parentElement.firstChild.value;
                    e.target.parentElement.parentElement.title = "0";
                    e.target.parentElement.remove()
                }
            }
        }
    )
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