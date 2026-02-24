import "./form.css"

function form() {
    let container = document.querySelector(".sidebar")
    let divElem = document.createElement("div")
    divElem.classList.add("formContainer")
    divElem.innerHTML =/*html*/
        `
        <div class="form">
             <form action="/">
                <div>
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div>
                    <label for="discription">Discription</label>
                    <input type="text" name="discription" id="discription" />
                </div>
                <div>
                    <label for="date">Due-Time</label>
                    <input type="" name="date" id="date" />
                </div>
                <div>
                    <label for="priority">Priority</label>
                    <select name="priority" id="priority">
                            <option value="Top">Top</option>
                            <option value="Medium">Medium</option>
                            <option value="Least">Least</option>
                    </select>
                </div>
                <button type=button >Add Project</button>
            </form>
        </div>
    `
    container.append(divElem)
}
form()
export { form }