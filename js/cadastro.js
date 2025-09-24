function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + '-error');
    const fieldElement = document.getElementById(fieldId);
    
    errorElement.textContent = message;
    fieldElement.style.borderColor = '#dc3545';
}

function clearError(fieldId) {
    const errorElement = document.getElementById(fieldId + '-error');
    const fieldElement = document.getElementById(fieldId);
    
    errorElement.textContent = '';
    fieldElement.style.borderColor = '#e9ecef';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    let isValid = true;
    
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const campoCondicional = document.querySelector('#campo-condicional select').value;
    
    clearError('nome');
    clearError('email');
    clearError('senha');
    clearError('campo-condicional');
    
    if (!nome) {
        showError('nome', 'Nome completo é obrigatório');
        isValid = false;
    }
    
    if (!email) {
        showError('email', 'E-mail é obrigatório');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email', 'Formato de e-mail inválido');
        isValid = false;
    }
    
    if (!senha) {
        showError('senha', 'Senha é obrigatória');
        isValid = false;
    } else if (senha.length < 6) {
        showError('senha', 'Senha deve ter no mínimo 6 caracteres');
        isValid = false;
    }
    
    if (!campoCondicional) {
        const labelText = tipo === 'mentor' ? 'Área de conhecimento' : 'Interesses';
        showError('campo-condicional', `${labelText} é obrigatório`);
        isValid = false;
    }
    
    return isValid;
}

function updateConditionalField() {
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const campoCondicionalDiv = document.getElementById('campo-condicional');
    const select = campoCondicionalDiv.querySelector('select');
    const label = campoCondicionalDiv.querySelector('label');
    
    if (tipo === 'mentor') {
        label.textContent = 'Área de conhecimento';
        label.setAttribute('for', 'area-conhecimento');
        select.id = 'area-conhecimento';
        select.name = 'areaConhecimento';
        select.innerHTML = `
            <option value="">Selecione uma opção</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Negócios">Negócios</option>
            <option value="Design">Design</option>
            <option value="Dados">Dados</option>
            <option value="Carreira">Carreira</option>
            <option value="Outro">Outro</option>
        `;
    } else {
        label.textContent = 'Interesses';
        label.setAttribute('for', 'interesses');
        select.id = 'interesses';
        select.name = 'interesses';
        select.innerHTML = `
            <option value="">Selecione uma opção</option>
            <option value="Primeiro emprego">Primeiro emprego</option>
            <option value="Transição de carreira">Transição de carreira</option>
            <option value="Programação">Programação</option>
            <option value="UX/UI">UX/UI</option>
            <option value="Dados">Dados</option>
            <option value="Entrevistas">Entrevistas</option>
        `;
    }
    
    updatePreview();
}

function updatePreview() {
    const nome = document.getElementById('nome').value.trim() || '-';
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const tipoLabel = tipo === 'mentor' ? 'Mentor' : 'Mentorado';
    const campoCondicional = document.querySelector('#campo-condicional select').value || '-';
    
    document.getElementById('preview-nome').textContent = nome;
    document.getElementById('preview-tipo').textContent = tipoLabel;
    document.getElementById('preview-campo').textContent = campoCondicional;
}

function saveUser(userData) {
    const users = JSON.parse(localStorage.getItem('mentorias:usuarios') || '[]');
    users.push(userData);
    localStorage.setItem('mentorias:usuarios', JSON.stringify(users));
}

function handleSubmit(event) {
    event.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const campoCondicional = document.querySelector('#campo-condicional select').value;
    
    const userData = {
        id: generateUUID(),
        nome: nome,
        email: email,
        senha: '[PROTÓTIPO - SENHA NÃO ARMAZENADA]',
        tipo: tipo,
        areaConhecimento: tipo === 'mentor' ? campoCondicional : null,
        interesses: tipo === 'mentorado' ? campoCondicional : null,
        criadoEm: new Date().toISOString()
    };
    
    saveUser(userData);
    
    window.location.href = `sucesso.html?email=${encodeURIComponent(email)}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastro-form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const tipoInputs = document.querySelectorAll('input[name="tipo"]');
    
    form.addEventListener('submit', handleSubmit);
    
    nomeInput.addEventListener('input', updatePreview);
    emailInput.addEventListener('input', updatePreview);
    senhaInput.addEventListener('input', updatePreview);
    
    tipoInputs.forEach(input => {
        input.addEventListener('change', function() {
            updateConditionalField();
            updatePreview();
        });
    });
    
    document.addEventListener('change', function(event) {
        if (event.target.matches('#campo-condicional select')) {
            updatePreview();
        }
    });
    
    updateConditionalField();
    updatePreview();
});