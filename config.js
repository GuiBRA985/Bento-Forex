// Configure chaves obtidas diretamente dos fornecedores. Em site estático,
// qualquer chave aqui fica pública: use APENAS chaves públicas/restritas,
// com limites e domínios autorizados. Para segredo privado, use backend/proxy.
window.BENTO_CONFIG = {
  twelveDataApiKey: '',
  tradingEconomicsApiKey: '', // formato geralmente 'cliente:segredo'; NÃO publique segredo aqui. Use calendarProxyUrl.
  calendarProxyUrl: '', // URL HTTPS de seu endpoint/proxy seguro que devolve eventos JSON
  refreshMinutes: 5
};
