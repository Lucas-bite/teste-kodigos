import { locatorsScm, locatorsVerificaSolicitacao } from "./locators/locators.cy";
import { auth } from "./env/auth-env";

describe('Cobertura dos testes automatizados SCM', () => {
    beforeEach(() => {
        cy.visit(auth.baseUrl);
    });

    it('Adicionar uma nova solicitação de compras', () => {
        // Adicionar uma nova solicitação de compras
        cy.get(locatorsScm.listaSolicitacao).click();
        cy.get(locatorsScm.novaSolicitacao).click();
        cy.get(locatorsScm.openFilialDropdown).click();
        cy.get(locatorsScm.filialOption).click();
        cy.get(locatorsScm.centroDeCustoDropdown).click();
        cy.get(locatorsScm.comprasOption).contains('COMPRAS').click();
        cy.get(locatorsScm.tipoDeSolicitacaoDropdown).click();
        cy.get(locatorsScm.materialOption).contains('MATERIAL').click();
        cy.get(locatorsScm.descricaoOption).click();
        cy.get(locatorsScm.moveisDescricao).contains('SOLICITAÇÃO DE COMPRA - MÓVEIS').click();
        cy.get(locatorsScm.justificativaTexto).click().type('Texto de justificativa');
        cy.get(locatorsScm.quantidadeInput).click().type('10');
        cy.get(locatorsScm.unidadeMedidaInput).click().type('MI');
        cy.get(locatorsScm.selectMilheiro).contains('MILHEIRO').click();
        cy.wait(1000);
        cy.get(locatorsScm.descricaoInput).click().type('Teste de Descrição para solicitação de compras.');
        cy.get(locatorsScm.submitButton).click();
        cy.wait(2000);
        cy.get(locatorsScm.salvarButton).contains('SALVAR').click();
        cy.wait(5000);

        // Verifica se na lista de aprovação há data de hoje e descrição
        cy.visit(auth.aprovarSolicitacaoUrl)
        cy.get(locatorsVerificaSolicitacao.visualizarSolicitacao).click();
        cy.get(locatorsVerificaSolicitacao.visualizarDialog).contains('Visualização').should('be.visible');
        cy.wait(6000);
        cy.contains(locatorsVerificaSolicitacao.verificarDescricaoAtual, 'Teste de Descrição para solicitação de compras.')
        .should('exist');
        cy.contains(locatorsVerificaSolicitacao.verificarDataAtual, '09/07/2024').should('not.exist');
    });

    it('Reprovar uma solicitação sem motivo', () => {
        cy.visit(auth.aprovarSolicitacaoUrl)
        cy.get(locatorsVerificaSolicitacao.visualizarSolicitacao).click();
        cy.get(locatorsVerificaSolicitacao.visualizarDialog).contains('Visualização').should('be.visible');
        cy.wait(3000);
        cy.get(locatorsVerificaSolicitacao.reprovarButton).contains('REPROVAR').click();
        cy.get(locatorsVerificaSolicitacao.reprovarConfirmButton).click();
        cy.get(locatorsVerificaSolicitacao.notificacaoMotivo).contains('O motivo não pode ser vazio').should('be.visible');
    });
});