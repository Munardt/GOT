import { HttpInterceptorFn } from '@angular/common/http';

export const routerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
