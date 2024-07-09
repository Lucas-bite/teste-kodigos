export const locatorsScm = {
    listaSolicitacao: 'a[href="/scm/front/listaSolicitacao"]',
    novaSolicitacao: 'a[href="/scm/front/novaSolicitacao"]',
    openFilialDropdown: ':nth-child(3) > :nth-child(2) > .q-field > .q-field__inner > .q-field__control > .q-field__append',
    filialOption: '.q-item__label > span',
    centroDeCustoDropdown: ':nth-child(3) > :nth-child(3) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container',

    tipoDeSolicitacaoDropdown: ':nth-child(3) > .col-md-2 > .q-field > .q-field__inner > .q-field__control > .q-field__append',
    materialOption: '.q-item__label > span',

    comprasOption: 'div.q-item__section.column.q-item__section--main.justify-center',
    descricaoOption: ':nth-child(4) > :nth-child(1) > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native',
    moveisDescricao: '.q-item__label span',
    justificativaTexto: ':nth-child(4) > :nth-child(2) > .q-field > .q-field__inner > .q-field__control',
    quantidadeInput: 'input[aria-label="Quantidade"]',
    unidadeMedidaInput: '[aria-label="UM"]',
    selectMilheiro: '.q-item__label span',
    descricaoInput: 'input[aria-label="Descrição do produto genérico"]',
    submitButton: ':nth-child(8) > .col-md-auto > .q-btn > .q-btn__content > .block',
    salvarButton: 'span.q-btn__content.text-center.col.items-center.q-anchor--skip.justify-center.row'
}

export const locatorsVerificaSolicitacao = {
    visualizarSolicitacao: ':nth-child(1) > .q-table--col-auto-width > .q-btn',
    visualizarButton: '.q-menu > .q-list > :nth-child(1) > .q-item__section',
    visualizarDialog: 'h6',
    verificarDataAtual: '[style="padding: 0px; margin: 0px;"] > .q-table__container > .q-table__middle > .q-table > tbody > tr > .q-td',
    verificarDescricaoAtual: '[style="padding: 0px; margin: 0px;"] > .q-table__container > .q-table__middle > .q-table > tbody > tr > :nth-child(1)',
    reprovarButton: 'span.q-btn__content',
    reprovarConfirmButton: '.text-positive > .q-btn__content > .block',
    notificacaoMotivo: '.q-notification__message',
}