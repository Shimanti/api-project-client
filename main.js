document.querySelector('button').addEventListener("click", search)

async function search() {
  let inputItem = document.querySelector('input').value
  try {
    const res = await fetch(`http://localhost:8000/api/recipes`)
    const data = await res.json()
    console.log(data)
    data.forEach(o => console.log(o.Title))

  }catch(err) {
    console.log(err)
  }
}
