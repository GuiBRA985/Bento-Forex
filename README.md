# BENTO FOREX — Radar de oportunidades

Site estático, gratuito e sem login, para GitHub Pages. Inclui modos Scalp (1 minuto), Day Trade (15 minutos) e Swing Trade (4 horas); 11 pares de moedas e XAU/USD; indicadores MM9, MM21 e RSI14; ranking por variação dos candles; calendário e alertas de eventos econômicos quando configurados.

## Publicar no GitHub Pages

1. Crie ou abra o repositório do Forex Bento.
2. Envie `index.html`, `styles.css`, `app.js` e `config.js` **na raiz** do repositório.
3. Em **Settings → Pages**, selecione **Deploy from a branch**, `main` e `/ (root)`.
4. Para usar `forex.bento.host`, crie no DNS da GoDaddy um registro `CNAME` com **Nome** `forex` e **Valor** `<seu-usuario>.github.io` (substitua pelo usuário real). Configure o domínio personalizado `forex.bento.host` em **Settings → Pages** e ative HTTPS quando disponível. Evite registro conflitante para `forex`.

## Dados reais

**Cotações:** obtenha uma chave da Twelve Data (`https://twelvedata.com/`) e configure `twelveDataApiKey` em `config.js`. A disponibilidade de pares, XAU/USD, intervalos de 1 min / 15 min / 4 h, atualização e volume de chamadas depende do plano contratado. O site requisita 12 séries sequencialmente a cada atualização; a cota gratuita pode ser insuficiente. Nenhum sinal é mostrado sem candles reais.

**Calendário econômico:** o frontend aceita um endpoint HTTPS `calendarProxyUrl` que retorna um array JSON com campos `Date`, `Currency`, `Event`, `Importance`, `Forecast`, `Previous`, `Actual` (padrão próximo ao da Trading Economics). Exemplo de evento ilustrativo **somente para documentação**, nunca publicado como notícia real:

```json
[{"Date":"2027-01-01T13:30:00Z","Currency":"USD","Event":"Exemplo de divulgação","Importance":3}]
```

Crie o proxy no seu backend (por exemplo Supabase Edge Function) para consultar um provedor de calendário licenciado e manter a chave privada fora do navegador. **Não coloque segredo Trading Economics em `config.js`**. A configuração `tradingEconomicsApiKey` está reservada para integração futura via backend e não é utilizada pelo site.

## Interpretação

O radar classifica COMPRA quando MM9 > MM21, RSI entre 55 e 70 e variação positiva; VENDA quando MM9 < MM21, RSI entre 30 e 45 e variação negativa; caso contrário, AGUARDAR. O ranking é ordenado por variação absoluta na janela de candles retornada. A volatilidade é o desvio-padrão dos retornos por candle (não é previsão). Notícias mostram moedas relacionadas e instrumentos potencialmente sensíveis, **sem prever direção**. Não são consideradas taxas, spreads, liquidez, slippage, alavancagem ou perfil de risco.

**Importante:** o site não executa operações e não constitui aconselhamento financeiro. Horários dos eventos dependem do campo `Date` vir com fuso correto (recomendado ISO 8601 com `Z` ou offset). Alertas aparecem apenas enquanto a página estiver aberta.
