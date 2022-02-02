let input = prompt("Enter what you want to do");
const toDos = ["hello", "How are you"]
while (input !== 'quit' && input !== 'q') {
    if (input === "list") {
        console.log('****************');
        for (let i = 0; i < toDos.length; i++) {
            console.log(`${i}: ${toDos[i]}`)
        }
        console.log('****************');
    } else if (input === 'new') {
        const newTodo = prompt("ok! What you want to add");
        toDos.push(newTodo);
        console.log(`${newTodo} is added to the list`)
    } 
    else if (input === 'delete') {
        const index = prompt('Ok! Enter the index to delete');
        const deleted = toDos.splice(index, 1);
        console.log(`Ok! Deleted ${deleted}`)
    }
    input = prompt("Enter what you want to do");
}
console.log("Quit the app");