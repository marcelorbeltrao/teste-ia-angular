  export const environment = {
    PRODUCTION: false,
    AMBIENTE: "ti",

    API_GATEWAY: 'https://api-sisbr-ti.homologacao.com.br',
    AUTH_GATEWAY: 'https://idp-sisbr-ti.homologacao.com.br/auth/realms/sisbr/protocol/openid-connect/token',
    REVOKE_GATEWAY: 'https://idp-sisbr-ti.homologacao.com.br/auth/realms/sisbr/protocol/openid-connect/revoke',
    SSO_GATEWAY: 'https://idp-sisbr-ti.homologacao.com.br/auth/realms/sisbr/protocol/openid-connect',
    IS_RHSSO: true,

    CLIENT_ID_PUBLICO: "SEU_CLIENT_ID_AQUI",
    CTA_FORM: "SEU_FORMULARIO_AQUI",

    APPLICATION_TOKEN: "Basic [SEU_TOKEN_AQUI]",

    GATEWAY_URL: "http://sicoob-sisbr-gateway-backoffice-nodejs.appdev.homologacao.com.br/api/"
  };
