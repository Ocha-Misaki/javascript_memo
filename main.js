{
  'use strict'
  const saveButtonElement = document.getElementById('save')
  const removeButtonElement = document.getElementById('remove')
  const textElement = document.getElementById('text')
  
  saveButtonElement.addEventListener('click',() => {
    localStorage.setItem('memo', textElement.value)
  })

  textElement.value = localStorage.getItem('memo')
  
  removeButtonElement.addEventListener('click', () => {
    if(confirm('削除して良いですか？') === true){
      localStorage.removeItem('memo')
      location.reload()
    }
  })
}