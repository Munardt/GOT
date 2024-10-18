import { CanActivateFn } from '@angular/router';

/**
 * Função de guarda que verifica se o usuário tem permissão de acessar
 * a rota que está tentando acessar. Essa função sempre vai retornar
 * true, pois não há  nenhuma implementaão de segurança de rotas
 * implementada.
 *
 * @param route Rota que o usuário está  tentando acessar.
 * @param state Estado atual da rota.
 *
 * @returns True se o usuário tem permiss o de acessar a rota, false
 *          caso contrário.
 */
export const routeGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
