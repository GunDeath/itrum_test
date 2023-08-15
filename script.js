const tasksBlockWrapper = document.querySelector('.tasks-block');
const taskTextInput = document.querySelector('.task-text');
const emptyNote = document.querySelector('.empty-input');
const cartBlock = document.querySelector('.cart-block');
const allCheckedBlock = document.querySelector('.all-check-block');
const allChecked = document.querySelector('.all-check');
const removeBtn = document.querySelector('.task-remove-btn');
let counter = 0;

/**Add classes to elements in task block**/
const successTaskFunction = (newTaskBlock, taskTextInner) => {
    newTaskBlock.classList.toggle('success-task');
    taskTextInner.classList.toggle('success-task-text');
}

/**Create new task function**/
const newCreatedTask = (parentBlock, taskTextInput) => {
    /**Create task wrapper**/
    let newTaskBlock = document.createElement('div');
    parentBlock.appendChild(newTaskBlock);
    newTaskBlock.classList.add(`single-task`);
    newTaskBlock.classList.add(`single-task-${counter}`);
    /**Create task text**/
    let taskTextInner = document.createElement('p');
    newTaskBlock.appendChild(taskTextInner);
    taskTextInner.innerText = taskTextInput;
    taskTextInner.classList.add(`task-text`)
    taskTextInner.classList.add(`task-text-${counter}`)
    /**Create task checkbox**/
    let successTask = document.createElement('input')
    newTaskBlock.appendChild(successTask);
    successTask.setAttribute('type', 'checkbox');
    successTask.classList.add('task-check')
    /**Create task checkbox function**/
    successTask.addEventListener('change', () => successTaskFunction(newTaskBlock, taskTextInner))
}

/**Create new task**/
document.querySelector('.task-create-btn').addEventListener('click', ()=>{
    emptyNote.classList.add('displayNone')
    if(taskTextInput.value !== ''){
        counter++;
        newCreatedTask(tasksBlockWrapper, taskTextInput.value);
        removeBtn.classList.remove('displayNone');
        allCheckedBlock.classList.remove('displayNone');
        taskTextInput.value = '';
    }else{
        emptyNote.classList.remove('displayNone')
    }
})

/**Remove task from list**/
removeBtn.addEventListener('click', ()=>{
    let checkedBox = document.querySelectorAll('.success-task');
    if(checkedBox.length !== 0){
        checkedBox.forEach(item => {
            cartBlock.append(document.querySelector(`.${item.classList[0]}`))
            document.querySelector(`.${item.classList[0]}`).children[1].checked = false;
            document.querySelector(`.${item.classList[0]}`).children[1].classList.remove('task-check');
            document.querySelector(`.${item.classList[0]}`).children[1].classList.add('remove-task-check');
            document.querySelector(`.${item.classList[0]}`).classList.add('remove-block')
        })
        document.querySelector('.return-task').classList.remove('displayNone');
    }else{
        alert('Check tasks to remove');
    }
})

/**Check all tasks**/
allChecked.addEventListener('change', () => {
    document.querySelectorAll('.task-check').forEach(item => item.checked = true);
    document.querySelectorAll('.task-text').forEach(item => item.classList.add('success-task-text'));
    document.querySelectorAll('.single-task').forEach(item => item.classList.add('success-task'));
})


/**CART**/
/*******************/
/**Call cart block**/
document.querySelector('.call-cart').addEventListener('click', () => {
    if(document.querySelectorAll('.remove-block').length !== 0){
        document.querySelector('.cart-block').classList.remove('displayNone')
    }else{
        alert('Cart is empty')
    }
})
/**Return task from cart**/
document.querySelector('.return-task').addEventListener('click', ()=>{
    document.querySelectorAll('.remove-block').forEach(item => {
        item.children[1].checked = false
        tasksBlockWrapper.append(item);
        document.querySelector('.cart-block').classList.add('displayNone')
    })
})