let bookss = [];
let expandedIndex = null;
let filterText = '';
let sortOption = 'title-asc';

function showPage(page) {        
    document.querySelectorAll('main > div').forEach(div => div.style.display = 'none');
    document.getElementById(page).style.display = 'block';
    if (page === 'list') updatebooksList();
}

function toggleDetail(index) {
    expandedIndex = expandedIndex === index ? null : index;
    updatebooksList();
}

function registerbooks() {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    if (id && name && course) {
        bookss.push({ id, name, course });
        document.getElementById('id').value = '';
        document.getElementById('name').value = '';
        document.getElementById('course').value = '';
        alert('Livro registado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
};
// Atualiza os valores do filtro e ordenação
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('filterInput').addEventListener('input', (e) => {
        filterText = e.target.value.toLowerCase();
        updatebooksList();
    });

    document.getElementById('sortSelect').addEventListener('change', (e) => {
        sortOption = e.target.value;
        updatebooksList();
    });
});

function updatebooksList() {
    console.log('Dados de Livros:', bookss);
    const list = document.getElementById('booksList');
    list.innerHTML = '';

    // 1️⃣ Filtra os Livros
    let filtered = bookss.filter(s =>
        s.name.toLowerCase().includes(filterText) ||
        s.course.toLowerCase().includes(filterText)
    );

    // 2️⃣ Ordena os Livros
    filtered.sort((a, b) => {
    console.log('order:', sortOption);
        const [rawKey, dir] = sortOption.split('-');                
        
        // Mapeia os nomes legíveis para os campos reais do objeto {php : bd}
        const keyMap = {
            name: 'name',
            course: 'course',
            numero: 'id'
        };

        const key = keyMap[rawKey]; // traduz para o campo real
//                const [key, dir] = sortOption.split('-');


        const valA = (a[key] || '').toLowerCase();
        const valB = (b[key] || '').toLowerCase();
    console.log('Keys:', valA, valB);

        if (valA < valB) return dir === 'asc' ? -1 : 1;
        if (valA > valB) return dir === 'asc' ? 1 : -1;
        return 0;
    });

    // 3️⃣ Renderiza a lista
    filtered.forEach((books, index) => {
        const item = document.createElement('div');
        item.className = 'books-item';

        const toggleBtn = document.createElement('span');
        toggleBtn.className = 'toggle-btn';
        toggleBtn.textContent = expandedIndex === index ? '-' : '+';
        toggleBtn.onclick = (e) => {
            e.stopPropagation();
            toggleDetail(index);
        };

        const nameSpan = document.createElement('span');
        nameSpan.textContent = books.name || '[Sem Nome]';

        item.appendChild(toggleBtn);
        item.appendChild(nameSpan);
        list.appendChild(item);

        if (expandedIndex === index) {
            const detail = document.createElement('div');
            detail.className = 'books-detail';
            detail.textContent = `Numero: ${books.id}, Nome: ${books.name}, Curso: ${books.course}`;
            detail.textContent = `Numero: ${books.id}, Nome: ${books.name}, Curso: ${books.course}`;
            list.appendChild(detail);
        }
    });
};
