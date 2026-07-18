const ALL_FIELDS = [
  ['a-home-subtitle','home-subtitle'], ['a-home-desc','home-desc'],
  // ... todas as tuas definições de campos
];

const state = {
  matches: { pt: [] }
};

async function syncAndSave(fields) {
  // O teu código existente para salvar conteúdo...
}

async function saveHomeContent() {
  await syncAndSave([
    ['a-home-subtitle','home-subtitle'],['a-home-desc','home-desc'],
    ['a-about-title','about-title'],['a-about-text','about-text'],
    ['a-val1-title','val1-title'],['a-val1-text','val1-text'],
    ['a-val2-title','val2-title'],['a-val2-text','val2-text'],
    ['a-val3-title','val3-title'],['a-val3-text','val3-text'],
  ]);
  showSaved();
}

// ... Restantes funções de controlo de Admin, Cursor, Alternância de Páginas, etc. ...