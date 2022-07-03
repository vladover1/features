const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for ( const placeholder of placeholders){
    placeholder.addEventListener('dragover',dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragStart(evt){
    evt.target.classList.add('hold')
    setTimeout(()=>{
        evt.target.classList.add('hide')
    }, 0)

}

function dragEnd(evt){
    evt.target.className = 'item'
}

function dragover(evt){
    evt.preventDefault()
}

function dragenter(evt){
    evt.target.classList.add('hovered')
}

function dragleave(evt){
    evt.target.classList.remove('hovered')
}

function dragdrop(evt){
    evt.target.classList.remove('hovered')
    evt.target.append(item)
}