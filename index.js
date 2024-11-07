const div = document.getElementById("todo-app");

div.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        AddTask()
    }
});

function AddTask()
{
    const input = document.getElementById("input");
    if (input.value != '')
    {
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

                    else if (e.target.innerHTML === "OK" && e.target.parentElement.firstChild.value != '')
                    {
                        e.target.parentElement.parentElement.firstChild.firstChild.data = e.target.parentElement.firstChild.value;
                        e.target.parentElement.parentElement.title = "0";
                        e.target.parentElement.remove()
                    }
                }
            }
        )
    }
}
